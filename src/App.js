import "./index.css";
import Main from "./components/Main";
import SignInForm from "./components/SignInForm";
import Banner from "./components/Banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main></Main>} />
          <Route
            path="/SignIn"
            element={<SignInForm page={true}></SignInForm>}
          />
          <Route
            path="/SignUp"
            element={<SignInForm page={false}></SignInForm>}
          />
          <Route path="/banner" element={<Banner></Banner>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
