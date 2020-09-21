import { Module } from 'vuex';
import { GetterTree, MutationTree, ActionTree, ActionContext } from 'vuex';

import { Hero, Field } from '../types';

const namespaced: boolean = true;
const state: Field =  {
  heroes: [],
  alliances: [],
  colors: {
    heartless: '#7fa09a',
    brute: '#8b7765',
    warrior: '#1c67b4',
    demon: '#9e1d74',
    savage: '#b2411a',
    dragon: '#ff511b',
    druid: '#2e6340',
    spirit: '#636aa9',
    summoner: '#f17259',
    insect: '#4c68fc',
    blood_bound: '#791513',
    knight: '#ffe327',
    scaled: '#483fa2',
    human: '#02c89c',
    mage: '#58dde9',
    hunter: '#ff7652',
    primordial: '#008080',
    vigilant: '#5f97d0',
    void: '#695d6a',
    brawny: '#a61b1b',
    deadeye: '#c29315',
    troll: '#9e6e4a',
    assassin: '#7b4c7d',
    healer: '#4fd565',
    warlock: '#e46ed5',
    champion: '#9a80c0',
    magus: '#4d69ff',
    swordsman: '#c29315',
    poisoner: '#008080',
    rogue: '#961f1c',
    fallen: '#e46ed5',
    shaman: '#2e6340',
  },
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
  heroes: (store: Field): Hero[] => store.heroes,
  alliances: (store: Field): string[] => store.alliances,
  countAlliances: (store: Field): any => {
    let alliances: any = [];
    store.heroes.forEach((hero: Hero): void => {
      alliances.push(hero.alliance);
    });

    alliances = [].concat.apply([], alliances);

    return alliances.reduce((object: any, alliance: string): any => {
      object[alliance] = ++object[alliance] || 1;
      return object;
    }, {});
  },
  allianceColor: (store: Field): any => store.colors,
};

export const field: Module<Field, any> = {
  namespaced,
  state,
  mutations,
  actions,
  getters,
};
