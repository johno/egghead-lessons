export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#609',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  styles: {
    root: {
      fontWeight: 'body',
      fontFamily: 'body',
      lineHeight: 'body'
    },
    pre: {
      backgroundColor: 'text',
      color: 'background',
      p: [3, 4, 5],
      borderRadius: 4
    },
    a: {
      color: 'primary',
      '&:hover': {
        textDecoration: 'none'
      }
    }
  }
}
