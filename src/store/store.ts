import Vue from 'vue';
import Vuex from 'vuex';

import { heroes } from './heroes';
import { alliances } from './alliances';
import { field } from './field';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    heroes,
    alliances,
    field,
  },
});
