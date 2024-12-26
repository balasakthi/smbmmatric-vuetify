<template>
  <PageLayout>
    <template v-slot:pageHero>
      <PageHero :pageHero="pageHero.facilities" />
    </template>

    <template v-slot:pageHeader>
      <PageHeader :pageHeader="pageHeader.facilities" />
    </template>

    <template v-slot:pageContent>
      <v-container>
        <v-row class="mt-8">
          <v-col
            v-for="(item, index) in facilitiesList"
            :key="index"
            class="d-flex"
            cols="12"
            md="6"
          >
            <v-responsive class="mx-auto text-start">
              <v-list-item class="px-0" rounded="lg">
                <template #title>
                  <h6 class="text-body-1 font-weight-bold pb-2">
                    <v-avatar
                      color="primary"
                      rounded="0"
                      class="mr-2 rounded-lg"
                    >
                      <v-icon :icon="item.icon" size="28" />
                    </v-avatar>
                    {{ item.title }}
                  </h6>
                </template>
                <template #subtitle>
                  <p class="text-body-2" v-html="item.subtitle"></p>
                </template>
              </v-list-item>
            </v-responsive>
          </v-col>
        </v-row>
      </v-container>

      <SectionDivider class="py-3" />
      <v-container fluid>
        <div v-if="isLoading" class="d-flex justify-center align-center">
          <v-progress-circular
            indeterminate
            color="primary"
            :size="128"
          ></v-progress-circular>
        </div>
        <div v-else-if="hasError" class="text-body-1 text-center text-error">
          Failed to load facilities data. Please try again later.
        </div>
        <v-row v-else-if="facilitiesData" class="mb-12">
          <v-col
            v-for="(image, index) in facilitiesData.images"
            :key="index"
            cols="12"
            sm="6"
            md="4"
          >
            <v-hover>
              <template v-slot="{ isHovering, props }">
                <v-card class="rounded-xl" v-bind="props" hover>
                  <v-img
                    tabindex="0"
                    :aria-label="`View album ${index}`"
                    :alt="`${index} photo album cover from the gallery`"
                    :aspect-ratio="16 / 9"
                    class="align-end"
                    :gradient="
                      isHovering
                        ? `to bottom, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.3) 100%`
                        : `to bottom, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.9) 100%`
                    "
                    :lazy-src="image"
                    :src="image"
                    @click="() => showImg(index)"
                    cover
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
                  </v-img> </v-card
              ></template>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
      <VueEasyLightbox
        v-if="facilitiesData"
        :visible="visibleRef"
        :imgs="facilitiesData.images"
        :index="indexRef"
        @hide="onHide"
      />
    </template>
  </PageLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { pageHero, pageHeader } from "@/composables/usePageHeader.js";

const facilitiesList = [
  {
    title: "Campus",
    subtitle:
      "A vast expanse of 3 acres provides a perfect ambience for an aesthetically chartered school building. The lung space, the open lawns are marked with a colourful bonanza of fresh floral bounty.",
    icon: "mdi-town-hall",
  },
  {
    title: "Infrastructure",
    subtitle:
      "An awe inspiring well planned infrastructure comprising of well ventilated classrooms, Science, Maths and Language laboratories with interactive smart boards highly attract the students to involve in their learning through presentations.",
    icon: "mdi-office-building",
  },
  {
    title: "Library",
    subtitle:
      "The reference library, which is fully computerized with a plentiful number of books, is a treasure trove of information that has been built assiduously over a span of more than 4 decades and continues to grow each year.",
    icon: "mdi-bookshelf",
  },
  {
    title: "Health and Wellness",
    subtitle:
      "To take care of minor exigencies, the school is equipped with separate first aid room.",
    icon: "mdi-medical-bag",
  },
  {
    title: "Performance and Creative Spaces",
    subtitle:
      "To aid the process of learning we have a sound proof auditorium, state of art recording studio, an Art lab, a resource centre for teachers.",
    icon: "mdi-speedometer",
  },
  {
    title: "Sports and Recreation",
    subtitle:
      "We also have a sports field, a place to facilitate physical fitness and indoor games, a discovery room to enhance the  creative flair of the students.",
    icon: "mdi-run-fast",
  },
];

const config = useRuntimeConfig();

const facilitiesData = ref([]);

const isLoading = ref(true);
const hasError = ref(false);

const visibleRef = ref(false);
const indexRef = ref(0);

const showImg = (index) => {
  indexRef.value = index;
  visibleRef.value = true;
};

const onHide = () => (visibleRef.value = false);

onMounted(async () => {
  await fetchFacilitiesData();
});

async function fetchFacilitiesData() {
  isLoading.value = true;
  hasError.value = false;
  try {
    const response = await $fetch(
      `${config.public.apiImageBase}?type=facilities`,
    );
    facilitiesData.value = response || [];
  } catch (error) {
    console.error("Error fetching facilities data:", error);
    hasError.value = true;
    facilitiesData.value = [];
  } finally {
    isLoading.value = false;
  }
}
</script>
