import './App.css';
import {Home} from './Pages';
import { NavBar } from './Containers';
import { UserContextProvider } from './const/user';

function App() {
  return (
    //make user data available to all components wrappd in the UCP tag
<UserContextProvider>
    <div className="App">
        <NavBar />
        <Home/>
    </div>
  
</UserContextProvider>
    
  );
}

export default App;
