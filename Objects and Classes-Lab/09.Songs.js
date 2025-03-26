function solve(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberOfSongs = Number(input[0]);
    let filterType = input[input.length - 1];

    for (let i = 1; i <= numberOfSongs; i++) {
        let [typeList, name, time] = input[i].split('_');
        let song = new Song(typeList, name, time);
        songs.push(song);
    }

    if (filterType === "all") {
        songs.forEach(song => console.log(song.name));
    } else {
        songs
            .filter(song => song.typeList === filterType)
            .forEach(song => console.log(song.name));
    }
}