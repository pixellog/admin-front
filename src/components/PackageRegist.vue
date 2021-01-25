<template>
  <div class="container-fluid text-left">
    <h5>패키지 상품 등록</h5>
    <h6>기본정보</h6>
    <b-alert show variant="light" class="border py-4">
      <form action="">
        <div class="form-inline ">

          <div class="col-lg-2 col-form-label">사용여부</div>
          <div class="col-lg-4">
            <b-form-group>
              <b-form-radio-group v-model="selected" value="1" :options="Object.assign({},['Y','N'])" name="radio-options"></b-form-radio-group>
            </b-form-group>
          </div>

          <div class="col-lg-2 col-form-label required">베스트여부</div>
          <div class="col-lg-4">
            <b-form-group>
              <b-form-radio-group v-model="selected2" value="1" :options="Object.assign({},['Y','N'])" name="radio-options2"></b-form-radio-group>
            </b-form-group>
          </div>

          <div class="w-100"></div>

          <div class="col-lg-2 col-form-label required">카테고리</div>
          <div class="col-lg-10">
            <b-form-select style="width: 120px;" :value="0" :key="item" :options="Object.assign({},['선택','개인','법인','공통'])"></b-form-select>
          </div>

          <div class="col-lg-2 col-form-label required">패키지명</div>
          <div class="col-lg-10">
            <b-form-input placeholder="최대 15자 권장" class="w-100"></b-form-input>
          </div>

          <div class="col-lg-2 col-form-label required">상품 간략소개</div>
          <div class="col-lg-10">
            <b-form-input placeholder="최대 25자 권장" class="w-100"></b-form-input>
          </div>

          <div class="col-lg-2 col-form-label required">대표이미지(1920x385)</div>
          <div class="col-lg-10 form-inline">
            <b-form-file plain v-model="file1" style="width: 78px; overflow: hidden"></b-form-file>
            <div v-if="file1" class="pl-2">
              {{ file1.name }}
              <b-link class="text-underline ml-2" @click="file1 = null">삭제</b-link>
            </div>
          </div>

          <div class="col-lg-2 col-form-label">태그</div>
          <div class="col-lg-10">
            <b-form-input placeholder="ex) A태그, B태그"></b-form-input>
          </div>
        </div>
      </form>
    </b-alert>

    <h6>패키지 특징</h6>

    <b-row>
      <b-col v-for="item in 3" :key="item">
        <div class="bg-white p-4">
          <h6>특징 {{ item }}</h6>
          <div style="min-height: 180px;" class="p-3">
            <b-icon v-if="item==1" icon="pencil" style="width: 100%;height: 180px;" class="mx-auto p-4"></b-icon>
            <div v-else style="height: 138px;">
              <b-form-file style="width: 78px; overflow: hidden" plain class="mx-auto mt-5"></b-form-file>
              <div class="text-right mt-5">권장사이즈 : 180 x 180</div>
            </div>
          </div>
          <div class="row">
            <div class="col-auto">특징</div>
            <div class="col d-flex">
              <b-form-input class="flex-grow-1 mr-3" placeholder="최대 10자 권장"></b-form-input>
              <div style="width: 50px;" class="text-info">0 자</div>
            </div>
            <div class="w-100"></div>
            <div class="col-auto">상세</div>
            <div class="col d-flex">
              <b-form-textarea class="flex-grow-1 mr-3" placeholder="최대 31자 권장"></b-form-textarea>
              <div style="width: 50px;" class="text-info">0 자</div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>


    <div class="form-inline justify-content-center mt-5">
      <b-button class="btn-primary ml-auto">등록</b-button>
      <b-button class="btn-secondary ml-2">취소</b-button>
      <b-button class="btn-primary ml-2">미리보기</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 1,
      selected2: 1,
      file1: null,
    }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return {text: f.label || f.key, value: f.key};
          });
    },
  },
  mounted() {
    this.totalRows = this.items.length;
  },
  watch: {},
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    onRowSelected(items) {
      this.selected = items;
    },
    expandAdditionalInfo(row) {
      row._showDetails = !row._showDetails;
    },
    toggleAll(items) {
      this.selected = [];
      if (items) {
        for (let i in this.items) {
          this.selected.push(parseInt(i));
        }
      }
    },
  }
}
</script>

<style scoped lang="scss">
.form-inline {
  > [class*="col"] {
    margin-top: 10px;
  }
}
</style>
