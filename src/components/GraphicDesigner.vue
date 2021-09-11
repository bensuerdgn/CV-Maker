<template>
  <div class="p-10 text-gray-600 graphic" id="graphic">
    <div class="">
      <div class="header shadow-box">
        <div
          class="header-content flex flex-col items-center justify-center py-10"
        >
          <div class="image border-8 border-white shadow">
            <img
              :src="user.photo"
              alt=""
              v-if="user.photo"
              class="w-24 md:w-32 md:h-32 lg:w-48 lg:h-48"
            />
            <img
              src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
              alt=""
              v-if="!user.photo"
              class="w-24 md:w-32 md:h-32 lg:w-48 lg:h-48"
            />
          </div>
          <div class="info text-white text-center">
            <h2 class="font-bold text-4xl m-4">
              {{ user.name }} {{ user.surname }}
            </h2>
            <p>Front-end Developer and Graphic Designer</p>
          </div>
        </div>
      </div>
      <div class="about my-10 p-10 shadow-box">
        <h2 class="text-3xl">About Me</h2>
        <p class="py-5">
          Hello! I’m Walter Patterson. I am passionate about UI/UX design and
          Web Design. I am a skilled <strong>front-end developer</strong> and
          master of graphic design tools such as Photoshop and Sketch. I am a
          quick learner and a team worker that gets the job done.
        </p>
        <p>
          I can easily capitalize on low hanging fruits and quickly maximize
          timely deliverables for real-time schemas.
        </p>
        <h2 class="text-3xl py-5">Bio</h2>
        <div class="contact">
          <table>
            <tr>
              <td><i class="far fa-calendar-alt"></i> BirthDate</td>
              <td>{{ user.birthdate }}</td>
            </tr>
            <tr>
              <td><i class="far fa-envelope"></i> Email</td>
              <td>{{ user.email }}</td>
            </tr>
            <tr>
              <td><i class="fas fa-phone"></i> Phone</td>
              <td>{{ user.phoneNumber }}</td>
            </tr>
            <tr>
              <td><i class="fab fa-linkedin"></i> LinkedIn</td>
              <td>{{ user.linkedin }}</td>
            </tr>
            <tr>
              <td><i class="fas fa-map-marker-alt"></i> Address</td>
              <td>{{ user.address }}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="professionalSkills my-10 p-10 shadow-box">
        <h1 class="text-2xl font-bold mb-5">Professional Skills</h1>
        <div class="progress-bars flex justify-between items-end">
          <div class="">
            <div class="space-y-2 artboard w-24 md:w-64 lg:w-80">
              <span>HTML</span>
              <progress
                class="progress progress-info h-4"
                value="70"
                max="100"
              ></progress>
              <span>Css</span>
              <progress
                class="progress progress-info h-4"
                value="70"
                max="100"
              ></progress
              ><span>JavaScript</span>
              <progress
                class="progress progress-info h-4"
                value="40"
                max="100"
              ></progress>
            </div>
          </div>
          <div class="">
            <div class="space-y-2 artboard w-24 md:w-64 lg:w-80">
              <span>Adobe Photoshop</span>
              <progress
                class="progress progress-accent h-4"
                value="70"
                max="100"
              ></progress>
              <span>Sketch</span>
              <progress
                class="progress progress-accent h-4"
                value="70"
                max="100"
              ></progress>
              <span>Adobe XD</span>
              <progress
                class="progress progress-accent h-4"
                value="50"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
      <div
        class="workExperience my-10 p-10 mb-0 shadow-box"
        v-if="user.workExperience"
      >
        <div class="" v-for="(work, index) in user.workExperience" :key="index">
          <div class="experience pl-8">
            <h2 class="text-xl font-bold">
              {{ work.companyName }}
              <span class="text-lg text-gray-500"> {{ work.position }}</span>
            </h2>
            <div class="date my-3">
              {{ work.startDate }} - {{ work.endDate }}
            </div>
            <p>
              {{ work.statement }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.user = this.$store.getters.getUserInfo;
    console.log(this.user);
  },
};
</script>

<style scoped lang="scss">
.header {
  background-image: url(https://demo.templateflip.com/material-resume/images/header-background.jpg);
  backdrop-filter: blur(2px);
  .header-content {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
  }
}
tr {
  td {
    padding: 0 100px 4px 0;
    &:first-child {
      font-weight: 600;
    }
  }
}
.experience:before {
  content: "";
  display: inline-block;
  position: relative;
  background-color: #fff;
  border-radius: 100%;
  width: 24px;
  height: 24px;
  top: 33px;
  left: -35px;
  border: 5px solid;
  z-index: 2;
  color: rgb(73, 177, 247);
}
</style>