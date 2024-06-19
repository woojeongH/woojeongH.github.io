import styled from "@emotion/styled"

interface Props {
  onClick: () => void
}

const FilterContainer = styled.div`
  border: 1px solid lightgray;
  border-style: dotted;
  width: 100px;
  padding: 5px;
  border-radius: 8px;
  cursor: pointer;
`

const FilterButton = ({ onClick }: Props) => {
  return <FilterContainer onClick={onClick}>+ Add Filter</FilterContainer>
}

export default FilterButton
