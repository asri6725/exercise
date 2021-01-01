import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form action="http://localhost:8080/send" method="POST">
        <input type="text" placeholder="First Name" name = "firstname" />
        <input type="text" placeholder="Last Name" name = "lastname" />
        <input type="date" name = "date" />
        <input type="mail" placeholder="email address" name = "email" />
        <input type="number" placeholder="phone number" name = "phone" />
        
        <select name = "InvestmentFund">
          <option value="  "> </option>
          <option value='Premium'> Premium </option>
          <option value='Normal'> Normal </option>
        </select>
        <input type="number" placeholder="amount" name = "amount" />
        <input type="submit" value="Send" className="Button"/>
      </form>
    </div>
  );
}

export default App;
