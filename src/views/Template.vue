<template>
  <div class="bg-gray-50">
    <Header class="header" />
    <div class="relative z-10 flex flex-wrap justify-center p-10 -mt-28">
      <div
        @click="
          select = !select;
          isSelected = '#cv';
        "
        :class="{ ' outline-blue': select }"
        class="
          flex flex-col
          m-4
          bg-white
          items-center
          shadow-xl
          px-6
          py-3
          rounded
        "
      >
        <h2>CV</h2>
        <CVTemplate class="rounded shadow-lg p-2 mt-1 border border-gray-50" />
      </div>
      <div
        @click="
          select2 = !select2;
          isSelected = '#cv2';
        "
        :class="{ ' outline-blue': select2 }"
        class="
          flex flex-col
          m-4
          bg-white
          items-center
          shadow-xl
          px-6
          py-3
          rounded
        "
      >
        <h2>CV</h2>
        <CVTemplate2 class="rounded shadow-lg p-2 mt-1 border border-gray-50" />
      </div>
    </div>
    <div class="button text-center">
      <button
        class="h-12 mb-10 bg-yellow-400 px-5 rounded text-white"
        @click="makePDF"
      >
        CV indir
      </button>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import CVTemplate from "../components/CVTemplate";
import CVTemplate2 from "../components/CVTemplate2";

import Header from "../components/Header";
export default {
  components: {
    CVTemplate,
    CVTemplate2,
    Header,
  },
  data() {
    return {
      select: false,
      select2: false,
      isSelected: "",
    };
  },
  methods: {
    makePDF() {
      
      window.html2canvas = html2canvas;
      var doc = new jspdf("p", "pt", "a4");
      doc.html(document.querySelector(this.isSelected), {
        callback: function (pdf) {
          pdf.save("cv.pdf");
        },
      });
    },
  },
};
</script>

<style>
.header {
  clip-path: ellipse(100% 100% at 50% 0%);
}
</style>