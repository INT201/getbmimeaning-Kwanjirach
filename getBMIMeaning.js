const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  BMI = weight/(height*height)
    return console.log(BMI)
}
function getBMIMeaning(weight, height) {
  calculateBMI(weight,height)
  if(BMI < 18.5){
    return c"Underweight"
  }
  else if(BMI <= 24.9){
    if(BMI >= 18.5){
      return "Normal weight"
    }
  }
  else if(BMI > 25.0){
    return "Overweight"
  }
  else{
    return "Invalid Input!!!"
  }
}

module.exports = getBMIMeaning
