import React, { useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Login, DivGroup, Input, Button, Container, Title, Text, Loader, LoaderText, Dot, LoaderBarBackground, LoaderBar, LoaderBarContainer, LoaderBarColor } from '../../styles/Login/LoginForm.styles'
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../../store/thunks/authThunk';
import type { AppDispatch, RootState } from '../../store/store';
import { toast } from 'react-toastify';


export default function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.auth.loading);
  const error = useSelector((state:RootState) => state.auth.error);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  try {
    dispatch(getToken({ username, password })).unwrap();
    toast.success('Inicio de sesión exitoso');
  } catch (error) {
    toast.error('Usuario o contraseña incorrectos');
  }
  }

  return (
    <>
      <Container>
        {loading ?
          <Loader>
            <LoaderText>
              Verifying<Dot>.</Dot><Dot>.</Dot><Dot>.</Dot>
            </LoaderText>
            <LoaderBarBackground>
              <LoaderBar>
                <LoaderBarContainer>
                  <LoaderBarColor/>
                  <LoaderBarColor/>
                  <LoaderBarColor/>
                  <LoaderBarColor/>
                  <LoaderBarColor/>
                  <LoaderBarColor/>
                  <LoaderBarColor/>
                  <LoaderBarColor/>
                  <LoaderBarColor/>
                  <LoaderBarColor/>
                </LoaderBarContainer>
              </LoaderBar>
            </LoaderBarBackground>
          </Loader> :
          <Login onSubmit={handleSubmit}>
            <Title>Welcome</Title>
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
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
        }
      </Container>
    </>
  )
}
