import styled from "@emotion/styled"
import { Button } from "~/lib/shadcn/ui/button"

const MovingButtonContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 2rem;
  border-radius: 0.5rem;
  box-shadow:
    0 19px 38px rgba(0, 0, 0, 0.01),
    0 10px 12px rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 50%;
  bottom: 25px;
  transform: translateX(-50%);
  background-color: white;
`

const SelectCountContainer = styled.div`
  display: flex;
  gap: 0.625rem;
`

const SelectCountInput = styled.div`
  display: flex;
  justify-content: center;
  color: hsl(24.6 95% 53.1%);
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

const MovingButton = () => {
  return (
    <MovingButtonContainer>
      <SelectCountContainer>
        <SelectCountInput>{5}</SelectCountInput>
        <div>selected</div>
      </SelectCountContainer>
      <ButtonContainer>
        <Button variant="outline">전체 해제</Button>
        <Button>엑셀 다운로드</Button>
        <Button variant="destructive">선택 항목 삭제</Button>
      </ButtonContainer>
    </MovingButtonContainer>
  )
}

export default MovingButton
