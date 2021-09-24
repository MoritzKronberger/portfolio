<template>
    <PostList :category="category"/>
</template>

<script>
import PostList from '../components/PostList.vue'
export default {
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
  }
}
</script>
