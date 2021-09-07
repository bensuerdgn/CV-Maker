<template>
  <div class="bg-gray-50">
    <div class="">
      <Header class="header" />
      <div class="images mx-20 -mt-10 relative z-10 flex justify-center">
        <div
          class="image w-60 mx-5"
          @click="
            isSelected = '#frontend';
            select = !select;
            template = 'app-FrontendTemplate';
          "
        >
          <img src="../assets/images/FrontendTemplate.png" alt="" class="" />
        </div>
        <div
          class="image w-60 mx-5"
          @click="
            isSelected = '#graphic';
            select = !select;
            template = 'app-GraphicDesigner';
          "
        >
          <img src="../assets/images/GraphicDesigner.png" alt="" class="" />
        </div>
      </div>
    </div>

    <div class="" v-if="isSelected">
      <div class="previewTemplate shadow-2xl rounded">
        <CVPreviewTemplate :template="template" />
        <div
          class="
            button
            flex
            justify-between
            px-10
            text-center
            bg-black
            opacity-40
          "
        >
          <button
            class="h-12 my-3 bg-yellow-400 opacity-100 px-5 rounded text-black"
            @click="closeModal"
          >
            Close
          </button>
          <button
            class="h-12 my-3 bg-yellow-400 opacity-100 px-5 rounded text-black"
            @click="makePDF"
          >
            Make CV
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import print from "print-js";

// import html2canvas from "html2canvas";
// import jspdf from "jspdf";

import Header from "../components/Header";
import CVPreviewTemplate from "../components/CVPreviewTemplate";

export default {
  components: {
    Header,
    CVPreviewTemplate,
  },
  data() {
    return {
      select: false,
      select2: false,
      isSelected: "",
      template: "",
    };
  },
  methods: {
    makePDF() {
      // window.html2canvas = html2canvas;
      // var doc = new jspdf("p", "pt", "a4");
      // doc.setFont("times");
      // doc.html(document.querySelector(this.isSelected), {
      //   callback: function (pdf) {
      //     pdf.save("cv.pdf");
      //   },
      // });
      var a = document.querySelector(this.isSelected);
      a = a.clientWidth;
      print({
        printable: document.querySelector(this.isSelected),
        type: "html",
        style:
          "@media print { body { margin: 0 !important; padding: 0 !important; border: 0 !important; outline: 0 !important;} @page {  margin:0 !important; padding:0 !important; } }",
        targetStyles: ["*"],
        css: require("@/assets/css/main.css"),
        maxWidth: a,
      });
    },
    closeModal() {
      this.isSelected = "";
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  clip-path: ellipse(100% 100% at 50% 0%);
}
.previewTemplate {
  position: fixed;
  top: 20%;
  right: 20%;
  width: 880px;
  z-index: 20;
  background: white;
  height: 500px;
  overflow-y: auto;
}
.button {
  position: fixed;
  z-index: 2;
  bottom: 35px;
  width: 880px;
  button {
    opacity: 1;
  }
}
@media only screen and (max-width: 1000px) {
  .previewTemplate {
    top: 15%;
    right: 10%;
    width: 600px;
  }
  .button {
    width: 600px;
    bottom: 75px;
  }
}
</style>