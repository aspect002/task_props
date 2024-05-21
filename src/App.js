import './App.css';
import { String } from './string.js';
import { Number } from './number.js';
import { IsMan } from './isMan.js';
import { StasObj } from './stasObj.js';
import { Collegyes } from './collegyes';
import { FuncHisGirl } from './funcHisGirl.js';


function App() {
  const name = 'stas';
  const age = 27;
  const gender = true;
  const stasyan = { id: 1, name: 'Stasyan', age: 27, profession: 'A Frontend Developer' };
  const collegyes = ['Malinovskiy', 'Matveyenka', 'Karpenko'];
  const funcHisGirl = () => {
    const nameGirl = 'Kristina';
    return nameGirl;
  }

  return(

    <div className="App">

      <String name={name} />
      <Number age={age} />
      <IsMan gender={gender} />
      <StasObj stasyan={stasyan} />
      <Collegyes collegyes={collegyes} />
      <FuncHisGirl funcHisGirl={funcHisGirl} />

    </div>
  );
};

export default App;
