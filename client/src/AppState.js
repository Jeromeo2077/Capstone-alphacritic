import { reactive } from 'vue'
import { Game } from './models/Game.js'
import { Review } from "./models/Review.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {Game[]} */
  games: [],
  /** @type {Game} */
  activeGame: null,

  /**@type {Review[]} */
  reviews: [],

  /**@type{Review} */
  activeReview: null

})

