<template>
  <div class="flex flex-col">
    <!-- Top Menu -->
    <TopMenu />

    <main class="flex flex-row">
      <!-- Side Menu-->
      <SideMenu />

      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import SideMenu from '@/modules/common/components/SideMenu.vue';
import TopMenu from '@/modules/common/components/TopMenu.vue';
</script>
