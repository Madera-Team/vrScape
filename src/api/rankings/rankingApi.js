import axios from "axios";

class rankingApi {
  API_URL = "https://vrescapeback-production.up.railway.app"

  instance = axios.create({
    baseURL: `${this.API_URL}`,
    timeout: 20000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  getallRankings = async () => {
    return await this.instance.get(`${this.API_URL}/api/ranking`)
  }

  isAxiosError = (error) => axios.isAxiosError(error)

}

export default rankingApi