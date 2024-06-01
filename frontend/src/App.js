import NavBar from "./components/nav/nav";
import Signin from "./components/signin/signin";

import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link
} from 'react-router-dom';
function App() {
  return (
    <div className="container mt-1">
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
