<template>

  <div class="cms_main_wrap">
    
    <div class="main_top">
        <div class="state_org_box">
            <div class="left">
                <h2>기관현황</h2>
                <div class="config">
                    <span class="org_cnt">999개 기관</span>
                    <nuxt-link to="" class="btn_org_cfg">기관 설정</nuxt-link>
                </div>
            </div>
            <div class="right">
                <ul class="state_tot">
                    <li class="tot">
                        <p>이체현황 총</p>
                        <strong class="transfer_tot">0</strong>
                        <v-btn class="vbtn line sample" size="small" @click="transferTotType">카운팅</v-btn>
                    </li>
                    <li class="normal">
                        <p>이체 정상</p>
                        <strong class="transfer_normal">0</strong>
                        <v-btn class="vbtn line sample" size="small" @click="transferNormalType">카운팅</v-btn>
                    </li>
                    <li class="error">
                        <p>이체 오류</p>
                        <strong class="transfer_error">0</strong>
                        <v-btn class="vbtn line sample" size="small" @click="transferErrorType">카운팅</v-btn>
                    </li>
                </ul>
            </div>
        </div>
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup>


// 이체현황 총
const transferTot = ref('160')
const transferTotType = () => {
    const element = document.querySelector('.transfer_tot')
    let delay = 500 // 딜레이
    let fps = 100 // 프레임
    setTimeout(() => {
        if(transferTot.value == 0){
            element.innerHTML = '0'
        } else {
            const each = Math.ceil(transferTot.value/fps)
            let time = 0
            
            for(let i=0; i<=transferTot.value; i+=each){
                setTimeout(() => {
                    element.innerHTML = i
                }, 20*time);
                if(i+each>transferTot.value){
                    setTimeout(() => {
                        element.innerHTML = transferTot.value
                    }, 20*(time+1))
                }
                time++;
            }
        }
    }, delay)
};

// 이체 정상
const transferNormal = ref('10')
const transferNormalType = () => {
    const element = document.querySelector('.transfer_normal')
    let delay = 1000 // 딜레이
    let fps = 100 // 프레임
    setTimeout(() => {
        if(transferNormal.value == 0){
            element.innerHTML = '0'
        } else {
            const each = Math.ceil(transferNormal.value/fps)
            let time = 0
            
            for(let i=0; i<=transferNormal.value; i+=each){
                setTimeout(() => {
                    element.innerHTML = i
                }, 20*time);
                if(i+each>transferNormal.value){
                    setTimeout(() => {
                        element.innerHTML = transferNormal.value
                    }, 20*(time+1))
                }
                time++;
            }
        }
    }, delay)
};

// 이체 오류
const transferError = ref('0')
const transferErrorType = () => {
    const element = document.querySelector('.transfer_error')
    let delay = 1500 // 딜레이
    let fps = 100 // 프레임
    setTimeout(() => {
        if(transferError.value == 0){
            element.innerHTML = '0'
        } else {
            const each = Math.ceil(transferError.value/fps)
            let time = 0
            
            for(let i=0; i<=transferError.value; i+=each){
                setTimeout(() => {
                    element.innerHTML = i
                }, 20*time);
                if(i+each>transferError.value){
                    setTimeout(() => {
                        element.innerHTML = transferError.value
                    }, 20*(time+1))
                }
                time++;
            }
        }
    }, delay)
};


onMounted(() => {
  transferTotType() // 이체현황 총
  transferNormalType() // 이체 정상
  transferErrorType() // 이체 오류
})

onBeforeUnmount(() => {
  
})


</script> 