<template>
  <div class="text-gray-600 px-10 frontend" id="frontend">
    <div class="header">
      <div class="top flex pt-14">
        <div class="image border-8 border-white ml-5 mr-20 -mb-10 shadow">
          <img
            v-if="user.photo"
            :src="user.photo"
            alt=""
            class="md:w-32 md:h-32 lg:w-48 lg:h-48"
          />
          <img
            v-if="!user.photo"
            src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
            alt=""
            class="md:w-32 md:h-32 lg:w-48 lg:h-48"
          />
        </div>
        <div class="info text-white">
          <h2 class="font-bold text-4xl mb-4">
            {{ user.name }} {{ user.surname }}
          </h2>
          <p>Graphic Designer & Web Developer</p>
        </div>
      </div>
      <div class="bottom py-10 flex items-end mt-5 border-b">
        <div class="about">
          <h1 class="text-2xl font-bold mb-5">About Me</h1>
          <p class="w-3/4">
            Hello! I’m Joyce Harrison. I am passionate about UI/UX design and
            Web Design. I am a skilled Front-end Developer and master of Graphic
            Design tools such as Photoshop and Sketch.
          </p>
        </div>
        <div class="contact">
          <table>
            <tr>
              <td>BirthDate</td>
              <td>{{ user.birthdate }}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{{ user.email }}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{{ user.phoneNumber }}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{{ user.address }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="skills py-10 border-b">
        <h1 class="text-2xl font-bold mb-5">Professional Skills</h1>
        <div class="progress-bars flex justify-between items-end">
          <div class="">
            <div class="space-y-2 artboard w-32 md:w-64 lg:w-96">
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
            <div class="space-y-2 artboard w-32 md:w-64 lg:w-96">
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
      <div class="experiences py-10">
        <div class="">
          <h1 class="text-2xl font-bold mb-10">Work Experience</h1>
          <div class="border-l pl-8">
            <div class="experience">
              <div class="shadow p-8 rounded border-blue-500 border-l">
                <h2 class="text-xl font-bold">
                  Frontend Developer
                  <span class="text-lg text-gray-500"> at Creative Agency</span>
                </h2>
                <div class="date my-3">May, 2015 - Present</div>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition.
                </p>
              </div>
            </div>
            <div class="experience my-8">
              <div class="shadow p-8 rounded border-blue-500 border-l">
                <h2 class="text-xl font-bold">
                  Graphic Designer
                  <span class="text-lg text-gray-500"> at Design Studio</span>
                </h2>
                <div class="date my-3">June, 2013 - May, 2015</div>
                <p>
                  Override the digital divide with additional clickthroughs from
                  DevOps. Nanotechnology immersion along the information highway
                  will close the loop on focusing solely on the bottom line.
                </p>
              </div>
            </div>
            <div class="experience">
              <div class="shadow p-8 rounded border-blue-500 border-l">
                <h2 class="text-xl font-bold">
                  Junior Web Developer
                  <span class="text-lg text-gray-500"> at Indie Studio</span>
                </h2>
                <div class="date my-3">Jan, 2011 - May, 2013</div>
                <p>
                  User generated content in real-time will have multiple
                  touchpoints for offshoring. Organically grow the holistic
                  world view of disruptive innovation via workplace diversity
                  and empowerment.
                </p>
              </div>
            </div>
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
.top {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+PGcgZmlsbC1ydWxlPSdldmVub2RkJz48ZyBmaWxsPScjZmZmZmZmJyBmaWxsLW9wYWNpdHk9JzAuMTInPjxwYXRoIG9wYWNpdHk9Jy41JyBkPSdNOTYgOTVoNHYxaC00djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1VjBoMXYxNWg5VjBoMXYxNWg5VjBoMXYxNWg5VjBoMXYxNWg5VjBoMXYxNWg5VjBoMXYxNWg5VjBoMXYxNWg5VjBoMXYxNWg5VjBoMXYxNWg0djFoLTR2OWg0djFoLTR2OWg0djFoLTR2OWg0djFoLTR2OWg0djFoLTR2OWg0djFoLTR2OWg0djFoLTR2OWg0djFoLTR2OXptLTEgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTktMTBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptOS0xMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTktMTBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptOS0xMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTktMTBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptOS0xMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTktMTBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXonLz48cGF0aCBkPSdNNiA1VjBINXY1SDB2MWg1djk0aDFWNmg5NFY1SDZ6Jy8+PC9nPjwvZz48L3N2Zz4=);
  background-color: #4a89dc;
}
td {
  padding: 2px 5px;
}
// .experience:before {
//   border-color: #4a89dc;
//   content: "";
//   display: inline-block;
//   position: absolute;
//   background-color: #fff;
//   border-radius: 10px;
//   width: 12px;
//   height: 12px;
//   top: 20px;
//   left: -41px;
//   border: 2px solid;
//   z-index: 2;
// }
// .experience:after {
//   background-color: #4a89dc;
//   content: "";
//   display: inline-block;
//   position: absolute;
//   background-color: currentColor;
//   width: 29px;
//   height: 2px;
//   top: 25px;
//   left: -29px;
//   z-index: 1;
// }
</style>