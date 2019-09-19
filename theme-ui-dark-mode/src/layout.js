/** @jsx jsx */
import { jsx, useColorMode, Styled } from 'theme-ui'

export default props => {
  const [colorMode, setColorMode] = useColorMode()

  const newColorMode = colorMode === 'light'
    ? 'dark'
    : 'light'
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
