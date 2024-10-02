export class Game {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.description = data.description
    this.background_image = data.background_image
    this.released = data.released
    this.platforms = data.platforms
    this.genres = data.genres
    this.short_screenshots = data.short_screenshots
  }
}