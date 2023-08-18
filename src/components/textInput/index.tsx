import React from 'react'

export default function CustomTextInput({values , handleChange , handleBlur , errors , touched} : ICustomInputProps) {
  return (
    <div>
       <input
        type="password"
        name="password"
        value={values.password}
        onChange={(e) => handleChange('password', e.target.value)}
        onBlur={() => handleBlur('password')}
      />
      {touched.password && errors.password && <span>{errors.password}</span>}
    </div>
  )
}
