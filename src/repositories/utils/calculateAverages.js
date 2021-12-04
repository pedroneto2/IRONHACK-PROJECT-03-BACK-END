export const calculateAverage = (assessments) =>
  assessments.reduce((accumulator, assessment) => {
    
    let gradesQty = 0;
    const sumGrades = Object.keys(assessment.toJSON()).reduce((accumulator2, grade) => {
      if (grade.includes('grade')) {
        gradesQty++;
        return accumulator2 + assessment[grade];
      }
      return accumulator2 + 0;
    }, 0);
    const gradesAverage = sumGrades / gradesQty;
    return gradesAverage + accumulator;
  }, 0) / assessments.length;
