<template>
  <PageLayout>
    <template v-slot:pageHero>
      <PageHero :pageHero="pageHero.careers" />
    </template>

    <template v-slot:pageHeader>
      <PageHeader :pageHeader="pageHeader.careers" />
    </template>

    <template v-slot:pageContent>
      <v-container class="mt-8">
        <SectionInfo
          :sectionContent="educationApproachContent"
          rowClass="flex-column-reverse"
        >
          <template v-slot:title="{ title }">
            <span v-html="title"></span>
          </template>

          <template v-slot:description="{ description }">
            <span v-html="description"></span>
          </template>

          <template v-slot:media>
            <v-img
              class="rounded-lg w-100 my-6"
              alt="Mission image"
              aspect-ratio="16/9"
              :lazy-src="educationApproachContent.imageUrl"
              :src="educationApproachContent.imageUrl"
              cover
            ></v-img
          ></template>
        </SectionInfo>

        <SectionDivider class="py-4" />

        <SectionInfo :sectionContent="excitingCareersContent">
          <template v-slot:title="{ title }">
            <span v-html="title"></span>
          </template>

          <template v-slot:description="{ description }">
            <span v-html="description"></span>
          </template>

          <template v-slot:media>
            <ImageCarousel
              class="mb-8"
              :images="missionVisionImages"
              height="300"
              :hideDelimiters="false"
            />
            <v-container fluid>
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-alert
                    v-bind="props"
                    :elevation="isHovering ? 10 : 6"
                    color="white"
                    class="text-start rounded-lg text-body-2"
                    border="start"
                    border-color="primary"
                    title="Join us Today"
                  >
                    <p class="mt-1">
                      To apply for a position with us, please email a copy of
                      your current CV to
                      <a
                        class="text-subtitle-1 mt-2 text-decoration-none text-high-emphasis"
                        href="mailto:smbmatricschooldgl@gmail.com"
                        ><strong>smbmatricschooldgl@gmail.com</strong></a
                      >
                    </p>
                  </v-alert></template
                ></v-hover
              ></v-container
            >
          </template>
        </SectionInfo>
        <QuoteBlock class="mb-12" />
      </v-container>
    </template>
  </PageLayout>
</template>

<script setup>
import { pageHero, pageHeader } from "@/composables/usePageHeader.js";

const missionVisionImages = [
  { src: "/images/pages/career1.webp" },
  { src: "/images/pages/career2.webp" },
  { src: "/images/pages/career3.webp" },
];

const educationApproachContent = {
  imageUrl: "/images/school-building.webp",
  reversible: false,
  sections: [
    {
      title: "Our Approach to<span class=text-primary> Education</span>",
      descriptions: [
        "We realize that by putting resources into our staff, we are putting resources into our students and their future. In case you are a learner and instructor par excellence, trying to be essential for our dynamic group by carrying out cutting edge, showing devices and conveying quality training, then, at that point we need to hear from you.",
        "We likewise comprehend that conveying a great encounter for our students includes support staff as central participants.",
      ],
    },
  ],
};

const excitingCareersContent = {
  reversible: true,
  sections: [
    {
      title: "Exciting <span class=text-primary>Careers</span>",
      descriptions: [
        "We offer exciting careers for both teaching and non- teaching staff. We pride ourselves on a work culture where individuals can flourish with the support of strong team-based structures.",
        "SMBM is a meritocracy, so your progress, both in terms of responsibility and remuneration depends on your abilities.",
      ],
    },
    {
      title: "A Culture of <span class=text-primary>Excellence</span>",
      descriptions: [
        "We offer energizing vocations for both educating and non- instructing staff. We value a work culture where people can prosper with the help of solid group-based designs.",
        "SMBM is a meritocracy, so your advancement, both as far as obligation and compensation relies upon your capacities.",
      ],
    },
  ],
};
</script>
