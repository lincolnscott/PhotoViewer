import React from 'react';
import { PhotoAlbum } from 'react-photo-album';
import { misc as misc } from "../photos";

const Misc = () => {
return (
	<PhotoAlbum layout="masonry" photos={misc} />
);
};

export default Misc;
