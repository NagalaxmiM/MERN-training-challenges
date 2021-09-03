import './App.css';
import React, {Route,Switch} from 'react-router-dom';
import UserList from './Components/UserList';
import UserDetails from './Components/UserDetails';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path='/' component={UserList}></Route>
          <Route path='/userDetails' component={UserDetails}></Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
