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
                    <col style="width:200px;"/>
                    <col style="width:378px;"/>
                    <col style="width:200px;"/>
                    <col style="width:378px;"/>
                </colgroup>
                <tbody>
                    <tr>
                        <th>Type of Header</th>
                        <td colspan="3">1</td>
                    </tr>
                    <tr>
                        <th>Client Host</th>
                        <td>127.0.0.1</td>
                        <th>Client Port</th>
                        <td>9000</td>
                    </tr>
                    <tr>
                        <th>Client Persistent</th>
                        <td>true</td>
                        <th>Client Lazy</th>
                        <td>false</td>
                    </tr>
                    <tr>
                        <th>Client Maxidle</th>
                        <td>0</td>
                        <th>Client Maxreconn</th>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th>Client Charset</th>
                        <td>EUC-KR</td>
                        <th>Client Chancnt</th>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th>Client Delay</th>
                        <td>500</td>
                        <th>Client Initial Delay</th>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <th>Client Timeout</th>
                        <td>10000</td>
                        <th>Client Queue</th>
                        <td>5000</td>
                    </tr>
                    <tr>
                        <th>Server Port</th>
                        <td>9080</td>
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
                    <col style="width:200px;"/>
                    <col style="width:378px;"/>
                    <col style="width:200px;"/>
                    <col style="width:378px;"/>
                </colgroup>
                <tbody>
                    <tr>
                        <th>Data Source URL</th>
                        <td colspan="3">testtest:thin:@192.168.10.22:8639:devcmsdb</td>
                    </tr>
                    <tr>
                        <th>Data Source User Name</th>
                        <td>Tmax</td>
                        <th>Data Source Password</th>
                        <td>Tmax</td>
                    </tr>
                    <tr>
                        <th>Data Source<br>Max Pool Size</th>
                        <td>20</td>
                        <th>Data Source<br>Connection Test Query</th>
                        <td>SELECT 1 FROM DUAL</td>
                    </tr>
                    <tr>
                        <th>Mybatis Mapper<br>Location</th>
                        <td colspan="3">Mapper/*.xml</td>
                    </tr>
                </tbody>
            </v-table>

            <div class="btn_btm_wrap right">
                <v-btn class="vbtn" size="small">수정</v-btn>
            </div>
        </v-window-item>

        <v-window-item value="api">
            <v-table class="vtable_view bg">
                <colgroup>
                    <col style="width:200px;"/>
                    <col style="width:378px;"/>
                    <col style="width:200px;"/>
                    <col style="width:378px;"/>
                </colgroup>
                <tbody>
                    <tr>
                        <th>Server API Port</th>
                        <td>7080</td>
                        <th>Server API Timeout</th>
                        <td>90000</td>
                    </tr>
                    <tr>
                        <th>Scheduled Queue<br>Clean Up</th>
                        <td>0 59 23 * * *</td>
                        <th>Scheduled Message<br>Start Up</th>
                        <td>0 0,15, 30 0,8, 16, 18 * * MON-SUN</td>
                    </tr>
                    <tr>
                        <th>Scheduled Message<br>Shut Down</th>
                        <td>0 55, 56 23 * * MON-SUN</td>
                        <th>Scheduled Message<br>InterBank</th>
                        <td>0 55, 56 23 * * MON-SUN</td>
                    </tr>
                    <tr>
                        <th>Scheduled Message<br>IntraBank</th>
                        <td>0 55, 56 23 * * MON-SUN</td>
                        <th>Scheduled Message<br>Payee</th>
                        <td>0 55, 56 23 * * MON-SUN</td>
                    </tr>
                    <tr>
                        <th>Scheduled Message<br>DepRecpt</th>
                        <td>0 55, 56 23 * * MON-SUN</td>
                        <th>Scheduled Message<br>VirRecpt</th>
                        <td>0 55, 56 23 * * MON-SUN</td>
                    </tr>
                    <tr>
                        <th>Scheduled Message<br>FailRecpt</th>
                        <td>0 55, 56 23 * * MON-SUN</td>
                        <th>Scheduled Message<br>InterResInq</th>
                        <td>0 55, 56 23 * * MON-SUN</td>
                    </tr>
                    <tr>
                        <th>Scheduled Message<br>IntraReqInq</th>
                        <td colspan="3">0 55, 56 23 * * MON-SUN</td>
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