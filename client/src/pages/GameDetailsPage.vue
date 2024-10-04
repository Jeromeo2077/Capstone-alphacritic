<script setup>


</script>


<template>
  <div class="container">
    <section class="row">
      <div class="col-md-7 mt-5">
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fHwws"
          class="img-fluid cover-img" alt="">
      </div>
      <div class="col-md-5 mt-5">
        <div>
          <div class="d-flex flex-column">
            <span>THE WITCHER 3</span>
            <span>Released on: 12/12/24</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nesciunt praesentium a? Aperiam molestiae
              tenetur obcaecati omnis earum non voluptas officiis amet error, voluptate dolorum molestias excepturi
              voluptatem possimus ea.</p>
          </div>
          <div>
            <div class="d-flex justify-content-between">
              <span>APLHASCORE: </span>
              <div class="alphaScore-bg text-center">
                <span class="fs-1 fw-bold">80</span>
              </div>
            </div>
            <span>Based on X number of user reviews</span>
          </div>
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-md-12">
        <button>CREATE ALPHA REVIEW</button>
      </div>
    </section>
    <section class="row">
      <div class="col-md-4">
        <div>
          <div>
            <img src="" alt="">
            <span>THIS IS ALPHA</span>
            <span>80</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque obcaecati voluptate doloribus nostrum
            necessitatibus, nesciunt quisquam, eius tenetur debitis in officiis. Nihil laborum labore atque praesentium
            alias quisquam voluptatem.</p>
          <div>October 1, 2024</div>
        </div>
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped>
.cover-img {
  height: 45dvh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.alphaScore-bg {
  background-color: #BB0A0A;
  height: 10dvh;
  width: 10dvh;
}

.gameDetailsCard-bg {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>