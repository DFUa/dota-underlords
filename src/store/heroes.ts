import { Module } from 'vuex';
import { GetterTree } from 'vuex';

import { Hero } from '../types';
import data from '../api/data.json';

const namespaced: boolean = true;
const state = data;
const getters: GetterTree<Hero[], any> = {
  heroes: (hero: any): Hero[] => Object.values(hero),
};

export const heroes: Module<any, any> = {
  namespaced,
  state,
  getters,
};
