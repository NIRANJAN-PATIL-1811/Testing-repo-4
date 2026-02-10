// This is sample code for first

function findGreatest(myList) {
  let firstGreatestNum = myList[0];

  for (let i of myList) {
    if (i > firstGreatestNum) {
      firstGreatestNum = i;
    }
  }

  return firstGreatestNum;
}

module.exports = findGreatest;