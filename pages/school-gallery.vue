<template>
  <PageLayout>
    <template v-slot:pageHero>
      <PageHero :pageHero="pageHero.gallery" />
    </template>

    <template v-slot:pageHeader>
      <div ref="albumSection"></div>
      <PageHeader :pageHeader="pageHeader.gallery" />
    </template>

    <template v-slot:pageContent>
      <div v-if="isLoading" class="d-flex justify-center align-center">
        <v-progress-circular
          indeterminate
          color="primary"
          :size="128"
        ></v-progress-circular>
      </div>
      <div v-else-if="hasError" class="text-body-1 text-center text-error">
        Failed to load gallery data. Please try again later.
      </div>

      <!-- Conditionally render content based on gallery or album -->
      <v-slide-x-reverse-transition>
        <v-card
          v-if="galleryData && !(albumData && albumData.images)"
          class="my-12"
          flat
        >
          <v-tabs
            class="rounded-xl bg-blue-grey-lighten-5"
            v-model="activeGallery"
            align-tabs="center"
            color="primary"
          >
            <v-tab
              class="text-subtitle-1 text-capitalize"
              v-for="gallery in galleryData"
              :value="gallery.gallery"
              :key="gallery.gallery"
              >{{ gallery.gallery }}</v-tab
            >
          </v-tabs>

          <v-tabs-window v-model="activeGallery">
            <v-tabs-window-item
              class="mt-3"
              v-for="gallery in galleryData"
              :key="gallery.gallery"
              :value="gallery.gallery"
            >
              <v-row class="mt-3">
                <v-col
                  v-for="album in gallery.albums"
                  :key="album.album_title"
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-hover>
                    <template v-slot="{ isHovering, props }">
                      <v-card class="rounded-xl" v-bind="props" hover>
                        <v-img
                          tabindex="0"
                          :aria-label="`View album ${album.album_title}`"
                          @keydown.enter="showAlbum(album.album_title)"
                          :alt="`${album.album_title} photo album cover from the gallery`"
                          :aspect-ratio="16 / 9"
                          class="align-end"
                          gradient="to bottom, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.9) 100%"
                          :lazy-src="album.cover_image"
                          :src="album.cover_image"
                          cover
                          @click="showAlbum(album.album_title)"
                        >
                          <v-expand-transition>
                            <v-card-title
                              v-if="!isHovering"
                              class="text-white text-capitalize"
                              ><v-chip variant="text">{{
                                album.album_title
                              }}</v-chip></v-card-title
                            ></v-expand-transition
                          >
                          <template v-slot:placeholder>
                            <div
                              class="d-flex align-center justify-center fill-height"
                            >
                              <v-progress-circular
                                color="grey-lighten-4"
                                indeterminate
                              ></v-progress-circular>
                            </div>
                          </template>
                          <v-expand-transition>
                            <div
                              v-if="isHovering"
                              class="d-flex transition-fast-in-fast-out bg-primary v-card--reveal text-h6 text-capitalize"
                              style="height: 100%"
                            >
                              {{ album.album_title }}
                            </div>
                          </v-expand-transition></v-img
                        >
                      </v-card></template
                    >
                  </v-hover>
                </v-col>
              </v-row>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card>
      </v-slide-x-reverse-transition>

      <!-- Display album images when an album is selected -->
      <v-slide-x-reverse-transition>
        <v-card class="my-12" v-if="albumData && albumData.images" flat>
          <v-container class="mb-6 bg-blue-grey-lighten-5 rounded-xl">
            <div
              class="d-flex flex-column flex-lg-row align-start justify-space-between ga-2"
            >
              <div class="d-flex align-center">
                <v-tooltip text="Press Backspace" location="top">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      v-bind="props"
                      density="comfortable"
                      icon="mdi-arrow-left"
                      color="primary"
                      variant="text"
                      flat
                      @click="albumData = null"
                    ></v-btn>
                  </template>
                </v-tooltip>

                <h3 class="ml-1 text-subtitle-1 text-md-h6">
                  {{ albumData.album_title }}
                </h3>
              </div>
              <div class="d-flex ga-2">
                <v-chip>{{ albumData.gallery }}</v-chip>
                <v-chip>{{ albumData.images.length }} Photos</v-chip>
              </div>
            </div>
          </v-container>

          <v-row>
            <v-col
              v-for="(image, index) in albumData.images"
              :key="index"
              cols="12"
              sm="6"
              md="4"
            >
              <v-hover>
                <template v-slot="{ isHovering, props }">
                  <v-card class="rounded-xl" v-bind="props" hover>
                    <v-img
                      :alt="`${albumData.album_title} photo album cover from the gallery`"
                      :aspect-ratio="16 / 9"
                      class="align-end"
                      gradient="to bottom, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.9) 100%"
                      :lazy-src="image"
                      :src="image"
                      cover
                      @click="() => showImg(index)"
                    >
                      <template v-slot:placeholder>
                        <div
                          class="d-flex align-center justify-center fill-height"
                        >
                          <v-progress-circular
                            color="grey-lighten-4"
                            indeterminate
                          ></v-progress-circular>
                        </div>
                      </template>
                    </v-img>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
          </v-row> </v-card
      ></v-slide-x-reverse-transition>
      <VueEasyLightbox
        v-if="albumData"
        :visible="visibleRef"
        :imgs="albumData.images"
        :index="indexRef"
        @hide="onHide"
      />
    </template>
  </PageLayout>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { pageHero, pageHeader } from "@/composables/usePageHeader.js";

const config = useRuntimeConfig();

const activeGallery = ref("Activities");
const albumData = ref([]);
const galleryData = ref([]);

const visibleRef = ref(false);
const indexRef = ref(0);

const isLoading = ref(true);
const hasError = ref(false);

const albumLookup = ref(new Map());

const albumSection = ref(null);

const showImg = (index) => {
  indexRef.value = index;
  visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);

onMounted(async () => {
  await fetchGalleryData();
  window.addEventListener("keydown", handleKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeyDown);
});

watch(galleryData, createAlbumLookup, { immediate: true });

async function fetchGalleryData() {
  isLoading.value = true;
  hasError.value = false;
  try {
    const response = await $fetch(`${config.public.apiImageBase}?type=gallery`);
    galleryData.value = response || [];
  } catch (error) {
    console.error("Error fetching gallery data:", error);
    hasError.value = true;
    galleryData.value = [];
  } finally {
    isLoading.value = false;
  }
}

function createAlbumLookup() {
  albumLookup.value.clear();
  galleryData.value.forEach((gallery) => {
    gallery.albums.forEach((album) => {
      albumLookup.value.set(album.album_title, {
        ...album,
        gallery: gallery.gallery,
      });
    });
  });
}

function showAlbum(albumTitle) {
  albumData.value = albumLookup.value.get(albumTitle) || null;
  if (!albumData.value) console.warn(`Album not found: ${albumTitle}`);
  scrollToSection();
}

function scrollToSection() {
  if (albumSection.value) {
    albumSection.value.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn("Target section ref is not defined!");
  }
}

const handleKeyDown = (event) => {
  if (event.key === "Backspace") {
    albumData.value = null;
    scrollToSection();
  }
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
