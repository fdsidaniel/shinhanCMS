<template>

  <div class="title_box">
    <h2>공지사항</h2>
    <ul class="loc">
      <li>홈</li>
      <li>고객센터</li>
      <li>공지사항</li>
    </ul>
  </div>

  <div class="conbody">

    <v-table class="vtable_view">
      <tbody>
        <tr>
            <th>제목</th>
            <td>시스템 점검 안내</td>
        </tr>        
        <tr>
            <th>첨부파일</th>
            <td>
              <nuxt-link to="/pub/NOT/NOT001S01" class="vlink file v_mid">파일명.pdf</nuxt-link>
              <v-btn class="vbtn line btn_file" size="small">파일첨부</v-btn>
              <v-btn class="vbtn btn_file_del" size="small">삭제</v-btn>
            </td>
        </tr>
        <tr>
            <td colspan="2">
              시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내시스템 점검 안내 시스템 점검 안내
              시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내시스템 점검 안내 시스템 점검 안내
              시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내시스템 점검 안내 시스템 점검 안내
              시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내시스템 점검 안내 시스템 점검 안내
              시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내시스템 점검 안내 시스템 점검 안내
              시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내 시스템 점검 안내시스템 점검 안내 시스템 점검 안내
            </td>
        </tr>
      </tbody>
    </v-table>

    <div class="btn_btm_wrap">
        <v-btn class="vbtn blue" size="large">목록</v-btn>
        <v-btn class="vbtn blue" size="large">삭제</v-btn>
        <v-btn class="vbtn" size="large">수정</v-btn>
    </div>

    <v-table class="vtable_view prev_next">
      <tbody>
        <tr>
            <th>이전글</th>
            <td class="nothing">이전글이 없습니다.</td>
        </tr>
        <tr>
            <th>다음글</th>
            <td><nuxt-link to="/pub/NOT/NOT001S01" class="vlink txt">시스템 점검 안내.</nuxt-link></td>
        </tr>
      </tbody>
    </v-table>

  </div>

</template>

<style scoped>
  
</style>

<script setup >


</script> 