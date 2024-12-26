<template>
  <v-sheet
    class="rounded-xl d-flex align-center justify-center flex-wrap mx-auto px-4 position-sticky"
    elevation="8"
    :height="responsive.height"
    :max-width="responsive.width"
  >
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="700" flat v-if="randomKural.line1">
          <v-card-text class="py-0">
            <v-row align="center" no-gutters
              ><v-col cols="auto" sm="1" class="d-none d-md-flex">
                <v-icon
                  class="pr-8"
                  color="primary"
                  icon="mdi-format-quote-open"
                  size="60"
                ></v-icon>
              </v-col>
              <v-col
                cols="12"
                sm="11"
                class="text-subtitle-2 text-sm-subtitle-1"
              >
                <!--  <blockquote>
                  <p class="tamil">{{ randomKural.line1 }}</p>
                  <p class="tamil">{{ randomKural.line2 }}</p>
                </blockquote> -->
                <blockquote>
                  <p>"Parent is the First Teacher;</p>
                  <p>Teacher is the Second Parent"</p>
                </blockquote>
              </v-col>
            </v-row>
          </v-card-text>

          <!--   <div class="d-flex justify-end">
            <v-list-item density="compact">
              <v-list-item-subtitle class="tamil">
                குறட்பா {{ randomKural.kural }}
              </v-list-item-subtitle>
            </v-list-item>
          </div> -->
        </v-card>
        <v-skeleton-loader
          v-if="isLoading"
          class="mx-auto"
          max-width="700"
          type="list-item-two-line"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import kural from "./utils/kural.json";
import { useDisplay } from "vuetify";

const { smAndDown, mdAndDown, lgAndDown, xlAndDown } = useDisplay();

const randomKural = ref({
  line1: "",
  line2: "",
  kural: "",
});
const isLoading = ref(true);
const error = ref("");

onMounted(() => {
  fetchKural();
});

async function fetchKural() {
  try {
    const randomIndex = Math.floor(Math.random() * 1080);
    const selectedKural = kural[randomIndex];
    if (selectedKural) {
      randomKural.value = selectedKural;
    } else {
      throw new Error("Kural not found");
    }
  } catch (err) {
    console.error("Error fetching Kural:", err);
    error.value = "Failed to fetch Kural. Please try again later.";
  } finally {
    isLoading.value = false;
  }
}

const responsive = computed(() => ({
  height: smAndDown.value ? 120 : 140,
  width: smAndDown.value
    ? "95%"
    : mdAndDown.value
      ? "85%"
      : lgAndDown.value
        ? "65%"
        : xlAndDown.value
          ? "45%"
          : "35%",
}));
</script>
