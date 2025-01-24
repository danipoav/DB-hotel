import { useSelector } from "react-redux"
import { RootState } from '../store/store'

const fetchAPI = async (endpoint: string, options: RequestInit = {}) => {

    const url = 'http://localhost:3000/api'
    const token = sessionStorage.getItem('token')

    console.log(token)
    try {
        const response = await fetch(`${url}/${endpoint}`, {
            ...options,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        if (response.ok) {
            return await response.json()
        } else {
            const error = await response.json()
            throw new Error(error.message || 'Error on fetch API')
        }
    } catch (error) {
        console.log(`Error fetching on URL: ${endpoint}`, error.message)
        throw error;
    }
}

export default fetchAPI;