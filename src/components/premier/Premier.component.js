import React from "react";
import Slider from "react-slick";

//component 
import Poster from"../poster/poster.component";
import settings from "../../config/PosterCarousal.config";

//images
import PremierImages from "../../config/Temp.posters.config";



export const Premier = ( ) =>{
    return(
        <>
            <div className="flex flex-col items-start py-4">
                <h3 className="text-white text-xl font-bold ">Premiers</h3>
                <p className="text-white text-sm">Brand new release every friday</p>
            </div>
            <Slider {...settings}>
                {PremierImages.map((Image) => (
                    <Poster { ...Image} isDark />
                    ))}
            </Slider>
        </>
    );
};