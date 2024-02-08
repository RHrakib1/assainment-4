function calculateMoney(ticketNumber) {
    if (ticketNumber < 0) {
        return 'Please enter a valid number.';
    }
    else if (typeof ticketNumber !== 'number') {
        return 'Please enter a valid element';
    }
    else{
    const ticketsalse = ticketNumber * 120;
    const gardSalary = 500;
    const food = 8 * 50;
    const totalCost = gardSalary + food;
    const totalMoney = ticketsalse - totalCost;
    return totalMoney;
    }
}
const functionCall0=calculateMoney(10);
console.log(functionCall0);







function checkName(name) {

    if (typeof name !== 'string' || name.length === 0) {
        return 'Invalid';
    }
    else {
        let convertLowerCase = name.toLowerCase();
        let lastWord = convertLowerCase[convertLowerCase.length - 1];
        if (lastWord === 'a' || lastWord === 'e' || lastWord === 'i' || lastWord === 'o' || lastWord === 'u' || lastWord === 'w' || lastWord === 'y') {
            return 'Good Name';
        }
        else {
            return 'Bad Name';
        }
    }

}
const name1 = "raki";
const functonCall = checkName(name1);
console.log(functonCall);








function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return 'please enter the Array';
    }
    else {
        let newArray = [];
        for (const arr of array) {
            if (typeof arr === 'number' && !isNaN(arr)) {
                newArray.push(arr);
            }
        }
        return newArray;
    }
}
const arrayHear =["1" , {num:2} , NaN ]   ;
const arraydefine = deleteInvalids(arrayHear);
console.log(arraydefine);






function password(obj) {
    const name = obj.name;
    const birthYear = obj.birthYear;
    const siteName = obj.siteName;
    if (birthYear.toString().length < 4 || name === undefined || birthYear === undefined || siteName === undefined) {
        return 'Invalid'
    }
    else {
        const capitalSiteName = siteName[0].toUpperCase() + siteName.slice(1);
        const fullData = `${capitalSiteName}#${name}@${birthYear}`
        return fullData;
    }

}
const functionCall2 = password({ name: "rahat", birthYear: 2002, siteName: "Facebook" });
console.log(functionCall2);





function monthlySavings(arr, livingCost){
    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
          return 'invalid input';
    }
    else{
          let sum = 0;
          for (const value of arr){
                let taxAmount = 0;
                if(value >= 3000){
                      let taxPercentage = 20;
                      taxAmount = (taxPercentage / 100) * value;
                }
                sum+=value-taxAmount;
          }
          const savings = sum.toFixed(0) - livingCost;
          if(sum === livingCost){
                return 0;
          }
          else if(savings > 0){
                return savings;
          }
          return 'earn more';
    }
}
const tarin=monthlySavings([ 1000 , 2000 , 2500 ] , 5000);
console.log(tarin);
