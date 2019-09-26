/** @jsx jsx */
import { jsx, useColorMode, useThemeUI, Styled } from 'theme-ui'

export default props => {
  const [colorMode, setColorMode] = useColorMode()
  const { theme } = useThemeUI()

  const { initialColorModeName } = theme
  const modes = Object.keys(theme.colors.modes)
  const allModes = [initialColorModeName, ...modes]
  const index = allModes.indexOf(colorMode)
  const nextIndex = (index + 1) % allModes.length
  const newColorMode = allModes[nextIndex]

  return (
    <Styled.root>
      <header
        sx={{
          borderBottom: 'thin solid #fafafa'
        }}
      >
        <h2
          sx={{
            fontSize: 2
          }}
        >
          Theme UI Color Modes
        </h2>
        <button
          onClick={e => {
            setColorMode(newColorMode)
          }}
        >
          {newColorMode}
        </button>
      </header>
      <main>
        <div
          sx={{
            maxWidth: 1080,
            margin: '0 auto'
          }}
        >
          {props.children}
        </div>
      </main>
    </Styled.root>
  )
}
