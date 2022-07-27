import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sizlere daha iyi hizmet vermek adına yenileniyoruz.
        </p>
        <a
          className="App-link"
          href="mailto:info@aliniyor.com"
          target="_blank"
          rel="noopener noreferrer"
        > 
 	Bize ulaşın
        </a>
      </header>
    </div>
  );
}

export default App;
