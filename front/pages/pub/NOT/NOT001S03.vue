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
                    <td>
                        <div class="input_flex">
                            <v-text-field label="제목" v-model="noticeTitle" :rules="noticeTitleRules" placeholder="" value=""
                                class="i_basics flex1"></v-text-field>
                            <ComSelectBox groupCode="01" v-model="comboOder" :items="itemsOder" value="null"
                                class="s_basics w_120 ml_5" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>게시기간</th>
                    <td>
                        <div class="i_calender">
                            <ComDatePicker v-model="startDate" class="i_date w_140" placeholder="날짜선택" />
                            <span>~</span>
                            <ComDatePicker v-model="endDate" class="i_date w_140" placeholder="날짜선택" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>첨부파일</th>
                    <td>
                        <v-file-input v-show="true" id="fileElement" label="파일 업로드하기" v-model="fileupkoad"
                            :rules="fileupkoadRules" class="file_upload"></v-file-input>
                    </td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td><v-textarea class="h_300"></v-textarea></td>
                </tr>
            </tbody>
        </v-table>

        <div class="btn_btm_wrap">
            <v-btn class="vbtn blue" size="large">목록</v-btn>
            <v-btn class="vbtn blue" size="large">삭제</v-btn>
            <v-btn class="vbtn" size="large">수정</v-btn>
        </div>
    </div>
</template>

<style scoped></style>

<script setup >

import ComSelectBox from '@/components/common/ComSelectBox.vue'
import ComDatePicker from '@/components/common/ComDatePicker.vue'

const noticeTitle = ref('')
const noticeTitleRules = [

]

const comboOder = ref('000')
const itemsOder = ref([
    { title: '공지순서', value: '000' },
    { title: '1', value: '001' },
    { title: '2', value: '002' },
    { title: '3', value: '003' },
    { title: '4', value: '004' },
    { title: '5', value: '005' },
])

const fileupkoad = ref('')

const fileupkoadRules = [
    (v) => !!v || '업로드된 파일을 다시 확인해주세요.',
    //(v) => (v && v.length >= 3) || 'Name must be at least 3 characters',
]

const today = new Date() // 현재 날짜와 시간을 포함하는 Date 객체 생성
const year = today.getFullYear() // 년도 가져오기
const month = today.getMonth() + 1 // 월 가져오기 (0부터 시작하므로 1 더하기)
const day = today.getDate() // 일 가져오기
const formattedToday = new Date(
    `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
)
const startDate = ref(formattedToday)
const endDate = ref(formattedToday)

</script> 