<template>
  <div>
    <select multiple v-model="selectedNationalities" @change="onFilter">
      <option v-for="nat in nationalities" :key="nat" :value="nat">{{ nat }}</option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['selectedNationalities']),
    ...mapGetters(['nationalities'])
  },
  methods: {
    ...mapActions(['updateSelectedNationalities']),
    onFilter() {
      this.updateSelectedNationalities(this.selectedNationalities);
    }
  }
};
</script>
