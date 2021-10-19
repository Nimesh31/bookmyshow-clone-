import axios from "axios";
import React, { useEffect, useState } from "react";
import EntertainementCardSlider from "../components/Entertainment/Entertainment.card.component";
import Premier from "../components/premier/Premier.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../config/Temp.posters.config";

const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);

    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="container mx-auto px-4">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"
                    alt="banner" />
                    
                    <h1 className="text-2xl font-bold text-gray-800 py-2">
                        The best of Entertainement
                    </h1>
                    <EntertainementCardSlider className="w-full h-40" />
                </div>
                
                <div className="bg-darkCarousal-700 py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex">
                            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                            alt="Rupay" className="w-full h-full" />
                        </div>
                        <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand new realeases every friday" isDark />
                    </div>
                </div>
                
                <div className="container mx-auto px-4">
                    <PosterSlider
                        images={popularMovies}
                        title="online streaming events"
                        isDark={false}
                    />
                </div>

                <div className="container mx-auto px-4">
                    <PosterSlider
                        images={popularMovies}
                        title="outdoor events"
                        isDark={false}
                    />
                </div>

            </div>
        </>
    );
};

export default HomePage;