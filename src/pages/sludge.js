import React from 'react';
import { PhotoAlbum } from 'react-photo-album';
import { sludge as sludge } from "../photos";

const Sludge = () => {
return (
	<PhotoAlbum layout="masonry" photos={sludge} />
);
};

export default Sludge;
