import reactLogo from './assets/react.svg';
import './App.css';
import Cards from './Cards.jsx';
import Header from './Header.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='py-12'>
        <Cards />
      </main>
    </div>
  )
}

export default App;
