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
      category: 'design',
      metaName: 'design'
    }
  }
}
</script>
