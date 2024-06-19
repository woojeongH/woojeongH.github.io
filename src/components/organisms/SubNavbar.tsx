import { NotebookText, Calculator, Pin, PinOff } from "lucide-react"
import { EllipsisVertical } from "lucide-react"
import { Command, CommandGroup, CommandItem, CommandList } from "../../lib/shadcn/ui/command"
import { useNavigate } from "@tanstack/react-router"

const icons = [
  { icon: NotebookText, text: "목록 샘플", to: "/", isPin: true },
  { icon: Calculator, text: "입력 샘플", to: "/insert", isPin: true },
  { icon: NotebookText, text: "AAA", to: "/", isPin: false },
  { icon: Calculator, text: "BBB", to: "/", isPin: false },
  { icon: NotebookText, text: "CCC", to: "/", isPin: false },
  { icon: Calculator, text: "DDD", to: "/", isPin: false },
  { icon: EllipsisVertical, text: "More", isPin: false },
]

import styled from "@emotion/styled"

const StyledCommandItem = styled(CommandItem)`
  & .pin-icon {
    display: none;
  }
  & .normal-icon {
    display: block;
  }

  & .icon-container:hover .pin-icon {
    display: block;
  }
  & .icon-container:hover .normal-icon {
    display: none;
  }
`

export default function SubNavBar() {
  const navigate = useNavigate()
  return (
    <Command>
      <CommandList>
        <CommandGroup style={{ padding: "15px" }}>
          {icons.map((item, index) => (
            <StyledCommandItem
              key={index}
              onClick={() => {
                navigate({ to: item.to })
              }}>
              <div className="icon-container">
                {item.isPin ? <PinOff className="mr-2 h-4 w-4 pin-icon" /> : <Pin className="mr-2 h-4 w-4 pin-icon" />}

                <item.icon className="mr-2 h-4 w-4 normal-icon" />
              </div>
              <span>{item.text}</span>
            </StyledCommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
