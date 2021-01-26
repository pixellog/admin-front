<template>
  <div class="vh-100 d-flex flex-wrap">
    <headers></headers>
    <slot></slot>
    <footers></footers>
  </div>
</template>

<script>
import headers from './header.vue';
import footers from './footer.vue';

export default {
  components: {
    headers,
    footers,
  },
};
</script>
