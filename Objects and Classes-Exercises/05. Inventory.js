
function inventory(data) {
    let registry = [];

    for (let row of data) {
        let [name, level, items] = row.split(" / ");
        level = Number(level);

        let hero = {
            name,
            level,
            items
        };

        registry.push(hero);
    }

    registry.sort(compareLevels);

    for (let hero of registry) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }

    function compareLevels(a, b) {
        return a.level - b.level;
    }
    
}

inventory([
    '{"name":"Isacc","level":25,"items":["Apple","GravityGun"]}',
    '{"name":"Derek","level":12,"items":["Barrel","Torch"]}',
    '{"name":"Hes","level":1,"items":["Desolator","Sentinel","Anthem"]}'
  ]);
  
