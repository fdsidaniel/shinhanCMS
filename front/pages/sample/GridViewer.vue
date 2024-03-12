<template>
  <v-btn class="bg-primary" @click="excelDown"> 엑셀 양식 다운로드 </v-btn>
  <v-btn class="bg-primary" @click="fileClick"> 엑셀 업로드 </v-btn>
  <v-file-input
    v-show="false"
    id="fileElement"
    accept=".csv"
    label="파일 업로드하기"
    @change="handleExcelRead"
  ></v-file-input>
  <div>
    <ComAgGrid
      ref="agrid"
      :columnDefs="columnDefs"
      style="height: 500px"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
    />
    <pagination pages="100" class=""></pagination>
  </div>
</template>  

<script setup>
import ComAgGrid from '~/components/common/ComAgGrid.vue'
import pagination from '@/components/common/pdf/pagination.vue'
import { loginApi } from '~/api'
loginApi.enterLogin()
const numOfPages = ref(5)
const columnDefs = ref([
  { headerName: 'make', field: 'make' },
  { headerName: 'model', field: 'model' },
  { headerName: 'price', field: 'price' },
])
const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
]
const defaultColDef = {
  sortable: true,
  filter: true,
  editable: true,
  resizable: true,
  cellStyle: { textAlign: 'center' },
}
const agrid = ref(null)
const paginationPageSize = ref(20)
const fileClick = () => {
  document.getElementById('fileElement').click()
}
const excelReadData = ref({})
const setRowData = (setData) => {
  agrid.value.gridOption.api.setRowData(setData)
}
watch(excelReadData, (newValue, oldValue) => {
  setRowData(newValue)
  console.log('excelReadData has changed!', newValue)
})
const handleExcelRead = async (event) => {
  const file = event.target.files[0]
  $utils.excelRead(file, excelReadData)
}
const excelDown = () => {
  agrid.value.gridOption.api.exportDataAsCsv()
}
</script>  