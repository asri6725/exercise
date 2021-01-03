import dbhandler
from flask import Flask,  redirect, url_for, request, jsonify
from flask_mail import Mail, Message 


from flask_cors import CORS


app = Flask(__name__, static_folder='../exercise_frontend/build/', static_url_path='/')
mail = Mail(app) # instantiate the mail class
CORS(app)
# configuration of mail 
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'foreveralone2040@gmail.com'
app.config['MAIL_PASSWORD'] = '322Mh855'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app) 
   
# message object mapped to a particular URL ‘/’ 

def sendmail(recipient, name): 
    msg = Message(     
                    'Confirmation', 
                    sender ='foreveralone2040@gmail.com', 
                    recipients = [recipient]
                ) 
    text = 'Hello '+name + '! This is just a confirmation of your registration. \n Kindly disregard the email name as I use this for less secure app testing. \nSincerely\nAbhi'
    msg.body = text
    mail.send(msg) 
    return 'Sent'

@app.route('/', methods = ['GET'])
def index():
    return app.send_static_file('index.html')

@app.route('/send',methods = ['POST'])
def send():
    if request.method == 'POST':
        try:
            firstname = request.json.get('firstname')
            lastname = request.json.get('lastname')
            date = str(request.json.get('date'))
            email =request.json.get('email')
            phone =request.json.get('phone')
            fund =request.json.get('InvestmentFund')
            amount = int(request.json.get('amount'))
            if fund == "Premium":
                if amount < 10000 or amount > 250000:
                    return "Error: Please check the amount."
            elif fund == "Normal":
                if amount < 25000 or amount > 250000:
                    return "Error: Please check the amount."
            
            if len(firstname)==0 or len(lastname)==0 or len(date)==0 or len(email)==0 or len(str(phone))==0 or len(str(amount))==0:
                return "Error: Please check for missing fields."
            
            ret = dbhandler.insert_details(firstname, lastname, date, email, phone, fund, amount)
            sendmail(email, firstname)

            return "200"
        except Exception as e:
            print(e)
            return "Oops, looks like there is a server error. I apologise."


@app.route('/users',methods = ['POST'])
def users():
    
    users = { 'admin':'password', 'dev':'password'}
    username = request.json.get('username')
    password = request.json.get('password')
    if username in users:
        if users[username] == password:
            return jsonify(dbhandler.view_details())

    else:
        return redirect("/")


if __name__ == "__main__":
    app.run(host="localhost",port=8080, debug=True) 