import Router from "./routes/Router";
import {GlobalState} from '../src/global/GlobalState'


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
