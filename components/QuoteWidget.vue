<template>
  <v-sheet
    class="rounded-xl d-flex align-center justify-center flex-wrap mx-auto px-4 position-sticky"
    elevation="8"
    :height="responsive.height"
    :max-width="responsive.width"
  >
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="700" flat>
          <v-card-text class="py-0">
            <v-row align="center" no-gutters
              ><v-col cols="auto" sm="2" class="d-none d-sm-flex">
                <v-icon
                  color="primary"
                  icon="mdi-format-quote-open"
                  size="60"
                ></v-icon>
              </v-col>
              <v-col
                cols="12"
                sm="10"
                class="text-subtitle-2 text-sm-subtitle-1"
              >
                <blockquote>
                  <p class="text-subtitle-2 text-md-h6">
                    "Parent is the First Teacher;
                  </p>
                  <p class="text-subtitle-2 text-md-h6">
                    Teacher is the Second Parent"
                  </p>
                </blockquote>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

import { useDisplay } from "vuetify";

const { smAndDown, mdAndDown, lgAndDown, xlAndDown } = useDisplay();

const responsive = computed(() => ({
  height: smAndDown.value ? 100 : 120,
  width: smAndDown.value
    ? "85%"
    : mdAndDown.value
      ? "55%"
      : lgAndDown.value
        ? "45%"
        : xlAndDown.value
          ? "35%"
          : "25%",
}));
</script>
