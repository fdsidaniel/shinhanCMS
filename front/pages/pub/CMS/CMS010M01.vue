<template>

  <div class="title_box">
    <h2>전문 송/수신 이력 관리</h2>
    <ul class="loc">
      <li>시스템 관리</li>
      <li>서비스 관리</li>
      <li>전문 송/소신 관리(조회)</li>
    </ul>
  </div>

  <div class="conbody">

    <v-table class="vtable_view bg">
        <colgroup>
            <col style="width:;"/>
            <col style="width:;"/>
            <col style="width:;"/>
            <col style="width:;"/>
        </colgroup>
        <tbody>
            <tr>
                <th>서비스명</th>
                <td colspan="3">당행 입금이체</td>
            </tr>
            <tr>
                <th>송신/수신 구분</th>
                <td colspan="3">송신</td>
            </tr>
            <tr>
                <th>생성일시</th>
                <td>2024-03-15</td>
                <th>등록일</th>
                <td>2024-03-15</td>
            </tr>
            <tr>
                <th>전문내용</th>
                <td colspan="3">
                    상세전문내용<br>
                    상세전문내용<br>
                    상세전문내용<br>
                    상세전문내용<br>
                </td>
            </tr>
        </tbody>
    </v-table>

    <div class="btn_btm_wrap">
        <v-btn class="vbtn" size="large">목록</v-btn>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup >



</script> 