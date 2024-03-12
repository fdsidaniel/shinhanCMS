<template>
  <ComDatePicker/>
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
class CustomCellRenderer {
  eGui;

  init(params) {
    this.eGui = document.createElement('div');
    this.eGui.classList.add('my-custom-cell-renderer');
    this.eGui.innerHTML =
      /* html */
      `<div class="athlete-info">
            <span>움직이세요</span>
            <span>제발</span>
        </div>
        <span>여기를</span>`;
      // `<div class="athlete-info">
      //       <span>${params.data.athlete}</span>
      //       <span>${params.data.country}</span>
      //   </div>
      //   <span>${params.data.year}</span>`;

    // creates the row dragger element
    var rowDragger = document.createElement('i');
    rowDragger.classList.add('fas', 'fa-arrows-alt-v');
    this.eGui.appendChild(rowDragger);

    // registers as a row dragger
    params.registerRowDragger(rowDragger, 0);
  }

  getGui() {
    return this.eGui;
  }

  refresh(params) {
    return false;
  }
}

class checkCel {
  eGui;

  init(params) {
    this.eGui = document.createElement('input');
    this.eGui.type = 'checkbox'  
    this.eGui.addEventListener('change', () => {
      
    }); 
  }

  getGui() {
    return this.eGui;
  } 
}
class DatePicker {
  eInput;

  // gets called once before the renderer is used
  init(params) {
    // create the cell
    this.eInput = document.createElement('input');
    this.eInput.value = params.value;
    this.eInput.classList.add('ag-input');
    this.eInput.style.height = 'var(--ag-row-height)';
    this.eInput.style.fontSize = 'calc(var(--ag-font-size) + 1px)';

    // https://jqueryui.com/datepicker/
    $(this.eInput).datepicker({
      dateFormat: 'dd/mm/yy',
      onSelect: () => {
        this.eInput.focus();
      },
    });
  }

  // gets called once when grid ready to insert the element
  getGui() {
    return this.eInput;
  }

  // focus and select can be done after the gui is attached
  afterGuiAttached() {
    this.eInput.focus();
    this.eInput.select();
  }

  // returns the new value after editing
  getValue() {
    return this.eInput.value;
  }

  // any cleanup we need to be done here
  destroy() {
    // but this example is simple, no cleanup, we could
    // even leave this method out as it's optional
  }

  // if true, then this editor will appear in a popup
  isPopup() {
    // and we could leave this method out also, false is the default
    return false;
  }
}
import ComAgGrid from '~/components/common/ComAgGrid.vue'
import ComDatePicker from '@/components/common/ComDatePicker.vue'
import pagination from '@/components/common/pdf/pagination.vue'
import { loginApi } from '~/api'
loginApi.enterLogin()
const numOfPages = ref(5)
const columnDefs = ref([{
      field: 'athlete',
      headerCheckboxSelection: true, 
      showDisabledCheckboxes: true
      , pinned: "left",
      checkboxSelection: (params) => {
        return !!params.data && params.data.price >33000;
      },
    },
  { headerName: 'make', field: 'make', pinned: "left",cellClass: 'custom-athlete-cell',
    cellRenderer: CustomCellRenderer,},
  { headerName: 'model', field: 'model', pinned: "left" ,headerComponent:checkCel
    ,checkboxSelection: (params) => {
        return !!params.data && params.data.price >33000;
      },
}
  ,
  
      { field: 'date', editable: true, cellEditor: ComDatePicker,cellEditorPopup: true

 },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  { headerName: 'price', field: 'price' },
  
])
const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000, date:'24/08/2012' },
  { make: 'Ford', model: 'Mondeo', price: 35000,date:'24/08/2012' },
  { make: 'Ford', model: 'Mondeo', price: 32000 ,date:'24/08/2012' },
  { make: 'Ford', model: 'Mondeo', price: 35000 ,date:'24/08/2012' },
  { make: 'Ford', model: 'Mondeo', price: 32000,date:'24/08/2012' },
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
const testData = () =>{
  
}
</script>  