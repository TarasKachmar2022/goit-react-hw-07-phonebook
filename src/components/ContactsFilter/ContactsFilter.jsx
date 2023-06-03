import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FilterInput } from './ContactsFilter.styled';
import { selectFilter } from 'redux/selectors';

const ContactsFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilterValue = event => {
    const { value } = event.currentTarget;

    dispatch(setFilter(value.toLowerCase().trim()));
  };

  return (
    <FilterInput
      type="text"
      value={filter}
      onChange={changeFilterValue}
      placeholder="Find contacts by name"
    ></FilterInput>
  );
};

ContactsFilter.propTypes = {
  filter: PropTypes.string,
  changeFilterValue: PropTypes.func,
};

export default ContactsFilter;
