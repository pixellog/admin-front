<template>
  <div id="app">
    <PackageRegist></PackageRegist>
    <PackageList></PackageList>
  </div>
</template>

<script>
import PackageList from './components/PackageList.vue'
import PackageRegist from './components/PackageRegist.vue'
export default {
  name: 'App',
  components: {
    PackageList,
    PackageRegist
  }
}
</script>
