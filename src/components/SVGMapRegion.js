// A region in the SVG Map
function SVGMapRegion({id, data, d, updatePhoneNumbers}) {

    // on click, add the region's phone number to the queue of displayed phone numbers
    function handleClick(e) {
        const regionName = e.target.attributes.data.value;
        updatePhoneNumbers(regionName);
    }

    return (
        <path id={id} data={data} d={d} onClick={handleClick}/>
    );
}

export default SVGMapRegion;