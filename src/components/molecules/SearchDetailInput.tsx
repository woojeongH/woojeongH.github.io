import styled from "@emotion/styled"
import { Input } from "../../lib/shadcn/ui/input"
import { Search } from "lucide-react"
import { SquareArrowOutUpRight } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "~/lib/shadcn/ui/sheet"
import { Button } from "~/lib/shadcn/ui/button"
const SearchDetailInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  & > input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right-width: 0;
  }
  & > button > div {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  & > button:not(:last-of-type) > div {
    border-radius: 0;
    border-right-width: 0;
  }
`

const ButtonContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 7px;
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SearchDetailInput = () => {
  const [value, setValue] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const onChange = (event: any) => {
    setValue(event.target.value)
  }
  const onClick = (event: any) => {
    event.preventDefault()
    event.stopPropagation()

    setValue("선택된 값")
    setIsOpen(false)
  }

  const onOpenChange = (v: any) => {
    setIsOpen(v)
  }
  return (
    <SearchDetailInputContainer>
      <Input value={value} onChange={onChange} type="text" placeholder="값 입력" readOnly={true} />
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetTrigger>
          <ButtonContainer>
            <Search style={{ color: "hsl(var(--primary))" }} />
          </ButtonContainer>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>
              <div style={{ marginBottom: "10px" }}>검색 기능 및 추가 기능 영역</div>
              <Button onClick={onClick}>무언가를 선택</Button>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      {value ? (
        <Sheet>
          <SheetTrigger>
            <ButtonContainer>
              <SquareArrowOutUpRight style={{ color: "hsl(var(--primary))" }} />
            </ButtonContainer>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Title</SheetTitle>
              <SheetDescription>
                <div style={{ marginBottom: "10px" }}>클릭한 내용의 상세</div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ) : null}
    </SearchDetailInputContainer>
  )
}

export default SearchDetailInput
