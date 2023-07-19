import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactsOperations';
import { selectIsLoading, selectError } from 'redux/selectors';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
  <>  
    <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
    <ContactForm />
    <h2 style={{ textAlign: 'center'}}>Contacts</h2>
    <Filter />
    <ContactList />
    <h3 style={{ textAlign: 'center'}}> {isLoading && !error && <span style={{color: 'red'}}>WORKING</span>} {error && error}</h3>
  </>
  );
};

export default App;