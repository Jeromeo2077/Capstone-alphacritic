import { gamesService } from "../services/GamesService.js";
import BaseController from "../utils/BaseController.js";

export class GamesController extends BaseController {
  constructor() {
    super("api")
    this.router
      .get("/games", this.getAllGames)
  }

  async getAllGames(request, response, next) {
    try {
      const games = await gamesService.getAllGames()
      response.send(games)
    } catch (error) {
      next(error)
    }
  }
}