<template>
  <div class="my-0 mx-auto w-full max-w-4xl relative -mt-20">
    <form @submit.prevent="onSubmit">
      <div class="shadow-2xl bg-white p-10 mb-20">
        <div class="title text-lg font-bold text-gray-700">
          <h2 class="pb-5">Kişisel bilgiler</h2>
          <hr />
        </div>
        <div class="form w-full">
          <div class="form-group flex my-5 w-full">
            <div
              class="
                photo
                flex flex-col
                justify-center
                items-center
                border-dashed border-2
                w-40
                h-40
                mr-5
                bg-gray-100
                rounded
              "
              @click="$refs.file.click()"
              v-if="image == false"
            >
              <input
                type="file"
                ref="file"
                style="display: none"
                @change="onChange($event)"
              />
              <i class="fas fa-camera text-5xl text-gray-400 mb-5"></i>
              <span class="text-gray-400 text-xs">Fotoğraf ekle</span>
            </div>
            <div
              class="
                photo
                flex flex-col
                justify-center
                items-center
                w-40
                h-40
                mr-5
                rounded
              "
              @click="$refs.file.click()"
              v-if="image == true"
            >
              <input
                type="file"
                ref="file"
                style="display: none"
                @change="onChange($event)"
              />
              <img :src="preview" alt="" />
            </div>
            <div class="items flex flex-col w-full">
              <div class="name flex flex-col w-full">
                <label for="name">İsim*</label>
                <input
                  @blur="v$.user.name.$touch()"
                  type="text"
                  class="w-full h-12 px-3 border rounded"
                  v-model="v$.user.name.$model"
                  :class="{
                    'border-2 border-red-500 focus:ring-1 focus:ring-red-500':
                      v$.user.name.$error,
                  }"
                />
                <small v-if="v$.user.name.$error" class="form-text text-red-500"
                  >Bu alan zorunludur</small>
              </div>
              <div class="surname flex flex-col mt-3 w-full">
                <label for="surname">Soy isim*</label>
                <input
                  type="text"
                  class="w-full h-12 px-3 border rounded"
                  v-model="v$.user.surname.$model"
                  :class="{
                    'border-2 border-red-500 focus:ring-1 focus:ring-red-500':
                      v$.user.surname.$error,
                  }"
                />
                <small
                  v-if="v$.user.surname.$error"
                  class="form-text text-red-500"
                  >Bu alan zorunludur</small>
              </div>
            </div>
          </div>
          <div class="form-group flex my-5 w-full">
            <div class="email flex flex-col mt-3 w-full mr-5">
              <label for="email">E-posta adresi*</label>
              <input
                type="text"
                class="w-full h-12 px-3 border rounded"
                v-model="v$.user.email.$model"
                @click="user.email = ''"
                :class="{
                  'border-2 border-red-500 focus:ring-1 focus:ring-red-500':
                    v$.user.email.$error,
                }"
              />
              <small
                v-if="v$.user.email.required.$invalid == true"
                class="form-text text-red-500"
                >Bu alan zorunludur</small>
              <small
                v-if="v$.user.email.$invalid"
                class="form-text text-red-500"
                >Geçerli bir email adresi giriniz</small>
            </div>
            <div class="phone flex flex-col mt-3 w-full">
              <label for="phone">Telefon numarası</label>
              <input
                type="text"
                class="w-full h-12 px-3 border rounded"
                v-model="v$.user.phoneNumber.$model"
                :class="{
                  'border-2 border-red-500 focus:ring-1 focus:ring-red-500':
                    v$.user.phoneNumber.$error,
                }"
              />
              <small
                v-if="v$.user.phoneNumber.$error"
                class="form-text text-red-500"
                >Sadece rakam giriniz</small>
            </div>
          </div>
          <div class="form-group flex my-5 w-full">
            <div class="address w-full">
              <label for="address">Adres</label>
              <input
                type="text"
                class="w-full h-12 px-3 border rounded"
                v-model="user.address"
              />
            </div>
          </div>
          <div class="form-group flex my-5 w-full">
            <div class="post-code mr-5 w-full">
              <label for="postCode">Posta Kodu</label>
              <input
                type="text"
                class="w-full h-12 px-3 border rounded"
                v-model="v$.user.postCode.$model"
                :class="{
                  'border-2 border-red-500 focus:ring-1 focus:ring-red-500':
                    v$.user.postCode.$error,
                }"
              />
              <small
                v-if="v$.user.postCode.$error"
                class="form-text text-red-500"
                >Sadece rakam giriniz</small>
            </div>
            <div class="city w-full">
              <label for="city">Şehir</label>
              <input
                type="text"
                class="w-full h-12 px-3 border rounded"
                v-model="user.city"
              />
            </div>
          </div>
          <div class="form-group flex my-5 w-full">
            <div class="birthdate w-full mr-5">
              <label for="birthdate">Doğum günü</label>
              <div class="flex">
                <select
                  name=""
                  id=""
                  class="w-full h-12 px-3 border rounded"
                  v-model="date.day"
                  @change="changeBirthdate()"
                >
                  <option
                    :value="day"
                    v-for="(day, index) in days"
                    :key="index"
                  >
                    {{ day }}
                  </option>
                </select>
                <select
                  name=""
                  id=""
                  class="w-full h-12 px-3 border rounded mx-5"
                  v-model="date.month"
                  @change="changeBirthdate()"
                >
                  <option
                    :value="month.value"
                    v-for="(month, index) in months"
                    :key="index"
                  >
                    {{ month.month }}
                  </option>
                </select>
                <select
                  name=""
                  id=""
                  class="w-full h-12 px-3 border rounded"
                  v-model="date.year"
                  @change="changeBirthdate()"
                >
                  <option
                    :value="year"
                    v-for="(year, index) in years"
                    :key="index"
                  >
                    {{ year }}
                  </option>
                </select>
              </div>
            </div>
            <div class="birth-place w-full">
              <label for="birthPlace">Doğum yeri</label>
              <input
                type="text"
                class="w-full h-12 px-3 border rounded"
                v-model="user.birthPlace"
              />
            </div>
          </div>
          <div class="form-group flex my-5 w-full">
            <div class="driving-licence w-full mr-5">
              <label for="drivingLicense">Sürücü belgesi</label>
              <select
                name=""
                id=""
                class="w-full h-12 px-3 border rounded"
                v-model="user.drivingLicense"
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
            <div class="gender w-full">
              <label for="gender">Cinsiyet</label>
              <select
                name=""
                id=""
                class="w-full h-12 px-3 border rounded"
                v-model="user.gender"
              >
                <option value="Kadın">Kadın</option>
                <option value="Erkek">Erkek</option>
              </select>
            </div>
          </div>
          <div class="form-group flex my-5 w-full">
            <div class="military-state w-full mr-5">
              <label for="militaryState">Askerlik durumu</label>
              <select
                name=""
                id=""
                class="w-full h-12 px-3 border rounded"
                v-model="user.militaryState"
              >
                <option value="Yapıldı">Yapıldı</option>
                <option value="Yapılmadı">Yapılmadı</option>
              </select>
            </div>
            <div class="marital-status w-full">
              <label for="maritalStatus">Medeni durumu</label>
              <select
                name=""
                id=""
                class="w-full h-12 px-3 border rounded"
                v-model="user.maritalStatus"
              >
                <option value="Evli">Evli</option>
                <option value="Bekar">Bekar</option>
              </select>
            </div>
          </div>
          <div class="form-group flex my-5 w-full">
            <div class="linkedin w-full mr-5">
              <label for="linkedin">LinkedIn</label>
              <input
                type="text"
                class="w-full h-12 px-3 border rounded"
                v-model="user.linkedin"
              />
            </div>
            <div class="website w-full">
              <label for="website">Website</label>
              <input
                type="text"
                class="w-full h-12 px-3 border rounded"
                v-model="user.website"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="button text-center pb-20">
        <button
          class="h-12 bg-yellow-400 px-5 rounded text-white"
          :disabled="v$.$invalid"
        >
          Sonraki adım
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, numeric } from "@vuelidate/validators";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      photoFile: null,
      preview: null,
      image: false,
      user: {
        photo: "",
        name: " ",
        surname: " ",
        email: "email@email.com",
        phoneNumber: "",
        address: "",
        postCode: "",
        city: "",
        birthdate: "",
        birthPlace: "",
        drivingLicense: "",
        gender: "",
        militaryState: "",
        maritalStatus: "",
        linkedin: "",
        website: "",
      },
      date: {
        day: "",
        month: "",
        year: "",
      },
      months: [
        { value: "01", month: "Ocak" },
        { value: "02", month: "Şubat" },
        { value: "03", month: "Mart" },
        { value: "04", month: "Nisan" },
        { value: "05", month: "Mayıs" },
        { value: "06", month: "Haziran" },
        { value: "07", month: "Temmuz" },
        { value: "08", month: "Ağustos" },
        { value: "09", month: "Eylül" },
        { value: "10", month: "Ekim" },
        { value: "11", month: "Kasım" },
        { value: "12", month: "Aralık" },
      ],
      days: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      years: ["2021", "2020", "2019", "2018", "2017", "2016", "2015"],
    };
  },
  methods: {
    onChange() {
      this.photoFile = this.$refs.file.files[0];
      if (
        this.photoFile.name.includes(".png") ||
        this.photoFile.name.includes(".jpg")
      ) {
        this.image = true;
        this.preview = URL.createObjectURL(this.photoFile);
        console.log(this.preview);
        this.user.photo = this.preview;
      } else {
        this.image = false;
      }
    },
    changeBirthdate() {
      this.user.birthdate =
        this.date.day + "." + this.date.month + "." + this.date.year;
    },
    onSubmit() {
      this.$store.dispatch("setUserInfo", { ...this.user });
      // axios
      //   .post("/users.json", {
      //     name: this.user.name,
      //     surname: this.user.surname,
      //     email: this.user.email,
      //     phoneNumber: this.user.phoneNumber,
      //     address: this.user.address,
      //     postCode: this.user.postCode,
      //     city: this.user.city,
      //     birthdate: this.user.birthdate,
      //     birthPlace: this.user.birthPlace,
      //     drivingLicense: this.user.drivingLicense,
      //     gender: this.user.gender,
      //     militaryState: this.user.militaryState,
      //     maritalStatus: this.user.maritalStatus,
      //     linkedin: this.user.linkedin,
      //     website: this.user.website,
      //   })
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //   console.log(error);
      // });
    },
  },
  validations() {
    return {
      user: {
        name: { required },
        surname: { required },
        email: { required, email },
        phoneNumber: { numeric },
        postCode: { numeric },
      },
    };
  },
};
</script>

<style>
input:focus {
  outline: none;
}
.form-group .items {
  width: calc(100% - 156px);
}
</style>