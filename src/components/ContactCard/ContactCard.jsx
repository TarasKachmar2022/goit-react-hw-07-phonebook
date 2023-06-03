import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { IoPersonRemove } from 'react-icons/io5';
import { deleteContact } from '../../redux/contactsSlice';
import {
  ContactItem,
  ContactContainer,
  ContactTitle,
  ContactNumber,
  DeleteBtn,
} from './ContactCard.styled';

const ContactCard = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <ContactContainer>
        <ContactTitle>{name}:</ContactTitle>
        <ContactNumber>{number}</ContactNumber>
      </ContactContainer>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        <IoPersonRemove />
      </DeleteBtn>
    </ContactItem>
  );
};

ContactCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactCard;
