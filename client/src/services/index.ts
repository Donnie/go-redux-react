import axios from "axios";
import { Repository } from '../types'

const meister = axios.create({
  baseURL: "http://localhost:5000"
})

export const fetchRepos = async (searchTerm: string): Promise<Repository[]> => {
  const response = await meister.get(`/fetch-repos/${searchTerm}`)
  return response.data
}
