import styled from "@emotion/styled"
import { ChevronRight } from "lucide-react"

const FilterListContainer = styled.div`
  width: 205px;
  border: 1px solid lightgray;
  border-radius: 8px;
  margin-top: 8px;
  position: absolute;
`

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const FilterItemContainer = styled.div`
  padding: 10px;
  border-top: 1px solid lightgray;
`
const FilterItem = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
`

const filterItems = ["Topic", "Artist", "Technique", "Material", "Source of Location", "Time Period"]

const FilterList = () => {
  return (
    <FilterListContainer>
      <SearchContainer></SearchContainer>
      <FilterItemContainer>
        {filterItems.map((item) => (
          <FilterItem>
            {item}
            <ChevronRight className="text-slate-400" />
          </FilterItem>
        ))}
      </FilterItemContainer>
    </FilterListContainer>
  )
}

export default FilterList
