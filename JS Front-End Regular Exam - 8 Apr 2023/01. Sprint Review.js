function solve (arr) {
    let n = Number(arr[0]);
    let sprintBoard = {};

    for (let i = 1; i < n; i++) {
        let [assignee, taskId, title, status, points] = arr[i].split(':');

        if (!sprintBoard[assignee]) {
            sprintBoard[assignee] = [];
        }

        sprintBoard[assignee].push({
            taskId,
            title,
            status,
            ponts: Number(points)
        });
    }



}

solve(  [
        '4',
        'Kiril:BOP-1213:Fix Typo:Done:1',
        'Peter:BOP-1214:New Products Page:In Progress:2',
        'Mariya:BOP-1215:Setup Routing:ToDo:8',
        'Georgi:BOP-1216:Add Business Card:Code Review:3',
        'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
        'Change Status:Georgi:BOP-1216:Done',
        'Change Status:Will:BOP-1212:In Progress',
        'Remove Task:Georgi:3',
        'Change Status:Mariya:BOP-1215:Done',
    ])