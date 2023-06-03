import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
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
} from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { IoMdPersonAdd } from 'react-icons/io';
import numberFormat from '../../utils/numberFormat';
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

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const findContacts = contacts.find(
      contact =>
        contact.name.toLowerCase().trim() === values.name.toLowerCase().trim()
    );

    if (findContacts) {
      alert(`${findContacts.name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: values.name,
      number: numberFormat(values.number),
    };

    dispatch(addContact(newContact));

    resetForm();
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
          <IoMdPersonAdd />
          <FormBtnText>Add contact</FormBtnText>
        </FormBtn>
      </Form>
    </Formik>
  );
};

export default ContactForm;
