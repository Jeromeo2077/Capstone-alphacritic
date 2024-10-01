import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Game } from "@/models/Game.js"
import { AppState } from "@/AppState.js"


class GamesService {

async  getAllGames() {
    const response = await api.get('/games?key=53049ff41d0844d99012d20c509f0efc')
    logger.log(response.data)

    const newGames = response.data.results.map(gameData => new Game(gameData))
    AppState.games = newGames
 }
}

export const gamesService = new GamesService()