//Transforms components into another component.
//HOC reduces loding time .
//adding additional functionalities to the existing components.

import React from "react";
import { Route } from "react-router-dom";

//Layouts
import DefaultLayout from "../Layouts/Default.layout";

const DefaultHOC = ({ component:Component, ...rest }) => {
    // component and props=path exact
    return(
        <>
            <Route 
                {...rest}
                component = {(props) => (
                    <DefaultLayout>
                        <Component {...props} />
                    </DefaultLayout>
                    )
                }
            />
        </>
    );
};

export default DefaultHOC;