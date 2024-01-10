// Code your solution in this file!
const returnFirstTwoDrivers = arr => arr.slice(0,2);
const returnLastTwoDrivers = arr => arr.slice(-2);
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier = fare => {
    return function () {
        return fare*fare;
    }
}
const fareDoubler = fare => fare*2;
const fareTripler = fare => fare*3;
const selectDifferentDrivers = function (arr, rd) {
    if (rd === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arr); 
    } else if (rd === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arr);
    }
}
