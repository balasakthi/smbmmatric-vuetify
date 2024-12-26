<template>
  <PageLayout>
    <template v-slot:pageHero>
      <PageHero :pageHero="pageHero.news" />
    </template>

    <template v-slot:pageHeader>
      <PageHeader :pageHeader="pageHeader.news" />
    </template>

    <template v-slot:pageContent>
      <v-container class="py-16">
        <v-row>
          <v-col
            v-for="n in 9"
            :key="n"
            class="d-flex child-flex"
            cols="12"
            md="6"
            lg="4"
          >
            <v-img
              alt="gallery image"
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
          </v-col> </v-row
      ></v-container>
    </template>
  </PageLayout>
</template>

<script setup>
import { pageHero, pageHeader } from "@/composables/usePageHeader.js";
</script>
