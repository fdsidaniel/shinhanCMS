<template>
  <div style="width: 500px; height: 300px;">
    <ag-grid-vue
      style="width: 100%; height: 100%;"
      class="ag-theme-alpine"
      :gridOptions="gridOptions"
      :columnDefs="columnDefs"
      :enableRangeSelection="true"
                :copyHeadersToClipboard="true"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
       @cell-value-changed="onCellValueChanged" 
     
    ></ag-grid-vue>
  </div>
</template>

<script setup> 
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridVue } from 'ag-grid-vue3';
import 'ag-grid-enterprise';
import { LicenseManager } from 'ag-grid-enterprise';
 class DatePicker {
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
  const cellCellEditorParams = (params) => {
    const selectedCountry = params.data.country;
    const allowedCities = countyToCityMap(selectedCountry);
    return {
      values: allowedCities,
      formatValue: (value) => `${value} (${selectedCountry})`,
    };
  };
  const countyToCityMap =  (match)=> {
    const map = {
      Ireland: ['Dublin', 'Cork', 'Galway'],
      USA: ['New York', 'Los Angeles', 'Chicago', 'Houston'],
    };
    return map[match];
};
    const gridOptions = ref({
      // ag-Grid 옵션 설정
    });

    const defaultColDef = ref({
      editable: true,
      flex: 1,
      minWidth: 100,
      resizable: true,
    });
    const onCellValueChanged = (params) => {
      console.log(params.data)
      const colId = params.column.getId();
      if (colId === 'country') {
        const selectedCountry = params.data.country;
        const selectedCity = params.data.city;
        const allowedCities = countyToCityMap(selectedCountry);
        const cityMismatch = allowedCities.indexOf(selectedCity) < 0;
        if (cityMismatch) {
          params.node.setDataValue('city', null);
        }
      }
    }
    const columnDefs = ref([
      { headerName: 'Athlete', field: 'athlete', }, 
      { headerName: 'Age', field: 'age', type: 'numberColumn' }, 
      { headerName: 'type', field: 'type'  },
      {
        field: 'date',
        editable: true,
        cellEditor: DatePicker,
        cellEditorPopup: true,
      },
    
      {
        field: 'city',
        cellEditor: 'agRichSelectCellEditor',
        cellEditorParams: cellCellEditorParams,
      }, 
    ]);
    const rowData = ref([
      {athlete:'dddd',age:1111,type:'A',city:'Dublin',date:'20230101'},
      {athlete:'dddd',age:1111,type:'A',city:'Dublin',date:'20230101'},
      {athlete:'dddd',age:1111,type:'B',city:'Dublin',date:'20230101'},
      {athlete:'dddd',age:1111,type:'B',city:'Dublin',date:'20230101'},
      // 데이터 배열
    ]);

    onMounted(() => {
      LicenseManager.setLicenseKey('');
      // Vue 컴포넌트가 마운트된 후 초기 데이터 로딩 및 설정
    });
  
</script>