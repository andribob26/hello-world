<template>
  <div>
    <p>{{ donecount }}</p>
    <v-btn @click="add" elevation="2">click</v-btn>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: function () {
    console.log(this.$store.state.count);
    return {
      coba: "ok",
    };
  },
  computed: {
    ...mapGetters({
      donecount: "donecount",
    }),
  },
  methods: {
    ...mapActions({
      add: "increment",
    }),
  },
  // created:function() {
  //   console.log(this.$store);
  // }
  // computed:{
  //   testing: ()=>{
  //     return this.$store.state.count
  //   }
  // }
};
</script>

<style>
</style>