import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header className="site__header">
        <h1 className="site__page__name">Users</h1>
      </header>

      <main className="site__main"></main>
    </BrowserRouter>
  );
}

export default App;
