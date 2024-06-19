"use client"

import styled from "@emotion/styled"
import { Command, CommandInput } from "~/lib/shadcn/ui/command"
import { useState } from "react"

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
`

export default function ComboboxDemo() {
  const [_, setIsFocused] = useState<boolean>(false)

  return (
    <SearchInputContainer>
      <Command>
        <CommandInput
          className="h-10"
          placeholder="Search"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </Command>
    </SearchInputContainer>
  )
}

// className="bg-orange-100" (searchinput 배경색?)
