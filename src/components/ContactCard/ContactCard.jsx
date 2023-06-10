import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import { selectIsLoading } from 'redux/selectors';
import { IoPersonRemove } from 'react-icons/io5';
import { deleteContact } from '../../redux/operations';
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
        {(selectIsLoading && (
          <ThreeDots height="16" width="16" color="white" />
        )) || <IoPersonRemove />}
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
