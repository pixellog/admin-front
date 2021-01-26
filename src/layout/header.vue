<template>
  <header class="sticky-top w-100">
    <b-navbar toggleable="lg" type="dark" variant="primary" class="py-0">
      <div class="container-fluid position-relative">
        <div class="d-flex align-items-center text-white font-weight-bold" style="font-size: 1.2rem;">
          <router-link to="/" class="navbar-brand mr-2"></router-link>어드민
        </div>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav class="ml-xl-5">
          <!-- 데스크톱 버전 -->
          <div class="d-none d-lg-flex pc">
            <router-link
              class="nav-link"
              v-for="menu in routes.slice(0, 8)"
              v-bind:key="menu.id"
              :to="menu.path"
            >
              {{ menu.title }}
            </router-link>
          </div>
          <!-- 모바일 버전 -->
          <b-navbar class="menus d-lg-none mt-3 mobile">
            <router-link
              class="nav-link depth0"
              v-for="menu in routes"
              v-bind:key="menu.id"
              :to="menu.path"
              ><span>{{ menu.title }}</span>
              <!--메뉴 활성화 타입 1 : 기본 라우터링크 -->
              <router-link
                class="nav-link depth1"
                :class="{ icon: menu1.children }"
                v-for="menu1 in menu.children"
                v-bind:key="menu1.id"
                :to="menu1.path"
              >
                <span>{{ menu1.title }}</span>
                <nav v-if="menu1.children">
                  <router-link
                    class="nav-link depth2"
                    :class="{ icon: menu2.children }"
                    v-for="menu2 in menu1.children"
                    v-bind:key="menu2.id"
                    :to="menu2.path"
                  >
                    <span>{{ menu2.title }}</span>
                  </router-link>
                </nav>
              </router-link>
            </router-link>
          </b-navbar>
        </b-collapse>
      </div>
    </b-navbar>
  </header>
</template>
<script>
import routes from '../routes';

export default {
  name : 'headers',
  data: function() {
    return {
      routes,
    };
  },
};
</script>
