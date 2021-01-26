<template>
  <div class="container-fluid text-left py-5">
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
            <b-form-input placeholder="최대 15자" v-model="text" :state="text.length <= 15" class="w-100"></b-form-input>
          </div>

          <div class="col-lg-2 col-form-label required">상품 간략소개</div>
          <div class="col-lg-10">
            <b-form-input placeholder="최대 25자" v-model="text" :state="text.length <= 25" class="w-100"></b-form-input>
          </div>

          <div class="col-lg-2 col-form-label required">대표이미지(1920x385)</div>
          <div class="col-lg-10 form-inline">
            <b-form-file plain v-model="file1" style="width: 80px; overflow: hidden"></b-form-file>
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

    <h6 class="mt-5">패키지 특징</h6>

    <b-row>
      <b-col v-for="item in 3" :key="item">
        <div class="bg-white p-4">
          <!--          <h6>특징 {{ item }}</h6>-->
          <div class="py-3 text-center">
            <div v-if="item==1">
              <img src="https://picsum.photos/id/1/180/180" alt="">
              <div class="text-right mt-2">
                <small>https://picsum.photos/id/1/180/180.png</small>
                <b-icon icon="trash" class="ml-2"></b-icon>
              </div>
            </div>
            <div v-else>
              <div style="height: 180px;" class="bg-muted mx-auto d-flex align-items-center">
                <b-form-file style="width: 80px; overflow: hidden" plain class="mx-auto"></b-form-file>
              </div>
              <div class="text-right mt-2 small pt-1">권장사이즈 : 180 x 180</div>
            </div>
          </div>
          <b-row>
            <div class="col-auto" style="width: 76px;">특징 {{ item }}</div>
            <div class="col d-flex">
              <b-form-input class="flex-grow-1" placeholder="최대 10자" v-model="text" :state="text.length <= 10"></b-form-input>
              <!--              <div style="width: 50px;" class="ml-3 text-info small">{{ text.length }} 자</div>-->
            </div>
            <div class="w-100"></div>
            <div class="col-auto" style="width: 76px;">상세</div>
            <div class="col d-flex">
              <b-form-textarea class="flex-grow-1" placeholder="최대 31자" v-model="text" :state="text.length <= 31"></b-form-textarea>
              <!--              <div style="width: 50px;" class="ml-3 text-info small">{{ text.length }} 자</div>-->
            </div>
          </b-row>
        </div>
      </b-col>
    </b-row>

    <h6 class="mt-5">활용예시</h6>

    <b-row v-for="item in 2" :key="item" class="mb-4 bg-white no-gutters p-4">
      <div class="col-lg-auto" style="width: 528px;">
        <div v-if="item==1">
          <img src="https://picsum.photos/id/1/528/340" alt="">
          <div class="text-right mt-2">
            <small>https://picsum.photos/id/1/528/340.png</small>
            <b-icon icon="trash" class="ml-2"></b-icon>
          </div>
        </div>
        <div v-else>
          <div style="height: 340px; width: 528px;" class="bg-muted d-flex align-items-center">
            <b-form-file style="width: 80px; overflow: hidden" plain class="mx-auto"></b-form-file>
          </div>
          <div class="text-right mt-2 small">권장사이즈 : 528 x 340</div>
        </div>
      </div>
      <div class="col flex-grow-1 pl-lg-4">
        <h5 class="text-dark mb-4">예시 {{ item }}</h5>
        <b-row>
          <div class="col-auto">제목</div>
          <div class="col d-flex">
            <b-form-input class="flex-grow-1 mr-3" placeholder="최대 10자" v-model="text" :state="text.length <= 10"></b-form-input>
            <!--            <div style="width: 50px;" class="text-info small">0 자</div>-->
          </div>
          <div class="w-100 mt-2"></div>
          <div class="col-auto">내용</div>
          <div class="col d-flex">
            <b-form-textarea class="flex-grow-1 mr-3" placeholder="최대 31자" v-model="text" :state="text.length <= 31" rows="5"></b-form-textarea>
            <!--            <div style="width: 50px;" class="text-info small">0 자</div>-->
          </div>
        </b-row>
      </div>
    </b-row>

    <div class="form-inline">
      <b-button variant="primary" class="ml-auto">추가</b-button>
    </div>


    <div class="form-inline mt-5">
      <h6>API 목록</h6>
      <b-button variant="primary" class="ml-auto">상품명 직접입력</b-button>
      <b-button variant="primary" class="ml-2">API선택</b-button>
    </div>

    <table class="table border-bottom mt-3 text-center">
      <thead>
      <tr>
        <th v-for="item in ['상품코드','상품이름','카테고리','하위 카테고리','개발가이드','제공데이터','삭제']" :key="item">{{ item }}</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>KR_BK_KF_001</td>
        <td>현금영수증 사용내역</td>
        <td>은행</td>
        <td>저축은행</td>
        <td>확인</td>
        <td class="w-40">
          <b-form-input placeholder="최대 31자" maxlangth="31" v-model="text" :state="text.length <= 31"></b-form-input>
        </td>
        <td>
          <b-icon icon="trash"></b-icon>
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <b-form-input></b-form-input>
        </td>
        <td>
          <b-form-select value="0" :options="Object.assign({},['선택','은행','카드','...'])"></b-form-select>
        </td>
        <td>
          <b-form-select value="0" :options="Object.assign({},['선택','은행','카드','...'])"></b-form-select>
        </td>
        <td></td>
        <td>
          <b-form-input placeholder="최대 31자" max="31" v-model="text" :state="text.length <= 31"></b-form-input>
        </td>
        <td>
          <b-icon icon="trash"></b-icon>
        </td>
      </tr>
      </tbody>
    </table>


    <div class="form-inline mt-5">
      <h6>활용사례</h6>
      <b-button variant="primary" class="ml-auto">추가</b-button>
    </div>

    <ol>
      <li v-for="item in 3" :key="item">asdasd.PNG
        <b-icon icon="trash"></b-icon>
      </li>
    </ol>


    <div class="form-inline justify-content-center mt-5">
      <b-button size="lg" variant="primary" class="ml-auto">등록</b-button>
      <b-button size="lg" variant="secondary" class="ml-2">취소</b-button>
      <b-button size="lg" variant="primary" class="ml-2" href="https://codef.io/#/service/package/view/P000002" target="_blank">미리보기</b-button>
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
      text: ''
    }
  },
}
</script>

<style scoped lang="scss">
.form-inline {
  > [class*="col"] {
    margin-top: 10px;
  }
}

.btn {
  padding-left: 30px;
  padding-right: 30px;
}
</style>
