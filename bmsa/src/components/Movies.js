import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Movies.css";
import Filter from "./Filter";
import Languages from "./Languages";

const Movies = () => {
    const [movies1, setMovies1] = useState([]);
    const [filters, setFilters] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies1 = async () => {
            try {
                const response = await axios.get("http://localhost:1141/api/Movie1");
                setMovies1(response.data);
            } catch (error) {
                console.error("Error fetching movies:", error.message);
            }
        };

        fetchMovies1();
    }, []);

    const filteredMovies1 = movies1.filter((movie1) => {
        let matches = true;
        if (filters.language && movie1.language !== filters.language) {
            matches = false;
        }
        if (filters.genre && movie1.genre !== filters.genre) {
            matches = false;
        }
        if (filters.format && movie1.format !== filters.format) {
            matches = false;
        }
        return matches;
    });

    const handleImageClick = (id) => {
        navigate(`/movie/${id}`);
    };

    return (
   
        <div className="movies-container">
            <div className="left-section">
                <Filter setFilters={setFilters} />
            </div>
            <div className="right-section">
                <h1>Movies in Hyderabad</h1>
                <br/>
                <Languages setFilters={setFilters} />
                <br/>
                <div className="movie-list">
                    {filteredMovies1.length > 0 ? (
                        filteredMovies1.map((movie1) => (
                            <div key={movie1._id} className="movie-card" onClick={() => handleImageClick(movie1._id)}>
                                <img src={movie1.image} alt={movie1.title} className="movie-image" />
                                <h3>{movie1.title}</h3>
                                <p><strong>Genre:</strong> {movie1.genre}</p>
                                <p><strong>Language:</strong> {movie1.language}</p>
                            </div>
                        ))
                    ) : (
                        <p>No movies to display</p>
                    )}
                </div>
            </div>
        </div>
       
    );
};

export default Movies;
