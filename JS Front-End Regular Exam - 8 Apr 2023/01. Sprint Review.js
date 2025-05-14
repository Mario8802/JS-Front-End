function solve(arr) {
    let n = Number(arr.shift());
    let sprintBoard = {};

    for (let i = 0; i < n; i++) {
        let [assignee, taskId, title, status, points] = arr[i].split(':');

        if (!sprintBoard[assignee]) {
            sprintBoard[assignee] = [];
        }

        sprintBoard[assignee].push({
            taskId,
            title,
            status,
            points: Number(points)
        });
    }

    let commands = arr.slice(n);

    function assigneeExists(name) {
        if (!sprintBoard.hasOwnProperty(name)) {
            console.log(`Assignee ${name} does not exist on the board!`);
            return false;
        }
        return true;
    }

    for (let line of commands) {
        let [command, ...rest] = line.split(':');

        if (command === 'Add New') {
            let [assignee, taskId, title, status, points] = rest;

            if (!assigneeExists(assignee)) continue;

            sprintBoard[assignee].push({
                taskId,
                title,
                status,
                points: Number(points)
            });

        } else if (command === 'Change Status') {
            let [assignee, taskId, newStatus] = rest;

            if (!assigneeExists(assignee)) continue;

            let task = sprintBoard[assignee].find(task => task.taskId === taskId);

            if (!task) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                continue;
            }

            task.status = newStatus;

        } else if (command === 'Remove Task') {
            let [assignee, index] = rest;
            index = Number(index);

            if (!assigneeExists(assignee)) continue;

            if (index < 0 || index >= sprintBoard[assignee].length) {
                console.log(`Index is out of range!`);
                continue;
            }

            sprintBoard[assignee].splice(index, 1);
        }
    }

    let points = {
        'ToDo': 0,
        'In Progress': 0,
        'Code Review': 0,
        'Done': 0
    };

    for (let assignee in sprintBoard) {
        for (let task of sprintBoard[assignee]) {
            points[task.status] += task.points;
        }
    }

    console.log(`ToDo: ${points['ToDo']}pts`);
    console.log(`In Progress: ${points['In Progress']}pts`);
    console.log(`Code Review: ${points['Code Review']}pts`);
    console.log(`Done Points: ${points['Done']}pts`);

    let done = points['Done'];
    let rest = points['ToDo'] + points['In Progress'] + points['Code Review'];

    if (done >= rest) {
        console.log(`Sprint was successful!`);
    } else {
        console.log(`Sprint was unsuccessful...`);
    }
}
