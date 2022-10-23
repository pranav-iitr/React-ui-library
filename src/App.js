
import './App.css';
import { PayNowButton, Counter } from './lib';

function App() {
  // let styler={
  //   ppButton:{
  //     background:'blue',
  //   }
  // }
  return (
    <div className="App">
       <PayNowButton head='no way'/> 
       <Counter/>
    </div>
  );
}

export default App;
