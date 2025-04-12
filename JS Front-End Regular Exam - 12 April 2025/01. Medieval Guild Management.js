function medievalGuildManagement(input) {
    const n = Number(input.shift());
    const guild = {};

    for (let i = 0; i < n; i++) {
        let [name, role, skillsStr] = input[i].split(' ');
        let skills = skillsStr.split(',');
        guild[name] = { role: role, skills: new Set(skills) };
    }

    let commands = input.slice(n);
    for (let command of commands) {
        if (command === "End") break;

        let parts = command.split(' / ');
        let action = parts[0];

        if (action === "Perform") {
            let [name, role, skill] = [parts[1], parts[2], parts[3]];
            if (guild[name].role === role && guild[name].skills.has(skill)) {
                console.log(`${name} has successfully performed the skill: ${skill}!`);
            } else {
                console.log(`${name} cannot perform the skill: ${skill}.`);
            }
        } else if (action === "Reassign") {
            let [name, newRole] = [parts[1], parts[2]];
            guild[name].role = newRole;
            console.log(`${name} has been reassigned to: ${newRole}`);
        } else if (action === "Learn Skill") {
            let [name, newSkill] = [parts[1], parts[2]];
            if (guild[name].skills.has(newSkill)) {
                console.log(`${name} already knows the skill: ${newSkill}.`);
            } else {
                guild[name].skills.add(newSkill);
                console.log(`${name} has learned a new skill: ${newSkill}.`);
            }
        }
    }

    for (let name in guild) {
        let sortedSkills = Array.from(guild[name].skills).sort((a, b) => a.localeCompare(b));
        console.log(`Guild Member: ${name}, Role: ${guild[name].role}, Skills: ${sortedSkills.join(', ')}`);
    }
}
