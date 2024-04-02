<template>

  <div class="title_box">
    <h2>프로퍼티 값 수정<span class="txt">(은행 송/수신)</span></h2>
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
            <v-table class="vtable_view inipt bg">
                <colgroup>
                    <col style="width:200px;"/>
                    <col style="width:378px;"/>
                    <col style="width:200px;"/>
                    <col style="width:378px;"/>
                </colgroup>
                <tbody>
                    <tr>
                        <th>Type of Header</th>
                        <td colspan="3">
                            <div class="input_flex a_center between">
                                <ComRadioButton :options="typeOfHeader" v-model="selectedTypeOfHeader" :isInline="true" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Client Host</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Client Host" v-model="clientHost" :rules="clientHostRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                        <th>Client Port</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Client Host" v-model="clientPort" :rules="clientPortRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Client Persistent</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Client Persistent" v-model="clientPersistent" :rules="clientPersistentRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                        <th>Client Lazy</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Client Lazy" v-model="clientLazy" :rules="clientLazyRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Client Maxidle</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Client Maxidle" v-model="clientMaxidle" :rules="clientMaxidleRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                        <th>Client Maxreconn</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Client Maxreconn" v-model="clientMaxreconn" :rules="clientMaxreconnRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Client Charset</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Client Charset" v-model="clientCharset" :rules="clientCharsetRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                        <th>Client Chancnt</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Client Chancnt" v-model="clientChancnt" :rules="clientChancntRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Client Delay</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Client Delay" v-model="clientDelay" :rules="clientDelayRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                        <th>Client Initial Delay</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Client Initial Delay" v-model="clientInitialDelay" :rules="clientInitialDelayRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Client Timeout</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Client Timeout" v-model="clientTimeout" :rules="clientTimeoutRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                        <th>Client Queue</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Client Queue" v-model="clientQueue" :rules="clientQueueRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Server Port</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Server Port" v-model="serverPort" :rules="serverPortRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                        <th>Server Timeout</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Server Timeout" v-model="serverTimeout" :rules="serverTimeoutRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </v-table>

            <div class="btn_btm_wrap">
                <v-btn class="vbtn blue" size="large">취소</v-btn>
                <v-btn class="vbtn" size="large">저장</v-btn>
            </div>
        </v-window-item>

        <v-window-item value="cms">
            <v-table class="vtable_view inipt bg">
                <colgroup>
                    <col style="width:200px;"/>
                    <col style="width:378px;"/>
                    <col style="width:200px;"/>
                    <col style="width:378px;"/>
                </colgroup>
                <tbody>
                    <tr>
                        <th>Data Source URL</th>
                        <td colspan="3">
                            <div class="input_flex a_center between">
                                <v-text-field label="Data Source URL" v-model="dataSourceURL" :rules="dataSourceURLRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Data Source User Name</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Data Source User Name" v-model="dataSourceUserName" :rules="dataSourceUserNameRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                        <th>Data Source Password</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Data Source Password" v-model="dataSourcePassword" :rules="dataSourcePasswordRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Data Source<br>Max Pool Size</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Data Source Max Pool Size" v-model="dataSourceMaxPoolSize" :rules="dataSourceMaxPoolSizeRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                        <th>Data Source<br>Connection Test Query</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Data Source Connection Test Query" v-model="dataSourceConnectionTestQuery" :rules="dataSourceConnectionTestQueryRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Mybatis Mapper Location</th>
                        <td colspan="3">
                            <div class="input_flex a_center between">
                                <v-text-field label="Mybatis Mapper Location" v-model="mybatisMapperLocation" :rules="mybatisMapperLocationRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </v-table>

            <div class="btn_btm_wrap">
                <v-btn class="vbtn blue" size="large">취소</v-btn>
                <v-btn class="vbtn" size="large">저장</v-btn>
            </div>
        </v-window-item>

        <v-window-item value="api">
            <v-table class="vtable_view inipt bg">
                <colgroup>
                    <col style="width:200px;"/>
                    <col style="width:378px;"/>
                    <col style="width:200px;"/>
                    <col style="width:378px;"/>
                </colgroup>
                <tbody>
                    <tr>
                        <th>Server API Port</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Server API Port" v-model="serverAPIPort" :rules="serverAPIPortRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                        <th>Server API Timeout</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Server API Timeout" v-model="serverAPITimeout" :rules="serverAPITimeoutRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Scheduled Queue<br>Clean Up</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Scheduled Queue Clean Up" v-model="scheduledQueueCleanUp" :rules="scheduledQueueCleanUpRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                        <th>Scheduled Message<br>Start Up</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Scheduled Message Start Up" v-model="scheduledMessageStartUp" :rules="scheduledMessageStartUpRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Scheduled Message<br>Shut Down</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Scheduled Message Shut Down" v-model="scheduledMessageShutDown" :rules="scheduledMessageShutDownRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                        <th>Scheduled Message<br>InterBank</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Scheduled Message InterBank" v-model="scheduledMessageInterBank" :rules="scheduledMessageInterBankRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Scheduled Message<br>IntraBank</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Scheduled Message IntraBank" v-model="scheduledMessageIntraBank" :rules="scheduledMessageIntraBankRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                        <th>Scheduled Message<br>Payee</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Scheduled Message Payee" v-model="scheduledMessagePayee" :rules="scheduledMessagePayeeRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Scheduled Message<br>DepRecpt</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Scheduled Message DepRecpt" v-model="scheduledMessageDepRecpt" :rules="scheduledMessageDepRecptRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                        <th>Scheduled Message<br>VirRecpt</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Scheduled Message VirRecpt" v-model="scheduledMessageVirRecpt" :rules="scheduledMessageVirRecptRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Scheduled Message<br>FailRecpt</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Scheduled Message FailRecpt" v-model="scheduledMessageFailRecpt" :rules="scheduledMessageFailRecptRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                        <th>Scheduled Message<br>InterResInq</th>
                        <td>
                            <div class="input_flex a_center between">
                                <v-text-field label="Scheduled Message InterResInq" v-model="scheduledMessageInterResInq" :rules="scheduledMessageInterResInqRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Scheduled Message<br>IntraReqInq</th>
                        <td colspan="3">
                            <div class="input_flex a_center between">
                                <v-text-field label="Scheduled Message IntraReqInq" v-model="scheduledMessageIntraReqInq" :rules="scheduledMessageIntraReqInqRules" required placeholder="" class="i_basics flex1 none_details" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </v-table>

            <div class="btn_btm_wrap">
                <v-btn class="vbtn blue" size="large">취소</v-btn>
                <v-btn class="vbtn" size="large">저장</v-btn>
            </div>
        </v-window-item>

    </v-window>

  </div>

</template>

<style scoped>
  
</style>

<script setup >

const tab = ref('')

import ComRadioButton from '@/components/common/ComRadioButton.vue'

const selectedTypeOfHeader = ref('01')
const typeOfHeader = [
  { label: '1', value: '01' },
  { label: '2', value: '02' },
]

const clientHost = ref('')
const clientHostRules = [
  
]

const clientPort = ref('')
const clientPortRules = [
  
]

const clientPersistent = ref('')
const clientPersistentRules = [
  
]

const clientLazy = ref('')
const clientLazyRules = [
  
]

const clientMaxidle = ref('')
const clientMaxidleRules = [
  
]

const clientMaxreconn = ref('')
const clientMaxreconnRules = [
  
]

const clientCharset = ref('')
const clientCharsetRules = [
  
]

const clientChancnt = ref('')
const clientChancntRules = [
  
]

const clientDelay = ref('')
const clientDelayRules = [
  
]

const clientInitialDelay = ref('')
const clientInitialDelayRules = [
  
]

const clientTimeout = ref('')
const clientTimeoutRules = [
  
]

const clientQueue = ref('')
const clientQueueRules = [
  
]

const serverPort = ref('')
const serverPortRules = [
  
]

const serverTimeout = ref('')
const serverTimeoutRules = [
  
]

const dataSourceURL = ref('')
const dataSourceURLRules = [
  
]

const dataSourceUserName = ref('')
const dataSourceUserNameRules = [
  
]

const dataSourcePassword = ref('')
const dataSourcePasswordRules = [
  
]

const dataSourceMaxPoolSize = ref('')
const dataSourceMaxPoolSizeRules = [
  
]

const dataSourceConnectionTestQuery = ref('')
const dataSourceConnectionTestQueryRules = [
  
]

const mybatisMapperLocation = ref('')
const mybatisMapperLocationRules = [
  
]

const serverAPIPort = ref('')
const serverAPIPortRules = [
  
]

const serverAPITimeout = ref('')
const serverAPITimeoutRules = [
  
]

const scheduledQueueCleanUp = ref('')
const scheduledQueueCleanUpRules = [
  
]
const scheduledMessageStartUp = ref('')
const scheduledMessageStartUpRules = [
  
]

const scheduledMessageShutDown = ref('')
const scheduledMessageShutDownRules = [
  
]

const scheduledMessageInterBank = ref('')
const scheduledMessageInterBankRules = [
  
]

const scheduledMessageIntraBank = ref('')
const scheduledMessageIntraBankRules = [
  
]

const scheduledMessagePayee = ref('')
const scheduledMessagePayeeRules = [
  
]

const scheduledMessageDepRecpt = ref('')
const scheduledMessageDepRecptRules = [
  
]

const scheduledMessageVirRecpt = ref('')
const scheduledMessageVirRecptRules = [
  
]

const scheduledMessageFailRecpt = ref('')
const scheduledMessageFailRecptRules = [
  
]

const scheduledMessageInterResInq = ref('')
const scheduledMessageInterResInqRules = [
  
]

const scheduledMessageIntraReqInq = ref('')
const scheduledMessageIntraReqInqRules = [
  
]

</script> 