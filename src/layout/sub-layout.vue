<template>
  <div class="vh-100 d-flex flex-column">
    <headers/>
    <div class="row no-gutters border">
      <div class="d-none d-lg-block col-lg-2 sidebar">

        <b-navbar class="position-sticky border-bottom menus d-block" style="top: 152px;">
          <router-link class="nav-link depth1 p-2" v-for="menu in routes" :key="menu" :to="menu.path">
            {{ menu.title }}
            <!--            <span>{{ menu1.title }}</span>
                        <nav v-if="menu1.children">
                          <router-link class="nav-link depth2" v-for="menu2 in menu1.children" :key="menu2" :to="{ path: menu2.path }">
                            <span>{{ menu2.title }}</span>
                          </router-link>
                        </nav>-->
          </router-link>
        </b-navbar>

      </div>
      <div class="col-lg-10 content" id="content">
        <div class="mx-5 pb-5">
          <div class="location d-flex justify-content-between">
            <h2>{{ routes[activeIdx].title }}
<!--              <span>{{ routes[activeIdx].title }}</span>
              <span v-for="menu2 in routes[activeIdx].children" :key="menu2">
                <span>{{ menu2.title }}</span>
                <span v-for="menu3 in menu2.children" :key="menu3">
                  <span>{{ menu3.title }}</span>
                  <span v-for="menu4 in menu3.children" :key="menu4">{{ menu4.title }}</span>
                </span>
              </span>-->
            </h2>

            <div class="root">
              > {{ routes[activeIdx].title }}
              <span v-for="menu2 in routes[activeIdx].children" :key="menu2">
                >
                <span>{{ menu2.title }}</span>
                <span v-for="menu3 in menu2.children" :key="menu3">
                  >
                  <span>{{ menu3.title }}</span>
                </span>
              </span>
            </div>
          </div>
          <slot></slot>
        </div>
      </div>
    </div>
    <footers/>
  </div>
</template>

<script>
import routes from '@/routes';
import Footers from "@/layout/footer";
import Headers from "@/layout/header";
import $ from "jquery";

export default {
  name: 'subLayout',
  components: {
    Headers,
    Footers
  },
  data() {
    return {
      routes,
      path: window.location.pathname,
      activeIdx: this.activeIdx,
    };
  },
  mounted() {
    this.getActiveIdxCodePosition();
  },
  methods: {
    getActiveIdxCodePosition: function () {
      let arrPath = $.map(routes, function (el, i) {
        return routes[i].path.split('/')[1];
        /*if (routes[i].topBar)
          return routes[i].path.split('/')[1];*/
      });

      let path = window.location.pathname.split('/')[1];
      let idx;
      $.each(arrPath, function (i) {
        if (this === path) {
          idx = i;
          return false;
        }
      });
      this.activeIdx = idx;
    },
  },
};
</script>
