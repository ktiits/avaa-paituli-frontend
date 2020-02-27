import React from 'react'

export default function Select({ value, options, placeholder, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="">{placeholder}</option>
      {options.map(option => (
        <option key={option.fi} value={option.fi}>
          {option.fi}
        </option>
      ))}
    </select>
  )
}
