import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Form,
  FormLabel,
  FormLabelSpan,
  FormLabelIcon,
  FormBtnText,
  InputField,
  ErrorMessage,
  FormBtn,
  FormBtnWrapper,
} from './ContactForm.styled';
import { addContact } from 'redux/operations';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { IoMdPersonAdd } from 'react-icons/io';
import { selectContacts } from '../../redux/selectors';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const [isAdding, setIsAdding] = useState(false);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const findContacts = contacts.find(
      contact =>
        contact.name.toLowerCase().trim() === values.name.toLowerCase().trim()
    );

    if (findContacts) {
      toast.error(`${findContacts.name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: values.name,
      phone: values.number,
    };

    handleAdd(newContact);
    resetForm();
  };

  const handleAdd = async newContact => {
    try {
      setIsAdding(true);
      await dispatch(addContact(newContact));
      setIsAdding(false);
    } catch (error) {
      toast.error(error.message);
      setIsAdding(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormLabel htmlFor="name">
          <FormLabelSpan>
            <FormLabelIcon>
              <FaUser />
            </FormLabelIcon>
            Name
          </FormLabelSpan>
          <InputField
            id="name"
            type="text"
            name="name"
            placeholder="Enter name"
          />
          <ErrorMessage name="name" component="div" />
        </FormLabel>
        <FormLabel htmlFor="number">
          <FormLabelSpan>
            <FormLabelIcon>
              <BsTelephoneFill />
            </FormLabelIcon>
            Number
          </FormLabelSpan>
          <InputField
            id="number"
            type="tel"
            name="number"
            placeholder="+38(012)345-67-89"
          />
          <ErrorMessage name="number" component="div" />
        </FormLabel>
        <FormBtn type="submit">
          {(isAdding && (
            <FormBtnWrapper>
              <ThreeDots height="20" width="20" color="white" />
              <FormBtnText>Add contact</FormBtnText>
            </FormBtnWrapper>
          )) || (
            <>
              <IoMdPersonAdd />
              <FormBtnText>Add contact</FormBtnText>
            </>
          )}
        </FormBtn>
      </Form>
    </Formik>
  );
};

export default ContactForm;
