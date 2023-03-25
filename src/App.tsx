import Signup from './view/pages/Signup';
import './index.scss';
import realestate from '../src/images/realestate.png';

function App() {
  return (
    <>
      <div className='App'>
        <Signup name={''} age={0} id={0} email={''} phone={0} homeNumber={0} />
        <img className='background-image' src={realestate} alt='Background' />
      </div>
    </>
  );
}

export default App;
