import './App.css';
import { Route } from 'wouter';
import Sesion from 'pages/sesion/sesion';
import Main from 'pages/main/main';

function App() {
  return (
    <div className="App">
      <Route path='/sesion/:s' component={Sesion} />
      <Main />
    </div>
  );
}

export default App;
