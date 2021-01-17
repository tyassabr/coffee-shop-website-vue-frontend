<template>
  <div>
    <div class="container-fuild">
      <div class="flex-row">
        <Sidebar />
        <div class="flex-column body">
          <div class="flex-row head">
            <NavMenu class="navbar"/>
          </div>
          <div class="product-container">
            <TableProducts @event-update="handleUpdate" @event-delete="handleDelete"/>
          </div>
        </div>
      </div>
    </div>
    <AddItem v-show="modalActive" :data="dataModal" @fire-event="handleEventModal" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import NavMenu from '../components/base/NavMenu.vue';
import Sidebar from '../components/base/Sidebar.vue';
import TableProducts from '../components/base/TableProduct.vue';
import AddItem from '../components/module/AddItem.vue';

export default {
  name: 'Products',
  components: {
    NavMenu,
    Sidebar,
    TableProducts,
    AddItem,
  },
  data: () => ({
    modalActive: false,
    dataModal: {
      id: null,
      name: '',
      image: null,
      price: '',
      date: 1,
      id_category: 0,
    },
  }),
  methods: {
    ...mapActions(['getProducts', 'insertProduct', 'editProduct', 'deleteProduct']),
    toggleModal() {
      this.modalActive = !this.modalActive;
      if (!this.modalActive) {
        this.clearModal();
      }
    },
    handleEventModal() {
      // eslint-disable-next-line no-unused-expressions
      this.dataModal.id ? this.updateProduct() : this.addProduct();
    },
    updateProduct() {
      const data = new FormData();
      data.append('name', this.dataModal.name);
      data.append('image', this.dataModal.image);
      data.append('price', this.dataModal.price);
      data.append('status', this.dataModal.date);
      data.append('id_category', this.dataModal.id_category);
      const container = {
        id: this.dataModal.id,
        data,
      };
      this.editProduct(container)
        .then(() => {
          this.clearModal();
          this.getProducts();
          this.$toast.success('Update Success.');
        })
        .catch(() => {
          this.$toast.error('Update Failed.');
        });
    },
    handleUpdate(data) {
      this.modalActive = true;
      this.dataModal.id = data.id;
      this.dataModal.name = data.name;
      this.dataModal.image = data.image;
      this.dataModal.price = data.price;
      this.dataModal.date = data.date;
      this.dataModal.idCategory = data.id_category;
    },
    handleDelete(id) {
      this.$toast.success('Delete Success.');
      this.deleteProduct(id);
      this.getProducts();
    },
    clearModal() {
      this.dataModal.id = null;
      this.dataModal.name = '';
      this.dataModal.image = null;
      this.dataModal.price = '';
      this.dataModal.date = '';
      this.dataModal.id_category = 0;
      this.modalActive = false;
    },
    addProduct() {
      const data = new FormData();
      data.append('name', this.dataModal.name);
      data.append('image', this.dataModal.image);
      data.append('price', this.dataModal.price);
      data.append('date', this.dataModal.date);
      data.append('id_category', this.dataModal.id_category);
      this.insertProduct(data)
        .then(() => {
          this.clearModal();
          this.getProducts();
          this.$toast.success('Insert Success.');
        })
        .catch(() => {
          this.$toast.error('Insert Failed.');
        });
    },
  },
  computed: {
    ...mapGetters({
      products: 'products',
    }),
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style scoped>
.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.btn-container {
    text-align: left;
    margin-bottom: 20px;
}
.navbar {
    width: 100%;
}
.body {
  width: 100%;
}
.head {
  box-shadow: 3px 1px 5px rgba(0, 0, 0, 0.15);
}
.product-container {
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  padding: 15px;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.15);
  background-color: #efefef;
}
@media screen and (min-width: 200px) and (max-width: 960px) {
  .product-container {
    width: 99%;
    height: auto;
  }
}
</style>
