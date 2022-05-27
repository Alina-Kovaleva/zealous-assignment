import { ThemeProvider as NativeThemeProvider } from 'styled-components'

import { defaultTheme } from './theme'

interface ThemeProviderProps {
  children?: any
}

export function ThemeProvider ({
  children
}: ThemeProviderProps) {
  return (
    // <NativeThemeProvider theme={defaultTheme}>
    //   {children}
    // </NativeThemeProvider>
    <div>{children}</div>
  )
}
