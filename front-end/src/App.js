import './App.css';
import { Route } from 'wouter';
import SignIn from 'pages/sign-in/sign-in';
import signUp from 'pages/sign-up/sign-up';

function App() {
  return (
    <div className="App">
      <Route path='/sign_in' component={SignIn} />
      <Route path='/sign_up' component={signUp} />
    </div>
  );
}

export default App;
