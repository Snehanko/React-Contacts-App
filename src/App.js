import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import ContactList from './components/Contacts/ContactList';
import Header from './components/Layout/Header';
import AddContact from './components/Contacts/AddContact';
import About from './components/Pages/About';
import Notfound from './components/Pages/Notfound';


import {Provider} from './context';


import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager"/>
          <div className="container">
            <Switch>
              <Route exact path="/about/:id" component={About} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/" component={ContactList} />
              <Route component={Notfound} />
            </Switch>
            {/* <AddContact />
            <ContactList /> */}
          </div>
        </div>
      </Router>
      
    </Provider>
  );
}

export default App;
