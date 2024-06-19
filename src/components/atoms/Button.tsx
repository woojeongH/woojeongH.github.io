import { css, SerializedStyles } from "@emotion/react"
import styled from "@emotion/styled"
import { Loader2 as Loader } from "lucide-react"
import { Button as UiButton, ButtonProps } from "~/lib/shadcn/ui/button"

export const SIZES = { small: "small", medium: "medium", large: "large" } as const

type ButtonSize = keyof typeof SIZES

const sizeStyles: Record<ButtonSize, SerializedStyles> = {
  small: css`
    border-radius: var(--radius-small);
    padding: 0.3rem 0.5rem;
    font-size: 0.8rem;
  `,
  medium: css`
    border-radius: var(--radius-medium);
    padding: 0.5rem 1rem;
  `,
  large: css`
    border-radius: var(--radius-large);
    padding: 1.25rem 2.5rem;
    width: 100%;
  `,
}
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  color?: string
  size?: ButtonSize
  children?: React.ReactNode
  onClick?: () => void
  className?: string
  borderColor?: string
  backgroundColor?: string
}

interface Props extends IButtonProps {
  isOutline?: boolean
}

interface OutlineProps extends IButtonProps {
  color?: string
  borderColor?: string
  backgroundColor?: string
  buttonSize: ButtonSize
}
interface MyButtonProps extends IButtonProps {
  buttonSize: ButtonSize
  borderColor?: string
  backgroundColor?: string
}

const StyledUiButton = ({ variant, children, className, disabled }: ButtonProps) => {
  return (
    <UiButton variant={variant} className={className} disabled={disabled}>
      {children}
    </UiButton>
  )
}

export const StyledButton = styled(StyledUiButton)<MyButtonProps>`
  color: white;
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: auto;
  ${({ buttonSize }) => sizeStyles[buttonSize] ?? sizeStyles.medium}
`
const StyledOutlineButton = styled(StyledUiButton)<MyButtonProps>`
  color: ${({ color }) => color};
  border-color: ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: auto;
  ${({ buttonSize }) => sizeStyles[buttonSize] ?? sizeStyles.medium}
`
const OutlineButton = ({ isLoading, color, children, buttonSize, borderColor, backgroundColor }: OutlineProps) => {
  return (
    <StyledOutlineButton
      variant="outline"
      {...{
        isLoading,
        color,
        buttonSize,
        borderColor,
        backgroundColor,
      }}>
      {children}
    </StyledOutlineButton>
  )
}

const Button = ({
  children,
  isLoading = false,
  isOutline = false,
  onClick,
  color = "hsl(var(--primary))",
  size = SIZES.medium,
  disabled,
  className,
  borderColor,
  backgroundColor,
}: Props) => {
  const MyButton = isOutline ? OutlineButton : StyledButton

  return (
    <MyButton
      {...{ backgroundColor, borderColor, color, buttonSize: size, onClick, className, disabled }}
      disabled={isLoading}>
      {isLoading ? (
        <>
          <Loader className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : (
        children
      )}
    </MyButton>
  )
}

export default Button
