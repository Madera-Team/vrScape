import axios from "axios";

class gamesApi {
  API_URL = "https://vrescapeback-production.up.railway.app"

  instance = axios.create({
    baseURL: `${this.API_URL}`,
    timeout: 20000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  getallGames = async () => {
    return await this.instance.get(`${this.API_URL}/api/game`)
  }

  isAxiosError = (error) => axios.isAxiosError(error)

}

export default gamesApi