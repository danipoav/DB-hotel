import React, { useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Login, DivGroup, Input, Button, Container, Title, Text } from '../../styles/Login/LoginForm.styles'
import { useDispatch } from 'react-redux';
import { getToken } from '../../store/thunks/authThunk';
import type { AppDispatch } from '../../store/store';


export default function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch: AppDispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getToken({ username, password }))
  }

  return (
    <>
      <Container>
        <Login onSubmit={handleSubmit}>
          <Title>Welcome</Title>
          <DivGroup>
            <FaEnvelope />
            <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </DivGroup>
          <DivGroup>
            <FaLock />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </DivGroup>
          <Button type="submit">Login</Button>
          <Text><strong>Username:</strong> Daniel</Text>
          <Text><strong>Password:</strong> admin</Text>
        </Login>
      </Container>
    </>
  )
}
