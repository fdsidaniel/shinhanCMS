/** global function : gf  */
import { Router } from 'vue-router'

import { loadingStore } from '@/store/loadingStore'
import { userInfoStore } from '@/store/userInfoStore'
import { useDialogStore } from '~/store/dialogStore'
import _ from 'lodash'

const storeRouter = {
  router: {},
}

export const $fx = {
  setRouter: (router: Router) => {
    storeRouter.router = router
  },
  startLoadingbar: () => {
    loadingStore().startLoadingbar()
  },
  finishLoadingbar: () => {
    loadingStore().finishLoadingbar()
  },
  axios: () => {
    return $useAxios().instance
  },
  isLogin: () => {
    return userInfoStore().isLogin()
  },
  logout: (url: String = '/') => {
    //로그아웃
    userInfoStore().logout()
    $fx.move(url)
  },
  move: (url: String) => {
    //페이지 이동
    storeRouter.router.push(url)
  },
  getRedirectUrl: () => {
    //로그인 후 이동될 URL
    return userInfoStore().getRedirectUrl()
  },
  setSessionStorageItem: (name: string, data: any) => {
    //세션 스토리지 저장
    sessionStorage.setItem(name, data)
  },
  getSessionStorageItem: (name: string) => {
    //세션 스토리지 가져오기
    return sessionStorage.getItem(name)
  },
  removeSessionStorageItem: (name: string) => {
    //세션 스토리지 삭제
    sessionStorage.removeItem(name)
  },
  saveLoginTime: () => {
    const currentTime = new Date().getTime()
    $fx.setSessionStorageItem('loginTime', currentTime.toString())
  },
  checkLoginTime: () => {
    if (!$fx.isLogin()) return
    const loginTime = $fx.getLoginTime()
    if (loginTime) {
      const currentTime = new Date().getTime()
      const elapsedMinutes = (currentTime - loginTime) / (1000 * 60)
      if (elapsedMinutes >= 10) {
        userInfoStore().setLoginExtension(false)
        $fx.logout()
      } else if (elapsedMinutes >= 9) {
        //경고창 띄우기
        userInfoStore().setLoginExtension(true)
        if (
          confirm(
            '60초 후 자동 로그아웃 입니다.\r\n안전한 사이트 이용을 위해 10분 경과 후 자동으로 접속이 종료됩니다.\r\n로그인 시간을 연장하시겠습니까?',
          )
        ) {
          //health 체크 및 연장
        } else {
          $fx.logout()
        }
      }
    }
  },
  getLoginTime: () => {
    const loginTime = sessionStorage.getItem('loginTime')
    return loginTime ? parseInt(loginTime) : null
  },
  makeDialog: (option: DialogOption): Promise<any> => {
    const deferrer = createDeferred()
    option._id = _.uniqueId('shinhan_dialog')
    option._deferrer = deferrer
    option.returnValue = {}

    useDialogStore().pushDialogList(option)

    return option._deferrer.promise
  },
  throwDialog: (name: string, options: Partial<DialogOption> = {}): Promise<any> => {
    const combinedOptions: DialogOption = {
      name: name,
      ...options,
    }
    return $fx.makeDialog(combinedOptions)
  },
  throwAlert: (message: string): Promise<any> => {
    const option: DialogOption = {
      name: 'alert',
      data: { message: message },
      size: 'small',
    }
    return $fx.makeDialog(option)
  },
}

function createDeferred() {
  let _resolve, _reject
  const promise = new Promise((resolve, reject) => {
    _resolve = resolve
    _reject = reject
  })
  return {
    promise,
    resolve: _resolve,
    reject: _reject,
  }
}
