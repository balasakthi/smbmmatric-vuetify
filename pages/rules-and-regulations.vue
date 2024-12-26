<template>
  <PageLayout>
    <template v-slot:pageHero>
      <PageHero :pageHero="pageHero.rules" />
    </template>

    <template v-slot:pageHeader>
      <PageHeader :pageHeader="pageHeader.rules" />
    </template>

    <template v-slot:pageContent>
      <v-container class="mt-8">
        <v-container>
          <h3 class="text-h5 font-weight-bold">
            Discipline
            <span class="text-primary">Guidelines</span>
          </h3>
          <v-row class="mt-6">
            <v-col
              v-for="(item, index) in disciplineList"
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
                    <p
                      v-for="(subtitle, index) in item.subtitle"
                      :key="index"
                      class="mt-1 text-body-2"
                    >
                      {{ subtitle }}
                    </p>
                  </template>
                </v-list-item>
              </v-responsive>
            </v-col>
          </v-row>
        </v-container>

        <SectionDivider class="mt-8 mb-6" />

        <v-container fluid>
          <h3 class="text-start text-h5 font-weight-bold">
            Uniform and
            <span class="text-primary">Personal Care</span>
          </h3>

          <v-row class="mt-5">
            <v-col class="text-start" cols="12" md="7">
              <h4 class="text-h6 font-weight-bold">
                General Uniform
                <span class="text-primary">Guidelines</span>
              </h4>
              <v-img
                alt="school building"
                class="my-5 rounded-lg"
                max-height="180"
                src="/images/school-building.webp"
                lazy-src="/images/school-building.webp"
                cover
              ></v-img>

              <div
                v-for="(guidelines, index) in generalGuidelines"
                :key="index"
                class="d-flex flex-direction-row align-start"
              >
                <v-icon
                  class="mt-2"
                  color="primary"
                  icon="mdi-circle-medium"
                ></v-icon>
                <p class="ml-2 mt-2 text-body-1">
                  {{ guidelines }}
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="5">
              <h4 class="text-h6 font-weight-bold">
                Hair and
                <span class="text-primary">Personal Appearance</span>
              </h4>

              <v-card
                class="my-5 pb-3 text-start mx-auto cursor-default border rounded-lg"
                max-width="350"
                hover
              >
                <v-img
                  gradient="to bottom, rgba(255, 255, 255, 0) 60%, rgba(0, 0, 0, 0.9) 100%"
                  class="align-end text-white mb-3"
                  height="200"
                  :src="imageUrl"
                  :lazySrc="imageUrl"
                  alt="rules"
                  cover
                >
                </v-img>

                <div
                  v-for="guidelines in appearanceGuidelines"
                  :key="guidelines.title"
                >
                  <v-card-subtitle class="px-6 pt-2">{{
                    guidelines.title
                  }}</v-card-subtitle>

                  <v-card-text class="px-12">
                    <ul
                      v-for="guideline in guidelines.guidelines"
                      :key="guideline"
                      class="text-body-2"
                    >
                      <li class="mt-1">{{ guideline }}</li>
                    </ul>
                  </v-card-text>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="7">
              <v-table
                class="text-start rounded-lg border border-primary"
                hover
              >
                <thead class="bg-primary">
                  <tr class="text-body-1">
                    <th class="text-left">Class</th>
                    <th class="text-left">Boys</th>
                    <th class="text-left">Girls</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="uniform in uniforms"
                    :key="uniform.class"
                    class="text-body-2"
                  >
                    <td class="text-no-wrap">{{ uniform.class }}</td>
                    <td class="py-1">{{ uniform.boys }}</td>
                    <td>{{ uniform.girls }}</td>
                  </tr>
                </tbody>
              </v-table>
              <v-alert
                color="grey-lighten-3"
                class="mt-6 text-start rounded-lg text-body-2"
                border="start"
                border-color="primary"
                title="Wednesday"
              >
                <p class="mt-1">K.G. – V: Track pants and House T-shirts</p>
                <p>VI – XII: White and White Uniform</p>
              </v-alert>
            </v-col>
            <v-col class="pl-md-8" cols="12" md="5">
              <ImageCarousel
                :images="uniformImages"
                height="340"
                :hideDelimiters="false"
              />
            </v-col>
          </v-row>
        </v-container>

        <SectionDivider class="mt-8" />

        <v-container class="text-center mb-12">
          <h3 class="text-h5 font-weight-bold">
            Personal Care and
            <span class="text-primary">Hygiene</span>
          </h3>

          <v-row class="text-start mt-2">
            <v-col cols="12" md="6">
              <v-list lines="three">
                <v-list-item
                  class="text-subtitle-1"
                  v-for="list in careAndHygiene"
                  :key="list.title"
                  :title="list.title"
                  :subtitle="list.subtitle"
                >
                  <template v-slot:prepend>
                    <v-avatar color="primary">
                      <v-icon :icon="list.icon"></v-icon>
                    </v-avatar> </template
                ></v-list-item> </v-list
            ></v-col>
            <v-col cols="12" md="6" class="d-flex align-center">
              <v-img
                alt="school building"
                class="rounded-lg"
                max-height="300"
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

const imageUrl = "/images/school-building.webp";

const uniformImages = [
  { src: "/images/facilities/smartboard.webp" },
  { src: "/images/facilities/library.webp" },
  { src: "/images/facilities/science-lab.webp" },
  { src: "/images/facilities/language-lab.webp" },
];

const disciplineList = [
  {
    title: "Punctuality",
    subtitle: [
      "Students must be punctual to school. Late arrivals will be recorded.",
      "Students should report back to class on time after breaks and activities.",
    ],
    icon: "mdi-clock-fast",
  },
  {
    title: "Environmental Responsibility",
    subtitle: [
      "Students are expected to be environmentally conscious. Avoid wastage of electricity, water, and damage to plants.",
    ],
    icon: "mdi-sprout-outline",
  },
  {
    title: "Prohibited Items",
    subtitle: [
      "No mobile phones, flash drives, iPods, or other gadgets allowed in school.",
    ],
    icon: "mdi-cancel",
  },
  {
    title: "Financial Conduct",
    subtitle: [
      "Students should not bring large amounts of cash to school or engage in borrowing and lending money.",
    ],
    icon: "mdi-cash-multiple",
  },
  {
    title: "Personal Belongings",
    subtitle: [
      "Avoid wearing gold or expensive ornaments to school, including watches.",
    ],
    icon: "mdi-wallet-bifold-outline",
  },
  {
    title: "School Rules",
    subtitle: [
      "Students should not loiter without a valid reason or permission.",
      "Fancy and colorful clothes are only allowed on birthdays or special occasions.",
    ],
    icon: "mdi-clipboard-list-outline",
  },
  {
    title: "Politeness and Respect",
    subtitle: [
      "Always be polite to fellow students, teachers, and non-teaching staff.",
      "Use of abusive language and harsh tones is prohibited.",
    ],
    icon: "mdi-head-snowflake-outline",
  },
  {
    title: "Classroom and Corridor Conduct",
    subtitle: [
      "Students should not enter other classrooms during breaks.",
      "Running, playing, and shouting in corridors or classrooms is strictly prohibited.",
    ],
    icon: "mdi-chair-school",
  },
  {
    title: "School Property",
    subtitle: ["Students must take care of school property and belongings."],
    icon: "mdi-office-building-outline",
  },
];

const generalGuidelines = [
  "The students should take pride in wearing the uniform.",
  "The students must have a valid identity card issued by the school throughout their presence in the school and during outdoor activities.",
  "The students must wear the uniform daily to school, which is approved or provided by the school.",
  " Different uniforms are specified for regular classes and physical education classes.",
  "Students must wear the appropriate attire according to the class timetable.",
];

const appearanceGuidelines = [
  {
    title: "Boys",
    guidelines: [
      "Should have short hair.",
      "Punk, spikes, or trendy haircuts are not permitted.",
    ],
  },
  {
    title: "Girls",
    guidelines: [
      "Must make two plaits",
      "No girl will be allowed to keep her hair open unless it is very short.",
      "Ribbons or hair bands, if used, should be plain black only.",
    ],
  },
];

const uniforms = [
  {
    class: "K.G.–V",
    boys: "Pale Cream shorts with loop, Red with Blue Checked Shirt (Half sleeves).",
    girls: "Red with Blue checked Pinafore, Pale Cream Shirt (Half sleeves).",
  },
  {
    class: "VI–XII",
    boys: "Pale Cream Long pants with loop, Red with Blue Checked Shirt (Half sleeves), Cream-colored tie with crossed red lines.",
    girls:
      "Red with Blue checked round necked Churidhar, Top with Collar, Pale Cream pants, and Pale Cream Dhupatta.",
  },
];

const careAndHygiene = [
  {
    title: "Uniform Maintenance",
    subtitle:
      "Students should maintain personal hygiene and ensure their uniforms are clean and neatly pressed.",
    icon: "mdi-tshirt-crew",
  },
  {
    title: "Footwear Condition",
    subtitle: "Shoes should be polished and in good condition.",
    icon: "mdi-shoe-formal",
  },
  {
    title: "Nail Care",
    subtitle: "Nails should be trimmed and clean.",
    icon: "mdi-hand-back-right",
  },
];
</script>
