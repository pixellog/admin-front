<template>
  <sub-layout>
    <div class="mx-auto py-5 text-center">
      <img src="/assets/images/img_loading_api.gif" class="x2"/>

      <h4 class="font-weight-bold mt-5">페이지를 찾을 수 없습니다.</h4>

      <p>
        페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다. <br/>
        입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
      </p>

      <b-button size="lg" variant="outline-primary" class="mt-4 px-5" to="/">
        메인
      </b-button>
    </div>
  </sub-layout>
</template>

<script>
import SubLayout from "@/layout/sub-layout";

export default {
  name: 'NotFound',
  components: {SubLayout},
};
</script>
