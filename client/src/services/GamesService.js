import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"


class GamesService {

async  getAllGames() {
    const response = await api.get('/games?key=53049ff41d0844d99012d20c509f0efc')
    logger.log(response.data)

    
 }
}

export const gamesService = new GamesService()