<template>
  <div class="column sidebar">
    <router-link to="/home"><div class="all-menu"></div></router-link>
    <router-link to="/history"><div class="income-history"></div></router-link>
    <router-link to="/product"><div class="product"></div></router-link>
    <div class="add-menu" @click="$emit('add')">
      <i class="fas fa-plus"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped lang="scss">
  .all-menu{
    background-image: url('../../assets/img/fork.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 35px;
    height: 35px;
    margin: 60px auto;
  }
  .income-history{
    background-image: url('../../assets/img/clipboard.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 40px;
    height: 40px;
    margin: 60px auto;
  }
  .product{
    background-image: url('../../assets/img/search.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 40px;
    height: 40px;
    margin: 60px auto;
  }
  .sidebar{
    width: 60px;
    height: 100vh;
    position: fixed;
    box-shadow: 0px 4px 10px rgba($color: #000000, $alpha: 0.25);
  }
  .menu-order{
    display: flex;
  }
  .add-menu{
    text-align: center;
    font-size: 30px;
    margin: 60px auto;
    color: green;
    cursor: pointer;
  }
</style>
