const fetchAPI = async (endpoint: string, options: RequestInit = {}) => {

    const url = 'https://877wje9vwg.execute-api.eu-west-3.amazonaws.com/api'
    const token = sessionStorage.getItem('token')

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