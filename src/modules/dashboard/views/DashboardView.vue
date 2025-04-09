<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Project</th>
          <th>Tasks</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="(project, index) in projectStore.projects" :key="project.id" class="hover">
          <th>{{ index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.tasks?.length }}</td>
          <td><progress class="progress progress-accent w-56" value="10" max="100"></progress></td>
        </tr>
      </tbody>
    </table>
    <FabButton position="bottom-right" />
  </div>

  <!-- <InputModal :open="true" /> -->
</template>

<script lang="ts" setup>
import FabButton from '@/modules/common/components/FabButton.vue';
import { useProjectStore } from '../store/projects.store';
// import InputModal from '@/modules/common/components/InputModal.vue';

const projectStore = useProjectStore();
</script>
