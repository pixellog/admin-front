<template>
  <div id="app" class="vh-100 flex-column d-flex">
<!--    <headers/>
    <div class="p-5">
      <b-row>
        <div class="col-2">
          <ul class="list-group">
            <li class="list-group-item" v-for="item in routes" :key="item.path">
              <b-link :to="item.path"> {{ item.title }}</b-link>
            </li>
          </ul>
        </div>
        <div class="col">
          <router-view/>
        </div>
      </b-row>
    </div>
    <footers/>-->
    <router-view/>
  </div>
</template>

<script>
import routes from '@/routes';
// import Headers from "@/layout/header";
// import Footers from "@/layout/footer";
export default {
  name: 'App',
  // components: {Footers, Headers},
  data(){
    return{
      routes
    }
  }
}
</script>
