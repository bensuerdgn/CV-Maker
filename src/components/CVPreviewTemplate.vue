<template>
  <div class="">
    <component :is="template"></component>
  </div>
</template>

<script>
import FrontendTemplate from "../components/FrontendTemplate.vue";
import GraphicDesigner from "../components/GraphicDesigner.vue";

export default {
  props: ["template"],
  components: {
    appFrontendTemplate: FrontendTemplate,
    appGraphicDesigner: GraphicDesigner,
  },
};
</script>

<style>
</style>