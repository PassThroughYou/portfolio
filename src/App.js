import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <header className="SiteHeader">
        <div>
          <a href="/">
            <img className='SiteLogo' alt="logo" src="image/JinaLogo.png"/>
            <div className='SiteTitle'>Jina Yu</div>
          </a>
          <nav>
            <ul>
              <li><a href="/about">소개</a></li>
              <li><a href="/dev">개발</a></li>
              <li><a href="/peed">피드</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* My Card */}
      <div className="Wrapper">


        <div className='item-list'>
          <ul className='card'>
           
          </ul>
        </div>

      </div>
      <footer className="Footer">

      </footer>
    </div>
  );
}

export default App;
