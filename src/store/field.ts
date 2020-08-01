import { Module } from 'vuex';
import { GetterTree, MutationTree, ActionTree, ActionContext } from 'vuex';

import { Hero, Field } from '../types';

const namespaced: boolean = true;
const state: Field =  {
  heroes: [],
  alliances: [],
};
const mutations: MutationTree<Field> = {
  addHero(store: Field, hero: Hero) {
    store.heroes.push(hero);
  },
  removeHero(store: Field, hero: Hero) {
    store.heroes = store.heroes.filter((item: Hero): boolean => {
      return item !== hero;
    });
  },
  addAlliance(store: Field, alliance: string) {
    store.alliances.push(alliance);
  },
  removeAlliance(store: Field, alliance: string) {
    store.alliances = store.alliances.filter((item: string): boolean => {
      return item !== alliance;
    });
  },
};
const actions: ActionTree<Field, any> = {
  addHero(context: ActionContext<Field, any>, hero: Hero) {
    context.commit('addHero', hero);
  },
  removeHero(context: ActionContext<Field, any>, hero: Hero) {
    context.commit('removeHero', hero);
  },
  addAlliance(context: ActionContext<Field, any>, alliance: string) {
    context.commit('addAlliance', alliance);
  },
  removeAlliance(context: ActionContext<Field, any>, alliance: string) {
    context.commit('removeAlliance', alliance);
  },
};
const getters: GetterTree<Field, any> = {
  heroes: (hero: any): Hero[] => hero.heroes,
  alliances: (alliance: any): string[] => alliance.alliances,
};

export const field: Module<Field, any> = {
  namespaced,
  state,
  mutations,
  actions,
  getters,
};
