import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      {/* <div className="hallo"> */}
      <Greetings lang="de">Ludwig</Greetings>
      {/* </div> */}
      {/* <div className="bonjour"> */}
      <Greetings lang="fr">François</Greetings>
      {/* </div> */}
    </div>
  );
}

export default App;
