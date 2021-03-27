import './App.css';
import Header from './components/Header'
import Container from './components/Container'
import Navbar from './components/Navbar'


function App() {
  return (
    <div style={{border: '1px dashed green'}}>
      <Header />
      <Navbar />
      <Container />
    </div>
  );
}

export default App;
