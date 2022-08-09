// Điểm trung bình

let inputPhysics = prompt("Physics")
let inputChemistry = prompt("Chemistry")
let inputBiological = prompt("Biological")
let Physics = parseInt(inputPhysics)
let Chemistry = parseInt(inputChemistry)
let Biological = parseInt(inputBiological)
let Average = (Physics + Chemistry + Biological) / 3
document.write('Average =' + Average)

// Đổi độ C sang độ F
let inputC = prompt("C")
let C = parseInt(inputC)
let F = (C * 9) / 5 - 32
document.write('F =' + F)

// Diện tích hình tròn
let r = parseInt(prompt("bán kính"))
let S = 3.14 * r * r
document.write('S =' + S)


// Chu vi hình tròn
let r = parseInt(prompt("bán kính"))
let C = 3.14 * 2 * r
document.write('C =' + C)