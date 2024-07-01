<template>
  <div class="max-w-7xl mx-auto">
    <div class="p-4 bg-white rounded-lg border shadow-md sm:p-8">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-bold leading-none text-gray-900">Últimos Usuarios</h3>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200">
          <li v-for="user in users" :key="user.login.uuid" class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img :src="user.picture.thumbnail" alt="Foto" class="w-8 h-8 rounded-full" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate">
                  {{ user.name.first }} {{ user.name.last }}
                </p>
                <p class="text-sm text-gray-500 truncate">
                  {{ user.email }}
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900">
                {{ user.nat }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['users'])
  }
};
</script>
