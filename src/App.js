
import './App.css';
import TimeoutComponent from './timeoutHook/TimeoutComponent';
import ToggleComponent from './toggleHook/ToggleComponent';
import ArrayComponent from './useArray/ArrayComponent';

import DebounceComponent from './useDebounce/DebounceComponent';
import PreviousComponent from './usePrevious/PreviousComponent';
import StateWithHistoryComponent from './useStateWithHistory/StateWithHistoryComponent';

function App() {
  return (
    <div className="App">
      {/* <ToggleComponent/> */}
      {/* <TimeoutComponent /> */}
      {/* <DebounceComponent /> */}
    {/* <ArrayComponent /> */}
    {/* <PreviousComponent/> */}
    <StateWithHistoryComponent/>
    </div>
  );
}

export default App;
