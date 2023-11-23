import React from "react";
import Properties from "./Rent/Properties";
import PropertyServices from "./Rent/PropertyServices";


function Rent(){
    return(
        <div>
            <div>
            <Properties/>
            </div>
            <div>
            <PropertyServices/>
            </div>
        </div>

    )
}

export default Rent;