<template>
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    class="blur-background"
    aria-label="Navigation Menu"
    role="navigation"
  >
    <template v-slot:prepend>
      <v-list-item
        lines="two"
        class="py-3"
        title="SMBM Matric."
        subtitle="I Can & I Will"
        prepend-avatar="/logo/smbm-matric-logo-128.webp"
      >
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list v-model:opened="open">
      <template v-for="(item, index) in appBarMenu" :key="index">
        <v-list-group v-if="item.subMenu" :value="item.title" role="menu">
          <template v-slot:activator="{ props }">
            <v-list-item
              color="primary"
              v-bind="props"
              :prepend-icon="item.icon"
              :title="item.title"
              role="menuitem"
            ></v-list-item>
          </template>

          <v-list-item
            color="primary"
            v-for="(sublink, index) in item.subMenu"
            :key="index"
            :to="sublink.route"
            :title="sublink.title"
            role="menuitem"
            :aria-current="isActive(sublink.route) ? 'page' : undefined"
          >
          </v-list-item>
        </v-list-group>

        <v-list-item
          v-else
          color="primary"
          :key="index"
          :to="item.route"
          :prepend-icon="item.icon"
          :title="item.title"
          role="menuitem"
        >
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar
    class="blur-background d-flex px-3 px-md-6 justify-center"
    height="120"
    flat
  >
    <NuxtLink to="/">
      <v-img
        :aspect-ratio="smAndDown ? '1 / 1' : '16 / 9'"
        :width="logo.width"
        :src="logo.url"
        :lazySrc="logo.url"
        alt="SMBM Matric. Logo"
      >
      </v-img>
    </NuxtLink>

    <v-spacer></v-spacer>

    <v-spacer></v-spacer>

    <v-btn
      size="x-small"
      color="primary"
      variant="text"
      :icon="
        theme.global.current.value.dark
          ? 'mdi-white-balance-sunny'
          : 'mdi-moon-waning-crescent'
      "
      flat
      @click="toggleTheme"
    ></v-btn>

    <v-btn
      variant="outlined"
      class="mr-4 text-subtitle-1 rounded-pill"
      color="primary"
      prepend-icon="mdi-account-circle-outline"
      to="/contact"
      flat
      aria-label="Contact Us"
    >
      Contact
    </v-btn>

    <v-app-bar-nav-icon
      class="bg-primary"
      @click="drawer = !drawer"
      :aria-expanded="drawer"
      aria-label="Toggle Navigation Menu"
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
import { appBarMenu } from "@/composables/useNavigation.js";
import { useRoute } from "vue-router";

const drawer = ref(null);
const { smAndDown } = useDisplay();
const open = ref();
const route = useRoute();

const logo = computed(() => {
  if (smAndDown.value) {
    return { url: "/logo/smbm-matric-logo-256.webp", width: 65 };
  } else {
    return { url: "/logo/smbm-matric-text-logo.webp", width: 430 };
  }
});

function isActive(routePath) {
  return route.path === routePath;
}

import { useTheme } from "vuetify";

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<style scoped>
.blur-background {
  background-color: rgb(255 255 255 / 75%) !important;
  backdrop-filter: blur(10px) !important;
}
</style>
