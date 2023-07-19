import css from './contactList.module.css'
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsOperations';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    };

  return (
    <ul className={css.contactList} >
      {filteredContacts.map(({ id, name, phone }) => (
        <li className={css.contactListitem} key={id}>
          <span>{name}: </span>
          <span>{phone}</span>
          <button className={css.delBtn} type="button" onClick={() => 
            { handleDeleteContact(id); Notify.success('Position was deleted.');}}>Delete
          </button>

        </li>
      ))}
    </ul>
  );
};

export default ContactList;
