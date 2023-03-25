import React from 'react';
import './SubmitButton.style.scss';

export interface SubmitButtonProps {
  className: string;
  value: string;
  buttoninput__container?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  className,
  value,
  buttoninput__container,
}) => {
  return (
    <div className={buttoninput__container}>
      <button type='submit' className={className}>
        {value}
      </button>
    </div>
  );
};

export default SubmitButton;
