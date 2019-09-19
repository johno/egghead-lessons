/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

export default props => (
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
        Styling MDX components with Theme UI
      </h2>
    </header>
    <main>
      <Styled.pre>
      I'm code!
      </Styled.pre>
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
