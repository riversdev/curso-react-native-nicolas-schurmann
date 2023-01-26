import axios from 'axios'

export const serverlessApi = axios.create({
    baseURL: 'https://serverless-rivers.vercel.app/api'
})