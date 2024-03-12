<template>

  <div class="title_box">
    <h2>TASK 승인</h2>
    <ul class="loc">
      <li>홈</li>
      <li>협약관리</li>
      <li>TASK 조회</li>
			<li>TASK 숭인</li>
    </ul>
  </div>

  <div class="conbody">

    <div class="step_wrap">
      <div class="step_box">
        <ul class="step_list task active_step_5"><!-- 현재 step 단계 class active_step_1, active_step_2, active_step_3, active_step_4 -->
          <li class="step1">TASK 기본정보</li>
          <li class="step2">TASK 승인정보</li>
          <li class="step3">문서정보</li>
          <li class="step4">담당자 정보</li>
        </ul>
      </div>

      <div class="step_con">

        <h3><span>2023년 차세대 이관 작업 대행 선정 공고 사업</span><div class="right"><span>기간</span>2023.10.10~2024.11.01</div></h3>

				<v-table class="vtable_view bg mt_20">
					<colgroup>
						<col style="width:150px;" />
						<col style="width:281px;" />
						<col style="width:150px;" />
						<col style="width:281px;" />
					</colgroup>
					<tbody>
						<tr>
							<th>PMS 관리번호</th>
							<td>-</td>
							<th>집행 방식 진행 여부</th>
							<td>Y</td>
						</tr>
						<tr>
							<th>수행기관</th>
							<td>김수행기관</td>
							<th>이체 방식</th>
							<td>계좌이체</td>
						</tr>
						<tr>
							<th>사업자등록번호</th>
							<td>123-45-12345</td>
							<th>가상계좌종류</th>
							<td>정부, 민간, 환입</td>
						</tr>
						<tr>
							<th>TASK 명</th>
							<td>개인사업자 신규사업신청을 위한 전자서명법 개정안공고 사업을 시작합니다.</td>
							<th>예산 금액</th>
							<td>1,000,000원</td>
						</tr>
						<tr>
							<th>TASK 기간</th>
							<td>2023-10-10 ~ 2024-10-10</td>
							<th>1회 승인한도금액</th>
							<td>1,000,000원</td>
						</tr>
						<tr>
							<th>TASK 협약 문서</th>
							<td>총 6 건</td>
							<th>1일 승인한도금액</th>
							<td>1,000,000원</td>
						</tr>
					</tbody>
				</v-table>

				<v-table class="vtable_list none_head_line mt_20">
					<colgroup>
						<col style="width:;"/>
						<col style="width:;"/>
					</colgroup>
					<thead>
						<tr>
							<th>회원정보</th>
							<th colspan="2">담당자 권한</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>김신한(88)</td>
							<td>사업 담당자</td>
							<td>지급 담당자</td>
						</tr>
						<tr>
							<td>김신한(88)</td>
							<td></td>
							<td>지급 담당자</td>
						</tr>
						<tr>
							<td>김신한(88)</td>
							<td></td>
							<td>지급 담당자</td>
						</tr>
						<tr>
							<td>김신한(88)</td>
							<td>사업 담당자</td>
							<td></td>
						</tr>
						<tr>
							<td>김신한(88)</td>
							<td>사업 담당자</td>
							<td></td>
						</tr>
					</tbody>
				</v-table>

        <div class="btn_btm_wrap">
          <v-btn class="vbtn blue" size="large">이전</v-btn>
          <v-btn class="vbtn blue" size="large">반려</v-btn>
			    <v-btn class="vbtn" size="large">TASK 승인 완료</v-btn>
        </div>
        
      </div>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

const checkbox1 = ref(false)
const checkbox2 = ref(false)
const checkbox3 = ref(false)
const checkbox4 = ref(false)
const checkbox5 = ref(false)
const checkbox6 = ref(false)
const checkbox7 = ref(false)
const checkbox8 = ref(false)
const checkbox9 = ref(false)
const checkbox10 = ref(false)
const checkbox11 = ref(false)
const checkbox12 = ref(false)

</script> 