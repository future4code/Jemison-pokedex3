import Router from "./Routes/Router";
import {GlobalState} from '../src/global/GlobalState'
import GlobalStateContext from "./global/GlobalContext";

function App() {
  return (
    <>
      <GlobalState>
      <Router />
      </GlobalState>
      
    </>
  );
}


export default App;
