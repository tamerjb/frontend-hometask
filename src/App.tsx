import Signup from './view/pages/Signup';
import './index.scss';

function App() {
  return (
    <>
      <body className='body'>
        <div className='App'>
          <Signup name={''} age={0} tz={0} email={''} phone={0} />
        </div>
      </body>
    </>
  );
}

export default App;
