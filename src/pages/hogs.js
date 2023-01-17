import React from 'react';
import { PhotoAlbum } from 'react-photo-album';
import hogs from "../photos";

const Hogs = () => {
return (
	<PhotoAlbum layout="masonry" photos={hogs} />
);
};

export default Hogs;
