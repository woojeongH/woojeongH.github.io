import styled from "@emotion/styled"
import { X } from "lucide-react"
import Filter from "./Filter"

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`

const FilterButtonContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 2px;
`
const Divider = styled.div`
  width: 1px;
  height: 100%;
  background-color: lightgray;
`

const FilterValue = styled.div`
  padding: 5px;
`

const Filters = () => {
  const filterLabel = ["vase", "Ceramic", "Paper"]
  return (
    <FilterContainer>
      {filterLabel.map((item, index) => (
        <FilterButtonContainer key={index}>
          <FilterValue> {item}</FilterValue>
          <Divider />
          <X className="text-slate-500 w-4 h-4" />
        </FilterButtonContainer>
      ))}
      <Filter />
    </FilterContainer>
  )
}

export default Filters
