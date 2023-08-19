import React from "react";

export const CustomTextInput = React.memo(
  ({
    label,
    type,
    id,
    name,
    value,
    ref,
    onChange,
    error,
  }: TCustomInputProps) => {
    return (
      <>
        <div className=" my-4">
          <label htmlFor={id} className=" text-[#343F71]">
            {label}
          </label>
          <div className="">
            <input
              className=" w-full rounded-md border border-[#343F71] py-4"
              type={type}
              name={name}
              value={value}
              ref={ref}
              onChange={onChange}
            />
            <div className=" text-red-700">{error}</div>
          </div>
        </div>
      </>
    );
  }
);
