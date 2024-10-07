export class Review {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.title = data.title
    this.alphaScore = data.alphaScore
    this.gameplayScore = data.gameplayScore
    this.storyScore = data.storyScore
    this.graphicsScore = data.graphicsScore
    this.createdAt = data.createdAt
    this.isPublished = data.isPublished
    this.isPinned = data.isPinned
    this.creator = data.creator
    this.gameId = data.gameId
    this.creatorId = data.creatorId

    this.alphaScoreAggregate = data.alphaScoreAggregate
  }
}