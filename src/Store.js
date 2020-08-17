import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    apiData: {}
  },
  mutations: {
    setTotalData(state, totalData) {
      state.apiData = totalData;
    },
    setPrefectureData(state, prefectureData) {
      state.apiData = prefectureData;
      // console.log("success set Data");
      // console.log(state.apiData);
    },
    resetPrefectureData(state) {
      state.apiData = {};
      // console.log("success reset Data");
    }
  }
});

export default Store;
