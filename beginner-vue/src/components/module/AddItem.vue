<template>
  <!-- Modal Add Item -->
  <div class="modal modal-item">
    <div class="modal-background"></div>
    <div class="modal-card">
      <form @submit="addItem" class="modal-card-body">
        <div class="modal-item-header">
          Add Item
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Name</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Product Name"
                v-model="name" required>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Image</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Input Url"
                v-model="image" required>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Price</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Product Price"
                v-model="price" required>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Category</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
              <input class="input" type="text" placeholder="Product Category"
              v-model="id_category" required>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-item-button">
          <button class="button button-item bg-pink" @click="cancel">Cancel</button>
          <button class="button button-item bg-blue" @click="addItem">add</button>
          <button class="button button-item bg-blue" @click="$emit('fire-event')">add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddItem',
  data() {
    return {
      name: null,
      price: null,
      product_image: null,
      id_category: null,
    };
  },
  methods: {
    cancel() {
      const receipt = document.querySelector('.modal-item');
      receipt.classList.toggle('is-active');
    },
    addItem() {
      const form = new FormData();
      form.append('name', this.name);
      form.append('price', this.price);
      form.append('image', this.image);
      form.append('id_category', this.id_category);
      form.append('date', '2020-07-12');
      axios
        .post('http://localhost:8000/products', form)
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res.data);
        })
        .catch(() => {
          // console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="scss">
  .modal-card-body{
    border-radius: 6px;
  }
  .modal-item-button{
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;
  }
  .button-item{
    width: 85px;
  }
  .field-label label{
    text-align: left;
  }
  .modal-item-header{
    font-size: 1.5em;
    margin-bottom: 30px;
  }
  .bg-pink{
    margin-right: 10px;
  }
</style>
