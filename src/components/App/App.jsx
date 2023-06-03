import { GlobalStyle } from '../../styled/globalStyle';
import { Layout } from '../Layout/Layout';
import ContactForm from '../ContactForm';
import ContactsFilter from '../ContactsFilter';
import ContactList from '../ContactList';
import { MainBlock, MainTitle, Title } from './App.styled';

const App = () => {
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
    </Layout>
  );
};

export default App;
