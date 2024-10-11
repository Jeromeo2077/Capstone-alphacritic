<script setup>
import { computed, ref } from 'vue';
import { AppState } from '../AppState.js';
import { logger } from "@/utils/Logger.js";
import { profilesService } from "@/services/ProfilesService.js";
import { useRoute } from "vue-router";
import { router } from "@/router.js";

const account = computed(() => AppState.account)
const route = useRoute()

const editableProfileData = ref({
  bio: '',
  picture: '',
  coverImg: '',
  youtubeLink: '',
  twitchLink: '',
  discordLink: '',
  embedYoutubeLink: '',
})


async function updateProfileDetails() {
  const profileData = editableProfileData.value

  logger.log('Updating profile details', profileData)
  await profilesService.updateProfileDetails(profileData)

  editableProfileData.value = {
    bio: '',
    picture: '',
    coverImg: '',
    youtubeLink: '',
    twitchLink: '',
    discordLink: '',
    embedYoutubeLink: '',
  }

  router.push({ name: 'Profile', params: { profileId: account.value.id } })
}




</script>

<template>
  <div class="container">
    <div class="about text-center ">
      <div v-if="account">
        <h1 class="text-light">Welcome {{ account.name }}</h1>
        <img class="rounded" :src="account.picture" alt="" />
        <p class="text-light">{{ account.email }}</p>
      </div>
      <div v-else>
        <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
      </div>
    </div>
    <div class="col-12 ml-5 mr-5">
      <form @submit="updateProfileDetails">
        <div class="mb-3 text-center">
          <label class="form-label text-light" for="title">Bio</label>
          <input v-model="editableProfileData.bio" class="form-control input-body" id="bio" name="bio" type="text"
            minlength="3" maxlength="150" placeholder="Create your bio">
        </div>
        <div class="mb-3 text-center">-
          <label class="form-label text-light" for="picture">Add a profile image!</label>
          <input v-model="editableProfileData.picture" class="form-control input-body" id="picture" name="picture"
            type="string" minlength="1" maxlength="500" placeholder="Add a profile image!">
        </div>
        <div class="mb-3 text-center">
          <label class="form-label text-light" for="coverImg">Cover Image</label>
          <input v-model="editableProfileData.coverImg" class="form-control input-body" id="coverImg" name="coverImg"
            type="string" minlength="1" maxlength="500" placeholder="Create a cover image">
        </div>
        <div class="mb-3 text-center">
          <label class="form-label text-light" for="youtubeLink">Link your youtube channel!</label>
          <input v-model="editableProfileData.youtubeLink" class="form-control input-body" id="youtubeLink"
            name="youtubeLink" type="string" minlength="1" maxlength="500" placeholder="Link your youtube channel!">
        </div>
        <div class="mb-3 text-center">
          <label class="form-label text-light" for="twitchLink">Link your Twitch Channel</label>
          <input v-model="editableProfileData.twitchLink" class="form-control input-body" id="twitchLink"
            name="twitchLink" type="string" minlength="1" maxlength="500" placeholder="Link your Twitch channel!">
        </div>
        <div class="mb-3 text-center">
          <label class="form-label text-light" for="discordLink">Link your Discord Channel</label>
          <input v-model="editableProfileData.discordLink" class="form-control input-body" id="discordLink"
            name="discordLink" type="string" minlength="1" maxlength="500" placeholder="Link your Discord channel!">
        </div>
        <div class="mb-3 text-center">
          <label class="form-label text-light" for="embedYoutubeLink">Embed a youtube video!</label>
          <input v-model="editableProfileData.embedYoutubeLink" class="form-control input-body" id="embedYoutubeLink"
            name="embedYoutubeLink" type="string" minlength="1" maxlength="500" placeholder="Embed a youtube video!">
        </div>
        <div class="mb-3 d-flex justify-content-center">
          <iframe width="560" height="315" :src="editableProfileData.embedYoutubeLink" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="mb-3 d-flex align-items-center justify-content-center">
          <button class="rounded btn btn-success save-button">Save profile details!</button>
        </div>
      </form>
    </div>
  </div>
</template>


<style scoped lang="scss">
img {
  max-width: 100px;
}

.input-body {
  box-shadow: 1px 2px 2px black;
}

.save-button {
  font-weight: bolder;
  box-shadow: 1px 2px 2px black;
}
</style>
