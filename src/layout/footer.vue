<template>
  <footer class="footer w-100 mt-auto">
    <div class="container-fluid d-md-flex d-block align-items-center py-3">
      <a class="nav-link" href="https://codef.io" target="_blank">CODEF API</a>
      <a class="nav-link" href="https://developer.codef.io" target="_blank">CODEF API 개발가이드</a>
      <address class="ml-md-auto px-3">© CODEF CO., Ltd. All right reserved.</address>
    </div>
  </footer>
</template>
<script>
import routes from '../routes.js';

export default {
  name : 'footers',
  data: function() {
    return {
      routes,
    };
  },
};
</script>
