<template>
  <div class="flex items-center p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <input
      type="text"
      placeholder="Buscar por nombre o apellido"
      v-model="searchQuery"
      @input="onSearch"
      class="flex-1 p-2 mr-4 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    <button
      @click="onButtonClick"
      class="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
    >
      Buscar
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

export default defineComponent({
  computed: {
    ...mapState(['searchQuery'])
  },
  methods: {
    ...mapActions(['updateSearchQuery']),
    onSearch() {
      this.updateSearchQuery(this.searchQuery);
    },
    onButtonClick() {
      this.updateSearchQuery(this.searchQuery);
      console.log('this.searchQuery', this.searchQuery);
    }
  }
});
</script>
