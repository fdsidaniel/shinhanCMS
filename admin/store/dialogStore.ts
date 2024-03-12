import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', () => {
  const dialogList = ref<Dialog[]>([])

  type Dialog = {
    _deferrer: {
      resolve: (data: ReturnData) => void
    }
  }
  type ReturnData = {}

  const getDialogList = () => dialogList.value

  const pushDialogList = (dialog: Dialog) => {
    dialogList.value.push(dialog)
  }

  const popDialogList = (returnData: ReturnData) => {
    const removedDialog = dialogList.value.pop()
    removedDialog?._deferrer.resolve(returnData)
  }

  const clearDialogs = () => {
    dialogList.value.splice(0, dialogList.value.length)
  }

  return {
    getDialogList,
    pushDialogList,
    popDialogList,
    clearDialogs,
  }
})
