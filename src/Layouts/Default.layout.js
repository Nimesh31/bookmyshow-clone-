import React from "react";

//components
import Navbar from "../components/NavBar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";

const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            <HeroCarousal className="md:w-full h-60" />
            {props.children}
        </>
    );
};

export default DefaultLayout;


//we have written prop.children so that child component also get's rendered