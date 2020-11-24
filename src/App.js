import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonCard from './Components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <PersonCard 
        lastName ="Doe"
        firstName = "John"
        age = {50}
        hairColor = "Brown"
        />

        <PersonCard 
        lastName ="Galler"
        firstName = "Monica"
        age = {50}
        hairColor = "Black"
        />
        
        <PersonCard 
        lastName ="Winsdor"
        firstName = "Elizabeth"
        age = {92}
        hairColor = "Silver"
        />

        <PersonCard 
        lastName ="Heck"
        firstName = "Sue Sue"
        age = {25}
        hairColor = "Red"
        />
        </div>
      </div>
  );
}

export default App;
