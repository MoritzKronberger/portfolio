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
      category: 'design'
    }
  },
  head() {
    return {
      title: 'Design'
    }
  }
}
</script>

<style>

</style>