/** @module Online-Calculator */

/**
 * Dibuat oleh Reski Mulud Muchamad
 * Sebagai tugas/assigment pada sesi 2, yaitu membuat online calculator
 * menggunakan javascript
 * 
 * Nama     : Reski Mulud Muchamad
 * Kode     : RCTN-KS01-002
 * Program  : Studi Independen - React & React Native
 */

/**
 * Menyimpan semua tombole operator (+, -, *, /) kedalam sebuah variabel
 * @constant {HTMLElement}
 */
const sumBtn = document.getElementById('sum-btn')
const subBtn = document.getElementById('sub-btn')
const multiBtn = document.getElementById('multi-btn')
const divBtn = document.getElementById('div-btn')
const acBtn = document.getElementById('ac-btn')
const ceBtn = document.getElementById('ce-btn')
const dotBtn = document.getElementById('dot-btn')
const equalBtn = document.getElementById('equal-btn')

/**
 * Mengambil text dengan id 'result' dan disimpan kedalam variabel result.
 * Variabel ini yang nantinya akan muncul didalam layar hasil operasi.
 * @constant {HTMLElement}
 */
const result = document.getElementById('result')

/**
 * Membuat variabel temporary yang berguna dalam perhitungan
 * @constant {HTMLElement}
 */
let textResult = 0
let numA = 0
let numB = ''
let equal = 0
let action = ''

/**
 * Fungsi yang digunakan untuk mengolah string dan angka yang nantinya
 * akan ditampilkan ke layar.
 * @param {*} value Value adalah isi dari angka dan operator yang akan
 * ditampilkan di layar
 */
function showToResult(value) {
    textResult = (textResult !== 0) ? String(textResult) + value : value
    result.innerHTML = textResult
}

/**
 * 
 * @param {*} key Key adalah parameter yang menandakan tombol mana yang ditekan
 */
function onKeyClick(key) {
    showToResult(key)
    numB += String(key)
    console.log(numB)
}

/**
 * 
 * @returns Mengembalikan nilai hasil dari operasi perhitungan
 */
function getCount() {
    let numBToNumber = Number(numB)
    if (action == '+') {
        return numA + numBToNumber
    } else if (action == '-') {
        return (numA == 0) ? numBToNumber : numA - numBToNumber
    } else if (action == '*') {
        return numA * numBToNumber
    } else if (action == '/') {
        if (numBToNumber == 0) {
            throw new Error(`Can't divide by zero (0)!!`)
        } else {
            return numA / numBToNumber
        }
    } else {
        return numBToNumber
    }
}

/**
 * Fungsi yang digunakan ketika semua operasi perhitungan sudah selesai
 * telah mendapatkan nilai. Ketika dungsi ini dipanggil, semua variabel 
 * temporary akan diubah menjadi 0 atau kosong.
 */
function clearAllNumberInVariable() {
    textResult = 0
    numA = 0
    numB = ''
    equal = 0
    action = ''
}


/**
 * Ketika tombol titik ditekan, terdapat dua kondisi yang akan dijalankan.
 * Apabila angka sebelumnya 0, maka akan ditampilkan 0.
 * dan apabila angka sebelumnya bukan 0, maka akan ditampilkan <angka>.
 */
dotBtn.addEventListener('click', () => {
    if (textResult == 0) {
        showToResult('0.')
    } else {
        showToResult('.')
        numB += '.'
    }
})


/**
 * Fungsi ketika tombol AC dan CE ditekan.
 * Sebenarnya saya tidak tau apa perbedaan dari AC dan CE, tapi saya membuat kedua
 * tombol tersebut dijadikan sebagai pembersih layar yang tampil.
 */
acBtn.addEventListener('click', () => {
    result.innerHTML = 0
    clearAllNumberInVariable()
})
ceBtn.addEventListener('click', () => {
    result.innerHTML = 0
    clearAllNumberInVariable()
})


/**
 * Tombol-tombol operator ketika ditekan
 */
sumBtn.addEventListener('click', () => {
    numA = getCount()
    numB = ''
    showToResult(' + ')
    action = '+'
})
subBtn.addEventListener('click', () => {
    numA = getCount()
    numB = ''
    showToResult(' - ')
    action = '-'
})
multiBtn.addEventListener('click', () => {
    numA = getCount()
    numB = ''
    showToResult(' x ')
    action = '*'
})
divBtn.addEventListener('click', () => {
    numA = getCount()
    numB = ''
    showToResult(' / ')
    action = '/'
})


/**
 * Ketika tombol sama dengan (=) ditekan
 */
equalBtn.addEventListener('click', () => {
    try { 
        equal = getCount() 
        showToResult(' = ' + equal)
    } catch (e) { 
        alert(e.message)
        result.innerHTML = 0 
    }
    clearAllNumberInVariable()
})