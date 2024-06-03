import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Searchbox from "../SearchBox/SearchBox.jsx";
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <Searchbox />
      <ContactList />
    </div>
  );
};

export default App;