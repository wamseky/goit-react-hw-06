import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function ContactList() {
  const [parent] = useAutoAnimate({ easing: 'linear', duration: 300 });
  const contacts = useSelector(state => state.contacts.items);
  const nameContact = useSelector(state => state.filter.name);
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameContact.toLowerCase())
  );

  return (
    <>
      <ul ref={parent} className={css.list}>
        {filterContacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact {...contact} />
          </li>
        ))}
      </ul>
    </>
  );
}