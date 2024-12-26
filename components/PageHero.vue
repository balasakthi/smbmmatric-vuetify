<template>
  <v-img
    gradient="to bottom, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 1) 100%"
    class="rounded-xl"
    :aspect-ratio="16 / 9"
    :alt="`${pageHero.title} hero image`"
    :src="pageHero.imageUrl"
    :lazy-src="pageHero.imageUrl"
    cover
    v-if="pageHero"
    transition="fade-transition"
  >
    <div
      class="d-flex flex-column fill-height justify-end align-center text-white pb-16"
    >
      <h1 class="text-h4 text-capitalize text-lg-h3 font-weight-bold">
        {{ pageHero.title }}
      </h1>
    </div>
    <template v-slot:placeholder>
      <v-row align="center" class="fill-height ma-0" justify="center">
        <v-progress-circular
          color="grey-lighten-5"
          :size="64"
          indeterminate
        ></v-progress-circular>
      </v-row>
    </template>
  </v-img>

  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-container class="mb-n4">
        <v-sheet
          v-bind="props"
          :elevation="isHovering ? 8 : 5"
          class="rounded-xl d-flex align-center justify-center flex-wrap text-center mx-auto px-4 py-lg-4 mt-n12 position-sticky"
        >
          <div class="d-flex flex-row justify-center w-100">
            <v-breadcrumbs
              class="d-none d-lg-flex flex-wrap justify-center text-primary"
              :items="pageHero.links"
            >
              <template v-slot:divider>
                <v-icon icon="mdi-circle-medium"></v-icon>
              </template>
            </v-breadcrumbs>
          </div>

          <v-container class="d-lg-none d-xl-none">
            <div class="d-flex align-center justify-space-between w-100">
              <span class="text-subtitle-1 text-primary">Menu</span>
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="text-primary"
                    icon="mdi-dots-horizontal"
                    v-bind="props"
                    flat
                  ></v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(link, index) in pageHero.links"
                    :key="index"
                    :to="link.to"
                    color="primary"
                    exact
                  >
                    <v-list-item-title>{{ link.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-container>
        </v-sheet></v-container
      >
    </template>
  </v-hover>
</template>

<script setup>
const props = defineProps({
  pageHero: {
    type: Object,
    required: true,
    default: () => null,
  },
});
</script>
