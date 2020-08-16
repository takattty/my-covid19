const Store = {
  debug: true,
  state: {
    apiData: {}
  },
  setTotalData(totalData) {
    this.state.apiData = totalData;
  },
  setPrefectureData(prefectureData) {
    this.state.apiData = prefectureData;
  },
  resetPrefectureData() {
    this.state.apiData = {};
  }
};

export default Store;
