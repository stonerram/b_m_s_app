import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Movies.css";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie1, setMovie1] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:1141/api/Movie1/${id}`);
                setMovie1(response.data);
            } catch (error) {
                console.error("Error fetching movie details:", error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    const scrollContainer = (selector, direction) => {
        const container = document.querySelector(selector);
        if (container) {
            const scrollAmount = direction === "left" ? -200 : 200; // Adjust scroll distance
            container.scrollBy({
                left: scrollAmount,
                behavior: "smooth", // Smooth scrolling
            });
        }
    };

    if (loading) return <p>Loading movie details...</p>;
    if (!movie1) return <p>Movie details not found.</p>;

    return (
        <div className="movie-details-page">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${movie1.background})` }}
            >
                <div className="details-container">
                    <img src={movie1.image} alt={movie1.title} className="movie-poster" />
                    <div className="movie-info">
                        <h1>{movie1.title}</h1>
                        <p className="movie-para">{movie1.genre}</p>
                        <p className="movie-para">{movie1.language}</p>
                        <p className="movie-para">{movie1.format}</p>
                        <br />
                        <button type="button" className="book-ticket-btn">
                            Book Tickets
                        </button>
                    </div>
                </div>
            </div>
            <br />
            <div className="details-content">
                <div className="about-movie">
                    <h1>About Movie</h1>
                    <p>{movie1.description}</p>
                </div>
                <br />
                <br />
                <div className="cast-crew-section">
                    <h2 className="cast-heading">Cast</h2>
                    <div className="cast-navigation">
                        <button onClick={() => scrollContainer(".cast-scroll-container", "left")}>
                            &lt;
                        </button>
                        <div className="cast-scroll-container">
                            {movie1.cast &&
                                movie1.cast.map((actor, index) => (
                                    <div key={index} className="cast-card">
                                        <img
                                            src={actor.image}
                                            alt={actor.name}
                                            className="cast-image"
                                        />
                                        <p className="cast-para" >{actor.name}</p>
                                    </div>
                                ))}
                        </div>
                        <button onClick={() => scrollContainer(".cast-scroll-container", "right")}>
                            &gt;
                        </button>
                    </div>
                    <h2 className="crew-heading">Crew</h2>
                    <div className="crew-navigation">
                        <button onClick={() => scrollContainer(".crew-scroll-container", "left")}>
                            &lt;
                        </button>
                        <div className="crew-scroll-container">
                            {movie1.crew &&
                                movie1.crew.map((member, index) => (
                                    <div key={index} className="crew-card">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="crew-image"
                                        />
                                        <p className="crew-para">{member.name}</p>
                                    </div>
                                ))}
                        </div>
                        <button onClick={() => scrollContainer(".crew-scroll-container", "right")}>
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
