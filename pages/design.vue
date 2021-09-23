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
      title: 'Design',
        meta: [
          { hid: 'desc-design', name: 'description', content: `List of my design projects` }
        ]
    }
  }, 
  transition: { name: 'slideDown', mode: "out-in" }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/css/transitions';
</style>
