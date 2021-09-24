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
      category: 'design'
    }
  },
  head() {
    return {
      title: 'Design',
        meta: [
          { hid: 'desc-design', name: 'description', content: `List of my design projects` }
        ]
    }
  }
}
</script>
