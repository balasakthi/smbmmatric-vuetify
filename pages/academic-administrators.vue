<template>
  <PageLayout>
    <template v-slot:pageHero>
      <PageHero :pageHero="pageHero.admins" />
    </template>

    <template v-slot:pageHeader>
      <PageHeader :pageHeader="pageHeader.admins" />
    </template>

    <template v-slot:pageContent>
      <v-container class="mt-8 pa-6 pa-md-12">
        <v-row v-if="isLoading">
          <v-col v-for="n in 5" :key="n" cols="12" sm="6" lg="4">
            <v-skeleton-loader type="card" width="256" />
          </v-col>
        </v-row>

        <v-row v-else-if="hasError">
          <v-col cols="12" class="text-center">
            <p class="text-red">Failed to load data. Please try again later.</p>
          </v-col>
        </v-row>

        <v-row v-else>
          <v-col
            v-for="admin in adminData"
            :key="admin.id || admin.name"
            cols="12"
            sm="6"
            lg="4"
          >
            <v-avatar
              v-if="admin.image_url"
              class="rounded-xl border"
              :image="admin.image_url"
              :size="256"
              rounded="0"
            />
            <v-icon
              v-else
              size="100"
              color="grey lighten-1"
              class="rounded-xl border"
            >
              mdi-account-circle
            </v-icon>
            <v-list-item
              class="px-0 mt-2"
              :subtitle="admin.name || 'Unknown Name'"
              :title="admin.title || 'No Title Provided'"
            />
          </v-col>
        </v-row>
      </v-container>

      <QuoteBlock class="mb-12" />
    </template>
  </PageLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { pageHero, pageHeader } from "@/composables/usePageHeader.js";

const config = useRuntimeConfig();

const isLoading = ref(true);
const hasError = ref(false);

const adminData = ref([]);

onMounted(fetchAdmins);

async function fetchAdmins() {
  try {
    const response = await $fetch(config.public.apiStaffBase);

    if (Array.isArray(response?.data)) {
      adminData.value = response.data.filter(
        (item) => item.group === "academic-staff",
      );
    } else {
      throw new Error("Invalid response data");
    }
  } catch (error) {
    console.error("Error fetching admin data:", error);
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
}
</script>
