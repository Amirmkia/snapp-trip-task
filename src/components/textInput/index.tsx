import React from 'react'

export default function CustomTextInput({values , handleChange , handleBluer , errors , touched} : ICustomInputProps) {
  return (
    <div>
       <input
        type="password"
        name="password"
        value={values.password}
        onChange={(e) => handleChange('password', e.target.value)}
        onBlur={() => handleBluer('password')}
      />
      {touched.password && errors.password && <p>{errors.password}</p>}
    </div>
  )
}
