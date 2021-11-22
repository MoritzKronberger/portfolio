<template>
  <a :href="this.href">{{ this.desc }}</a>
</template>

<script>
export default {
  props: {
    href: {
      required: true,
    },
    desc: {
      required: true,
    },
  },
}
</script>
