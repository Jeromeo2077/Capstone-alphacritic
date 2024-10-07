<script setup>

</script>


<template>
  <div class="container">
    <section class="row">
      <div class="col-md-12">
        <div class="d-flex align-items-center profile-banner-img mt-5 mb-3">
          <div>
            <img src="https://i.postimg.cc/Dyn42jwt/image-3.jpg" class="profile-img ms-3" alt="">
          </div>
          <div class="mx-3 fw-bold fs-1">
            Profile Name
          </div>
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-md-12">
        <div>
          <div class="d-flex flex-column">
            <span class="text-center fw-bold fs-1">REVIEW TITLE</span>
            <span class="text-center fw-bold fs-4">ALPHA SCORE</span>
          </div>
          <div class="d-flex justify-content-between mt-5 mb-3">
            <div>
              <span class="fw-bold">STORY SCORE</span>
              <span class="alphaScore-bg fw-bold mx-3 p-2">8</span>
            </div>
            <div>
              <span class="fw-bold">GAMEMPLAY SCORE</span>
              <span class="alphaScore-bg fw-bold mx-3 p-2">8</span>
            </div>
            <div>
              <span class="fw-bold">GRAPHICS SCORE</span>
              <span class="alphaScore-bg fw-bold mx-3 p-2">8</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-md-12">
        <div class="bg-text my-3">
          <p class="p-3">REVIEW BODY - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium perferendis
            consequuntur nulla sunt architecto, iste sed? Est ratione minima odio laborum ea et atque totam rem? Error
            quibusdam possimus temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, tempora
            id sint deserunt corporis aliquam ducimus commodi. Recusandae ut nobis facere sapiente, quidem et,
            cupiditate tempora debitis, consectetur labore dicta! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Unde est, illum facere consequuntur molestiae magnam nostrum quos quidem! Labore ea velit odio porro!
            Eos, consequatur exercitationem voluptate qui tenetur laboriosam! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Itaque, quisquam fugiat impedit minus aperiam neque molestias incidunt quos ullam, porro,
            accusantium tempora magni nihil rem? Doloremque in consequatur facilis fugit!</p>
        </div>
      </div>
    </section>
  </div>

</template>


<style lang="scss" scoped>
.profile-img {
  height: 10dvh;
  width: 10dvh;
  border-radius: 5dvh;
}

.profile-banner-img {
  height: 15dvh;
  width: 100%;
  background-color: #bb0a0a;
}

.bg-text {
  background-color: rgba(0, 0, 0, 0.25);
}

.alphaScore-bg {
  background-color: #BB0A0A;
  height: 10dvh;
  width: 100%;
}
</style>