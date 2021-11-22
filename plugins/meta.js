import Vue from 'vue'
import meta from '../static/meta/meta.json'

if (!Vue.meta) {
  Vue.meta = true
  Vue.mixin({
    asyncData() {
      return { meta }
    },
    head() {
      if (this.metaName) {
        let mta = meta[this.metaName]
        return {
          title: mta.title,
          meta: [{ hid: mta.hid, name: 'description', content: mta.content }],
        }
      }
    },
  })
}
