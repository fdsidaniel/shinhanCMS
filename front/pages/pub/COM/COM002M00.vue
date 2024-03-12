<template>

  <div class="title_box">
    <h2>첨부문서조회</h2>
    <ul class="loc">
      <li>홈</li>
      <li>문서관리</li>
      <li>첨부문서조회</li>
    </ul>
  </div>

  <div class="conbody">

    <h3>검증결과</h3>
    <v-table class="vtable_list inbtn scroll h_401">
      <colgroup>
        <col style="width:80px;"/>
        <col style="width:388px;"/>
        <col style="width:388px;"/>
        <col style="width:150px;"/>
        <col style="width:150px;"/>
      </colgroup>
      <thead>
        <tr>
          <th>NO.</th>
          <th>문서명</th>
          <th>파일명</th>
          <th>검증결과</th>
          <th>검증일시</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>계약서</td>
          <td><nuxt-link to="/pub/COM/COM002M00" class="vlink basic ico_file">계약서.pdf</nuxt-link></td>
          <td><span class="ico_ing">검증 진행중</span></td>
          <td>2023.01.01</td>
        </tr>
        <tr>
          <td>2</td>
          <td>수주계약서</td>
          <td><nuxt-link to="/pub/COM/COM002M00" class="vlink basic ico_file">수주계약서.pdf</nuxt-link></td>
          <td><span class="ico_success">성공</span></td>
          <td>2023.01.01</td>
        </tr>
        <tr>
          <td>3</td>
          <td>수주계약서</td>
          <td><nuxt-link to="/pub/COM/COM002M00" class="vlink basic ico_file">수주계약서.pdf</nuxt-link></td>
          <td><span class="ico_success">성공</span></td>
          <td>2023.01.01</td>
        </tr>
        <tr>
          <td>4</td>
          <td>수주계약서</td>
          <td><nuxt-link to="/pub/COM/COM002M00" class="vlink basic ico_file">수주계약서.pdf</nuxt-link></td>
          <td><span class="ico_success">성공</span></td>
          <td>2023.01.01</td>
        </tr>
        <tr>
          <td>5</td>
          <td>수주계약서</td>
          <td><nuxt-link to="/pub/COM/COM002M00" class="vlink basic ico_file">수주계약서.pdf</nuxt-link></td>
          <td><span class="ico_success">성공</span></td>
          <td>2023.01.01</td>
        </tr>
        <tr>
          <td>6</td>
          <td>수주계약서</td>
          <td><nuxt-link to="/pub/COM/COM002M00" class="vlink basic ico_file">수주계약서.pdf</nuxt-link></td>
          <td><span class="ico_success">성공</span></td>
          <td>2023.01.01</td>
        </tr>
        <tr>
          <td>7</td>
          <td>수주계약서</td>
          <td><nuxt-link to="/pub/COM/COM002M00" class="vlink basic ico_file">수주계약서.pdf</nuxt-link></td>
          <td><span class="ico_success">성공</span></td>
          <td>2023.01.01</td>
        </tr>
        <tr>
          <td>8</td>
          <td>수주계약서</td>
          <td><nuxt-link to="/pub/COM/COM002M00" class="vlink basic ico_file">수주계약서.pdf</nuxt-link></td>
          <td><span class="ico_success">성공</span></td>
          <td>2023.01.01</td>
        </tr>
      </tbody>
    </v-table>

    <h3>검증 요청 건</h3>
    <v-table class="vtable_list inbtn scroll h_300">
      <colgroup>
        <col style="width:80px;"/>
        <col style="width:776px;"/>
        <col style="width:150px;"/>
        <col style="width:150px;"/>
      </colgroup>
      <thead>
        <tr>
          <th>NO.</th>
          <th>파일명</th>
          <th>검증결과</th>
          <th>파일 업로드 일시</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td class="t_left">
            <nuxt-link to="/pub/COM/COM002M00" class="vlink basic v_mid">계약서.pdf</nuxt-link>
            <v-btn class="vbtn btn_viewer" size="small">파일뷰어</v-btn>
            <v-btn class="vbtn btn_file_del" size="small">파일삭제</v-btn>
          </td>
          <td><span class="ico_success">성공</span></td>
          <td>2023.01.01</td>
        </tr>
        <tr>
          <td>2</td>
          <td class="t_left">
            <nuxt-link to="/pub/COM/COM002M00" class="vlink basic v_mid">계약서.pdf</nuxt-link>
            <v-btn class="vbtn btn_viewer" size="small">파일뷰어</v-btn>
            <v-btn class="vbtn btn_file_del" size="small">파일삭제</v-btn>
          </td>
          <td><span class="ico_success">성공</span></td>
          <td>2023.01.01</td>
        </tr>
        <tr>
          <td>3</td>
          <td class="t_left">
            <div class="d_flex a_start">
              <v-file-input v-show="true" id="fileElement" label="파일 업로드하기" v-model="fileupkoad" :rules="fileupkoadRules" class="file_upload small"></v-file-input>
              <v-btn class="vbtn btn_viewer" size="small">파일뷰어</v-btn>
              <v-btn class="vbtn btn_file_del" size="small">파일삭제</v-btn>
            </div>
          </td>
          <td><span class="ico_fail">실패-문서판독불가</span></td>
          <td>2023.01.01</td>
        </tr>
        <tr>
          <td>4</td>
          <td class="t_left">
            <div class="d_flex a_start">
              <v-file-input v-show="true" id="fileElement" label="파일 업로드하기" v-model="fileupkoad" :rules="fileupkoadRules" class="file_upload small"></v-file-input>
              <v-btn class="vbtn btn_viewer" size="small">파일뷰어</v-btn>
              <v-btn class="vbtn btn_file_del" size="small">파일삭제</v-btn>
            </div>
          </td>
          <td><span class="ico_fail">실패-파일깨짐</span></td>
          <td>2023.01.01</td>
        </tr>
        <tr>
          <td>5</td>
          <td class="t_left">
            <div class="d_flex a_start">
              <v-file-input v-show="true" id="fileElement" label="파일 업로드하기" v-model="fileupkoad" :rules="fileupkoadRules" class="file_upload small"></v-file-input>
              <v-btn class="vbtn btn_viewer" size="small">파일뷰어</v-btn>
              <v-btn class="vbtn btn_file_del" size="small">파일삭제</v-btn>
            </div>
          </td>
          <td><span class="ico_fail">실패-문서판독불가</span></td>
          <td>2023.01.01</td>
        </tr>
      </tbody>
    </v-table>

    <div class="btn_btm_wrap">
      <v-btn class="vbtn" size="large">문서 검증요청</v-btn>
    </div>

    <div class="caution_box mt_40">
      <p class="tit">안내 및 유의사항</p>
      <ul>
        <li>문서 확장자는 doc, pdf, jpg, tft, png 로 가능합니다.</li>
        <li>최대 10메가까지 파일 첨부가 가능합니다.</li>
        <li>문서명과 업로드한 파일을 일치하여 파일을 업로드 해주세요.</li>
        <li>파일명을 선택하시면 업로드 하신 파일을 뷰어를 통해 보실 수 있습니다.</li>
      </ul>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

const fileupkoad = ref('')

const fileupkoadRules = [
  (v) => !!v || '업로드된 파일을 다시 확인해주세요.',
  //(v) => (v && v.length >= 3) || 'Name must be at least 3 characters',
]

</script> 