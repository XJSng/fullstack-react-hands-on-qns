import React, { useState } from 'react'

export default function Movies() {

    const [movies, setMovies] = useState(
        [
            {
                'title': 'Star Wars IV: A New Hope',
                'director': 'George Lucas'
            },
            {
                'title': 'The Lord of the Rings: The Fellowship of the Ring',
                'director': 'Peter Jackson'
            }
        ]
    )

    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");


    function addMovie() {
        const cloned = [...movies, { title, director }]
        setMovies(cloned)
    }

    function removeMovie(e) {
        const indexToRemove = movies.findIndex(m => m == e.target.value);
        const cloned = [...movies.slice(0, indexToRemove),
        (movies.slice(indexToRemove + 1))]
        setMovies(cloned)
    }

    return <React.Fragment>
        {movies.map(m => (
            <React.Fragment>
                <div class="movie">
                    <h1>{m.title}</h1>
                    <h2>Directed by {m.director}</h2>
                    <button onClick={removeMovie}>Delete</button>
                </div>
            </React.Fragment>
        ))}

        <h3>Add New Movie</h3>
        <div>
            <label>Movie Title:</label>
            <input type="text" name="title" value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div>
            <label>Director</label>
            <input type="text" name="director" value={director} onChange={(event) => setDirector(event.target.value)} />
        </div>
        <button onClick={addMovie}>Add Movie</button>
    </React.Fragment>

}
