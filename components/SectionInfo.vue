<template>
  <v-responsive>
    <v-row
      :class="[
        'text-start d-flex',
        sectionContent.reversible ? 'flex-lg-row-reverse' : 'flex-lg-row',
        rowClass,
      ]"
    >
      <v-col
        class="d-flex flex-column align-center text-body-1"
        cols="12"
        lg="6"
      >
        <div v-for="(sections, index) in sectionContent.sections" :key="index">
          <h3 class="text-h5 font-weight-bold my-6 text-center">
            <slot name="title" :title="sections.title">{{
              sections.title
            }}</slot>
          </h3>
          <div
            v-for="(description, index) in sections.descriptions"
            :key="index"
          >
            <p class="mb-3 text-body-1">
              <slot name="description" :description="description">{{
                description
              }}</slot>
            </p>
          </div>

          <DescriptionList :descriptionList="sections.descriptionList" />
        </div>
      </v-col>

      <v-col
        :class="[
          'd-flex flex-column align-center text-body-1',
          sectionContent.reversible ? 'pr-md-12' : 'pl-md-12',
        ]"
        cols="12"
        lg="6"
      >
        <slot name="media"><p>Media Content</p></slot>
      </v-col>
    </v-row></v-responsive
  >
</template>

<script setup>
const props = defineProps({
  sectionContent: { type: Object, default: () => ({}) },
  rowClass: { type: String, default: "" },
});
</script>
