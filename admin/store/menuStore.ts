import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {
  const menu = ref({
    header: true,
    left: true,
    footer: true,
    navigator: true,
  })

  const isShowHeader = () => {
    return menu.value.header
  }

  const isShowLeft = () => {
    return menu.value.left
  }
  const isShowFooter = () => {
    return menu.value.footer
  }
  const isShowNavigator = () => {
    return menu.value.navigator
  }

  const setAllDisabled = () => {
    menu.value.header = false
    menu.value.left = false
    menu.value.footer = false
  }
  const setHeaderDisabled = () => {
    menu.value.header = false
  }
  const setLeftDisabled = () => {
    menu.value.left = false
  }
  const setFooterDisabled = () => {
    menu.value.footer = false
  }
  const setNavigator = (value: Boolean) => {
    menu.value.navigator = value
  }

  const setAllActivate = () => {
    menu.value.left = true
    menu.value.header = true
    menu.value.footer = true
  }

  return {
    isShowHeader,
    isShowFooter,
    isShowLeft,
    setAllDisabled,
    setAllActivate,
    setHeaderDisabled,
    setLeftDisabled,
    setFooterDisabled,
    isShowNavigator,
    setNavigator,
  }
})
