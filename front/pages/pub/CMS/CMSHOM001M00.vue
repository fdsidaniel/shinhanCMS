<template>

  <div class="cms_main_wrap">
    
    <div class="main_top">
        <!-- 기관현황 -->
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
                        <strong class="transfer_tot" :class="{ 'zero': transferTot == 0 }">0</strong>
                    </li>
                    <li class="normal">
                        <p>이체 정상</p>
                        <strong class="transfer_normal" :class="{ 'zero': transferNormal == 0 }">0</strong>
                    </li>
                    <li class="error">
                        <p>이체 오류</p>
                        <strong class="transfer_error" :class="{ 'zero': transferError == 0 }">0</strong>
                    </li>
                </ul>
            </div>
        </div>
        <!-- //기관현황 -->

        <!-- 기관별 오류 현황 -->
        <div class="state_org_err_box">
            <h3>기관별 오류 현황</h3>
            <div class="slide_wrap">
                <v-btn class="vbtn line btn_prev" :class="{ 'off' : btnPrevView }" size="small" @click="btnPrev">이전</v-btn>
                <div class="slide_box">
                    <ul class="slide_list" :style="{ width: liItemWidthTot + 'px', transform: 'translateX(' + move + 'px)' }">
                        <li>
                            <div class="box">
                                <div class="tit">
                                    <span>신한은행</span>
                                    <nuxt-link to="" class="btn_org_home">기관 홈 바로가기</nuxt-link>
                                    <v-btn class="vbtn btn_view_cfg on" size="small" @click="btnViewCfg">노출 기관 설정</v-btn>
                                </div>
                                <div class="before">
                                    <ul class="err_list">
                                        <li>
                                            <span>타임아웃</span>
                                            <nuxt-link to="" class="btn_link" :class="{ 'black': timeOut > 0 }">{{ timeOut }}</nuxt-link>
                                        </li>
                                        <li>
                                            <span>타행불능</span>
                                            <nuxt-link to="" class="btn_link" :class="{ 'black': impossible > 0 }">{{ impossible }}</nuxt-link>
                                        </li>
                                        <li>
                                            <span>네트워크 오류</span>
                                            <nuxt-link to="" class="btn_link" :class="{ 'black': networkErr > 0 }">{{ networkErr }}</nuxt-link>
                                        </li>
                                        <li>
                                            <span>처리 오류</span>
                                            <nuxt-link to="" class="btn_link" :class="{ 'black': processErr > 0 }">{{ processErr }}</nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="after">
                                    <div class="err_box">
                                        <div class="left">
                                            <ul class="err_list">
                                                <li class="all">
                                                    <span>전체</span>
                                                    <strong>999</strong>
                                                </li>
                                                <li class="time_out">
                                                    <span>타임아웃</span>
                                                    <strong>10</strong>
                                                </li>
                                                <li class="impossible">
                                                    <span>타행불능</span>
                                                    <strong>10</strong>
                                                </li>
                                                <li class="network_err">
                                                    <span>네트워크 오류</span>
                                                    <strong>10</strong>
                                                </li>
                                                <li class="process_err">
                                                    <span>처리 오류</span>
                                                    <strong>10</strong>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="right">
                                            <div class="scroll">
                                                <ul class="err_detail_list">
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 타임아웃 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 타임아웃 2건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 타행불능 3건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 네트워크오류 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 처리오류 오류 1건 발생하였습니다. 처리오류 오류 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 네트워크오류 2건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 네트워크오류 3건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 네트워크오류 4건 발생하였습니다.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="btn_extend" @click="viewExtend">확장</p>
                        </li>
                        <li>
                            <div class="box">
                                <div class="tit">
                                    <span>한마정보통신</span>
                                    <nuxt-link to="" class="btn_org_home">기관 홈 바로가기</nuxt-link>
                                    <v-btn class="vbtn btn_view_cfg" size="small" @click="btnViewCfg">노출 기관 설정</v-btn>
                                </div>
                                <div class="before">
                                    <ul class="err_list">
                                        <li>
                                            <span>타임아웃</span>
                                            <nuxt-link to="" class="btn_link">0</nuxt-link>
                                        </li>
                                        <li>
                                            <span>타행불능</span>
                                            <nuxt-link to="" class="btn_link black">123</nuxt-link>
                                        </li>
                                        <li>
                                            <span>네트워크 오류</span>
                                            <nuxt-link to="" class="btn_link black">1</nuxt-link>
                                        </li>
                                        <li>
                                            <span>처리 오류</span>
                                            <nuxt-link to="" class="btn_link">0</nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="after">
                                    <div class="err_box">
                                        <div class="left">
                                            <ul class="err_list">
                                                <li class="all">
                                                    <span>전체</span>
                                                    <strong>1</strong>
                                                </li>
                                                <li class="time_out">
                                                    <span>타임아웃</span>
                                                    <strong>1</strong>
                                                </li>
                                                <li class="impossible">
                                                    <span>타행불능</span>
                                                    <strong>1</strong>
                                                </li>
                                                <li class="network_err">
                                                    <span>네트워크 오류</span>
                                                    <strong>1</strong>
                                                </li>
                                                <li class="process_err">
                                                    <span>처리 오류</span>
                                                    <strong>0</strong>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="right">
                                            <div class="scroll">
                                                <ul class="err_detail_list">
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 타임아웃 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 타임아웃 2건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 타행불능 3건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 네트워크오류 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 처리오류 오류 1건 발생하였습니다.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="btn_extend" @click="viewExtend">확장</p>
                        </li>
                        <li>
                            <div class="box">
                                <div class="tit">
                                    <span>신한기관정부</span>
                                    <nuxt-link to="" class="btn_org_home">기관 홈 바로가기</nuxt-link>
                                    <v-btn class="vbtn btn_view_cfg" size="small" @click="btnViewCfg">노출 기관 설정</v-btn>
                                </div>
                                <div class="before">
                                    <ul class="err_list">
                                        <li>
                                            <span>타임아웃</span>
                                            <nuxt-link to="" class="btn_link">0</nuxt-link>
                                        </li>
                                        <li>
                                            <span>타행불능</span>
                                            <nuxt-link to="" class="btn_link black">1</nuxt-link>
                                        </li>
                                        <li>
                                            <span>네트워크 오류</span>
                                            <nuxt-link to="" class="btn_link black">2</nuxt-link>
                                        </li>
                                        <li>
                                            <span>처리 오류</span>
                                            <nuxt-link to="" class="btn_link">0</nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="after">
                                    <div class="err_box">
                                        <div class="left">
                                            <ul class="err_list">
                                                <li class="all">
                                                    <span>전체</span>
                                                    <strong>999</strong>
                                                </li>
                                                <li class="time_out">
                                                    <span>타임아웃</span>
                                                    <strong>10</strong>
                                                </li>
                                                <li class="impossible">
                                                    <span>타행불능</span>
                                                    <strong>10</strong>
                                                </li>
                                                <li class="network_err">
                                                    <span>네트워크 오류</span>
                                                    <strong>10</strong>
                                                </li>
                                                <li class="process_err">
                                                    <span>처리 오류</span>
                                                    <strong>10</strong>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="right">
                                            <div class="scroll">
                                                <ul class="err_detail_list">
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 타임아웃 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 타임아웃 2건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 타행불능 3건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 네트워크오류 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 처리오류 오류 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 처리오류 오류 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 처리오류 오류 1건 발생하였습니다.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="btn_extend" @click="viewExtend">확장</p>
                        </li>
                        <li>
                            <div class="box">
                                <div class="tit">
                                    <span>그린모아</span>
                                    <nuxt-link to="" class="btn_org_home">기관 홈 바로가기</nuxt-link>
                                    <v-btn class="vbtn btn_view_cfg" size="small" @click="btnViewCfg">노출 기관 설정</v-btn>
                                </div>
                                <div class="before">
                                    <div>
                                        <ul class="err_list">
                                        <li>
                                            <span>타임아웃</span>
                                            <nuxt-link to="" class="btn_link">0</nuxt-link>
                                        </li>
                                        <li>
                                            <span>타행불능</span>
                                            <nuxt-link to="" class="btn_link">0</nuxt-link>
                                        </li>
                                        <li>
                                            <span>네트워크 오류</span>
                                            <nuxt-link to="" class="btn_link">0</nuxt-link>
                                        </li>
                                        <li>
                                            <span>처리 오류</span>
                                            <nuxt-link to="" class="btn_link">0</nuxt-link>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div class="after">
                                    <div class="err_box">
                                        <div class="left">
                                            <ul class="err_list">
                                                <li class="all">
                                                    <span>전체</span>
                                                    <strong>0</strong>
                                                </li>
                                                <li class="time_out">
                                                    <span>타임아웃</span>
                                                    <strong>0</strong>
                                                </li>
                                                <li class="impossible">
                                                    <span>타행불능</span>
                                                    <strong>0</strong>
                                                </li>
                                                <li class="network_err">
                                                    <span>네트워크 오류</span>
                                                    <strong>0</strong>
                                                </li>
                                                <li class="process_err">
                                                    <span>처리 오류</span>
                                                    <strong>0</strong>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="right">
                                            <div class="scroll">
                                                <ul class="err_detail_list">
                                                    <li class="nothing">오류 현황이 없습니다.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="btn_extend" @click="viewExtend">확장</p>
                        </li>
                        <li>
                            <div class="box">
                                <div class="tit">
                                    <span>그린모아2</span>
                                    <nuxt-link to="" class="btn_org_home">기관 홈 바로가기</nuxt-link>
                                    <v-btn class="vbtn btn_view_cfg" size="small" @click="btnViewCfg">노출 기관 설정</v-btn>
                                </div>
                                <div class="before">
                                    <div>
                                        <ul class="err_list">
                                        <li>
                                            <span>타임아웃</span>
                                            <nuxt-link to="" class="btn_link black">2</nuxt-link>
                                        </li>
                                        <li>
                                            <span>타행불능</span>
                                            <nuxt-link to="" class="btn_link">0</nuxt-link>
                                        </li>
                                        <li>
                                            <span>네트워크 오류</span>
                                            <nuxt-link to="" class="btn_link">0</nuxt-link>
                                        </li>
                                        <li>
                                            <span>처리 오류</span>
                                            <nuxt-link to="" class="btn_link">0</nuxt-link>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div class="after">
                                    <div class="err_box">
                                        <div class="left">
                                            <ul class="err_list">
                                                <li class="all">
                                                    <span>전체</span>
                                                    <strong>999</strong>
                                                </li>
                                                <li class="time_out">
                                                    <span>타임아웃</span>
                                                    <strong>10</strong>
                                                </li>
                                                <li class="impossible">
                                                    <span>타행불능</span>
                                                    <strong>10</strong>
                                                </li>
                                                <li class="network_err">
                                                    <span>네트워크 오류</span>
                                                    <strong>10</strong>
                                                </li>
                                                <li class="process_err">
                                                    <span>처리 오류</span>
                                                    <strong>10</strong>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="right">
                                            <div class="scroll">
                                                <ul class="err_detail_list">
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 타임아웃 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 타임아웃 2건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 타행불능 3건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 네트워크오류 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 처리오류 오류 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 처리오류 오류 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 처리오류 오류 1건 발생하였습니다.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="btn_extend" @click="viewExtend">확장</p>
                        </li>
                        <li>
                            <div class="box">
                                <div class="tit">
                                    <span>그린모아3</span>
                                    <nuxt-link to="" class="btn_org_home">기관 홈 바로가기</nuxt-link>
                                    <v-btn class="vbtn btn_view_cfg" size="small" @click="btnViewCfg">노출 기관 설정</v-btn>
                                </div>
                                <div class="before">
                                    <div>
                                        <ul class="err_list">
                                        <li>
                                            <span>타임아웃</span>
                                            <nuxt-link to="" class="btn_link black">3</nuxt-link>
                                        </li>
                                        <li>
                                            <span>타행불능</span>
                                            <nuxt-link to="" class="btn_link">0</nuxt-link>
                                        </li>
                                        <li>
                                            <span>네트워크 오류</span>
                                            <nuxt-link to="" class="btn_link">0</nuxt-link>
                                        </li>
                                        <li>
                                            <span>처리 오류</span>
                                            <nuxt-link to="" class="btn_link">0</nuxt-link>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div class="after">
                                    <div class="err_box">
                                        <div class="left">
                                            <ul class="err_list">
                                                <li class="all">
                                                    <span>전체</span>
                                                    <strong>999</strong>
                                                </li>
                                                <li class="time_out">
                                                    <span>타임아웃</span>
                                                    <strong>10</strong>
                                                </li>
                                                <li class="impossible">
                                                    <span>타행불능</span>
                                                    <strong>10</strong>
                                                </li>
                                                <li class="network_err">
                                                    <span>네트워크 오류</span>
                                                    <strong>10</strong>
                                                </li>
                                                <li class="process_err">
                                                    <span>처리 오류</span>
                                                    <strong>10</strong>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="right">
                                            <div class="scroll">
                                                <ul class="err_detail_list">
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 타임아웃 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 타임아웃 2건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 타행불능 3건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 네트워크오류 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 처리오류 오류 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 처리오류 오류 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 처리오류 오류 1건 발생하였습니다.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="btn_extend" @click="viewExtend">확장</p>
                        </li>
                        <li>
                            <div class="box">
                                <div class="tit">
                                    <span>그린모아4</span>
                                    <nuxt-link to="" class="btn_org_home">기관 홈 바로가기</nuxt-link>
                                    <v-btn class="vbtn btn_view_cfg" size="small" @click="btnViewCfg">노출 기관 설정</v-btn>
                                </div>
                                <div class="before">
                                    <div>
                                        <ul class="err_list">
                                        <li>
                                            <span>타임아웃</span>
                                            <nuxt-link to="" class="btn_link black">4</nuxt-link>
                                        </li>
                                        <li>
                                            <span>타행불능</span>
                                            <nuxt-link to="" class="btn_link">0</nuxt-link>
                                        </li>
                                        <li>
                                            <span>네트워크 오류</span>
                                            <nuxt-link to="" class="btn_link">0</nuxt-link>
                                        </li>
                                        <li>
                                            <span>처리 오류</span>
                                            <nuxt-link to="" class="btn_link">0</nuxt-link>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div class="after">
                                    <div class="err_box">
                                        <div class="left">
                                            <ul class="err_list">
                                                <li class="all">
                                                    <span>전체</span>
                                                    <strong>999</strong>
                                                </li>
                                                <li class="time_out">
                                                    <span>타임아웃</span>
                                                    <strong>10</strong>
                                                </li>
                                                <li class="impossible">
                                                    <span>타행불능</span>
                                                    <strong>10</strong>
                                                </li>
                                                <li class="network_err">
                                                    <span>네트워크 오류</span>
                                                    <strong>10</strong>
                                                </li>
                                                <li class="process_err">
                                                    <span>처리 오류</span>
                                                    <strong>10</strong>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="right">
                                            <div class="scroll">
                                                <ul class="err_detail_list">
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 타임아웃 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 타임아웃 2건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 타행불능 3건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 네트워크오류 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 처리오류 오류 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 처리오류 오류 1건 발생하였습니다.</li>
                                                    <li><b>신한은행기관관리부</b> [02.15 14:12] 처리오류 오류 1건 발생하였습니다.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="btn_extend" @click="viewExtend">확장</p>
                        </li>
                    </ul>
                </div>
                <v-btn class="vbtn line btn_next" :class="{ 'off' : btnNextView }" size="small" @click="btnNext">다음</v-btn>
            </div>
        </div>
        <!-- //기관별 오류 현황 -->
    </div>

    <!-- Today 승인 내역 -->
    <div class="main_mid">
        <div class="today">
            <strong>Today 승인 내역</strong> 사용자 승인 요청 건 이 <nuxt-link to="" class="btn_link">5</nuxt-link>건 있습니다.
        </div>
    </div>
    <!-- //Today 승인 내역 -->

    <div class="main_btm">
        <!-- 서버 자원 현황 -->
        <div class="row">
            <h3>서버 자원 현황</h3>
            <!-- chart -->
            <div class="box mt_22">
                <div class="chart_box">
                    <p class="tit">CPU</p>
                    <DoughnutChart :chartData="cpuData" class="chart" />
                    <span class="use_data">{{ cpuUse }}%</span>
                    <!-- chart load -->
                    <div class="chart_loader_box">
                        <div class="chart_loader loader1">
                            <div class="line line1"></div>
                            <div class="line line2"></div>
                            <div class="line line3"></div>
                        </div>
                    </div>
                    <!-- //chart load -->
                </div>
                <div class="chart_box">
                    <p class="tit">메모리</p>
                    <DoughnutChart :chartData="memoryData" class="chart" />
                    <span class="use_data">{{ memoryUse }}%</span>
                    <!-- chart load -->
                    <div class="chart_loader_box">
                        <div class="chart_loader loader2">
                            <div class="line line1"></div>
                            <div class="line line2"></div>
                            <div class="line line3"></div>
                        </div>
                    </div>
                    <!-- //chart load -->
                </div>
                <div class="chart_box">
                    <p class="tit">디스크 현황</p>
                    <DoughnutChart :chartData="diskData" class="chart" />
                    <span class="use_data">{{ diskUse }}%</span>
                    <!-- chart load -->
                    <div class="chart_loader_box">
                        <div class="chart_loader loader3">
                            <div class="line line1"></div>
                            <div class="line line2"></div>
                            <div class="line line3"></div>
                        </div>
                    </div>
                    <!-- //chart load -->
                </div>
            </div>
            <!-- chart -->

            <!-- chart img sample 개발 시 삭제 -->
            <div class="box mt_22">                
                <div class="chart_box sample">
                    <p class="tit">CPU</p>
                    <img src="../../../assets/images/chart_1.png" alt="차트 이미지" class="chart_img">
                    <ul class="remark cpu">
                        <li class="use">사용</li>
                        <li class="unused">미사용</li>
                    </ul>
                </div>
                <div class="chart_box sample">
                    <p class="tit">메모리</p>
                    <img src="../../../assets/images/chart_2.png" alt="차트 이미지" class="chart_img">
                    <ul class="remark memory">
                        <li class="use">사용</li>
                        <li class="unused">미사용</li>
                    </ul>
                </div>
                <div class="chart_box sample">
                    <p class="tit">디스크 현황</p>
                    <img src="../../../assets/images/chart_3.png" alt="차트 이미지" class="chart_img">
                    <ul class="remark disk">
                        <li class="use">사용</li>
                        <li class="unused">미사용</li>
                    </ul>
                </div>
            </div>
            <!-- //chart img sample -->
        </div>
        <!-- //서버 자원 현황 -->

        <!-- 실시간 진행 상황 -->
        <div class="row">
            <div class="tit_box">
                <h3> 실시간 진행 상황</h3>
                <div>
                    <!-- <ComSelectBox groupCode="01" v-model="org" :items="orgItems" :isDefault="false" class="s_basics none_details" /> -->
                    <v-btn class="vbtn line btn_orgall" size="small">기관전체</v-btn>
                </div>
            </div>
            <div class="box">
                <div class="state_info">
                    <!-- 상태 목록 -->
                    <div class="state_list_box">
                        <!-- 상태 -->
                        <div class="state_list active" @mouseenter="stateListOver">
                            <p class="tit">펌</p>
                            <ul class="list">
                                <li>어플리케이션<span class="error">상태</span></li>
                                <li>DB 커넥션<span class="normal">상태</span></li>
                                <li>게시전문<span class="normal">상태</span></li>
                            </ul>
                        </div>
                        <!-- //상태 -->

                        <!-- 상태 -->
                        <div class="state_list" @mouseenter="stateListOver">
                            <p class="tit">제휴 가상 계좌</p>
                            <ul class="list">
                                <li>어플리케이션<span class="error">상태</span></li>
                                <li>DB 커넥션<span class="normal">상태</span></li>
                                <li>게시전문<span class="normal">상태</span></li>
                            </ul>
                        </div>
                        <!-- //상태 -->

                        <!-- 상태 -->
                        <div class="state_list" @mouseenter="stateListOver">
                            <p class="tit">법인카드</p>
                            <ul class="list">
                                <li>어플리케이션<span class="error">상태</span></li>
                                <li>DB 커넥션<span class="normal">상태</span></li>
                                <li>게시전문<span class="normal">상태</span></li>
                            </ul>
                        </div>
                        <!-- //상태 -->

                        <!-- 상태 -->
                        <div class="state_list" @mouseenter="stateListOver">
                            <p class="tit">일괄 이체</p>
                            <ul class="list">
                                <li>어플리케이션<span class="error">상태</span></li>
                                <li>DB 커넥션<span class="normal">상태</span></li>
                                <li>게시전문<span class="normal">상태</span></li>
                            </ul>
                        </div>
                        <!-- //상태 -->

                        <!-- 상태 -->
                        <div class="state_list" @mouseenter="stateListOver">
                            <p class="tit">컨버터</p>
                            <ul class="list">
                                <li>어플리케이션<span class="error">상태</span></li>
                                <li>DB 커넥션<span class="normal">상태</span></li>
                                <li>게시전문<span class="normal">상태</span></li>
                            </ul>
                        </div>
                        <!-- //상태 -->
                    </div>
                    <!-- //상태 목록 -->

                    <!-- 상태 내용 -->
                    <div class="state_list_info">
                        <div class="scroll">
                            <ul class="list">
                                <li><b>[오류발생]</b>[어플리케이션] 신한은행기관관리부 DB 커넥션 에러가 1건 발생하였습니다.</li>
                                <li><b>[오류발생]</b>[어플리케이션] 신한은행기관관리부 DB 커넥션 에러가 1건 발생하였습니다.</li>
                                <li><b>[오류발생]</b>[어플리케이션] 신한은행기관관리부 DB 커넥션 에러가 1건 발생하였습니다. 신한은행기관관리부 DB 커넥션 에러가 1건 발생하였습니다. 신한은행기관관리부 DB 커넥션 에러가 1건 발생하였습니다. 신한은행기관관리부 DB 커넥션 에러가 1건 발생하였습니다.</li>
                                <li><b>[오류발생]</b>[어플리케이션] 신한은행기관관리부 DB 커넥션 에러가 1건 발생하였습니다.</li>
                                <li><b>[오류발생]</b>[어플리케이션] 신한은행기관관리부 DB 커넥션 에러가 1건 발생하였습니다.</li>
                            </ul>
                        </div>
                    </div>
                    <!-- 상태 내용 -->
                </div>
            </div>
        </div>
        <!-- //실시간 진행 상황 -->

        <!-- 이체 별 현황 -->
        <div class="row">
            <h3>이체 별 현황</h3>
            <!-- chart -->
            <div class="box">
                <div class="chart_box">
                    <p class="tit">당 타행 이체 현황 조회<nuxt-link to="" class="vlink btn_more">더보기</nuxt-link></p>
                    <!-- <DoughnutChart :chartData="tranData" class="chart" /> -->
                    <BarChart :chartData="tranData" class="chart" />
                    <div class="txt">
                        <span>출금 <b>10,000</b>만원</span>
                        <span>입금 <b>1,000</b>만원</span>
                    </div>
                </div>
                <div class="chart_box batch">
                    <p class="tit">일괄 이체 현황 조회<nuxt-link to="" class="vlink btn_more">더보기</nuxt-link></p>
                    <PieChart :chartData="totTranData" class="chart" />
                </div>
            </div>
            <!-- chart -->

            <!-- chart img sample 개발 시 삭제 -->
            <div class="box">
                <div class="chart_box sample">
                    <p class="tit">당 타행 이체 현황 조회<nuxt-link to="" class="vlink btn_more">더보기</nuxt-link></p>
                    <div class="mt_23">
                        <img src="../../../assets/images/chart_4.png" alt="차트 이미지" class="chart_img">
                        <img src="../../../assets/images/chart_5.png" alt="차트 이미지" class="chart_img ml_126">
                        <div class="txt">
                            <span>출금 <b>10,000</b>만원</span>
                            <span>입금 <b>1,000</b>만원</span>
                        </div>
                    </div>
                </div>
                <div class="chart_box sample other">
                    <p class="tit">일괄 이체 현황 조회<nuxt-link to="" class="vlink btn_more">더보기</nuxt-link></p>
                    <div class="chart_img_box">
                        <img src="../../../assets/images/chart_6.png" alt="차트 이미지" class="chart_img">
                        <img src="../../../assets/images/chart_7.png" alt="차트 이미지" class="chart_img">
                        <ul class="remark tot_tran">
                            <li class="succ">성공 건 수 20건</li>
                            <li class="fail">실패 건 수 10건</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- //chart img sample -->
        </div>
        <!-- //이체 별 현황 -->
    </div>

  </div>

</template>

<style scoped>
  
</style>

<script setup>

// 이체현황 총
const transferTot = ref('160')
// 이체현황 총 숫자 카운팅 효과
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
const transferNormal = ref('20')
// 이체 정상 숫자 카운팅 효과
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
// 이체 오류 숫자 카운팅 효과
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

// 기관 노출 on off
const btnViewCfgIdx = ref()
const btnViewCfg = (event) => {
    const elements = event.target.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.btn_view_cfg')
    const index = Array.from(elements).indexOf(event.target)
    btnViewCfgIdx.value = index
    if(elements[btnViewCfgIdx.value].classList.contains("on")){
        elements[btnViewCfgIdx.value].classList.remove("on")
    }else{
        elements[btnViewCfgIdx.value].classList.add("on")
    }
};

// 타임아웃 color
const timeOut = ref(0)
// 타행불능
const impossible = ref(1)
// 네트워크 오류
const networkErr = ref(3)
// 처리 오류
const processErr = ref(0)

// 확장 버튼
const btnIdx = ref()
let ulTemp
let liTemp
const viewExtend = (event) => {
    const lis = event.target.parentElement.parentElement.querySelectorAll('.btn_extend')
    const index = Array.from(lis).indexOf(event.target)
    btnIdx.value = index
    const liElements = document.querySelectorAll(".slide_list li .btn_extend")

    if (lis[btnIdx.value].parentElement.classList.contains('open')) {
        lis[btnIdx.value].parentElement.classList.remove('open')
        lis[btnIdx.value].innerHTML = '확장'
        
    } else {
        liElements.forEach((li) => {
            li.parentElement.classList.remove('open')
        });
        lis[btnIdx.value].parentElement.classList.add("open")
        lis[btnIdx.value].innerHTML = '축소'
    }
};
// slide li width
let liMarginLeft = 20 // li margin-left
let liItem // li
let liItemWidth // li width
const liWidth = () => {
    liItem = document.querySelector('.slide_list > li')
    liItemWidth = liItem.offsetWidth + liMarginLeft
}
// slide ul width
let liItemAll // li all
let liItemCnt // li length
let slidesPerView = 4 // slide view cnt
const slidesPerViewMove = ref(0)
const liItemWidthTot = ref(0); // li all width
const ulWidth = () => {
    liItemAll =  document.querySelectorAll(".slide_list > li")
    liItemCnt = liItemAll.length
    liItemWidthTot.value = liItemCnt * liItemWidth - liMarginLeft
    slidesPerViewMove.value = liItemCnt - slidesPerView
    ulTemp = liItemWidthTot.value
};
// 이전 다음 버튼
const btnPrevView = ref(true)
const btnNextView = ref(true)
const btnPrevNextView = () => {
    if(slidesPerViewMove.value < liItemCnt){
        btnNextView.value = false
    }
    if(slidesPerViewMove.value === 0){
        btnNextView.value = true
    }
    if(slidesPerViewMove.value < liItemCnt - slidesPerView){
        btnPrevView.value = false
    }else if(slidesPerViewMove.value === liItemCnt - slidesPerView){
        btnPrevView.value = true
    }
    // 확장 닫기
    const lielements = document.querySelectorAll('.slide_list > li')
    lielements.forEach(element => {
        element.classList.remove('open')
    })
};
const move = ref(0);
const btnPrev = () => {
    if(slidesPerViewMove.value < liItemCnt - slidesPerView){
        slidesPerViewMove.value +=1
        move.value += liItemWidth;
        slideViewLastLeft -= 1
        slideViewLastRight -= 1
    }
    if(slidesPerViewMove.value === liItemCnt - slidesPerView){
        console.log('슬라이드 : 처음')
    }
    btnPrevNextView()
    slideView()   
};
const btnNext = () => {
    if(slidesPerViewMove.value > 0){
        slidesPerViewMove.value -=1
        move.value -= liItemWidth;
        slideViewLastLeft += 1
        slideViewLastRight += 1
    }
    if(slidesPerViewMove.value === 0){
        console.log('슬라이드 : 마지막')
    }
    btnPrevNextView()
    slideView()
};
// slideView last li
let slideViewLastLeft = slidesPerView - 2 // slide view last left li
let slideViewLastRight = slidesPerView - 1 // slide view last right li
const slideView = () => {
    const lielements = document.querySelectorAll('.slide_list > li');
    lielements.forEach(element => {
        element.classList.remove('last')
    })

    lielements[slideViewLastLeft].classList.add('last')
    lielements[slideViewLastRight].classList.add('last')
}

// 차트
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
let cpuUse = 86 // CPU 사용
let cpuUnused = 14 // CPU 미사용
const cpuData = {
  labels: ['미사용', '사용'],
  datasets: [
    {
      data: [cpuUnused, cpuUse],
      backgroundColor: ['#FF6D40', '#5D47E5'],

      indexAxis: 'y',
    },
  ],
};
let memoryUse = 70 // MEMORY 사용
let memoryUnused = 30 // MEMORY 미사용
const memoryData = {
  labels: ['미사용', '사용'],
  datasets: [
    {
      data: [memoryUnused, memoryUse],      
      backgroundColor: ['#FF6D40', '#29C986'],

      indexAxis: 'y',
    },
  ],
};
let diskUse = 50 // DISK 사용
let diskUnused = 50 // DISK 미사용
const diskData = {
  labels: ['미사용', '사용'],
  datasets: [
    {
      data: [diskUnused, diskUse],      
      backgroundColor: ['#FF6D40', '#FACB2C'],

      indexAxis: 'y',
    },
  ],
};

// 실시간 진행 상황
import ComSelectBox from '@/components/common/ComSelectBox.vue'

const org = ref('001')
const orgItems = ref([
  { title: '기관전체', value: '001' },
  { title: '기관명기관명기관명', value: '002' },
])

const stateListOver = (event) => {
    const states = document.querySelectorAll('.state_list');
    const index = Array.from(states).indexOf(event.target)
    const statesIdx = index
    states.forEach(element => {
        element.classList.remove('active')
    })
    states[statesIdx].classList.add('active')
}

// 당 타행 이체 현황 조회
import { BarChart } from 'vue-chart-3';
const tranData = {
  labels: ['당행 출금', '당행 입금', '타행 출금', '타행 입금'],
  datasets: [
    {
      label: '당행 출금',
      data: [40, 20, 30, 20],
      backgroundColor: ['#5D47E5', '#F7C929', '#797F9A', '#FF6363'],

      //indexAxis: 'y',
    },
  ],
};

// 일괄 이체 현황 조회
import { PieChart } from 'vue-chart-3';
let totTranSucc = 20 // DISK 사용
let totTranfail = 10 // DISK 미사용
const totTranData = {
  labels: ['성공 건 수', '실패 건 수'],
  datasets: [
    {
      data: [totTranSucc, totTranfail],      
      backgroundColor: ['#5D47E5', '#FF6363'],

      indexAxis: 'y',
    },
  ],
};

onMounted(() => {
    transferTotType() // 이체현황 총
    transferNormalType() // 이체 정상
    transferErrorType() // 이체 오류

    liWidth() //slide li width
    ulWidth() //slide ul width
    btnPrevNextView() // 이전 다음 버튼
    slideView() // slideView last li
})

onBeforeUnmount(() => {
  
})

</script>