// This is sample code for first

const myList = [1,5,4,7,8,9,0,3,5,6,8];

function findGreatest(myList) {
  let firstGreatestNum = myList[0];

  for (let i of myList) {
    if (i > firstGreatestNum) {
      firstGreatestNum = i;
    }
  }

  return firstGreatestNum;
}

console.log(findGreatest(myList));