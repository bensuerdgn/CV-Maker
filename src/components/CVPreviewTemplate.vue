<template>
  <div class="">
    <component :is="template"></component>
  </div>
</template>

<script>

import FrontendTemplate from "../components/FrontendTemplate.vue"
export default {
  props: ['template'],
  components:{
    appFrontendTemplate:FrontendTemplate,
  }
};
</script>

<style>
</style>