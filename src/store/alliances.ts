import { Module } from 'vuex';
import { GetterTree } from 'vuex';

import { Alliance } from '../types';
import data from '../api/alliance.json';

const namespaced: boolean = true;
const state = data;
const getters: GetterTree<Alliance[], any> = {
  alliances: (alliance: any) => Object.keys(alliance),
};

export const alliances: Module<any, any> = {
  namespaced,
  state,
  getters,
};
