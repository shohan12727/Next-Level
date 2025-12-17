const addStudentCourse = <T>(studentInfo:T) =>{
   return {
    course: "Next Level",
    ...studentInfo
   }
}

const studnet1 = {
    id: 123,
    name: 'king',
    hasPen : true
}

const studnet2 = {
    id: 123,
    name: 'kang',
    hasPen : false
}


const result = addStudentCourse(studnet2);
console.log(result);

