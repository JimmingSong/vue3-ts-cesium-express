<template>
  <div id="cesium-box" class="home"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
import cesium from "@/cesium";
export default defineComponent({
  name: 'Home',
  setup () {
    onMounted(() => {
      cesium.init('cesium-box')
    })
    onBeforeUnmount(() => {
      cesium.viewer?.destroy();
    })
  }
});
</script>
