// TODO: Task - 1

const day = 5;

switch (day) {
    case 1:
        console.log(`Monday`);
        break;
    case 2:
        console.log(`Tuesday`);
        break;
    case 3:
        console.log(`Wednesday`);
        break;
    case 4:
        console.log(`Thursday`);
        break;
    case 5:
        console.log(`Friday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    case 7:
        console.log(`Sunday`);
    default:
        console.log(`Enter Valid Day Number`);
        break;
}


// TODO: Task - 2

const studentScore = 90;
let grade;

switch (true) {
    case (studentScore >= 90 && studentScore <= 100):
        grade = `A`;
        console.log(`Grade : ${grade}`);
        break;
    case (studentScore >= 70 && studentScore <= 80):
        grade = `B`;
        console.log(`Grade : ${grade}`);
        break;
    case (studentScore >= 50 && studentScore <= 60):
        grade = `C`;
        console.log(`Grade : ${grade}`);
    case (studentScore >= 30 && studentScore <= 40):
        grade = `D`;
        console.log(`Grade : ${grade}`);
    default:
        console.log(`Invalid studentScore`);
        break;
}