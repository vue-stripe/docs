<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">MIT Licensed | Copyright © 2016 - present <a href="https://twitter.com/jrtiquez" target="_blank">Joff Tiquez</a></div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
export default {
  components: {
    ParentLayout,
  },
  setup () {
    
  },
}
</script>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>