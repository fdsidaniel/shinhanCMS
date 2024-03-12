<template>
  
  <!-- popup size width:1000 height:800 -->
  <div class="popup_body">
    <h2 class="poptit">[선택] 개인정보 수집·이용·제공 동의서 <span>타이틀 화면 확인용-실제 팝업 구동시 타이틀 display:none 처리됨</span></h2>

    <div class="agree_box">
      <p class="tit">개인정보 수집·이용·제공 동의서</p>
      <div class="agree_txt">
        <p class="stit">(주) 신한은행 귀중</p>
        <dl class="list">
          <dt>귀 행과의 AICMS 서비스 안내와 관련하여 귀 행이 본인의 개인정보를 수집·이용·제공하는 경우에는 「개인정보 보호법」 등 관계 법령에 따라 본인의 동의가 필요합니다.</dt>
        </dl>

        <dl class="list type2">
          <dt>수집·이용 목적</dt>
          <dd>
            <ul>
              <li><b>AICMS 서비스 정보 및 이벤트 참여기회 제공</b></li>
            </ul>
          </dd>
          <dt>보유 및 이용기간</dt>
          <dd>
            <ul>
              <li><b>개인정보는 서비스 종료일 또는 동의 철회시까지 보유·이용 됩니다.</b></li>
            </ul>
          </dd>
          <dt>기부 권리 및 불이익</dt>
          <dd>개인정보 수집·이용에 관한 동의는 거부하실 수 있으며, 동의 후에도 언제든지 철회 가능합니다. “AICMS 서비스 안내”를 위한 선택적 사항이므로 동의하지 않더라도 서비스 이용에는 제한이 없습니다. 다만, 동의하지 않으시는 경우 “AICMS 서비스 안내”를 제공받지 못할 수 있습니다.</dd>
        </dl>

        <p class="stit">▣ 수집·이용 항목</p>
        <dl class="list type2">
          <dt>개인정보</dt>
          <dd>일반개인정보
            <ul>
              <li>이름, 휴대전화번호, 생년월일(성별), 이메일주소</li>
              <li>서비스 이용기록(화면 이동 내역, 화면 내 클릭 정보, 방문기록 등), 접속 로그(웹 실행방법, 화면정보 등), 쿠키, 접속 IP 주소</li>
            </ul>
          </dd>
        </dl>
        <!-- <div class="agreement">
          <p>위 개인정보 <u>수집·이용</u>에 동의하십니까?</p>
          <div>
            <span>동의하지 않음</span>
            <span>동의함</span>
          </div>
        </div> -->

        <p class="stit">▣ 서비스 안내</p>
        <dl class="list type2">
          <dt>서비스 안내 매체 동의</dt>
          <dd>
            <div class="agreement mt_0">
              <p>전자적 전송매체를 통한 광고성 정보의 수신을 동의하시겠습니까?</p>
              <!-- <div>
                <span>동의하지 않음</span>
                <span>동의함</span>
              </div> -->
             </div>
          </dd>
          <!-- <dt>안내매체 선택</dt>
          <dd>
            <v-table class="vtable_view bg mr_14">
              <colgroup>
                <col style="width:15%;"/>
                <col style="width:15%;"/>
                <col style="width:14%;"/>
                <col style="width:14%;"/>
                <col style="width:14%;"/>
                <col style="width:14%;"/>
                <col style="width:14%;"/>
              </colgroup>
              <tbody>
                <tr>
                  <th>전체</th>
                  <td colspan="6" class="t_center"><b>(동의함 □) 안내매체 전체 (SMS / 카카오톡 / 이메일)</b></td>
                </tr>
                <tr>
                  <th rowspan="2">선택</th>
                  <th>안내매체</th>
                  <th>동의함</th>
                  <th>안내매체</th>
                  <th>동의함</th>
                  <th>안내매체</th>
                  <th>동의함</th>
                </tr>
                <tr>
                  <td class="t_center">SMS</td>
                  <td class="t_center">□</td>
                  <td class="t_center">카카오톡</td>
                  <td class="t_center">□</td>
                  <td class="t_center">이메일</td>
                  <td class="t_center">□</td>
                </tr>
              </tbody>
            </v-table>
          </dd> -->
        </dl>

        <p class="stit">※기존 계약의 유지·관리를 위해 필요한 경우에는 서비스 안내매체 동의 여부와 상관 없이 해당 내용이 안내 및 통지될 수 있습니다.</p>
      </div>
    </div>

    <div class="btm_btn_wrap" v-if="false"><!-- 화면 확인용 - 팝업 구동시 타이틀 display:none 처리됨 -->
      <v-btn class="vbtn">확인</v-btn>
    </div>
  </div>

</template>

<style scoped>
  
</style>

<script setup >


</script> 