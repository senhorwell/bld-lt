<template>
    <base-layout page-title="Adicionar um caminhão" page-default-back-link="/memories">
    <create-memory-form @save-memory="saveMemory"></create-memory-form>
    </base-layout>
</template>

<script>
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue';

export default {
  components: {
    CreateMemoryForm,
  },
  methods: {
    saveMemory(memoryData) {
      this.$store.dispatch('addMemory',memoryData);
      this.$router.replace('/memories');
    }
  }
}
</script>