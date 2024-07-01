// src/composables/useUsers.ts
import { ref, computed } from 'vue';
import axios from 'axios';
import type { User, ApiResponse } from '@/types';

export function useUsers() {
  const users = ref<User[]>([]);
  const filteredUsers = ref<User[]>([]);
  const searchQuery = ref<string>('');
  const selectedNationalities = ref<string[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<ApiResponse>('https://randomuser.me/api/?results=100');
      users.value = response.data.results;
      filteredUsers.value = response.data.results;
      console.log(' filteredUsers.value ', filteredUsers.value);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const filterUsers = () => {
    let filtered = users.value;

    if (searchQuery.value) {
      filtered = filtered.filter((user) =>
        `${user.name.first} ${user.name.last}`
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase())
      );
    }

    if (selectedNationalities.value.length) {
      filtered = filtered.filter((user) => selectedNationalities.value.includes(user.nat));
    }

    filteredUsers.value = filtered;
  };

  const updateSearchQuery = (query: string) => {
    searchQuery.value = query;
    filterUsers();
  };

  const updateSelectedNationalities = (nationalities: string[]) => {
    selectedNationalities.value = nationalities;
    filterUsers();
  };

  const nationalities = computed(() => [...new Set(users.value.map((user) => user.nat))]);

  return {
    users: filteredUsers,
    fetchUsers,
    updateSearchQuery,
    updateSelectedNationalities,
    nationalities,
    searchQuery,
    selectedNationalities
  };
}
