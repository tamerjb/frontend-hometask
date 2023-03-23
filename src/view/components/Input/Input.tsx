import React, { useState } from 'react';
import './Input.style.scss';

export interface InputProps {
  className: string;
  type?: string;
  inputPlaceholder: string;
  id?: string;
  PlaceholderClassName?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  className,
  PlaceholderClassName,
  type,
  inputPlaceholder,
  id,
  onChange,
}) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    // onChange(event);
  };

  return (
    <div className='signup__form-section'>
      <p className={PlaceholderClassName}>{inputPlaceholder}</p>
      <input type={type} className={className} onChange={handleChange}></input>
    </div>
  );
};

export default Input;
