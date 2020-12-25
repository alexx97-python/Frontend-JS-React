import { Route } from 'react-router-dom';
import './App.css';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainComponent from './components/MainComponent/MainComponent';


function App() {
  return (
    <div className="app__wrapper">
      <Header />
      <div className="content__wrapper">
        <Route path='/home'
            render={ () => <MainComponent />}/>
        <Route path='/catalog'
            render={ () => <Catalog />}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
