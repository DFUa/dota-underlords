import { Module } from 'vuex';
import { GetterTree } from 'vuex';

import { Alliance } from '../types';
import data from '../api/alliance.json';

const namespaced: boolean = true;
const state = data;
const getters: GetterTree<Alliance[], any> = {
  alliances: (store: any) => Object.keys(store),
  allianceInfo: (store: any) => store,
};

export const alliances: Module<any, any> = {
  namespaced,
  state,
  getters,
};
