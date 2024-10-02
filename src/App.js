import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomeComponent from "./modules/home";
import LoginComponent from "./modules/home/LoginComponent";
import RegistrationComponent from "./modules/home/RegistrationComponent";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-family: Montserrat;
`;

const Header = styled.span`
  color: black;
  font-size: 25px;
  font-weight: bold;
`;

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Container>
        <Header>Expense Tracker</Header>
        <Routes>
          <Route
            path="/home"
            element={isAuthenticated ? <HomeComponent /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<LoginComponent onLogin={setAuthenticated} />} />
          <Route path="/register" element={<RegistrationComponent />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;





















// import styled from "styled-components";
// import HomeComponent from "./modules/home";


// const Container = styled.div`
// display:flex;
// flex-direction:column;
// align-items:center;
// margin:30px 0 10px ;
// font-family:Montserrat;
// `;

// const Header = styled.span`
// color:black;
// font-size:25px;
// font-weight:bold;
// `;
// function App() {
//   return <Container>
//     <Header>Expence Tracker</Header>
//     <HomeComponent />
//   </Container>
// }

// export default App;
































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
