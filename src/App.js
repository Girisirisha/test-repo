import logo from './logo.svg';
import './App.css';
// import MyComponent from './components/Greet'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
       <Greet name="ssss" heroName="helo dear">
      {/* <p>shadjvashdvasdvasdasdsad</p> */}
     </Greet> 
     {/* <Greet name="hhhh" heroName="sjadasdas">
      <p>asbhsbfhdsbfjdf</p>
     </Greet>
     <Greet  name="asnbdvhgsa" heroName="skjdbasjdas"/>

 
     <Welcome name="ssss" heroName="helo dear"/>
     <Welcome name="hhhh" heroName="sjadasdas"/>
     <Welcome name="asnbdvhgsa" heroName="skjdbasjdas"/>  */}

     {/* <Hello /> */}
    </div>
  );
}

export default App;
