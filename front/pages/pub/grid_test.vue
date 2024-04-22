<template>

<div>
  <div class="title_box">
    <h2>그리드 테스트</h2>
    <ul class="loc">
      <li>홈</li>
      <li>그리드</li>
    </ul>
  </div>

  <div class="conbody">

    <ComAgGrid
        ref="agrid"
        :columnDefs="columnDefsReceive"
        style="height: 553px"
        class="grid groups"
        :rowData="rowDataReceive"
        :defaultColDef="defaultColDefReceive"
        :rowHeight="51"
        :tooltipShowDelay="0"
        :tooltipHideDelay="9000"
    />

  </div>
</div>

</template>

<style scoped>
  
</style>

<script setup >

import ComAgGrid from '~/components/common/ComAgGrid.vue'

const columnDefsReceive = ref([
    {
        field: "age", width: 160 
    },
    {
        headerName: 'Name & Country', cellClass: 'cell_center',
        children: [
            { field: 'athlete', width: 160 },
            { field: 'country', width: 160 }
        ]
    },    
    {
        headerName: 'Sports Results',
        children: [
            { field: 'total', width: 160 },
            { field: 'gold', width: 160 },
            { field: 'silver', width: 160 },
            { field: 'bronze', width: 160 },
        ],
    }
    //{ headerName: '수행기관 명', field: 'orgName', width: 160, cellClass:'cell_left ico_new ellipsis' },
])
const rowDataReceive = [
  {
    athlete: 'athlete',
    country: 'country',
    age: 'age',
    total: 'total',
    gold: 'gold',
    silver: 'silver',
    bronze: 'bronze',
  },
]
const defaultColDefReceive = {
  sortable: true,
  filter: true,
  editable: false,
  resizable: true,
  cellStyle: { textAlign: 'center' },
  // tooltipComponent: {},
  tooltipComponent: 'CustomTooltip',
  // flex:1, // width auto
}
const agrid = ref(null)

onMounted(() => {
    
})
</script> 