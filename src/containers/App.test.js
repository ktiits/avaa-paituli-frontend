import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders Paituli text', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Paituli/i)
  expect(linkElement).toBeInTheDocument()
})
