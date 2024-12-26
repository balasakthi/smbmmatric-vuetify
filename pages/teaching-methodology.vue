<template>
  <PageLayout>
    <template v-slot:pageHero>
      <PageHero :pageHero="pageHero.teaching" />
    </template>

    <template v-slot:pageHeader>
      <PageHeader :pageHeader="pageHeader.teaching" />
    </template>

    <template v-slot:pageContent>
      <v-container>
        <v-row class="mt-8">
          <v-col
            v-for="(item, index) in methodology"
            :key="index"
            class="d-flex"
            cols="12"
            md="6"
            lg="4"
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

      <QuoteBlock class="mb-12" />
    </template>
  </PageLayout>
</template>

<script setup>
import { pageHero, pageHeader } from "@/composables/usePageHeader.js";

const methodology = [
  {
    title: "Student-Centric Approach",
    subtitle:
      "Focus on individualized learning to cater to each student’s unique needs.",
    icon: "mdi-account-school",
  },
  {
    title: "Innovative Teaching Methodologies",
    subtitle:
      "Integrate and weave in the school's philosophy. <strong>Experiential Learning</strong> and <strong>Project-Based Learning</strong> as the foundation of the learning system.",
    icon: "mdi-lightbulb",
  },
  {
    title: "Optimal Learning Environment",
    subtitle:
      "Maintain a healthy student-teacher ratio to optimize the teaching-learning process.",
    icon: "mdi-book-education",
  },
  {
    title: "Higher Order Thinking and Creativity",
    subtitle:
      "Use themes and projects to develop higher order thinking skills and stimulate creativity.",
    icon: "mdi-head-lightbulb",
  },
  {
    title: "Modern and Conventional Tools",
    subtitle:
      "Employ a blend of modern and conventional tools and methods for teaching and learning.",
    icon: "mdi-human-male-board",
  },
  {
    title: "Wide and Varied Exposure",
    subtitle:
      "Provide a large number of co-scholastic activities for broad and varied exposure.",
    icon: "mdi-human-handsup",
  },
];
</script>
