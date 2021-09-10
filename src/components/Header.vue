<template>
  <div class="header bg-blue-400 h-80">
    <div class="flex flex-col items-center justify-center pt-16 pb-8">
      <h1 class="text-4xl text-white pb-8 font-bold">CV-Maker</h1>
      <!-- <div class="progress-bar flex justify-center items-center">
        <div
          class="
            bg-yellow-400
            w-10
            h-10
            rounded-full
            text-center
            pt-1
            text-white
          "
        >
          <i class="fas fa-user text-xl mb-2"></i>
          <span>Kişisel</span>
        </div>
        <div class="bg-yellow-400 h-2 w-60 rounded-full mx-1"></div>
        <div
          class="
            bg-yellow-400
            w-10
            h-10
            rounded-full
            text-center
            pt-1
            text-white
          "
        >
          <i class="fas fa-pen text-xl mb-2"></i>
          <span>Şablon</span>
        </div>
      </div> -->
      <div class="header">
        <div class="progressbar flex justify-center text-white text-xl">
          <router-link
            active-class="bg-yellow-400"
            to="/"
            class="
              w-14
              h-14
              rounded-full
              border-4 border-gray-500
              bg-gray-400
              text-center
            "
            :class="[pathClass ? 'bg-yellow-400' : 'bg-gray-400']"
            tag="button"
            exact
          >
            <i class="fas fa-user mb-6 pt-3"></i>
            <span>Kişisel</span>
          </router-link>

          <!-- <hr class="w-36 mt-7 mx-5" /> -->
          <div
            class="
              w-40
              mx-5
              mt-6
              h-3
              bg-gray-500
              rounded-full
              flex
              items-center
              justify-center
            "
          >
            <div
              class="bg-gray-400 h-1 w-36 rounded-full"
              :class="[pathClass ? 'bg-yellow-400' : 'bg-gray-400']"
            ></div>
          </div>
          <router-link
            active-class="bg-yellow-400"
            to="/Template"
            tag="button"
            :disabled="true"
            class="
              w-14
              h-14
              rounded-full
              border-4 border-gray-500
              bg-gray-400
              text-center
            "
            exact
            @click.prevent.capture="clicked"
          >
            <i class="fas fa-pen mb-6 pt-3"></i>
            <span>Şablon</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pathClass: false,
    };
  },
  created() {
    console.log(window.location.pathname);
    var path = window.location.pathname;
    if (path == "/template") {
      this.pathClass = true;
    }
  },
};
</script>

<style>
</style>