import React from 'react';
import './SubmitButton.style.scss';

export interface SubmitButtonProps {
  className: string;
  value: string;
  buttonWrapper?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  className,
  value,
  buttonWrapper,
}) => {
  return (
    <div className={buttonWrapper}>
      <button className={className}>{value}</button>
    </div>
  );
};

export default SubmitButton;
