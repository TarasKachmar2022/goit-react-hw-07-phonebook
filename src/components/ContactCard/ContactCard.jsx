import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';
import { IoPersonRemove } from 'react-icons/io5';
import { deleteContact } from '../../redux/operations';
import {
  ContactItem,
  ContactContainer,
  ContactTitle,
  ContactNumber,
  DeleteBtn,
} from './ContactCard.styled';
import { useState } from 'react';

const ContactCard = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async id => {
    try {
      setIsDeleting(true);
      await dispatch(deleteContact(id));
      setIsDeleting(false);
    } catch (error) {
      toast.error(error.message);
      setIsDeleting(false);
    }
  };

  return (
    <ContactItem>
      <ContactContainer>
        <ContactTitle>{name}:</ContactTitle>
        <ContactNumber>{number}</ContactNumber>
      </ContactContainer>
      <DeleteBtn type="button" onClick={() => handleDelete(id)}>
        {(isDeleting && <ThreeDots height="20" width="16" color="white" />) || (
          <IoPersonRemove />
        )}
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
