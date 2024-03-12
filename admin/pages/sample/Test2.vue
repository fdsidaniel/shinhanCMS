
       <!-- multi-sort -->
<template>  
    <ag-grid-vue 
						class="ag-theme-alpine"
						style="height: 300px"
						:columnDefs="columnDefs.value"
						:rowData="rowData"
						:defaultColDef="defaultColDef"  
  						suppressColumnVirtualisation="true"
						animateRows="true"
						copyHeadersToClipboard="true"
						@cell-clicked="cellWasClicked" 
						@grid-ready="onGridReady" 
  >
  </ag-grid-vue>
  <div>
    <v-text-field v-model="selectRowData.seq" label="SEQ"/> 
    <v-text-field v-model="selectRowData.COMPANY_NAME" label="COMPANY_NAME"/> 
    <input type="button" value="업데이트" @click="updateData"/>
  </div>
</template>
<script setup>  

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { AgGridVue } from 'ag-grid-vue3'

	const gridApi = ref(null);
const selectRowData = ref({})
const defaultColDef = {
		sortable: true,
		filter: true,
		editable: true,
		resizable:true,
		cellStyle: { textAlign: 'center' }, 
		// flex: 1
	};
const columnDefs = reactive({
	value: [
		{
			headerName: 'NO',
			field: "seq",
			pinned: 'left',
			lockPinned: true,
			cellClass: 'header-center',
			editable: false, 
			valueGetter: 'node.rowIndex + 1',
			cellStyle: {textAlign: 'center'},

			width: 100
		},
		{
			headerName: '거래처명',
			field: "COMPANY_NAME",
			pinned: 'left',
			lockPinned: true,
			cellClass: 'lock-pinned', 
			cellStyle: {textAlign: 'left'},
		},

		{
			headerName: '업데이트여부',
			field: "UPDATE_YN",
			pinned: 'left',
			lockPinned: true,
			cellClass: 'lock-pinned', 
			cellStyle: {textAlign: 'left'},
		},
  
  ]}
    
    )
  const rowIndex = ref('')
  const cellWasClicked = (event) => {  

      rowIndex.value = event.rowIndex 
      selectRowData.value =event.data 
		}
    const rowData = ref([
      
      {seq : '1' , COMPANY_NAME : '태오1',UPDATE_YN : 'N'},
      {seq : '2' , COMPANY_NAME : '태오2',UPDATE_YN : 'N'},
      {seq : '3' , COMPANY_NAME : '태오3',UPDATE_YN : 'N'},
      {seq : '4' , COMPANY_NAME : '태오',UPDATE_YN : 'N'},
      {seq : '5' , COMPANY_NAME : '태오5',UPDATE_YN : 'N'},
      {seq : '6' , COMPANY_NAME : '태오6',UPDATE_YN : 'N'},
      {seq : '7' , COMPANY_NAME : '태오7',UPDATE_YN : 'N'},
    ])
    	const onGridReady = (params) => { 
			gridApi.value = params.api;
		};
    const  objectsAreEqual = (objA, objB) =>{
  // 두 객체의 속성 키 배열을 가져옵니다.
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // 두 객체의 속성 키 개수가 다르면 false를 반환합니다.
  if (keysA.length !== keysB.length) {
    return false;
  }

  // 각 속성 키와 값을 비교합니다.
  for (let key of keysA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  // 모든 속성 키와 값이 동일하면 true를 반환합니다.
  return true;
}

    watch(selectRowData,(newValue,oldValue)=>{ 
 
     const rowNode =  gridApi.value.getRowNode(rowIndex.value);  
     console.log(objectsAreEqual(rowNode.data, oldValue))
     if(!objectsAreEqual(rowNode.data, oldValue) ){
        rowData.value[rowIndex.value].UPDATE_YN = 'Y'
     }
     gridApi.value.redrawRows({ rowNodes: [rowNode] });
    },{deep:true})
    
    const updateData = () =>{
퍄
      rowData.value[0].COMPANY_NAME = 'Updated Name'; 
     const rowNode =  gridApi.value.getRowNode(0);  
     gridApi.value.redrawRows({ rowNodes: [rowNode] });

    }


      const count = ref(0); 
      const rawCount = 11
    watch(count,(newValue)=>{ 
      console.log(newValue)
    })
    onMounted(()=>{
      console.log(rawCount);  // 0
      Object.assign(count.value, rawCount);
      console.log(count);  // 0

    })
</script>