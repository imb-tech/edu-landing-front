
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_DEFAULT_URL

const api = axios.create({
    baseURL: baseURL
})



export { api }