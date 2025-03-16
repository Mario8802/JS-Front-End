function loadingBar(percentage) {
    const bar = `[${'%'.repeat(percentage / 10)}${'.'.repeat(10 - percentage / 10)}]`;
    console.log(percentage === 100 
        ? `${percentage}% Complete!\n${bar}` 
        : `${percentage}% ${bar}\nStill loading...`);
}
