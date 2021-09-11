<template>
  <div class="my-0 mx-auto w-full max-w-4xl relative -mt-20">
    <form @submit.prevent="onSubmit">
      <div class="shadow-2xl bg-white p-10 mb-20">
        <div class="title text-lg font-bold text-gray-700">
          <div class="flex justify-between items-center pb-5">
            <h2 class="">Kişisel bilgiler</h2>
            <button
              @click.prevent="clearAll"
              class="bg-yellow-400 opacity-100 p-2 rounded text-sm"
            >
              Bilgileri Temizle
            </button>
          </div>
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
                  >Bu alan zorunludur</small
                >
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
                  >Bu alan zorunludur</small
                >
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
                >Bu alan zorunludur</small
              >
              <small
                v-if="v$.user.email.$invalid && v$.user.email.$model != ''"
                class="form-text text-red-500"
                >Geçerli bir email adresi giriniz</small
              >
            </div>
            <div class="phone flex flex-col mt-3 w-full">
              <label for="phone">Telefon numarası</label>
              <input
                type="text"
                class="w-full h-12 px-3 border rounded"
                v-model="user.phoneNumber"
                @input="phoneMask"
                placeholder="(555) 555-5555"
              />
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
                >Sadece rakam giriniz</small
              >
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
          <div class="form-group flex flex-col my-5 w-full">
            <h1 class="text-xl mb-1">İş Deneyimi</h1>
            <!-- <div class="" v-if="user.workExperience">
              <div
                class="border rounded p-5 mb-5"
                v-for="(work, index) in workExperience"
                :key="index"
              >
                <div class="">
                  <label for="companyName">Şirket Adı</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="w-full h-12 px-3 border rounded mb-5"
                    v-model="work.companyName"
                  />
                  <label for="position">Pozisyon</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="w-full h-12 px-3 border rounded mb-5"
                    v-model="work.position"
                  /><label for="statement">Açıklama</label>
                  <textarea
                    name=""
                    id=""
                    v-model="work.statement"
                    class="w-full h-20 px-3 border rounded mb-5"
                  >
                  </textarea>

                  <div class="date flex flex-row">
                    <div class="mr-5">
                      <label for="startDate">Başlangıç Tarihi</label>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="w-full h-12 px-3 border rounded mb-5"
                        v-model="work.startDate"
                      />
                    </div>
                    <div class="">
                      <label for="endDate">Bitiş Tarihi</label>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="w-full h-12 px-3 border rounded"
                        v-model="work.endDate"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> -->

            <div class="border rounded p-5">
              <div class="">
                <label for="companyName">Şirket Adı</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="w-full h-12 px-3 border rounded mb-5"
                  v-model="workExperience.companyName"
                />
                <label for="position">Pozisyon</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="w-full h-12 px-3 border rounded mb-5"
                  v-model="workExperience.position"
                /><label for="statement">Açıklama</label>
                <textarea
                  name=""
                  id=""
                  v-model="workExperience.statement"
                  class="w-full h-20 px-3 border rounded mb-5"
                >
                </textarea>

                <div class="date flex flex-row">
                  <div class="mr-5">
                    <label for="startDate">Başlangıç Tarihi</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="w-full h-12 px-3 border rounded mb-5"
                      v-model="workExperience.startDate"
                    />
                  </div>
                  <div class="">
                    <label for="endDate">Bitiş Tarihi</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="w-full h-12 px-3 border rounded"
                      v-model="workExperience.endDate"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row-reverse mt-5">
              <button
                @click.prevent="addExperience"
                class="
                  flex
                  justify-end
                  bg-yellow-400
                  opacity-100
                  py-2
                  px-5
                  rounded
                  text-sm
                "
              >
                Ekle
              </button>
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
        workExperience: [],
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
      days: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ],
      years: ["2021", "2020", "2019", "2018", "2017", "2016", "2015"],
      workExperience: {
        companyName: "",
        position: "",
        startDate: "",
        endDate: "",
        statement: "",
      },
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
    },
    phoneMask() {
      var x;
      x = this.user.phoneNumber
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.user.phoneNumber = !x[2]
        ? x[1]
        : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    },
    clearAll() {
      this.user = {};
    },
    addExperience() {
      const data = {
        companyName: this.workExperience.companyName,
        position: this.workExperience.position,
        startDate: this.workExperience.startDate,
        endDate: this.workExperience.endDate,
        statement: this.workExperience.statement,
      };
      this.user.workExperience.push(data);
      this.workExperience = {};
    },
  },
  created() {
    var data = this.$store.getters.getUserInfo;
    if (data) {
      this.user = data;
    }
    console.log(data);
  },
  validations() {
    return {
      user: {
        name: { required },
        surname: { required },
        email: { required, email },
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