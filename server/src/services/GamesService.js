import { dbContext } from "../db/DbContext.js"

class GamesService {

  async getAllGames() {
    const games = await dbContext.Game.find()
    return games
  }

}

export const gamesService = new GamesService()