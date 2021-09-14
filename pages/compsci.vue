<template>
  <main>
      <PostList :category="category"/>
  </main>
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
  }
}
</script>

<style>

</style>