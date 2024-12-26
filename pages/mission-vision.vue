<template>
  <PageLayout>
    <template v-slot:pageHero>
      <PageHero :pageHero="pageHero.missionVision" />
    </template>

    <template v-slot:pageHeader>
      <PageHeader :pageHeader="pageHeader.missionVision" />
    </template>

    <template v-slot:pageContent>
      <v-container class="mt-8">
        <SectionInfo
          :sectionContent="missionVisionContent"
          rowClass="flex-column-reverse"
        >
          <template v-slot:title="{ title }">
            <span v-html="title"></span>
          </template>

          <template v-slot:description="{ description }">
            <span v-html="description"></span>
          </template>

          <template v-slot:media>
            <QuoteText
              class="mt-3"
              quoteText="Respect, Tolerance, Inclusion And Excellence."
            />

            <ImageCarousel
              class="mt-8 mb-3"
              :images="missionVisionImages"
              height="360"
              :hideDelimiters="false"
            />
          </template>
        </SectionInfo>

        <v-container
          class="text-center align-center justify-center pb-12"
          fluid
        >
          <QuoteText
            quoteText="Our focus is to provide a stimulating early learning and child care experience which promotes each child’s social, emotional, physical and cognitive development."
        /></v-container>
      </v-container>
    </template>
  </PageLayout>
</template>

<script setup>
import { pageHero, pageHeader } from "@/composables/usePageHeader.js";

const missionVisionImages = [
  { src: "/images/facilities/library.webp" },
  { src: "/images/facilities/library.webp" },
  { src: "/images/facilities/science-lab.webp" },
  { src: "/images/facilities/language-lab.webp" },
];

const missionVisionContent = {
  imageUrl: "/images/school-building.webp",
  reversible: true,
  sections: [
    {
      title: "Our <span class=text-primary>Vision</span>",
      descriptions: [
        "Our vision at S.M.B.M. Matric. Hr. Sec. School is to empower students to acquire, demonstrate, articulate and value knowledge and skills that will support them, as life-long learners, to participate in and contribute to the global world and practice the core values of the school.",
      ],
    },
    {
      title: "Our <span class=text-primary>Mission</span>",
      descriptions: [
        "The SMBM prepares students to understand, contribute to, and succeed in a rapidly changing society, thus making the world a better and more just place. We will ensure that our students develop both the skills that a sound education provides and the competencies essential for success and leadership in the emerging creative economy.",
        "We will also lead in generating practical and theoretical knowledge that enables people to better understand our world and improve conditions for local and global communities.",
      ],
    },
  ],
};
</script>
