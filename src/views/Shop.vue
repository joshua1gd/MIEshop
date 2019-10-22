<template>
  <div class="home">
    <ShopItem msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ShopItem from '@/components/ShopItem.vue'

export default {
  name: 'shopitem',
  components: {
    ShopItem
  }
}
</script>
