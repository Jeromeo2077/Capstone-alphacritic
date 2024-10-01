import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"


class GamesService {

async  getAllGames() {
    const response = await api.post('/games')
    logger.log(response.data)
 }
}

export const gamesService = new GamesService()