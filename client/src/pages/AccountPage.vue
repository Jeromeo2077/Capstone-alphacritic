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
  userProfileImg: '',
  coverImg: '',
  youtubeLink: '',
  twitchLink: '',
  discordLink: '',

})


async function updateProfileDetails() {
  const profileData = editableProfileData.value

  logger.log('Updating profile details', profileData)
  await profilesService.updateProfileDetails(profileData)

  editableProfileData.value = {
    bio: '',
    userProfileImg: '',
    coverImg: '',
    youtubeLink: '',
    twitchLink: '',
    discordLink: '',
  }

  // router.push({name: 'Profile', params: {profileId: account.id}})
}




</script>

<template>
  <div class="container">
    <div class="about text-center ">
      <div v-if="account">
        <h1 class="text-light">Welcome {{ account.name }}</h1>
        <img class="rounded" :src="account.userProfileImg" alt="" />
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
          <input v-model="editableProfileData.bio" class="form-control" id="bio" name="bio" type="text" minlength="3"
            maxlength="150" placeholder="Create your bio">
        </div>
        <div class="mb-3 text-center">
          <label class="form-label text-light" for="userProfileImg">Add a profile image!</label>
          <input v-model="editableProfileData.userProfileImg" class="form-control" id="userProfileImg"
            name="userProfileImg" type="string" minlength="1" maxlength="500" placeholder="Add a profile image!">
        </div>
        <div class="mb-3 text-center">
          <label class="form-label text-light" for="coverImg">Cover Image</label>
          <input v-model="editableProfileData.coverImg" class="form-control" id="coverImg" name="coverImg" type="string"
            minlength="1" maxlength="500" placeholder="Create a cover image">
        </div>
        <div class="mb-3 text-center">
          <label class="form-label text-light" for="youtubeLink">Link your youtube channel!</label>
          <input v-model="editableProfileData.youtubeLink" class="form-control" id="youtubeLink" name="youtubeLink"
            type="string" minlength="1" maxlength="500" placeholder="Link your youtube channel!">
        </div>
        <div class="mb-3 text-center">
          <label class="form-label text-light" for="twitchLink">Link your Twitch Channel</label>
          <input v-model="editableProfileData.twitchLink" class="form-control" id="twitchLink" name="twitchLink"
            type="string" minlength="1" maxlength="500" placeholder="Link your Twitch channel!">
        </div>
        <div class="mb-3 text-center">
          <label class="form-label text-light" for="discordLink">Link your Discord Channel</label>
          <input v-model="editableProfileData.discordLink" class="form-control" id="discordLink" name="discordLink"
            type="string" minlength="1" maxlength="500" placeholder="Link your Discord channel!">
        </div>
        <div class="mb-3 d-flex justify-content-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mifHo9fC5QI?si=GrcVzikt0lYP8Cqb"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="mb-3 d-flex align-items-center justify-content-center">
          <button class="rounded btn btn-success">Save profile details!</button>
        </div>
      </form>
    </div>
  </div>
</template>


<style scoped lang="scss">
img {
  max-width: 100px;
}
</style>
