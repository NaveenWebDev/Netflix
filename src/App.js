import './index.css';
import Main from './components/Main';
import SignInForm from './components/SignInForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main></Main>}/>
          <Route path='/SignIn' element={<SignInForm></SignInForm>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
