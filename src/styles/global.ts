import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url('/fonts/poppins-v20-latin-300.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('/fonts/poppins-v20-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('/fonts/poppins-v20-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
          url('/fonts/poppins-v20-latin-300.woff') format('woff'), /* Modern Browsers */
          url('/fonts/poppins-v20-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
          url('/fonts/poppins-v20-latin-300.svg#Poppins') format('svg'); /* Legacy iOS */
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('/fonts/poppins-v20-latin-regular.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('/fonts/poppins-v20-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('/fonts/poppins-v20-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
          url('/fonts/poppins-v20-latin-regular.woff') format('woff'), /* Modern Browsers */
          url('/fonts/poppins-v20-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
          url('/fonts/poppins-v20-latin-regular.svg#Poppins') format('svg'); /* Legacy iOS */
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url('/fonts/poppins-v20-latin-600.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('/fonts/poppins-v20-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('/fonts/poppins-v20-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
          url('/fonts/poppins-v20-latin-600.woff') format('woff'), /* Modern Browsers */
          url('/fonts/poppins-v20-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
          url('/fonts/poppins-v20-latin-600.svg#Poppins') format('svg'); /* Legacy iOS */
    }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
