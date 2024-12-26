<template>
  <PageLayout>
    <template v-slot:pageHero>
      <PageHero :pageHero="pageHero.curriculum" />
    </template>

    <template v-slot:pageHeader>
      <PageHeader :pageHeader="pageHeader.curriculum" />
    </template>

    <template v-slot:pageContent>
      <SectionInfo
        :sectionContent="curriculumContent"
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
            class="my-3"
            :images="curriculum"
            height="300"
            :hideDelimiters="false"
        /></template>
      </SectionInfo>

      <SectionDivider />

      <v-container class="text-center">
        <h3 class="text-h5 font-weight-bold my-5">
          Extracurricular
          <span class="text-primary">Activities (ECA)</span>
        </h3>

        <p class="mb-8 text-body1">
          ECA is given to the SMBM students to foster and channelize their
          talents in a protective way. SMBM molds many young children with
          talents. Every year, students pass out from this great institution
          with a wonderful percentage of result with poise.
        </p>

        <v-row class="mt-8">
          <v-col
            v-for="n in 9"
            :key="n"
            class="d-flex child-flex"
            cols="12"
            md="6"
            lg="4"
          >
            <v-img
              alt="curriculum image"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              aspect-ratio="16/9"
              class="bg-grey-lighten-2 rounded-lg"
              cover
            >
              <template v-slot:placeholder>
                <v-row align="center" class="fill-height ma-0" justify="center">
                  <v-progress-circular
                    color="grey-lighten-5"
                    indeterminate
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-container>

      <SectionDivider class="mt-8" />

      <SectionInfo
        class="mb-8"
        :sectionContent="comprehensiveCurriculumContent"
        rowClass="flex-column-reverse"
      >
        <template v-slot:title="{ title }">
          <span v-html="title"></span>
        </template>

        <template v-slot:description="{ description }">
          <span v-html="description"> </span>
        </template>

        <template v-slot:media>
          <ImageCarousel
            class="my-3"
            :images="curriculum"
            height="530"
            :hideDelimiters="false"
        /></template>
      </SectionInfo>
    </template>
  </PageLayout>
</template>

<script setup>
import { pageHero, pageHeader } from "@/composables/usePageHeader.js";

const curriculum = [
  { src: "/images/facilities/smartboard.webp" },
  { src: "/images/facilities/library.webp" },
  { src: "/images/facilities/science-lab.webp" },
  { src: "/images/facilities/language-lab.webp" },
  { src: "/images/facilities/auditorium.webp" },
];

const reasonsList = [
  {
    title: "Experienced Faculty",
    subtitle:
      "Dedicated teachers passionate about education and student development.",
    icon: "mdi-human-male-board",
  },
  {
    title: "Holistic Approach",
    subtitle: "Focus on academic excellence and personal growth.",
    icon: "mdi-flower",
  },
  {
    title: "Supportive Environment",
    subtitle:
      "Nurturing environment that fosters curiosity and a love for learning.",
    icon: "mdi-sprout",
  },
];

const curriculumContent = {
  imageUrl: "/images/school-building.webp",
  reversible: false,
  sections: [
    {
      title: "Our <span class=text-primary>Curriculum</span>",
      descriptions: [
        "Our SMBM is a co-educational school affiliated with the Matriculation State Board syllabus.",
        "We have been facilitating learning through key notes. We provide to the students from all classes to lay emphasis on easy learning, which goes well with K.G. Theatre, Art and Digital Labs, Smart Class, Physical Education, Computer Science, G.K., Hindi and Spoken English.",
      ],
    },
  ],
};

const comprehensiveCurriculumContent = {
  imageUrl: "/images/school-building.webp",
  reversible: true,
  sections: [
    {
      title: "Comprehensive <span class=text-primary>Curriculum</span>",
      descriptions: [
        "Our comprehensive curriculum empowers the teachers and engages the students. The components like audiovisuals, simulations, and hands-on activities, delight the learners and take them to float in the world of knowledge.",
      ],
    },
    {
      title: "Why choose <span class=text-primary>SMBM?</span>",
      descriptionList: reasonsList,
    },
  ],
};
</script>
