import * as XLSX from 'xlsx'
import _ from 'lodash'
const storeDayJs = {
  dayjs: {},
}
export const $utils = {
  findMenu:(menuList:Array , toPath : String) =>{
    const result = _.find(
      menuList,
      (item)=>toPath.indexOf(item.menuCode) >-1 || toPath.indexOf(item.filePath) > -1,
    )
    if(result){
      return result
    }
  },
  formatDate(dateStr:String,format:String = '-', isShowFormat :Boolean = true){
    if(!isShowFormat){
      format = ''
    }
    if(!dateStr) return ''
    if(typeof dateStr === 'object'){
      const nowDate = new Date(dateStr)
      const year = nowDate.getFullYear()
      const month = String(nowDate.getMonth() + 1).padStart(2,'0')
      const date = String(nowDate.getDate()).padStart(2,'0')
      const returnDate = `${year}${format}${month}${format}${date}`
      return returnDate
    }else{
      const strDate = dateStr.substr(0,8)
      const returnDate = `${strDate.substr(0,4)}${format}${strDate.substr(4,2)}${format}${strDate.substr(6,2)}`
      return returnDate
    }
  },
  formatMaskPhoneNumber(phoneNumber:String){
    if(!phoneNumber)return
    const digisOnly = phoneNumber.replace(/\D/g,'')
    const maskedPhoneNumber = `${digisOnly.substring(0,3)}-${digisOnly.substring(3,5)}**-****`
    return maskedPhoneNumber
  },
  formatPhoneNumber(phoneNumber:String){
    if(!phoneNumber)return
    const digisOnly = phoneNumber.replace(/\D/g,'')
    const maskedPhoneNumber = `${digisOnly.substring(0,3)}-${digisOnly.substring(3,7)}-${digisOnly.substring(7)}`
    return maskedPhoneNumber
  },
  /**
   * 
   * @param yearsToAdd 
   * @param monthsToAdd 
   * @param daysToAdd 
   * @returns 
   */
  getDateYYYYMMDD:(yearsToAdd = 0,monthsToAdd = 0,daysToAdd = 0)=>{
    const currentDate = new Date()
    currentDate.setFullYear(currentDate.getFullYear() + yearsToAdd)
    currentDate.setMonth(currentDate.getMonth() + monthsToAdd)
    currentDate.setDate(currentDate.getDate() + daysToAdd)
    return $utils.formatDate(currentDate).replace(/-/gi,'')
  },
  /**
   * 랜덤값 리턴
   */
  getRandomNumber:()=>{
    let randomNumber = []
    for(let i =0; i<10; i++){
      randomNumber.push(Math.floor(Math.random() * 10))
    }
    let combinedString = randomNumber.join('')
    return combinedString
  },
  //dayjs 객체 셋팅
  setDayjs: (dayjs: any) => {
    storeDayJs.dayjs = dayjs
  },
  dayjs: () => {
    return storeDayJs.dayjs()
  },
  /**
   * 주어진 년, 월, 일만큼 현재 날짜에 더하거나 뺀 날짜를 '년-월-일' 형태로 반환.
   *
   * @param {number} yearsToAdd - 더하거나 뺄 년 (음수일 경우 빼기)
   * @param {number} monthsToAdd - 더하거나 뺄 월 (음수일 경우 빼기)
   * @param {number} daysToAdd - 더하거나 뺄 일 (음수일 경우 빼기)
   * @returns {Date} - '변경된 Date
   */
  getDate: (yearsToAdd = 0, monthsToAdd = 0, daysToAdd = 0) => {
    const currentDate = new Date()
    currentDate.setFullYear(currentDate.getFullYear() + yearsToAdd)
    currentDate.setMonth(currentDate.getMonth() + monthsToAdd)
    currentDate.setDate(currentDate.getDate() + daysToAdd)

    return currentDate
  },
  /**
   * 입력값에 스페이스 이외의 의미있는 값이 있는지 체크
   * ex) if (isEmpty(form.keyword)) {
   * alert!("검색조건을 입력하세요.");
   * }
   */
  isEmpty(value: any) {
    if (!value) {
      return true
    }
    return false
  },

  /**
   * 입력값에 특정 문자(chars)가 있는지 체크
   * 특정 문자를 허용하지 않으려 할 때 사용
   * ex) if (containsChars(form.name,"!,*&^%$#@~;")) {
   * alert!("이름 필드에는 특수 문자를 사용할 수 없습니다.");
   * }
   */
  containsChars(value: string, chars: string) {
    for (var inx = 0; inx < value.length; inx++) {
      if (chars.indexOf(value.charAt(inx)) != -1) return true
    }
    return false
  },

  /**
   * 입력값이 특정 문자(chars)만으로 되어있는지 체크
   * 특정 문자만 허용하려 할 때 사용
   * ex) if (!this.containsCharsOnly(form.blood,"ABO")) {
   * alert!("혈액형 필드에는 A,B,O 문자만 사용할 수 있습니다.");
   * }
   */
  containsCharsOnly(value: string, chars: string) {
    for (var inx = 0; inx < value.length; inx++) {
      if (chars.indexOf(value.charAt(inx)) == -1) return false
    }
    return true
  },

  /**
   * 입력값이 알파벳인지 체크
   * 아래 isAlphabet() 부터 isNumComma()까지의 메소드가
   * 자주 쓰이는 경우에는 var chars 변수를
   * global 변수로 선언하고 사용하도록 한다.
   * ex) var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   * var lowercase = "abcdefghijklmnopqrstuvwxyz";
   * var number = "0123456789";
   * isAlphaNum(value) {
   * var chars = uppercase + lowercase + number;
   * return this.containsCharsOnly(value,chars);
   * }
   */
  isAlphabet(value: string) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    return this.containsCharsOnly(value, chars)
  },

  /**
   * 입력값이 알파벳 대문자인지 체크
   */
  isUpperCase(value: string) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return this.containsCharsOnly(value, chars)
  },

  /**
   * 입력값이 알파벳 소문자인지 체크
   */
  isLowerCase(value: string) {
    var chars = 'abcdefghijklmnopqrstuvwxyz'
    return this.containsCharsOnly(value, chars)
  },

  /**
   * 입력값에 숫자만 있는지 체크
   */
  isNumber(value: string) {
    var chars = '0123456789'
    return this.containsCharsOnly(value, chars)
  },

  /**
   * 입력값이 알파벳,숫자로 되어있는지 체크
   */
  isAlphaNum(value: string) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    return this.containsCharsOnly(value, chars)
  },

  /**
   * 입력값이 숫자,대시(-)로 되어있는지 체크
   */
  isNumDash(value: string) {
    var chars = '-0123456789'
    return this.containsCharsOnly(value, chars)
  },

  /**
   * 입력값이 숫자,콤마(,)로 되어있는지 체크
   */
  isNumComma(value: string) {
    var chars = ',0123456789'
    return this.containsCharsOnly(value, chars)
  },

  /**
   * 입력값이 이메일 형식인지 체크
   * ex) if (!isValidEmail(form.email)) {
   * alert!("올바른 이메일 주소가 아닙니다.");
   * }
   */
  isValidEmail(value: string) {
    // var format = /^(\S+)@(\S+)\.([A-Za-z]+)$/;
    var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/
    return isValidFormat(value, format)
  },

  /**
   * 입력값이 전화번호 형식(숫자-숫자-숫자)인지 체크
   */
  isValidPhone(value: string) {
    var format = /^(\d+)-(\d+)-(\d+)$/
    return isValidFormat(value, format)
  },

  /**
   * 입력값의 바이트 길이를 리턴
   * ex) if (getByteLength(form.title) > 100) {
   * alert!("제목은 한글 50자(영문 100자) 이상 입력할 수 없습니다.");
   * }
   * Author : Wonyoung Lee
   */
  getByteLength(value: string) {
    var byteLength = 0
    for (var inx = 0; inx < value.length; inx++) {
      var oneChar = escape(value.charAt(inx))
      if (oneChar.length == 1) {
        byteLength++
      } else if (oneChar.indexOf('%u') != -1) {
        byteLength += 2
      } else if (oneChar.indexOf('%') != -1) {
        byteLength += oneChar.length / 3
      }
    }
    return byteLength
  },

  /**
   * 입력값에서 콤마를 없앤다.
   */
  removeComma(value: string) {
    return value.replace(/,/gi, '')
  },
  excelRead(file, excelReadData) {
    const reader = new FileReader()
    reader.onload = (e) => {
      const data = e.target.result
      const workbook = XLSX.read(data, { type: 'binary' })

      // 예를 들어 첫 번째 워크시트의 데이터를 가져옵니다.
      const wsname = workbook.SheetNames[0]
      const ws = workbook.Sheets[wsname]

      // 워크시트의 데이터를 JSON 형식으로 변환합니다.
      const dataParsed = XLSX.utils.sheet_to_json(ws)
      excelReadData.value = dataParsed
    }
    reader.readAsBinaryString(file)
  },
  makeRowData(readData) {},
}
