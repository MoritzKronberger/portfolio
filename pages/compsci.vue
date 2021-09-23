<template>
    <PostList :category="category"/>
</template>

<script>
import PostList from '../components/PostList.vue'
export default {
  //layout: 'project_showcase',
  components: {
    PostList
  },
  data(){
    return {
      category: 'compsci'
    }
  },
  head() {
    return {
      title: 'CompSci',
        meta: [
          { hid: 'compsci-portfolio', name: 'description', content: `List of my computer science projects` }
        ]
    }
  }, 
  transition: { name: 'slideDown', mode: "out-in" }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/css/transitions';
</style>
