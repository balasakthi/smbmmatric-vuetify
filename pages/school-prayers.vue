<template>
  <PageLayout>
    <template v-slot:pageHero>
      <PageHero :pageHero="pageHero.prayer" />
    </template>

    <template v-slot:pageHeader>
      <PageHeader :pageHeader="pageHeader.prayer" />
    </template>

    <template v-slot:pageContent>
      <v-container>
        <v-row class="my-12">
          <v-col
            cols="12"
            lg="4"
            class="px-6 py-6"
            v-for="prayer in prayers"
            :key="prayer.title"
            ><v-card class="rounded-xl cursor-default border" hover>
              <v-img
                gradient="to bottom, rgba(255, 255, 255, 0) 60%, rgba(0, 0, 0, 0.9) 100%"
                class="align-end text-white"
                height="200"
                :src="prayer.image"
                :lazy-src="prayer.image"
                alt="course"
                cover
              >
                <v-card-title>{{ prayer.title }}</v-card-title>
              </v-img>

              <v-card-text class="text-body-2 py-8 px-8" v-html="prayer.prayer">
              </v-card-text> </v-card
          ></v-col>
        </v-row>
        <QuoteBlock class="mb-12" />
      </v-container>
    </template>
  </PageLayout>
</template>

<script setup>
import { pageHero, pageHeader } from "@/composables/usePageHeader.js";

const config = useRuntimeConfig();

const prayers = [
  {
    title: "Morning Prayer",
    prayer:
      "OH GOD! <br/> THE ORIGIN OF KNOWLEDGE,<br/>BLESS OUR STUDIES,<br/>ENLIGHTEN OUR MINDS,<br/>STRENGTHEN OUR MEMORY<br/>AND DIRECT OUR WILL TOWARDS<br/>WHAT IS RIGHT,<br/>GRANT US, THE GRACE TO SEEK<br/>TRUTH ALWAYS AND MAKE US<br/>TRULY WISE.<br/>GIVE US THE GIFT OF<br/>KNOWLEDGE AND THE GRACE TO<br/>USE IT WISELY.",
    image: `${config.public.imageBase}/pages/prayer-morning.webp`,
  },
  {
    title: "Evening Prayer",
    prayer:
      "OH GOD! <br/>SOURCE OF ALL WISDOM AND KNOWLEDGE,<br/>GRANT THAT WE REMEMBER<br/>WHAT WE HAVE LEARNT<br/>AND RECALL IT WHEN NECESSARY.<br/>WE OFFER THEE,<br/>OUR WORK AND OUR ENDEAVOURS,<br/>OUR FAILURES AND SUCCESS.<br/>FORGIVE OUR FAULTS<br/> AND GIVE US COURAGE TO FOLLOW<br/>THE HOLY WILL IN ALL THINGS.",
    image: `${config.public.imageBase}/pages/prayer-evening.webp`,
  },
  {
    title: "Loyalty Pledge",
    prayer:
      "INDIA IS MY COUNTRY.<br/>ALL INDIANS ARE MY BROTHERS AND SISTERS.<br/>I LOVE MY COUNTRY<br/>AND I’M PROUD OF ITS<br/>RICH AND VARIED HERITAGE.<br/>I SHALL ALWAYS<br/>STRIVE TO BE WORTHY OF IT.<br/>I SHALL GIVE MY PARENTS, TEACHERS AND ALL ELDERS<br/>RESPECT AND TREAT EVERYONE WITH COURTESY.<br/>TO MY COUNTRY AND MY PEOPLE,<br/>I PLEDGE MY DEVOTION.<br/>IN THEIR WELL BEING<br/>AND PROSPERITY ALONE LIES MY HAPPINESS. ",
    image: `${config.public.imageBase}/pages/prayer-pledge.webp`,
  },
];
</script>
