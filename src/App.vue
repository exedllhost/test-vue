<template>
  <div id="app">
    <SearchBar />
    <!-- <NationalityFilter /> -->
    <UserTable />
  </div>
</template>

<script>
import SearchBar from '@/components/table/SearchBar.vue';
// import NationalityFilter from '@/components/table/NationalityFilter.vue';
import UserTable from '@/components/table/UserTable.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
    // NationalityFilter,
    UserTable
  },
  created() {
    this.$store.dispatch('fetchUsers');
  }
};
</script>
