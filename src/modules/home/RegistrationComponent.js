import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const RegistrationComponent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = () => {
        // Simulate storing user credentials (you can replace this with a backend call)
        localStorage.setItem("user", JSON.stringify({ username, password }));
        alert("Registration successful!");
        navigate("/login");
    };

    return (
        <Container>
            <h2>Register</h2>
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
            <Button onClick={handleRegister}>Register</Button>

            <p>
                Already have an account? <a href="/login">Login</a>
            </p>


        </Container>
    );
};

export default RegistrationComponent;
