<template>
  <PageLayout>
    <template v-slot:pageHero>
      <PageHero :pageHero="pageHero.kindergarten" />
    </template>

    <template v-slot:pageHeader>
      <PageHeader :pageHeader="pageHeader.kindergarten" />
    </template>

    <template v-slot:pageContent>
      <v-container class="mt-8">
        <SectionInfo
          :sectionContent="kindergartenContent"
          rowClass="flex-column-reverse"
        >
          <template v-slot:title="{ title }">
            <span v-html="title"></span>
          </template>

          <template v-slot:description="{ description }">
            <span v-html="description"></span>
          </template>

          <template v-slot:media>
            <ImageCarousel
              class="my-8"
              :images="curriculum1"
              height="360"
              :hideDelimiters="false"
          /></template>
        </SectionInfo>

        <SectionDivider />

        <v-container class="text-center mb-12">
          <h3 class="text-h5 font-weight-bold">
            Program
            <span class="text-primary">Highlights</span>
          </h3>

          <v-row class="text-start mt-2">
            <v-col cols="12" md="6">
              <DescriptionList :descriptionList="highLightList" />
            </v-col>
            <v-col cols="12" md="6" class="d-flex align-center">
              <v-img
                alt="school building"
                class="rounded-lg"
                max-height="200"
                src="/images/school-building.webp"
                lazy-src="/images/school-building.webp"
                cover
              ></v-img
            ></v-col>
          </v-row>
        </v-container>
      </v-container>
    </template>
  </PageLayout>
</template>

<script setup>
import { pageHero, pageHeader } from "@/composables/usePageHeader.js";

const highLightList = [
  {
    title: "Holistic Growth",
    subtitle:
      "Physical, social, emotional, language, and cognitive development.",
    icon: "mdi-flower",
  },
  {
    title: "Quality Classrooms",
    subtitle: "Well-maintained classrooms for a young learner’s journey.",
    icon: "mdi-human-male-board",
  },
  {
    title: "Nature Exploration",
    subtitle: "Encouragement to explore the natural world around them.",
    icon: "mdi-sprout",
  },
];

const curriculum1 = [
  { src: "/images/facilities/smartboard.webp" },
  { src: "/images/facilities/library.webp" },
  { src: "/images/facilities/science-lab.webp" },
  { src: "/images/facilities/language-lab.webp" },
];

const kindergartenContent = {
  reversible: true,
  sections: [
    {
      title: "Exploration and <span class=text-primary>Learning</span>",
      descriptions: [
        "It is our endeavour to deliver out in children their inherent natural interest and nurture a passion for studying in order that they grow as much as be impartial lifelong learners who can expeditiously adapt to any surroundings.",
      ],
    },
    {
      title: "Maximizing <span class=text-primary>Potential</span>",
      descriptions: [
        "Children at SMBM are actively encouraged to explore the natural world around them under the steerage of their elegance facilitators. The idea behind including all areas of life in the school environment is to assist kids EXPLORE, LEARN and CREATE their own experiences that can maximize individual potential.",
      ],
    },
  ],
};
</script>
