import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { logger } from "@/utils/Logger.js"
import { Account } from "@/models/Account.js"


class ProfilesService {
  async updateProfileDetails(profileData) {
    const response = await api.put('account', profileData)
    logger.log('Updating profile', response.data)
    const updatedProfile = new Account(response.data)
    AppState.account = updatedProfile

  }
  async getProfileById(profileId) {
    AppState.activeProfile = null
    const response = await api.get(`api/profiles/${profileId}`)
    logger.log('getting profile', response.data)
    const newProfile = new Account(response.data)
    AppState.activeProfile = newProfile
  }

}

export const profilesService = new ProfilesService()