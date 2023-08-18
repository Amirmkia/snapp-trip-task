import React from 'react'

export default function CustomEmailInput({values , handleChange , handleBlur , errors , touched} : ICustomInputProps) {
  return (
    <div>
       <input
        type="email"
        name="email"
        value={values.email}
        onChange={(e) => handleChange("email", e.target.value)}
        onBlur={() => handleBlur("email")}
      />
      {touched.email && errors.email && <span>{errors.email}</span>}
    </div>
  )
}
