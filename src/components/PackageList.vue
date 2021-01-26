<template>
  <div class="container-fluid text-left">
    <h5>패키지 상품 관리</h5>

    <b-alert show variant="light" class="border py-4">
      <form action="">
        <div class="form-inline">
          <div class="col-auto">검색어</div>
          <div class="col input-group">
            <select name="" id="" class="custom-select flex-grow-0" style="width: 120px;">
              <option v-for="(item,index) in ['전체','패키지코드','카테고리','상품명']" :value="index" :key="index">{{ item }}</option>
            </select>
            <input type="text" class="form-control" placeholder="키워드를 입력해주세요.">
            <div class="input-group-append">
              <b-button type="submit" class="btn btn-info">검색</b-button>
            </div>
          </div>
        </div>
      </form>
    </b-alert>

    <b-table responsive hover :items="items" :fields="fields" class="border-bottom">
      <template #cell(패키지명)="data">
        <a class="text-truncate d-block" style="width: 300px;">{{ data.value }}</a>
      </template>
      <template #cell(상품_간략소개)="data">
        <div class="text-truncate" style="width: 300px;">{{ data.value }}</div>
      </template>
      <template #cell(등록일시)="data">
        {{ data.value }}<br>
        {{ data.item.수정일시 }}
      </template>
      <template #cell(수정)>
        <b-button size="sm" class="btn btn-light">
          <b-icon icon="pencil"></b-icon>
        </b-button>
      </template>
    </b-table>

    <div class="form-inline">
      <b-button variant="primary" size="lg" class="col-lg-auto ml-auto">패키지 등록</b-button>
    </div>
  </div>
</template>

<script>
const items = [
  {
    코드: 'P000001',
    카테고리: '공통',
    패키지명: '다이렉트 자동차 보험료 비교 패키지 다이렉트 자동차 보험료 비교 패키지 ',
    상품_간략소개: '차량번호만으로 조회하는 간편한 자동차보험 서비스! 차량번호만으로 조회하는 간편한 자동차보험 서비스!',
    등록일시: '2019-08-25 16:31:32',
    수정일시: '2019-08-26 16:31:32',
    베스트여부: 'N',
    사용여부: 'Y',
  },
  {
    코드: 'P000001',
    카테고리: '개인',
    패키지명: '다이렉트 자동차 보험료 비교 패키지 다이렉트 자동차 보험료 비교 패키지 ',
    상품_간략소개: '차량번호만으로 조회하는 간편한 자동차보험 서비스! 차량번호만으로 조회하는 간편한 자동차보험 서비스!',
    등록일시: '2019-08-25 16:31:32',
    수정일시: '2019-08-27 16:31:32',
    베스트여부: 'N',
    사용여부: 'Y',
  },
  {
    코드: 'P000001',
    카테고리: '법인',
    패키지명: '다이렉트 자동차 보험료 비교 패키지 다이렉트 자동차 보험료 비교 패키지 ',
    상품_간략소개: '차량번호만으로 조회하는 간편한 자동차보험 서비스! 차량번호만으로 조회하는 간편한 자동차보험 서비스!',
    등록일시: '2019-08-25 16:31:32',
    수정일시: '2019-08-28 16:31:32',
    베스트여부: 'N',
    사용여부: 'Y',
  }
];
export default {
  data() {
    return {
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 20, 50, 100],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      fields: [
        {sortable: true, key: '코드',},
        {sortable: true, key: '카테고리', tdClass: 'text-center'},
        {sortable: true, key: '패키지명'},
        {sortable: true, key: '상품_간략소개'},
        {sortable: !true, key: '등록일시', label: '등록일시/수정일시'},
        {sortable: true, key: '베스트여부', tdClass: 'text-center'},
        {sortable: true, key: '사용여부', tdClass: 'text-center'},
        {sortable: !true, key: '수정'}
      ],
      items: items
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
