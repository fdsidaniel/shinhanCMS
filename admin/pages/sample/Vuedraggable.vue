<template>
  <div> 
    <v-table 
    >   
      <tr>
        <td>비목</td>
        <td>세목</td>
        <td>추가/삭제</td>
        <td>순서</td>
      </tr> 
          <draggable 
            v-model="myArray"  
            @change="chnageTree"  
             tag="tbody"
             :move="canDrag"
            item-key="id">  
                <template #item="{element}"> 
                  <tr> 
                    <td> 
                       <v-text-field v-if="element.type === 'N'"
                        v-model="element.bimok"  
                        class="i_basics i_id"
                      ></v-text-field>
                      <template v-else>
                        {{element.group ? element.bimok : ''}}
                      </template>
                    </td>
                    <td>
                      
                      <v-text-field v-if="!element.group"
                        v-model="element.semok"  
                        class="i_basics i_id"
                      ></v-text-field>
                    
                    </td> 
                    <td>{{element.group}}</td> 
                    <td>{{element.seq}}</td> 
                  </tr>
                </template> 
          </draggable>
</v-table>
      </div> 
</template>

<script setup> 
     const headers= [
        {
          title: '비목',
          align: 'start',
          key: 'bimok',
          groupable: false,
        },
        { title: '세목', key: 'semok', align: 'end' },
        { title: 'type', key: 'type', align: 'end' },
      ]
     const groupBy = [{ key: 'groupCode', order: 'asc' }]
const  selected = ref([])
     const myArray = ref([
      {bimok:'비목1',semok:'',seq:'1' , type:'N' , group : true , groupCode : 'B1' , isDrag : true}, 
      {bimok:'비목1',semok:'세목1',seq:'2', type:'' , groupCode : 'B1'}, 
      {bimok:'비목1',semok:'세목1',seq:'3', type:'' , groupCode : 'B1'}, 
      {bimok:'비목2',semok:'',seq:'1', type:''  , group : true , groupCode : 'B2', isDrag : false}, 
      {bimok:'비목2',semok:'세목2',seq:'2', type:''  , groupCode : 'B2'}, 
      {bimok:'비목2',semok:'세목2',seq:'3', type:''  , groupCode : 'B2'}, 
    ]) 
    const copymyArray = ref([ 
    ]) 
     const chnageTree = (e) =>{
      copymyArray.value = e;
     }
     const onDragStart = (e) =>{
        console.log(e)
     }
     const onDragEnd = (e) =>{
        return false
     }
     const canDrag = (evt)=> {
      // 드래그 가능 여부 판단  
      return evt.draggedContext.element.isDrag
    } 
</script>

<style>
.draggable-item {
  background-color: #eee;
  padding: 10px;
  margin: 5px;
  cursor: grab;
}
</style>