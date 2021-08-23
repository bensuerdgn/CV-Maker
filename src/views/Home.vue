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
import Footer from "../components/Footer";

export default {
  components: {
    Header,
    PersonalInformations,
    Footer,
  },
};
</script>
