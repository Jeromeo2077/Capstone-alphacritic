export class Review {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.creator = data.creator
    this.gameId = data.gameId
  }
}