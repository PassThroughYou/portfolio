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


        <div className='itemList'>
          <ul className='card'>
           <li>
            <h1>JiNa Yu</h1>
            <p>본질적인 문제에 집중하며, '왜?'에 대한 해답을 찾아갑니다.</p>
            <p className="cardResume">이력서</p>
           </li>
          </ul>

          <img className='cardImage' alt="cardImage" src="image/JinaLogo.png" />
        </div>

      </div>
      <footer className="Footer">

      </footer>
    </div>
  );
}

export default App;
