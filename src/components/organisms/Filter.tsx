import { useState } from "react"
import styled from "@emotion/styled"

import FilterButton from "../atoms/FilterButton"
import FilterList from "../molecules/FilterList"

const FilterContainer = styled.div`
  position: relative;
`

const Filter = () => {
  const [filterOpen, setFilterOpen] = useState<boolean>(false)

  const FilterOnclick = () => {
    setFilterOpen(!filterOpen)
  }
  return (
    <FilterContainer>
      <FilterButton onClick={FilterOnclick} />
      {filterOpen && <FilterList />}
    </FilterContainer>
  )
}

export default Filter
