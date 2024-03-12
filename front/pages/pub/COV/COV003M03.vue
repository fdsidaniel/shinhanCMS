<template>

  <div class="title_box">
    <h2>사업 신규등록</h2>
    <ul class="loc">
      <li>홈</li>
      <li>협약관리</li>
      <li>사업 신규등록</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="step_wrap">
      <div class="step_box">
        <ul class="step_list task active_step_3"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3, active_step_4 -->
          <li class="step1">TASK 기본정보</li>
          <li class="step2">TASK 승인정보</li>
          <li class="step3">문서정보</li>
          <li class="step4">담당자 정보</li>
        </ul>
      </div>

      <div class="step_con">

        <div class="row">
          <div class="tit">사업비 계좌 정보를 확인하세요.</div>
          <div class="con">
            <v-table class="vtable_list inbtn scroll h_299"><!-- 5 line h_299 ,  10 line h_554 -->
              <colgroup>
                <col style="width:80px;"/>
                <col style="width:316px;"/>
                <col style="width:316px;"/>
                <col style="width:150px;"/>
              </colgroup>
              <thead>
                <tr>
                  <th>NO.</th>
                  <th>문서명</th>
                  <th>파일명</th>
                  <th>검증결과</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>협약서</td>
                  <td><nuxt-link to="/pub/COV/COV003M03" class="vlink basic ico_file">보증보험확인서.pdf</nuxt-link></td>
                  <td><span class="ico_success">검증완료</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>협약서</td>
                  <td><nuxt-link to="/pub/COV/COV003M03" class="vlink basic ico_file">보증보험확인서.pdf</nuxt-link></td>
                  <td><span class="ico_success">검증완료</span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>협약서</td>
                  <td><nuxt-link to="/pub/COV/COV003M03" class="vlink basic ico_file">인력확인서.pdf</nuxt-link></td>
                  <td><span class="ico_success">검증완료</span></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>협약서</td>
                  <td><nuxt-link to="/pub/COV/COV003M03" class="vlink basic ico_file">보증보험확인서.pdf</nuxt-link></td>
                  <td><span class="ico_success">검증완료</span></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>협약서</td>
                  <td><nuxt-link to="/pub/COV/COV003M03" class="vlink basic ico_file">보증보험확인서.pdf</nuxt-link></td>
                  <td><span class="ico_success">검증완료</span></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>협약서</td>
                  <td><nuxt-link to="/pub/COV/COV003M03" class="vlink basic ico_file">보증보험확인서.pdf</nuxt-link></td>
                  <td><span class="ico_success">검증완료</span></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>협약서</td>
                  <td><nuxt-link to="/pub/COV/COV003M03" class="vlink basic ico_file">보증보험확인서.pdf</nuxt-link></td>
                  <td><span class="ico_success">검증완료</span></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>협약서</td>
                  <td><nuxt-link to="/pub/COV/COV003M03" class="vlink basic ico_file">보증보험확인서.pdf</nuxt-link></td>
                  <td><span class="ico_success">검증완료</span></td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>협약서</td>
                  <td><nuxt-link to="/pub/COV/COV003M03" class="vlink basic ico_file">보증보험확인서.pdf</nuxt-link></td>
                  <td><span class="ico_success">검증완료</span></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>협약서</td>
                  <td><nuxt-link to="/pub/COV/COV003M03" class="vlink basic ico_file">보증보험확인서.pdf</nuxt-link></td>
                  <td><span class="ico_success">검증완료</span></td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>협약서</td>
                  <td><nuxt-link to="/pub/COV/COV003M03" class="vlink basic ico_file">보증보험확인서.pdf</nuxt-link></td>
                  <td><span class="ico_success">검증완료</span></td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </div>

        <div class="btn_btm_wrap">
          <v-btn class="vbtn blue" size="large">이전</v-btn>
          <v-btn class="vbtn" size="large">다음</v-btn>
        </div>
        
      </div>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >



</script> 