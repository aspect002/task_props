import './App.css';
import { Name } from './Components/Name.jsx';
import { Age } from './Components/Age.jsx';
import { IsMan } from './Components/IsMan.jsx';
import { InfStasObj } from './Components/InfAboutStas.jsx';
import { Colleagues } from './Components/Colleagues.jsx';
import { FuncHisGirl } from './Components/FuncHisGirl.jsx';


function App() {
  const name = 'stas';
  const age = 27;
  const gender = true;
  const stas = { id: 1, name: 'Stasyan', age: 27, profession: 'A Frontend Developer' };
  const colleagues = ['Malinovskiy', 'Matveyenka', 'Karpenko'];
  const funcHisGirl = () => {
    const nameGirl = 'Kristina';
    return nameGirl;
  }

  return(

    <div className="App">

      <Name name={name} />
      <Age age={age} />
      <IsMan gender={gender} />
      <InfStasObj stas={stas} />
      <Colleagues colleagues={colleagues} />
      <FuncHisGirl funcHisGirl={funcHisGirl} />

    </div>
  );
};

export default App;
