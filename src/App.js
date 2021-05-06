import './App.css';
import {Home} from './Pages';
import { NavBar } from './Containers';
import { UserContextProvider } from './const/user';

function App() {
  return (
<UserContextProvider>
    <div className="App">
        <NavBar />
        <Home/>
    </div>
</UserContextProvider>
    
  );
}

export default App;
