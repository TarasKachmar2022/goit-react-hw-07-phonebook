import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';
import { GlobalStyle } from '../../styled/globalStyle';
import { Layout } from '../Layout/Layout';
import ContactForm from '../ContactForm';
import ContactsFilter from '../ContactsFilter';
import ContactList from '../ContactList';
import { MainBlock, MainTitle, Title } from './App.styled';
import { fetchContacts } from 'redux/operations';
import { selectError } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    if (!error) return;
    toast.error('Oops, something went wrong, please try again!');
  }, [error]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <MainBlock>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <Title>Contacts</Title>
        <ContactsFilter />
        <ContactList />
        <GlobalStyle />
      </MainBlock>
      <Toaster position="top-right" />
    </Layout>
  );
};

export default App;
