<template>
  <ComAgGrid
                
                style="width: 100%; height: 100%;"
                class="ag-theme-alpine"
                :columnDefs="columnDefs"
                @grid-ready="onGridReady"
                :defaultColDef="defaultColDef"
                :autoGroupColumnDef="autoGroupColumnDef"
                :groupDefaultExpanded="groupDefaultExpanded"
                :rowData="rowData"></ComAgGrid>
</template>  

<script setup>
 
import ComAgGrid from '~/components/common/ComAgGrid.vue'
const columnDefs = ref([
      { field: 'country', rowGroup: true, hide: true },
      { field: 'athlete', minWidth: 180 },
      { field: 'age' },
      { field: 'year' },
      { field: 'date', minWidth: 150 },
      { field: 'sport', minWidth: 150 },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
    ]);
    const gridApi = ref();
    const gridColumnApi = ref();
    const defaultColDef = ref({
      flex: 1,
      minWidth: 100,
      sortable: true,
      filter: true,
    });
    const autoGroupColumnDef = ref(null);
    const groupDefaultExpanded = ref(null);
    const rowData = ref(null);

    onBeforeMount(() => {
      autoGroupColumnDef.value = {
        minWidth: 200,
      };
      groupDefaultExpanded.value = 1;
    });

    const onBtForEachNode = () => {
      console.log('### api.forEachNode() ###');
      gridApi.value.forEachNode(printNode);
    };
    const onBtForEachNodeAfterFilter = () => {
      console.log('### api.forEachNodeAfterFilter() ###');
      gridApi.value.forEachNodeAfterFilter(printNode);
    };
    const onBtForEachNodeAfterFilterAndSort = () => {
      console.log('### api.forEachNodeAfterFilterAndSort() ###');
      gridApi.value.forEachNodeAfterFilterAndSort(printNode);
    };
    const onBtForEachLeafNode = () => {
      console.log('### api.forEachLeafNode() ###');
      gridApi.value.forEachLeafNode(printNode);
    };
    const onGridReady = (params) => {
      gridApi.value = params.api;
      gridColumnApi.value = params.columnApi;

      const updateData = (data) => params.api.setRowData(data.slice(0, 50));

      fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        .then((resp) => resp.json())
        .then((data) => updateData(data));
    };
</script>  