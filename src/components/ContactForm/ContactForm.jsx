import css from './contactForm.module.css';
import Notiflix from 'notiflix';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from 'redux/selectors';
import { addContact } from 'redux/contactsOperations';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch(); 
  const contacts = useSelector(selectItems);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isAdded = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isAdded) {
      return Notiflix.failure(`${name} is already in contacts.`);
    }

    dispatch(
      addContact({
        name,
        phone,
      })
    );
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input className={css.inputName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder='Name'
        value={name}
        onChange={handleInputChange}
      />
      <input className={css.inputNumber}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder='Phone number'
        value={phone}
        onChange={handleInputChange}
      />
      <button className={css.addContactBtn} type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;