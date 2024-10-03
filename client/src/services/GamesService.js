import { logger } from "@/utils/Logger.js"
import { api, rawgAPI } from "./AxiosService.js"
import { Game } from "@/models/Game.js"
import { AppState } from "@/AppState.js"


class GamesService {

async  getAllGames() {
    const response = await rawgAPI.get('games?key=53049ff41d0844d99012d20c509f0efc')
    logger.log('Got Games',response.data)

    const newGames = response.data.results.map(gameData => new Game(gameData))
    AppState.games = newGames
 }
}

export const gamesService = new GamesService()