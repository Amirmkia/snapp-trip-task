import React from 'react'

export default function CustomEmailInput({values , handleChange , handleBluer , errors , touched} : ICustomInputProps) {
  return (
    <div>
       <input
        type="email"
        name="email"
        value={values.email}
        onChange={(e) => handleChange("email", e.target.value)}
        onBlur={() => handleBluer("email")}
      />
      {touched.email && errors.email && <p>{errors.email}</p>}
    </div>
  )
}
