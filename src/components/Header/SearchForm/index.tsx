import { grey } from '@mui/material/colors';
import React, { useContext } from 'react'
import { MdSearch } from 'react-icons/md';
import { DashboardContext } from '../../../Providers/DashboardContext';
import { StyledSearchForm } from './style'

function SearchForm() {
   const { searchValue, setSearchValue } = useContext(DashboardContext)

  return (
   <StyledSearchForm>
   <button>
     <MdSearch size={18} />
   </button>
   <input
     type='text'
     placeholder='Digitar pesquisa'
     value={searchValue}
     onChange={(event) => setSearchValue(event.target.value)}
   />
 </StyledSearchForm>
  )
}

export default SearchForm