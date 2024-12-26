<template>
  <PageLayout>
    <template v-slot:pageHero>
      <PageHero :pageHero="pageHero.history" />
    </template>

    <template v-slot:pageHeader>
      <PageHeader :pageHeader="pageHeader.history" />
    </template>

    <template v-slot:pageContent>
      <v-container class="mt-8">
        <SectionInfo
          :sectionContent="historySectionInfo"
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
              quoteText="அடக்கம், பணிவு, உழைப்பு, எழுச்சி, குறிக்கோள்." />

            <p class="mt-5 mb-2 text-body-1">
              Keeping these above words as their aphorism, Dindigul Nadar
              Uravinmurai was founded in the year 1964.
            </p>

            <v-img
              class="rounded-xl w-100 my-6"
              alt="Mission image"
              aspect-ratio="16/9"
              :lazy-src="historySectionInfo.imageUrl"
              :src="historySectionInfo.imageUrl"
              cover
            ></v-img
          ></template>
        </SectionInfo>

        <SectionDivider class="py-4" />

        <v-container class="my-2" style="max-width: 600px">
          <h3 class="text-h5 font-weight-bold mb-10">
            Our DNU has founded
            <span class="text-primary">four reputed schools</span>
          </h3>
          <v-timeline align="start">
            <v-timeline-item v-for="school in dnuSchools" :key="school.name">
              <template v-slot:icon>
                <v-avatar :image="school.logo" size="x-large"></v-avatar>
              </template>
              <template v-slot:opposite>
                <div
                  class="headline font-weight-bold text-primary text-subtitle-1"
                  v-text="school.year"
                ></div>
              </template>
              <a
                :href="school.web"
                class="text-decoration-none text-subtitle-2"
                target="_blank"
                >{{ school.name }}</a
              >
            </v-timeline-item>
          </v-timeline>
        </v-container>

        <SectionDivider class="py-4" />

        <SectionInfo :sectionContent="goalsSectionInfo">
          <template v-slot:title="{ title }">
            <span v-html="title"></span>
          </template>

          <template v-slot:description="{ description }">
            <span v-html="description"></span>
          </template>

          <template v-slot:media>
            <v-img
              class="rounded-xl w-100 my-6"
              alt="Mission image"
              aspect-ratio="16/9"
              :lazy-src="goalsSectionInfo.imageUrl"
              :src="goalsSectionInfo.imageUrl"
              cover
            ></v-img>
          </template>
        </SectionInfo>
        <v-container
          class="text-center align-center justify-center pb-12"
          max-width="500"
          fluid
        >
          <QuoteText
            quoteText="Keep Learning, Keep Trying, Keep Accomplishing & Keep Venturing!!!"
        /></v-container>
      </v-container>
    </template>
  </PageLayout>
</template>

<script setup>
import { pageHero, pageHeader } from "@/composables/usePageHeader.js";
const dnuSchools = [
  {
    name: "D.N.U. S.M.B.M. NATIONAL PUBLIC SCHOOL (CBSE).",
    year: 2017,
    logo: "/logo/smbm-cbse-logo.webp",
    web: "https://www.smbcbseschool.com/",
  },
  {
    name: "D.N.U. K.K.A.G. MATRICULATION SCHOOL.",
    year: 2001,
    logo: "/logo/kkag-logo.webp",
    web: "http://www.kkagmschool.com/",
  },
  {
    name: "D.N.U. S.M.B.M. MATRIC. HIGHER SECONDARY SCHOOL.",
    year: 1979,
    logo: "/logo/smbm-matric-logo-128.webp",
    web: "https://smbmmatricschool.com/",
  },
  {
    name: "D.N.U. M.S.P. SOLAI NADAR MEMORIAL HIGHER SECONDARY SCHOOL.",
    year: 1966,
    logo: "/logo/msp-logo.webp",
    web: "http://www.mspschool.edu.in/",
  },
];

const historySectionInfo = {
  imageUrl: "/images/school-building.webp",
  reversible: true,
  sections: [
    {
      title: "Vision and <span class=text-primary>Leadership</span>",
      descriptions: [
        "Through the co-ordinated efforts, with the widened scope for enhancing its prestigious influence on the society, Dindigul Nadar Uravinmurai has been active in the field of Education throughout Dindigul, since its origin with the unstoppable service of Mr.&nbsp;D.&nbsp;Shankaralingam, the President, Dr.&nbsp;P.&nbsp;Santhosh, the Vice President, Mr.&nbsp;R.&nbsp;Chandra Sekaran, the Secretary, Mr.&nbsp;S.&nbsp;M.&nbsp;Veera Mani, the Joint Secretary, Mr.&nbsp;A.&nbsp;Sankara Narayanan, the Treasurer and the honorary advisers of Uravinmurai.",
      ],
    },
    {
      title: "Education and <span class=text-primary>Social Welfare</span>",
      descriptions: [
        "Like both sides of a coin and both parallel lines of railway tracks, DNU treats Educational Enrichment and Social welfare of the people as its twin eyes of the Uravinmurai.",
        "Thus, DNU exhibited nexus between Uravinmurai and the Educational Society on finding its EDUCATIONAL TRUST in Dindigul.",
      ],
    },
  ],
};

const goalsSectionInfo = {
  imageUrl: "/images/school-building.webp",
  sections: [
    {
      title: "Mission and <span class=text-primary>Aspirations</span>",
      descriptions: [
        "These institutions are the part of DNU’s effort to share multifarious welfare activities. DNU aims at the integral, personal formation of the students. To accomplish this, a special intention has been made in all the DNU institutions and it always aims at making its own contributions towards a transformation of the present-day social condition.",
        "This longings never put a full stop to the Uravinmurai’s journey, and it aims to set an another milestone to serve the youth.",
      ],
    },
  ],
};
</script>
