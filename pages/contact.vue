<template>
  <PageLayout>
    <template v-slot:pageHero>
      <PageHero :pageHero="pageHero.contact" />
    </template>

    <template v-slot:pageHeader>
      <PageHeader :pageHeader="pageHeader.contact" />
    </template>

    <template v-slot:pageContent>
      <VideoSection
        class="mt-12"
        url="https://www.youtube.com/embed/juRFgtnSQmQ?si=gm3TbfcOKm5Qmj0w"
      />

      <v-row class="my-12 py-6 rounded-xl">
        <v-col cols="12" md="6" lg="4" class="text-center mt-2">
          <v-icon
            size="40"
            icon="mdi-map-marker-outline"
            class="text-primary"
            aria-label="Location"
          ></v-icon>
          <p class="text-h6 mt-2 mb-2 font-weight-bold text-primary">
            Location
          </p>
          <p class="text-subtitle-1 mt-2 text-high-emphasis">
            No. 35, G.T.N. Salai, <br />
            Dindigul - 624 001.
          </p>
        </v-col>
        <v-col cols="12" md="6" lg="4" class="text-center mt-2">
          <v-icon
            size="40"
            icon="mdi-phone-dial-outline"
            class="text-primary"
            aria-label="Phone"
          ></v-icon>
          <p class="text-h6 mt-2 mb-2 font-weight-bold text-primary">Call</p>
          <div>
            <a
              class="text-subtitle-1 mt-2 text-decoration-none text-high-emphasis"
              href="tel:+917397776771"
              aria-label="Call us at +91 73977 76771"
            >
              +91 73977 76771
            </a>
          </div>
          <div>
            <a
              class="text-subtitle-1 mt-2 text-decoration-none text-high-emphasis"
              href="tel:+914512426771"
              aria-label="Call us at 0451 2426771"
            >
              0451 2426771 </a
            >,
            <a
              class="text-subtitle-1 mt-2 text-decoration-none text-high-emphasis"
              href="tel:+914512426772"
              aria-label="Call us at 0451 2426772"
            >
              0451 2426772
            </a>
          </div>
          <p class="text-subtitle-1 text-gray mt-2">
            Office Hours: Mon - Fri, 8am - 4pm
          </p>
        </v-col>
        <v-col cols="12" md="12" lg="4" class="text-center mt-2">
          <v-icon
            size="40"
            icon="mdi-email-outline"
            class="text-primary"
            aria-label="Email"
          ></v-icon>
          <p class="text-h6 mt-2 mb-2 font-weight-bold text-primary">Email</p>
          <div>
            <a
              class="text-subtitle-1 mt-2 text-decoration-none text-high-emphasis"
              href="mailto:info@smbmmatricschool.com"
              aria-label="Email us at info@smbmmatricschool.com"
            >
              info@smbmmatricschool.com
            </a>
          </div>
          <div>
            <a
              class="text-subtitle-1 mt-2 text-decoration-none text-high-emphasis"
              href="mailto:smbmatricschooldgl@gmail.com"
              aria-label="Email us at smbmatricschooldgl@gmail.com"
            >
              smbmatricschooldgl@gmail.com
            </a>
          </div>
        </v-col>
      </v-row>

      <MapSection :height="400" class="mx-4 mb-16" />
    </template>
  </PageLayout>
</template>

<script setup>
import { pageHero, pageHeader } from "@/composables/usePageHeader.js";
</script>
