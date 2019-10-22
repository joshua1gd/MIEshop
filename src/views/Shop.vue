<template>
  <div class="home">
    <ShopItem :offerings='offerings'/>
  </div>
</template>

<script>
// @ is an alias to /src
import ShopItem from '@/components/ShopItem.vue'


export default {
  name: 'shopitem',
  data(){
    return{
      offerings: [],
    }
  },
  components: {
    ShopItem
  },
  methods: {
    aggregateOfferings(item){
      this.offerings.push(item)
      console.log('this is offerings: ', this.offerings)
    }
  },
  mounted(){
    var listings = db.collection("Offerings").get().then( 
      (snapshot) => {snapshot.docs.forEach(
        (doc) => {
          this.aggregateOfferings(doc.data())
          })});
  }
}
</script>
