import * as React from 'react'

import { StyledButton } from './style'

interface ButtonProps {
  text: string
}

export function Button({ text }: ButtonProps) {
  return <StyledButton>{text}</StyledButton>
}
