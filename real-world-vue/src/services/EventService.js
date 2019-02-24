import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async getEvents() {
    const result = await apiClient.get('events')
    return result.data
  },
  async getEvent(id) {
    const result = await apiClient.get(`/events/${id}`)
    return result.data
  }
}
