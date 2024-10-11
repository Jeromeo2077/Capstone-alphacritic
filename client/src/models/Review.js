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
    // this.reviewId = data.reviewId
    this.alphaScoreAggregate = data.alphaScoreAggregate
  }

  get formattedCreatedDate() {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'America/Denver'
    };
    return this.createdAt.toLocaleString('en-US');
  }

  get customDate() {
    const dateString = this.createdAt.toDateString()
    const dateParts = dateString.split(' ')
    const dateMonthDay = dateParts.slice(1, -1).join(' ')
    return dateMonthDay
  }
}

