import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ContactCard from '../ContactCard';
import { List } from './ContactList.Styled';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const fromFilter = useSelector(selectFilter);

  const normalize = fromFilter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalize)
  );

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactCard key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteContact: PropTypes.func,
};

export default ContactList;
