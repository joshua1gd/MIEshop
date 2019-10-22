<template>
  <div class="home">
    <ShopItem v-show='sorted' :offerings='offerings'/>
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
      sorted: false
    }
  },
  components: {
    ShopItem
  },
  methods: {
    aggregateOfferings(item){
      this.offerings.push(item)
      console.log('this is offerings: ', this.offerings)
    },
    sortOfferingsByTime(offerings){
      offerings.sort((a,b) => {a.time > b.time})
    }
  },
  mounted(){
    var listings = db.collection("Offerings").get().then( 
      (snapshot) => {snapshot.docs.forEach(
        (doc) => {
          this.aggregateOfferings(doc.data())
          })}
      )
      .then(() => {
        this.sortOfferingsByTime(this.offerings)
        this.sorted=true
        });
  }
}
</script>
