<template>
  <div>
    <ProgressBar />
    <div class="task-header">
      <span class="task-header-left">5</span>
      <div class="task-header-right">
        <span
          :class="[getFilter === 'all' ? 'active-item' : '', 'filter-item']"
          @click="handleChangeFilter('all', $event)"
          >ALL</span
        >
        <span
          :class="[getFilter === 'active' ? 'active-item' : '', 'filter-item']"
          @click="handleChangeFilter('active', $event)"
          >ACTIVE</span
        >
        <span
          :class="[
            getFilter === 'completed' ? 'active-item' : '',
            'filter-item',
          ]"
          @click="handleChangeFilter('completed', $event)"
          >COMPLETED</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { mutation_filter_types } from "../../store/modules/filters/mutation_types";

import ProgressBar from "./ProgressBar.vue";
export default {
  name: "FilterTodo",
  components: { ProgressBar },
  computed: {
    ...mapGetters(["getFilter"]),
  },
  methods: {
    ...mapMutations([mutation_filter_types.SET_FILTER]),
    //  ...mapMutations({
    //   add: 'increment' // map `this.add()` to `this.$store.commit('increment')`
    // }),
    handleChangeFilter(filterBy) {
      this[mutation_filter_types.SET_FILTER](filterBy);
    },
  },
};
</script>

<style lang="scss" scoped></style>
