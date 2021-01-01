from flask import Flask,  redirect, url_for, request
import dbhandler

app = Flask(__name__, static_folder='../exercise_frontend/build/', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/send',methods = ['POST'])
def send():
    if request.method == 'POST':
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        date = str(request.form['date'])
        email =request.form['email']
        phone =request.form['phone']
        fund =request.form['InvestmentFund']
        amount = request.form['amount']
        ret = dbhandler.insert_details(firstname, lastname, date, email, phone, fund, amount)

        return redirect("/")

if __name__ == "__main__":
    app.run(host="localhost",port=8080)