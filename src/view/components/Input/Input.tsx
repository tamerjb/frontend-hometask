import React, {
  HtmlHTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useState,
} from 'react';
import './Input.style.scss';
import { RefCallBack } from 'react-hook-form';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className: string;
  type?: 'text' | 'phone-number' | 'number' | 'dateTime' | 'date';
  label: string;
  error?: string;
  inputProps?: {
    ref?: RefCallBack;
  };
  PlaceholderClassName?: string;
}

const Input: React.FC<InputProps> = ({
  className,
  PlaceholderClassName,
  type,
  label,
  error,
  inputProps,
}) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    // onchange(event);
  };

  return (
    <div className='signup__form-section'>
      <p
        className={
          error ? PlaceholderClassName + ' error-message' : PlaceholderClassName
        }
      >
        {error ? '*' : null}
        {label}
      </p>
      <input
        {...inputProps}
        type={type}
        className={error ? className + ' error-message' : className}
      ></input>
      {error ? <span className='error-message'>*{error}</span> : null}
    </div>
  );
};

export default Input;
