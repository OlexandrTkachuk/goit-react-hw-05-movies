import { useState } from 'react';
import { toast } from 'react-toastify';
import { MdImageSearch } from 'react-icons/md';
import PropTypes from 'prop-types';
import {
  Form,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  FormWrapper,
} from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => setInputValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      toast.warn('Search query can`t be empty!(');
      return;
    }

    onSubmit(inputValue);

    setInputValue('');
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>
            <MdImageSearch size="30px" fill="#a01d1d" />
          </SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies in database"
          value={inputValue}
          onChange={handleInputChange}
        />
      </Form>
    </FormWrapper>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
