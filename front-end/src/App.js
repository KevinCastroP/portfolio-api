import './App.css';
import { Route } from 'wouter';
import { SesionContextProvider } from 'context/sesion-context';
import SignIn from 'pages/sign-in/sign-in';
import signUp from 'pages/sign-up/sign-up';

function App() {
  return (
    <div className="App">
      <SesionContextProvider>
        <Route path='/sign_in' component={SignIn} />
        <Route path='/sign_up' component={signUp} />
      </SesionContextProvider>
    </div>
  );
}

export default App;
