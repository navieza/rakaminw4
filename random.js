function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

const array100 = []
function randomizer(randomvalue){
    for (let i = 0; i <100; i++){
        array100.push(getRndInteger(1,50))
    }
    console.log("Array random : ")
    return console.log(array100)
}
randomizer(array100)

//array ganjil
const arrayodd = []
function oddindex(randomvalue, oddvalue){
    for (let i=0; i<randomvalue.length; i++){
        if (i%2==0){
            oddvalue.push(randomvalue[i])
        }
    }
    console.log("\nIndex ganjil : ")
    return console.log(oddvalue)
}
oddindex(array100,arrayodd)

//array genap
const arrayeven = []
function evenindex(randomvalue, evenvalue){
    for (let i=0; i<randomvalue.length; i++){
        if (i%2 !=0){
            evenvalue.push(randomvalue[i])
        }
    }
    console.log("\nIndex genap : ")
    return console.log(evenvalue)
}
evenindex(array100,arrayeven)


//min max array ganjil
var minarrayodd = 20
for (let i=0; i<arrayodd.length; i++){
    if (arrayodd[i] < minarrayodd){
        minarrayodd = arrayodd[i]
    }
    else {
    
    }
}
console.log("\nNilai minimal array ganjil : " + minarrayodd)

var maxarrayodd = 20
for (let i=0; i<arrayodd.length; i++){
    if (arrayodd[i] > maxarrayodd){
        maxarrayodd = arrayodd[i]
    }
    else {
    
    }
}
console.log("Nilai maximal array ganjil : " + maxarrayodd)

var totalarrayodd = 0
for (let i=0; i<arrayodd.length; i++){
    totalarrayodd += arrayodd[i]
}
console.log("Nilai total array ganjil : " + totalarrayodd)

var meanarrayodd = totalarrayodd/arrayodd.length
console.log("Nilai rata-rata array ganjil : " + meanarrayodd)

//min max array genap
var minarrayeven = arrayeven[0]
for (let i=0; i<arrayeven.length; i++){
    if (arrayeven[i] < minarrayeven){
        minarrayeven = arrayeven[i]
    }
    else {
    
    }
}
console.log("\nNilai minimal array genap : " + minarrayeven)

var maxarrayeven = arrayeven[0]
for (let i=0; i<arrayodd.length; i++){
    if (arrayeven[i] > maxarrayeven){
        maxarrayeven = arrayeven[i]
    }
    else {
    
    }
}
console.log("Nilai maximal array genap : " + maxarrayeven)

var totalarrayeven = 0
for (let i=0; i<arrayeven.length; i++){
    totalarrayeven += arrayeven[i]
}
console.log("Nilai total array genap : " + totalarrayeven)

var meanarrayeven = totalarrayeven/arrayeven.length
console.log("Nilai rata-rata array ganjil : " + meanarrayeven)

//perbandingan index genap dan ganjil
if (minarrayodd < minarrayeven){
    console.log("\nNilai minimal index ganjil < nilai minimal index genap")
} else if (minarrayodd > minarrayeven){
    console.log("\nNilai minimal index genap < nilai minimal index ganjil")
} else {
    console.log("\nNilai minimal index genap = nilai minimal index ganjil")
}

if (maxarrayodd > maxarrayeven){
    console.log("Nilai maximal index ganjil > nilai maximal index genap")
} else if (maxarrayodd < maxarrayeven){
    console.log("Nilai maximal index genap > nilai maximal index ganjil")
} else {
    console.log("Nilai maximal index genap = nilai maximal index ganjil")
}

if (meanarrayodd > meanarrayeven){
    console.log("Nilai rata-rata index ganjil > nilai rata-rata index genap")
} else if (meanarrayodd < meanarrayeven){
    console.log("Nilai rata-rata index genap > nilai rata-rata index ganjil")
} else {
    console.log("Nilai rata-rata index genap = nilai rata-rata index ganjil")
}

if (totalarrayodd > totalarrayeven){
    console.log("Nilai total index ganjil > nilai total index genap")
} else if (totalarrayodd < totalarrayeven){
    console.log("Nilai total index genap > nilai total index ganjil")
} else {
    console.log("Nilai total index genap = nilai total index ganjil")
}