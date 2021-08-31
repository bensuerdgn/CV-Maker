<template>
  <div class="p-5 bg-green-100" id="cv2">
    <div class="header flex items-center">
      <img
        v-if="user.photo"
        class="w-10 h-10 rounded-full border mr-2 mb-2"
        :src="user.photo"
        alt=""
      />
      <img
        v-if="!user.photo"
        class="w-10 h-10 rounded-full border mr-2 mb-2"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png"
        alt=""
      />
      <h1 class="font-bold text-2xl mb-2">Özgeçmiş</h1>
    </div>
    <div class="personal border-b border-t py-1">
      <h2 class="font-semibold text-xl text-gray-600">Kişisel</h2>
      <ul class="text-base pl-20 pt-2" v-if="user">
        <li class="">
          <span class="text-gray-700">İsim : </span>
          <span> {{ user.name }}{{ user.surname }}</span>
        </li>
        <li class="">
          <span class="text-gray-700">Adres : </span>
          <span>{{ user.address }}</span>
        </li>
        <li class="">
          <span class="text-gray-700">Telefon numarası : </span>
          <span>{{ user.phoneNumber }}</span>
        </li>
        <li class="">
          <span class="text-gray-700">E-posta : </span>
          <span>{{ user.email }}</span>
        </li>
        <li class="">
          <span class="text-gray-700">Doğum Tarihi : </span>
          <span>{{ user.birthdate }}</span>
        </li>
        <li class="">
          <span class="text-gray-700">Doğum yeri : </span>
          <span>{{ user.birthPlace }}</span>
        </li>
        <li class="">
          <span class="text-gray-700">Cinsiyet : </span>
          <span>{{ user.gender }}</span>
        </li>
        <li class="">
          <span class="text-gray-700">Askerlik durumu : </span>
          <span>{{ user.militaryState }}</span>
        </li>
        <li class="">
          <span class="text-gray-700">Medeni durum : </span>
          <span>{{ user.maritalStatus }}</span>
        </li>
        <li class="">
          <span class="text-gray-700">Sürücü ehliyeti : </span>
          <span>{{ user.drivingLicense }}</span>
        </li>
        <li class="">
          <span class="text-gray-700">İnternet sitesi : </span>
          <span>{{ user.website }}</span>
        </li>
        <li class="">
          <span class="text-gray-700">LinkedIn : </span>
          <span>{{ user.linkedin }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//import { mapGetters } from "vuex";

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

<style>
</style>