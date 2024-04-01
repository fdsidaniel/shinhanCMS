<template>

  <div class="title_box">
    <h2>프로퍼티 값 조회<span class="txt">(은행 송/수신)</span></h2>
    <ul class="loc">
      <li>시스템 관리</li>
      <li>프로퍼티 값 변경</li>      
      <li>프로퍼티 값 조회</li>
    </ul>
  </div>

  <div class="conbody">

    <v-tabs v-model="tab" class="tab_basics">
        <v-tab value="bank">은행 송/수신</v-tab>
        <v-tab value="cms">CMS 데이터베이스</v-tab>
        <v-tab value="api">API/스케쥴러</v-tab>
    </v-tabs>

    <v-window v-model="tab" class="tab_con">

        <v-window-item value="bank">
            <v-table class="vtable_view bg">
                <colgroup>
                    <col style="width:160px;"/>
                    <col style="width:*;"/>
                </colgroup>
                <tbody>
                    <tr>
                        <th>Tpye of Header</th>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th>Client Host</th>
                        <td>127.0.0.1</td>
                    </tr>
                    <tr>
                        <th>Client Port</th>
                        <td>9000</td>
                    </tr>
                    <tr>
                        <th>Client Persistent</th>
                        <td>true</td>
                    </tr>
                    <tr>
                        <th>Client Lazy</th>
                        <td>false</td>
                    </tr>
                    <tr>
                        <th>Client Maxidle</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Client Maxreconn</th>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th>Client Charset</th>
                        <td>EUC-KR</td>
                    </tr>
                    <tr>
                        <th>Client Chancnt</th>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th>Client Delay</th>
                        <td>500</td>
                    </tr>
                    <tr>
                        <th>Client Initial Delay</th>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <th>Client Timeout</th>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <th>Client Queue</th>
                        <td>5000</td>
                    </tr>
                    <tr>
                        <th>Server Port</th>
                        <td>9080</td>
                    </tr>
                    <tr>
                        <th>Server Timeout</th>
                        <td>10000</td>
                    </tr>
                </tbody>
            </v-table>

            <div class="btn_btm_wrap right">
                <v-btn class="vbtn" size="small">수정</v-btn>
            </div>
        </v-window-item>

        <v-window-item value="cms">
            <v-table class="vtable_view bg">
                <colgroup>
                    <col style="width:160px;"/>
                    <col style="width:*;"/>
                </colgroup>
                <tbody>
                    <tr>
                        <th>Data Source URL</th>
                        <td>testtest:thin:@192.168.10.22:8639:devcmsdb</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                    </tr>
                </tbody>
            </v-table>

            <div class="btn_btm_wrap right">
                <v-btn class="vbtn" size="small">수정</v-btn>
            </div>
        </v-window-item>

        <v-window-item value="api">
            <v-table class="vtable_view">
                <colgroup>
                    <col style="width:;"/>
                    <col style="width:;"/>
                </colgroup>
                <tbody>
                    <tr>
                        <th></th>
                        <td></td>
                    </tr>
                </tbody>
            </v-table>

            <div class="btn_btm_wrap right">
                <v-btn class="vbtn" size="small">수정</v-btn>
            </div>
        </v-window-item>

    </v-window>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

const tab = ref('')

</script> 