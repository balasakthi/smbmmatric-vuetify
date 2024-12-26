<template>
  <div>
    <!-- Button to trigger scrolling -->
    <button @click="scrollToSection">Scroll to Section</button>

    <!-- The target section -->
    <div ref="targetSection" class="section">This is the target section</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define a ref for the section
const targetSection = ref(null);

function scrollToSection() {
  if (targetSection.value) {
    targetSection.value.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn("Target section ref is not defined!");
  }
}
</script>

<style>
.section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}
</style>
