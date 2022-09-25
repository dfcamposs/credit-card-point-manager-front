import './Home.css';
import logo from './home-logo.png';
import "@fontsource/montserrat";
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className="Home">
      <img className="home-logo" alt="An airplane with a dolar coin icon" src={logo} />
      <p className="home-title">Gerenciador de Pontos</p>      
    
      <Link to={"/credit-card-selection"}><button className="home-button" type="button">Começar</button></Link>
    </div>
  );
}

export default Home;
