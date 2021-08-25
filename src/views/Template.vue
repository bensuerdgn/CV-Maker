<template>
  <div class="bg-gray-50">
    <Header class="header" />
    <div class="relative z-10 flex flex-wrap justify-center p-10 -mt-28">
      <div
        @click="select"
        :class="addBorder"
        class="
          flex flex-col
          m-4
          bg-white
          items-center
          shadow-xl
          border border-gray-50
          px-6
          py-3
          rounded
        "
      >
        <h2>CV</h2>
        <Template class="rounded shadow-lg p-2 mt-1 border border-gray-50" />
      </div> <div
        @click="select"
        :class="addBorder"
        class="
          flex flex-col
          m-4
          bg-white
          items-center
          shadow-xl
          border border-gray-50
          px-6
          py-3
          rounded
        "
      >
        <h2>CV</h2>
        <Template class="rounded shadow-lg p-2 mt-1 border border-gray-50" />
      </div> <div
        @click="select"
        :class="addBorder"
        class="
          flex flex-col
          m-4
          bg-white
          items-center
          shadow-xl
          border border-gray-50
          px-6
          py-3
          rounded
        "
      >
        <h2>CV</h2>
        <Template class="rounded shadow-lg p-2 mt-1 border border-gray-50" />
      </div> <div
        @click="select"
        :class="addBorder"
        class="
          flex flex-col
          m-4
          bg-white
          items-center
          shadow-xl
          border border-gray-50
          px-6
          py-3
          rounded
        "
      >
        <h2>CV</h2>
        <Template class="rounded shadow-lg p-2 mt-1 border border-gray-50" />
      </div> <div
        @click="select"
        :class="addBorder"
        class="
          flex flex-col
          m-4
          bg-white
          items-center
          shadow-xl
          border border-gray-50
          px-6
          py-3
          rounded
        "
      >
        <h2>CV</h2>
        <Template class="rounded shadow-lg p-2 mt-1 border border-gray-50" />
      </div> <div
        @click="select"
        :class="addBorder"
        class="
          flex flex-col
          m-4
          bg-white
          items-center
          shadow-xl
          border border-gray-50
          px-6
          py-3
          rounded
        "
      >
        <h2>CV</h2>
        <Template class="rounded shadow-lg p-2 mt-1 border border-gray-50" />
      </div> <div
        @click="select"
        :class="addBorder"
        class="
          flex flex-col
          m-4
          bg-white
          items-center
          shadow-xl
          border border-gray-50
          px-6
          py-3
          rounded
        "
      >
        <h2>CV</h2>
        <Template class="rounded shadow-lg p-2 mt-1 border border-gray-50" />
      </div> <div
        @click="select"
        :class="addBorder"
        class="
          flex flex-col
          m-4
          bg-white
          items-center
          shadow-xl
          border border-gray-50
          px-6
          py-3
          rounded
        "
      >
        <h2>CV</h2>
        <Template class="rounded shadow-lg p-2 mt-1 border border-gray-50" />
      </div> <div
        @click="select"
        :class="addBorder"
        class="
          flex flex-col
          m-4
          bg-white
          items-center
          shadow-xl
          border border-gray-50
          px-6
          py-3
          rounded
        "
      >
        <h2>CV</h2>
        <Template class="rounded shadow-lg p-2 mt-1 border border-gray-50" />
      </div>

    </div>
  </div>
</template>

<script>
import Template from "../components/Template";
import Header from "../components/Header";
export default {
  components: {
    Template,
    Header,
  },
  methods: {
    select() {
      this.addBorder();
    },
    addBorder() {
      return "border-blue-500";
    },
  },
};
</script>

<style>
.header {
  clip-path: ellipse(100% 100% at 50% 0%);
}
</style>