import './App.css'
import Header from './components/Header';
import NavBar from './components/NavBar';
import TradesHitory from './containers/TradesHistory';

function App() {

  return (
    <>
    <Header />
    <NavBar />
    <div className="main-content">
      <TradesHitory />
      </div>
    </>
  )
}

export default App;
