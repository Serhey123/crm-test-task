import React from 'react';

export default function Input({ label, id, register, ...restProps }) {
  return (
    <div className="form-group" style={{ marginBottom: 10 }}>
      <label htmlFor={id}>{label}</label>
      <input
        {...restProps}
        className="form-control"
        autoComplete="off"
        id={id}
        {...register}
      />
    </div>
  );
}
