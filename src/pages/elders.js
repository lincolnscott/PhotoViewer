import React from "react";
import { PhotoAlbum } from 'react-photo-album';
import {elders as elders} from "../photos";

const Elders = () => {
return (
	<PhotoAlbum layout="masonry" photos={elders} />
);
};

export default Elders;
