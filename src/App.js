import './App.css';
import Reports from './components/Reports/Reports';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Reports/>
      </GlobalProvider>
    </div>
  );
}

export default App;
