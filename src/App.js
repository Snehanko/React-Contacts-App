import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ContactList from './components/Contacts/ContactList';
import Header from './components/Layout/Header';
import AddContact from './components/Contacts/AddContact';
import EditContact from './components/Contacts/EditContact';
import About from './components/Pages/About';
import Notfound from './components/Pages/Notfound';
import Test from './components/Test/Test';



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
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/" component={ContactList} />
              <Route exact path="/test" component={Test} />
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
