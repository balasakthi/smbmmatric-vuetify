<template>
  <v-container class="px-4 px-md-12" fluid>
    <slot name="pageHero">
      <p>Default Page Hero (Please Add Your Content)</p>
    </slot>
  </v-container>

  <v-container>
    <SectionDivider class="pb-5" :showLogo="true" />
    <slot name="pageHeader">
      <p>Default Header Content (Add a header to this section).</p>
    </slot>
    <slot name="pageContent">
      <p>Default Page Content (Add your content here).</p>
    </slot>
  </v-container>
</template>
