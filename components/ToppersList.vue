<template>
  <v-responsive>
    <h2 class="text-h5 font-weight-bold text-md-h4 text-center my-5">
      Tremendous Result of <span class="text-primary"> 2023 - 2024</span>
    </h2>

    <v-tabs v-model="tab" color="primary" align-tabs="center" show-arrows>
      <v-tab
        v-for="(topper, index) in toppers"
        :key="index"
        :value="topper.std"
        class="text-capitalize"
      >
        {{ topper.std }} Standard
      </v-tab>
    </v-tabs>
    <v-window v-model="tab" v-if="toppers">
      <v-window-item
        v-for="(topper, index) in toppers"
        :key="index"
        :value="topper.std"
      >
        <v-row class="py-8">
          <v-col
            v-for="(image, i) in topper.toppers"
            :key="i"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            class="d-flex child-flex"
          >
            <v-img
              :src="image"
              :lazy-src="image"
              class="bg-grey-lighten-2 rounded-lg mx-4 my-4 border topper"
              cover
              :aspect-ratio="3 / 4"
              alt="Topper Image"
            >
              <template v-slot:placeholder>
                <v-row align="center" class="fill-height ma-0" justify="center">
                  <v-progress-circular color="grey-lighten-5" indeterminate />
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>

    <v-row class="mt-5" v-else>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="(_, index) in 4"
        :key="index"
      >
        <v-skeleton-loader
          elevation="1"
          class="mt-5 mx-auto"
          max-width="330"
          type="image"
        />
      </v-col>
    </v-row>
  </v-responsive>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { toppers } from "@/composables/useToppers.js";

const tab = ref("XII");
</script>

<style scoped>
.topper {
  transition: transform 0.3s ease-in-out;
}

.topper:hover {
  transform: scale(1.05);
}
</style>
