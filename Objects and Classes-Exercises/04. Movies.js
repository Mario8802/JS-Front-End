function moviesInfo(input) {
    let movies = [];

    for (let line of input) {
        if (line.startsWith("addMovie ")) {
            let name = line.replace("addMovie ", "")
            movies.push({ name });
        }

        else if (line.includes(" directedBy ")) {
            let [name, director] = line.split(" directedBy ");
            let movie = movies.find(m => m.name === name);
            if (movie) {
                movie.director = director;
            }
        }
        else if (line.includes(" onDate ")) {
            let [name, date] = line.split(" onDate ");
            let movie = movies.find(m => m.name === name);
                if (movie) {
                    movie.date = date;
                }
            }
        }

    movies
        .filter(m => m.name && m.director && m.date)
        .forEach(m => console.log(JSON.stringify(m)));
    }

