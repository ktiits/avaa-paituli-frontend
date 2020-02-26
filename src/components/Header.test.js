import React from 'react'
import { render } from '@testing-library/react'

import Header from './Header'

test('renders Paituli text', () => {
  const { getByText } = render(<Header />)
  const linkElement = getByText(/Paituli/i)
  expect(linkElement).toBeInTheDocument()
})
