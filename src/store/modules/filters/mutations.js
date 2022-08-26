import { mutation_filter_types } from "./mutation_types";

export const mutations = {
  [mutation_filter_types.SET_FILTER]: (state, filter) => {
    state.filterBy = filter;
  },
};
