import './App.css';
import ContactList from './components/Contacts/ContactList';
import Header from './components/Layout/Header';
import AddContact from './components/Contacts/AddContact';

import {Provider} from './context';

import 'semantic-ui-css/semantic.min.css'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contact Manager"/>
        <div className="container">
          <AddContact />
          <ContactList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
