/** @format */
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import React, { useState } from "react";

const Map = ({ searchResult }) => {
	const [viewport, setViewport] = useState({
		latitude: 51.509956928606165,
		longitude: -0.08452036607907515,
		zoom: 11,
		width: "100%",
		height: "100%",
	});

	return (
		<div className='h-[600px] w-full xl:inline-flex xl:max-w-[600px] xl:w-[600px]  xl:h-full '>
			<ReactMapGL
				{...viewport}
				onViewportChange={(nextViewport) => setViewport(nextViewport)}
				mapStyle='mapbox://styles/saddams/ckufh8s0h7qjf18s0104egbh7'
				mapboxApiAccessToken={process.env.MAP_BOX_ACCESS_TOKEN}
			/>
		</div>
	);
};

export default Map;
