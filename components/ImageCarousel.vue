<template>
  <v-carousel
    class="rounded-xl"
    show-arrows="hover"
    :height="carouselHeight"
    hide-delimiters
    cycle
    v-if="carouselImages.length"
  >
    <v-carousel-item
      v-for="(carouselImage, index) in carouselImages"
      :key="index"
      :lazy-src="carouselImage"
      :src="carouselImage"
      :alt="`Carousel image ${index + 1}`"
      cover
    ></v-carousel-item>
  </v-carousel>

  <v-skeleton-loader height="600" type="image" v-else></v-skeleton-loader>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useDisplay } from "vuetify";

const config = useRuntimeConfig();
const { smAndDown, mdAndDown } = useDisplay();

const carouselImages = ref([]);

const carouselHeight = computed(() => {
  if (smAndDown.value) {
    return 320;
  } else if (mdAndDown.value) {
    return 460;
  } else {
    return 600;
  }
});

onMounted(() => {
  fetchCarousel();
});

async function fetchCarousel() {
  const response = await $fetch(`${config.public.apiImageBase}?type=carousel`);
  carouselImages.value = response.images;
}
</script>
