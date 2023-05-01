import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './scenes/Homepage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    </>
  );
}

export default App;
