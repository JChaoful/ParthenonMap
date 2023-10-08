import { useState } from "react";

// A region in the SVG Map

function SVGMapRegion({id, data, d, updatePhoneNumbers}) {
    const [clicked, setClicked] = useState(false);

    // On click, update the region's phone number in the queue of displayed phone numbers based
    // on whether it was already there
    function handleClick(e) {
        const regionName = e.target.attributes.data.value;
        updatePhoneNumbers(regionName);
        setClicked(!clicked);
    }

    return (
        <path id={id} className={clicked? "clicked region" : "region"} data={data} d={d} onClick={handleClick}/>
    );
}

export default SVGMapRegion;