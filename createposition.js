import { getAllPositions, updatePosition, addNewPosition, deletePosition } from "./restapi.js";

//Returns an array object holding position information. 
function getAllPositionInfoFromPage() {
    let positionClassType = document.getElementById("CourseType").value
    let positionCourseNumber = document.getElementById("CourseNumber").value
    let poitionDegree = document.getElementById("level").value
    let positionSemester = []

    if(document.getElementById("checkbox_0").checked) {
        positionSemester.push("Fall")
    }
    if(document.getElementById("checkbox_1").checked) {
        positionSemester.push("Spring")
    }
    if(document.getElementById("checkbox_2").checked) {
        positionSemester.push("Summer")
    }

    let positionType = document.getElementById("position").value
    let positionsNotes = document.getElementById("notes").value

    return [positionClassType, positionCourseNumber, poitionDegree, positionSemester, positionType, positionsNotes]
}

function createPositionObjectFromArrayWithoutId(positionInfo) {
    return {
        classType: positionInfo[0],
        courseNumber: positionInfo[1],
        degree: positionInfo[2],
        semester: positionInfo[3],
        positionType: positionInfo[4],
        notes: positionInfo[5]
    }
}

window.addEventListener('load', function() {
    //getAllPositions().then(data => console.log(data))
    document.getElementById("courseform").addEventListener('submit',async function() {
        let positionInfo = getAllPositionInfoFromPage()
        console.log("creating position")
        await addNewPosition(createPositionObjectFromArrayWithoutId(positionInfo))
        location.href = "admin.html"
    })
})