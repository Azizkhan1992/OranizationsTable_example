import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    AllData: [
      {
        form1: {
          inn: 11111111111111,
          lNames: "IT-Park",
          name: "unknown",
          region: 1,
        },
        form2: {
          address: "Юнусобод",
          date: "08/03/2019",
          director: "Тешаев Болта",
          isNew: false,
          organization: "2",
        },
        form3: {
          email: "itp@gmail.com",
          phone: "998996070011",
          sayt: "itpark.uz",
        },
        form4: {
          account: "1429583-9349424-535623",
          accountName: "IT-Park",
          bankName: "1",
        },
      },
    ],
    isAuthorized: false,
    name: "",
    isHeader: true,
    regions: [
      {
        id: 1,
        name: "Тошкент",
      },
      {
        id: 2,
        name: "Самарқанд",
      },
      {
        id: 3,
        name: "Бухоро",
      },
      {
        id: 4,
        name: "Хоразм",
      },
      {
        id: 5,
        name: "Қўқон",
      },
      {
        id: 6,
        name: "Қашқадарё",
      },
      {
        id: 7,
        name: "Навоий",
      },
    ],
    organizationTypes: [
      {
        id: 1,
        name: "Давлат ташкилотлари",
      },
      {
        id: 2,
        name: "Aксионерлик жамияти",
      },
      {
        id: 3,
        name: "Масъулияти чекланган жамият",
      },
      {
        id: 4,
        name: "Халқаро ташкилот",
      },
      {
        id: 5,
        name: "Хусусий корхона",
      },
    ],
    bankNames: [
      {
        id: 1,
        name: "NBU",
      },
      {
        id: 2,
        name: "OFB",
      },
      {
        id: 3,
        name: "Hamkor",
      },
      {
        id: 4,
        name: "Xalq",
      },
      {
        id: 5,
        name: "QQB",
      },
      {
        id: 6,
        name: "Turon",
      },
      {
        id: 7,
        name: "Kapital",
      },
    ],
  },
  actions: {},
  mutations: {
    checkAuthorize(state, params) {
      state.isAuthorized = params.isAuthorize;
      state.name = params.name;
      // console.log(state.name)
    },
    checkHeader(state, params) {
      state.isHeader = params;
    },

    changeAllData(state, params) {
      state.AllData.push(params);
    },
  },
  getters: {},
});
