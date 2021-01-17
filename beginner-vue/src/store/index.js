import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    url: 'http://localhost:8000/home',
    products: null,
    selected: [],
    email: null,
    orders: null,
  },
  mutations: {
    product(state, data) {
      state.products = data;
    },
    order(state, data) {
      state.orders = data;
    },
    cancel(state) {
      state.selected = [];
    },
    emailGet(state, data) {
      state.products = data;
    },
    add(state, data) {
      const items = state.selected.find((item) => item.data.id === data.data.id);
      // console.log(this.item);
      if (!items) {
        state.selected.push(data);
      }
    },
    addQty(state, data) { // eslint-disable-line
      const items = state.selected.find((item) => item.data.id === data.data.id);
      if (items) {
        items.qty += 1;
      }
    },
    reduceQty(state, data) { // eslint-disable-line
      const items = state.selected.find((item) => item.data.id === data.data.id);
      if (items) {
        items.qty -= 1;
      }
    },
  },
  actions: {
    addQty(context, data) {
      context.commit('addQty', data);
    },
    reduceQty(context, data) {
      context.commit('reduceQty', data);
    },
    addOrder(context, data) {
      context.commit('add', data);
    },
    cancelOrder(context) {
      context.commit('cancel');
    },
    getAllItems(context) {
      axios
        .get('http://localhost:8000/products')
        .then((res) => {
          context.commit('product', res.data);
          // console.log(res.data);
        })
        .catch(() => {
          // console.log(error);
        });
    },
    getAllOrders(context) {
      axios
        .get('http://localhost:8000/histories')
        .then((res) => {
          context.commit('order', res.data);
          // eslint-disable-next-line no-console
          console.log(res.data);
        })
        .catch(() => {
          // console.log(error);
        });
    },
    insertProduct(context) {
      axios
        .post('http://localhost:8000/products')
        .then((res) => {
          context.commit('product', res.data);
          // console.log(res.data);
        })
        .catch(() => {
          // console.log(error);
        });
    },
    editProduct(context) {
      axios
        .put('http://localhost:8000/products/:id')
        .then((res) => {
          context.commit('product', res.data);
          // console.log(res.data);
        })
        .catch(() => {
          // console.log(error);
        });
    },
    deleteProduct(context) {
      axios
        .delete('http://localhost:8000/products/:id')
        .then((res) => {
          context.commit('product', res.data);
          // console.log(res.data);
        })
        .catch(() => {
          // console.log(error);
        });
    },
  },
  modules: {
  },
});
