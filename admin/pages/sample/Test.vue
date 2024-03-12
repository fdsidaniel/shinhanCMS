
       <!-- multi-sort -->
<template> 
  <v-data-table
    v-model="selected"
    :group-by="groupBy"
    :headers="headers"
    :items="desserts"  
    class="elevation-1"
    item-value="name"   
       @click:row="clickRow"
  > 
<!-- <template v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }"> 
      <tr>
        <template v-for="column in columns" :key="column.key"> 
          <td>
            <span class="mr-2 cursor-pointer" @click="() => toggleSort(column)">{{ column.title ==='Group' ? '비목' :column.title }}</span>
            <template v-if="isSorted(column)">
              <v-icon :icon="getSortIcon(column)"></v-icon>
            </template> 
          </td>
        </template>
      </tr>
    </template> -->

  <template v-slot:group-header="{ item, columns, toggleGroup, isGroupOpen }"> 
      <tr>
        <td :colspan="columns.length">
          <VBtn
            size="small"
            variant="text"
            :icon="isGroupOpen(item) ? '$expand' : '$next'"
            @click="toggleGroup(item)"
          ></VBtn> 
            <v-text-field
                placeholder="세목"
                v-model="item.value" 
                required
                @input="chageData"
                class="i_basics i_id"
              ></v-text-field>
        </td>
      </tr>
    </template>


  <template v-slot:item="{ item }" >
    <tr> 
      <td> </td>
      <td>  <v-text-field
                placeholder="세목"
                v-model="item.value" 
                required
                @input="chageData"
                class="i_basics i_id"
              ></v-text-field>{{}}</td>
      <td> 삭제</td>
      <td> {{item.selectable.seq}}</td>
    </tr>
   
      <v-chip :color="getColor(item)">
        {{ item.selectable.name }}
      </v-chip>
    </template> 
  <template #bottom></template>
</v-data-table>
  
</template>
<script setup> 
const clickRow = (e)=>{
    console.log(e)
}
const getColor = (columns) =>{ 
    let calories = columns.raw.category 
        if (calories > 'Ice cream') return 'red'
        else if (calories > 'Pastry') return 'orange'
        else return 'green'
      }
const  selected = ref([])
      const sortBy = [{ key: 'name', order: 'asc' }]
      const groupBy = [{ key: 'dairy', order: 'asc', }]
      const headers =[
        {
          title: '세목',
          align: 'start',
          key: 'name', 
        },
        { title: '추가/삭제', key: 'category', align: 'end' }, 
        { title: '순서', key: 'seq', align: 'end' }, 
      ]
      const desserts = ref([
        {
          name: 'Frozen Yogurt',
          category: 'Ice cream',
          dairy: 'Yes',
          seq: '1',
        },
        {
          name: 'Ice cream sandwich',
          category: 'Ice cream',
          dairy: 'Yes',
          seq: '1',
        },
        {
          name: 'Eclair',
          category: 'Cookie',
          dairy: 'Yes',
          seq: '1',
        },
        {
          name: 'Cupcake',
          category: 'Pastry',
          dairy: 'Yes',
          seq: '1',
        },
        {
          name: 'Gingerbread',
          category: 'Cookie',
          dairy: 'No',
          seq: '1',
        },
        {
          name: 'Jelly bean',
          category: 'Candy',
          dairy: 'No',
          seq: '1',
        },
        {
          name: 'Lollipop',
          category: 'Candy',
          dairy: 'No',
          seq: '1',
        },
        {
          name: 'Honeycomb',
          category: 'Toffee',
          dairy: 'No',
          seq: '1',
        },
        {
          name: 'Donut',
          category: 'Pastry',
          dairy: 'Yes',
          seq: '1',
        },
        {
          name: 'KitKat',
          category: 'Candy',
          dairy: 'Yes',
          seq: '1',
        },
      ])

const chageData = (e,b)=>{
  console.log(e.target.value)
  console.log(desserts.value)

  desserts.value.map(element => {
    if(element.dairy === 'No'){
      element.dairy = e.target.value
    }
  });
}
</script>