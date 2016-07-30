// students grades
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var nA = 0, nB = 0, nC = 0, nD = 0, nF = 0, lowestGrade = 100, highestGrade = 0;
for (var i = 0; i < scores.length; i++) {
	if ((50 < scores[i]) && (scores[i] <=60)) {
		nF +=1;
	} 
	else if (scores[i] <=70) {
		nD += 1;
	}
	else if (scores[i] <=80) {
		nC += 1;
	}
	else if (scores[i] <=90) {
		nB += 1;
	}
	else {
		nA += 1;
	}
	if (scores[i] > highestGrade) {
		highestGrade = scores[i];
	}
	if (scores[i] < lowestGrade) {
		lowestGrade = scores[i];
	}
}
console.log("Number students in grade A is ", nA);
console.log("Number students in grade B is ", nB);
console.log("Number students in grade C is ", nC);
console.log("Number students in grade D is ", nD);
console.log("Number students in grade F is ", nF);
console.log("Lowest grade is ", lowestGrade);
console.log("Highest grade is ", highestGrade);
