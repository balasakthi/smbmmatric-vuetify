<template>
  <v-footer class="bg-primary rounded-t-xl d-flex flex-column">
    <v-responsive class="px-5 px-md-12 pt-8" aria-labelledby="footer-heading">
      <v-row>
        <!-- About Us Section -->
        <v-col cols="12" md="12" lg="4" role="article">
          <v-img
            alt="SMBM Matric DNU logo"
            src="/logo/smbm-matric-dnu-logo.webp"
            lazy-src="/logo/smbm-matric-dnu-logo.webp"
            :aspect-ratio="16 / 9"
            max-width="100"
          ></v-img>
          <p class="mt-2">
            SMBM Matric offers a nurturing environment focused on excellence in
            education, fostering academic and personal growth to prepare
            students for a bright future.
          </p>
          <v-img
            alt="Download our app from Google Play Store"
            src="/logo/google-play-store-logo.webp"
            lazy-src="/logo/google-play-store-logo.webp"
            :aspect-ratio="16 / 9"
            max-width="100"
          ></v-img>
          <div class="mt-3">
            <v-btn
              v-for="(item, index) in socialIcons"
              :key="index"
              :href="item.href"
              class="mx-3"
              variant="outlined"
              target="_blank"
              icon
              rel="noopener noreferrer"
              :aria-label="`Visit our ${item.title} page`"
            >
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- Contact Section -->
        <v-col cols="12" md="4" lg="3" role="article">
          <h2 class="text-body-1 font-weight-bold mb-3">Contact</h2>
          <div class="d-flex flex-row my-4">
            <v-icon
              class="mt-1"
              size="20"
              icon="mdi-map-marker-outline"
              aria-label="Address location icon"
            ></v-icon>
            <p class="ml-3 text-subtitle-1">
              No. 35, G.T.N. Salai, <br />
              Dindigul - 624 001.
            </p>
          </div>
          <div class="d-flex flex-row my-4">
            <v-icon
              class="mt-1"
              size="20"
              icon="mdi-phone-dial-outline"
              aria-label="Phone icon"
            ></v-icon>
            <p class="ml-3">
              <a
                class="text-decoration-none text-white"
                href="tel:+917397776771"
                aria-label="Call +91 73977 76771"
              >
                +91 73977 76771
              </a>
              <br />
              <a
                class="text-decoration-none text-white"
                href="tel:+914512426771"
                aria-label="Call 0451 2426771"
              >
                0451 2426771
              </a>
              <br />
              <a
                class="text-decoration-none text-white"
                href="tel:+914512426772"
                aria-label="Call 0451 2426772"
              >
                0451 2426772
              </a>
            </p>
          </div>
          <div class="d-flex flex-row my-4">
            <v-icon
              class="mt-1"
              size="20"
              icon="mdi-email-outline"
              aria-label="Email icon"
            ></v-icon>
            <p class="ml-3">
              <a
                class="text-decoration-none text-white"
                href="mailto:info@smbmmatricschool.com"
                aria-label="Send email to info@smbmmatricschool.com"
              >
                info@smbmmatricschool.com
              </a>
              <br />
              <a
                class="text-decoration-none text-white"
                href="mailto:smbmatricschooldgl@gmail.com"
                aria-label="Send email to smbmatricschooldgl@gmail.com"
              >
                smbmatricschooldgl@gmail.com
              </a>
            </p>
          </div>
        </v-col>

        <!-- Location Section -->
        <v-col cols="12" md="5" lg="3" role="region">
          <h2 class="text-body-1 font-weight-bold mb-3">Location</h2>
          <MapSection :height="200" aria-label="School location map" />
        </v-col>

        <!-- Useful Links Section -->
        <v-col
          cols="12"
          md="3"
          lg="2"
          class="d-flex flex-column align-start"
          role="navigation"
        >
          <h2 class="text-body-1 font-weight-bold mb-3">Useful Links</h2>
          <v-btn
            v-for="(item, index) in quickLinks"
            :key="index"
            :to="item.to"
            class="my-1 text-subtitle-1"
            variant="text"
            rounded
            :aria-label="`Navigate to ${item.title} page`"
          >
            {{ item.title }}
          </v-btn>
        </v-col>
      </v-row>

      <SectionDivider class="py-0" />

      <!-- Footer Note -->
      <p class="text-subtitle-2 text-center">
        © {{ new Date().getFullYear() }} - SMBM Matric. Hr. Sec. School.
      </p>
      <p class="text-caption text-center">
        Powered by
        <a
          class="text-decoration-none text-uppercase text-white"
          href="https://creativelearningmachine.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Creative Learning Machine website (opens in a new tab)"
        >
          Creative Learning Machine (CLM)
        </a>
      </p>
    </v-responsive>
  </v-footer>
</template>

<script setup>
const socialIcons = [
  { title: "Facebook", icon: "mdi-facebook", href: "https://facebook.com/" },
  { title: "LinkedIn", icon: "mdi-linkedin", href: "https://linkedin.com/" },
  { title: "YouTube", icon: "mdi-youtube", href: "https://youtube.com/" },
];

const quickLinks = [
  { id: 1, title: "About", to: "/school-history" },
  { id: 2, title: "Academics", to: "/academic-curriculum" },
  { id: 3, title: "Policy", to: "/rules-and-regulations" },
  { id: 4, title: "Career", to: "/career-opportunities" },
  { id: 5, title: "Gallery", to: "/school-gallery" },
];
</script>
