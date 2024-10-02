import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import './login.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Montserrat;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  outline: none;
`;

const Button = styled.button`
  padding: 10px;
  width: 100%;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
`;

const LoginComponent = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser?.username === username && storedUser?.password === password) {
            onLogin(true);
            navigate("/home");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <Input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>Login</Button>
            <p>
                Don't have an account? <a href="/register">Register</a>
            </p>
        </div>
    );

    // return (
    //     <Container>
    //         <h2>Login</h2>
    //         <Input
    //             placeholder="Username"
    //             value={username}
    //             onChange={(e) => setUsername(e.target.value)}
    //         />
    //         <Input
    //             type="password"
    //             placeholder="Password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //         />
    //         <Button onClick={handleLogin}>Login</Button>

    //         <p>
    //             Don't have an account? <a href="/register">Register</a>
    //         </p>


    //     </Container>
    // );
};

export default LoginComponent;
