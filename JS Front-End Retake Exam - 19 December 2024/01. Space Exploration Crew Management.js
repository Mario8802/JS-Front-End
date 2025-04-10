class Astronaut {
    constructor(name, section, skills) {
        this.name = name;
        this.section = section;
        this.skills = skills;
    }

    perform(section, skill) {
        if (this.section === section && this.skills.includes(skill)) {
            return `${this.name} has successfully performed the skill: ${skill}!`;
        } else {
            return `${this.name} cannot perform the skill: ${skill}.`;
        }
    }

    transfer(newSection) {
        this.section = newSection;
        return `${this.name} has been transferred to: ${newSection}`;
    }

    learnSkill(newSkill) {
        if (this.skills.includes(newSkill)) {
            return `${this.name} already knows the skill: ${newSkill}.`;
        } else {
            this.skills.push(newSkill);
            return `${this.name} has learned a new skill: ${newSkill}.`;
        }
    }

    getSummary() {
        const sortedSkills = this.skills.slice().sort((a, b) => a.localeCompare(b));
        return `Astronaut: ${this.name}, Section: ${this.section}, Skills: ${sortedSkills.join(', ')}`;
    }
}

function parseAstronauts(input) {
    const astronauts = {};
    const n = Number(input[0]);

    for (let i = 1; i <= n; i++) {
        const parts = input[i].split(' ');
        const name = parts[0];
        const section = parts[1];
        const skills = parts.slice(2).join(' ').split(',');
        astronauts[name] = new Astronaut(name, section, skills);
    }

    return astronauts;
}

function executeCommands(astronauts, commands) {
    for (const line of commands) {
        if (line === 'End') break;

        const [command, name, arg1, arg2] = line.split(' / ');

        if (command === 'Perform') {
            console.log(astronauts[name].perform(arg1, arg2));
        } else if (command === 'Transfer') {
            console.log(astronauts[name].transfer(arg1));
        } else if (command === 'Learn Skill') {
            console.log(astronauts[name].learnSkill(arg1));
        }
    }
}

function printSummary(astronauts) {
    for (const name in astronauts) {
        console.log(astronauts[name].getSummary());
    }
}

function spaceMission(input) {
    const astronauts = parseAstronauts(input);
    const commands = input.slice(Number(input[0]) + 1);
    executeCommands(astronauts, commands);
    printSummary(astronauts);
}



// function SpaceMission(input) {
//     class Astronaut {
//         constructor(name, section, skills) {
//             this.name = name;
//             this.section = section;
//             this.skills = skills;
//         }

//         perform(section, skill) {
//             if (this.section === section && this.skills.includes(skill)) {
//                 return `${this.name} has successfully performed the skill: ${skill}.`
//             } else {
//                 return `${this.name} can't perform the skill: ${skill}.`
//             }
//         }

//         transfer(newSection) {
//             this.section = newSection;
//             return `${this.name} has been transferred to: ${newSection}`
//         }

//         learnSkill(newSkill) {
//             if (this.skills.includes(newSkill)) {
//                 return `${this.name} already knows the skill: ${newSkill}.`;
//             } else {
//                 this.skills.push(newSkill);
//                 return `${this.name} has learned the skill: ${newSkill}.`;
//             }
//         }

//         getSumary() {
//             const sortedSkills = this.skills.slice(a, b).sort((a, b) => a.localeCompare(b));
//             return `Astronaut: ${this.name}, Section: ${this.section}, Skills: ${sortedSkills.join(', ')}`;
//         }
//     }

//     const astronauts = [];
//     const m = Number(input[0]);

//     for (let i = 1; i <= n; i++) {
//     const parts = input[i].split(' ');
//     const name = parts[0];
//     const section = parts[1];
//     const skills = parts.slice(2).join(' ').split(',');
//     astronauts[name] = new Astronaut(name, section, skills);
//     }

//     for (let i = n + 1; i < input.length; i++) {
//         const line = input[i];
//         if (line === 'End') break;
        
//         const [command, name, arg1, arg2] = line.split(' / ');

//         if (command === 'Perform') {
//             console.log(astronauts[name].perform(arg1, arg2));
//         } else if (command == "Transfer") {
//             console.log(astronauts[name].transfer(arg1));

//         } else if (command == "Learn Skill") {
//             console.log(astronauts[name].learnSkill(arg1));
//         }
//     }

//     for (const name in astronauts) {
//         console.log(astronauts[name].getSumary());
//     }
// }