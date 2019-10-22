<template>
  <b-container>
    <b-card class='m-4' v-for='offer in offerings' bg-variant="dark" text-variant="white" :title="offer.Title" :header="offer.Name" header-tag="header" :footer="offer.Price" footer-tag="footer" :key='offer.title'>
      <b-card-text>
        {{offer.Description}}
      </b-card-text>
      <!-- <b-button href="#" variant="primary">Do Something</b-button> -->
    </b-card>
  </b-container>
</template>

<script>
export default {
  props: {
    offerings: {
      type: Array
    }
  }
}
</script>

<style>

</style>
