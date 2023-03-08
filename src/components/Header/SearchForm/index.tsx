import { grey } from '@mui/material/colors';
import React from 'react'
import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style'

function SearchForm() {
  return (
   <StyledSearchForm>
   <button>
     <MdSearch size={18} />
   </button>
   <input
     type='text'
     placeholder='Digitar pesquisa'
   //   value={searchValue}
   //   onChange={(event) => setSearchValue(event.target.value)}
   />
 </StyledSearchForm>
  )
}

export default SearchForm