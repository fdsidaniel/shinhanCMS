type EnterLoginParams = {
  id: string
  pw: string
}
export const loginApi = {
  /**
   * 로그인
   * @param id : 'test'
   * @param pw : '1234'
   */
  enterLogin(params: EnterLoginParams) {
    return $fx.axios().get('/todos/1', { params: params })
  },
}
