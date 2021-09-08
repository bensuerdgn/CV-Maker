<template>
  <div class="">
    <Header />
    <PersonalInformations />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import PersonalInformations from "../components/PersonalInformations";

export default {
  components: {
    Header,
    PersonalInformations,
  },
};
</script>
