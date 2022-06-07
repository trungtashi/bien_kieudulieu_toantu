// Nhập điểm
let inputVatly = prompt('Nhập điểm vật lý')
let inputSinhhoc = prompt('Nhập điểm sinh học')
let inputHoahoc = prompt('Nhập điểm hóa học')

let vatly = parseInt(inputVatly)
let sinhhoc = parseInt(inputSinhhoc)
let hoahoc = parseInt(inputHoahoc)

let medium = (vatly + sinhhoc + hoahoc) /3
let total = vatly + sinhhoc + hoahoc

document.write('Điểm trung bình = '+ medium + '<br><br>' + 'Điểm tổng = ' + total)