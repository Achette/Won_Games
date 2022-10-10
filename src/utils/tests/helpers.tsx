import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import theme from 'styles/theme'
import React from 'react'
import RenderResult from 'next/dist/server/render-result'

export const renderWithTheme = (children: React.ReactNode): RenderResult => {
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}
