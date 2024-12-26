<template>
  <PageLayout>
    <template v-slot:pageHero>
      <PageHero :pageHero="pageHero.courses" />
    </template>

    <template v-slot:pageHeader>
      <PageHeader :pageHeader="pageHeader.courses" />
    </template>

    <template v-slot:pageContent
      ><v-container>
        <v-row class="mt-8">
          <v-col
            cols="12"
            md="6"
            class="px-8 py-8"
            v-for="course in courses"
            :key="course.std"
            ><v-card class="rounded-xl text-start cursor-default" hover>
              <v-img
                gradient="to bottom, rgba(255, 255, 255, 0) 60%, rgba(0, 0, 0, 0.9) 100%"
                class="align-end text-white"
                height="200"
                :lazy-src="course.image"
                :src="course.image"
                alt="courses hero image"
                cover
              >
                <v-card-title>{{ course.std }}</v-card-title>
              </v-img>

              <v-card-text>
                <v-timeline
                  align="start"
                  side="end"
                  v-for="(subject, index) in course.subjects"
                  :key="index"
                >
                  <v-timeline-item dot-color="primary" size="small">
                    <div class="d-flex">
                      <p class="text-subtitle-2">
                        {{ subject }}
                      </p>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card></v-col
          >
        </v-row>
        <QuoteBlock class="mb-12" />
      </v-container>
    </template>
  </PageLayout>
</template>

<script setup>
import { pageHero, pageHeader } from "@/composables/usePageHeader.js";

const config = useRuntimeConfig();

const courses = [
  {
    std: "Kindergarten",
    subjects: [
      "Tamil, English, Number World, EVS, Art and Craft, Drawing and Painting, Music Physical Activities,",
      "Fine Motor Skill Development, Gross Motor Skill Development, Story Telling, Rhymes and Action Songs.",
    ],
    image: `${config.public.imageBase}/pages/courses-kg.webp`,
  },
  {
    std: "Stds. I & II",
    subjects: [
      "Tamil, English, Hindi, Mathematics, EVS, Social Science, Computer Science,",
      "Spoken English, General Knowledge, Art & Craft / Drawing / Painting / Music / Dance, Physical Education.",
    ],
    image: `${config.public.imageBase}/pages/courses-1-2.webp`,
  },
  {
    std: "Stds. III-V",
    subjects: [
      "Tamil, English, Hindi, Mathematics, Science, Social Science, Computer Science,",
      "Spoken English, General Knowledge, Art & Craft / Drawing / Painting / Music / Dance, Physical Education.",
    ],
    image: `${config.public.imageBase}/pages/courses-3-5.webp`,
  },
  {
    std: "Stds. VI - VIII",
    subjects: [
      "Tamil, English, Hindi, Mathematics, Science, Social Science, Computer Science,",
      "Spoken English, General Knowledge, Art & Craft / Painting / Music / Dance,  Physical Education.",
    ],
    image: `${config.public.imageBase}/pages/courses-6-8.webp`,
  },
  {
    std: "Stds. IX and X",
    subjects: [
      "Tamil, English, Mathematics, Science, Social Science, Computer Science,",
      "Spoken English, General Knowledge, Art / Music / Dance, Physical Education",
    ],
    image: `${config.public.imageBase}/pages/courses-9-10.webp`,
  },
  {
    std: "Stds. XI and XII",
    subjects: [
      "Tamil/ French, English, Mathematics, Physics, Chemistry, Biology/ Computer Science,",
      "Tamil/ French, English, Commerce, Accountancy, Economics, Business Math/ Computer Application.",
    ],
    image: `${config.public.imageBase}/pages/courses-11-12.webp`,
  },
];
</script>
