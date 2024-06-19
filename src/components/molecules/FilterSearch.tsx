import styled from "@emotion/styled"
import ComboboxDemo from "./SearchInput"

const SearchContainer = styled.div`
  border: 1px solid rgb(231, 229, 228);
  border-radius: 8px;
  width: 400px;
  max-width: 100%;
`
const FilterSearch = () => {
  return (
    <SearchContainer>
      <ComboboxDemo></ComboboxDemo>
    </SearchContainer>
  )
}

export default FilterSearch
