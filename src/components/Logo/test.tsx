import { screen } from '@testing-library/react'
import React from 'react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Logo from './index'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // renderizar o componente --> render
    // selecionar o elemento a ser testado --> screen (queries) --> getBy...
    // expect --> asseertion (asserção - compararão - análise(espero que renderize...))

    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
