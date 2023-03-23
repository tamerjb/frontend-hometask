import React from 'react';
import logo from '../../images/realestate.png';
import { Input } from '../components/Input';
import { SubmitButton } from '../components/SubmitButton';
interface Props {
  name: string;
  age: number;
  tz: number;
  email: string;
  phone: number;
}
function validateId(id: string): boolean {
  // Check that the ID number is 9 digits long
  if (id.length !== 9) {
    return false;
  }

  // Check that the last 6 digits are numeric
  const lastSixDigits = parseInt(id.substr(3));
  if (isNaN(lastSixDigits)) {
    return false;
  }

  // Check the validity of the check digit
  let sum = 0;
  for (let i = 0; i < id.length - 1; i++) {
    const digit = parseInt(id[i]);
    sum += digit * (i % 2 === 0 ? 1 : 2);
  }
  const checkDigit = (10 - (sum % 10)) % 10;
  const lastDigit = parseInt(id[8]);
  if (checkDigit !== lastDigit) {
    return false;
  }

  // If all checks passed, the ID is valid
  return true;
}

const Signup: React.FC<Props> = ({ name, age }) => {
  return (
    <div className='signup'>
      <div className='signup__title-container'>
        <h1 className='signup__title'>הרשמה:</h1>
        {/* <p className='signup__mandatory'>
          *שדות המסומנים בכוכבית הם שדות חובה{' '}
        </p> */}
      </div>
      <div className='signup__form-container'>
        <form className='singup__form'>
          <div className='wrapper2'>
            <p className='signup__form-section-title'>פרטים אישיים: </p>
            <p className='signup__splitter'></p>
          </div>
          <div className='wrapper'>
            <Input
              className='signup__form-input'
              inputPlaceholder='שם מלא:'
              PlaceholderClassName='signup__form-name'
            />
            <Input
              className='signup__form-input'
              inputPlaceholder='ת.ז:'
              PlaceholderClassName='signup__form-name'
            />
            <Input
              type='date'
              className='signup__form-input signup__form-input-date'
              inputPlaceholder='תאריך לידה:'
              PlaceholderClassName='signup__form-name signup__form-birthday'
              id='date-input'
            />
          </div>

          <div className='wrapper2'>
            <p className='signup__form-section-title'>פרטים אישיים: </p>
            <p className='signup__splitter'></p>
          </div>

          <div className='wrapper'>
            <Input
              className='signup__form-input'
              inputPlaceholder='שם מלא:'
              PlaceholderClassName='signup__form-name'
            />
            <Input
              className='signup__form-input'
              inputPlaceholder='תז:'
              PlaceholderClassName='signup__form-name'
            />
          </div>
          <div className='wrapper2'>
            <p className='signup__form-section-title'>פרטים אישיים: </p>
            <p className='signup__splitter'></p>
          </div>
          <div className='wrapper'>
            <Input
              className='signup__form-input'
              inputPlaceholder='רחוב:'
              PlaceholderClassName='signup__form-name'
            />
            <Input
              className='signup__form-input'
              inputPlaceholder='עיר:'
              PlaceholderClassName='signup__form-name'
            />
            <Input
              className='signup__form-input signup__form-input-house'
              inputPlaceholder='מספר בית:'
              PlaceholderClassName='signup__form-name signup__form-house'
            />
          </div>
          <div>
            <label>
              <input className='signup__form-checkbox' type='checkbox' />
              אני מסכים לקבל דיוור במייל ובמסרון{' '}
            </label>
          </div>
          <div>
            <label>
              <input className='signup__form-checkbox' type='checkbox' />
              אני מסכים לתנאי השירות
            </label>
            <SubmitButton className='signup__form-button' value='שלח' />
          </div>
        </form>
      </div>
      {/* <img className='signup__image' src={logo} alt='aa' /> */}
    </div>
  );
};

export default Signup;
