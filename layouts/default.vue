<template>
  <v-app id="inspire">
    <AppBar />
    <v-main class="">
      <slot />
    </v-main>
    <Footer />
    <v-slide-y-reverse-transition>
      <v-fab
        color="blue"
        class="scroll-to-top"
        v-show="showScrollToTop"
        icon="mdi-chevron-up"
        size="large"
        @click="scrollToTop"
      ></v-fab>
    </v-slide-y-reverse-transition>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const showScrollToTop = ref(false);

const handleScroll = () => {
  showScrollToTop.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 50px;
  right: 85px;
}
</style>
