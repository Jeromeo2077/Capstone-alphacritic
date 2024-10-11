export class Account {
  /**
   * @type {string}
   */
  id;

  /**
   * @type {string}
   */
  email;

  /**
   * @type {string}
   */
  name;

  /**
   * @type {string}
   */
  picture;

  /**
 * @type {string}
 */
  bio;



  /**
* @type {string}
*/
  coverImg;

  /**
 * @type {string}
 */
  youtubeLink;

  /**
* @type {string}
*/
  twitchLink;

  /**
 * @type {string}
 */
  discordLink;

  /**
* @type {string}
*/
  embedYoutubeLink;



  /**
   * @param {Object} data 
   * @param {string} data.id
   * @param {string} data.email
   * @param {string} data.name
   * @param {string} data.picture
   * @param {string} data.bio
   
   * * @param {string} data.coverImg
   * * @param {string} data.youtubeLink
   * * @param {string} data.twitchLink
   * * @param {string} data.discordLink
   * @param {string} data.embedYoutubeLink

  */
  constructor({ id, email, name, picture, bio, coverImg, youtubeLink, twitchLink, discordLink, embedYoutubeLink }) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.picture = picture;
    // TODO add additional properties if needed
    this.bio = bio || '',

      this.coverImg = coverImg || '',
      this.youtubeLink = youtubeLink || '',
      this.twitchLink = twitchLink || '',
      this.discordLink = discordLink || '',
      this.embedYoutubeLink = embedYoutubeLink || ''

  }
}
