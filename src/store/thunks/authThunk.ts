import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchAPI from "../../hooks/FetchAPI";

export const getToken = createAsyncThunk<
    { token: string, expirationTime: number },
    { username: string; password: string }>(
        'api/getToken', async ({ username, password }) => {
            try {
                const Responsetoken = await fetchAPI('auth', {
                    method: 'POST',
                    body: JSON.stringify({
                        "username": username,
                        "password": password
                    })
                })
                if (Responsetoken) {
                    const token = Responsetoken;
                    const expires = 3600
                    const expirationTime = Date.now() + expires * 1000;
                    sessionStorage.setItem('token', token);
                    sessionStorage.setItem('expiration', JSON.stringify(expirationTime))
                    return { token, expirationTime }
                } else {
                    throw new Error('Credenciales incorrectas o error en la API');
                }

            } catch (error) {
                throw new Error(error.message || 'Error al autenticar');
            }
        }
    );