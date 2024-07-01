import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    users: [],
    filteredUsers: [],
    searchQuery: '',
    selectedNationalities: []
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
      state.filteredUsers = users;
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
    SET_SELECTED_NATIONALITIES(state, nationalities) {
      state.selectedNationalities = nationalities;
    },
    FILTER_USERS(state) {
      let filtered = state.users;

      if (state.searchQuery) {
        filtered = filtered.filter((user) =>
          `${user.name.first} ${user.name.last}`
            .toLowerCase()
            .includes(state.searchQuery.toLowerCase())
        );
      }

      if (state.selectedNationalities.length) {
        filtered = filtered.filter((user) => state.selectedNationalities.includes(user.nat));
      }

      state.filteredUsers = filtered;
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      const response = await axios.get('https://randomuser.me/api/?results=100');
      commit('SET_USERS', response.data.results);
      commit('FILTER_USERS');
    },
    updateSearchQuery({ commit, dispatch }, query) {
      commit('SET_SEARCH_QUERY', query);
      dispatch('filterUsers');
    },
    updateSelectedNationalities({ commit, dispatch }, nationalities) {
      commit('SET_SELECTED_NATIONALITIES', nationalities);
      dispatch('filterUsers');
    },
    filterUsers({ commit }) {
      commit('FILTER_USERS');
    }
  },
  getters: {
    users: (state) => state.filteredUsers,
    nationalities: (state) => [...new Set(state.users.map((user) => user.nat))]
  }
});

export default store;
