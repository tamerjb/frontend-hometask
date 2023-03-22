import React from 'react';
import logo from '../../images/realestate.png';

interface Props {
  name: string;
  age: number;
  tz: number;
  email: string;
  phone: number;
}

const Signup: React.FC<Props> = ({ name, age }) => {
  return (
    <div className='signup'>
      <div className='signup__title-container'>
        <h1 className='signup__title'>הרשמה:</h1>
        <p className='signup__mandatory'>
          *שדות המסומנים בכוכבית הם שדות חובה{' '}
        </p>
      </div>
      <div className='signup__form-container'>
        <form className='singup__form'>
          <div>
            <p className='signup__form-section-title'>פרטים אישיים : </p>
            <p className='signup__splitter'></p>
          </div>
          <div className='signup__form-section'>
            <p className='signup__form-name'>שם מלא : </p>
            <input className='signup__form-name-input'></input>
          </div>
          <div className='signup__form-section'>
            <p>ת.ז:</p>
            <input></input>
          </div>
          <div className='signup__form-section'>
            <p>תאריך לידה : </p>
            <input type='date' id='date-input'></input>
          </div>
          <div>
            <p>פרטי התקשרות : : </p>
            <p className='signup__splitter'></p>
          </div>
          <div className='signup__form-section'>
            <p>שם מלא : </p>
            <input></input>
          </div>
          <div className='signup__form-section'>
            <p>ת.ז:</p>
            <input></input>
          </div>
          <div>
            <p>כתובת : </p>
            <p className='signup__splitter'></p>
          </div>
          <div className='signup__form-section'>
            <p>עיר : </p>
            <input></input>
          </div>
          <div className='signup__form-section'>
            <p>רחוב:</p>
            <input></input>
          </div>
          <div className='signup__form-section'>
            <p>מספר בית:</p>
            <input></input>
          </div>
        </form>
      </div>
      {/* <img className='signup__image' src={logo} alt='aa' /> */}
    </div>
  );
};

export default Signup;
