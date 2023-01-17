import React from 'react';
import { PhotoAlbum } from 'react-photo-album';
import { pigman as pigman } from "../photos";

const Pigman = () => {
return (
	<PhotoAlbum layout="masonry" photos={pigman} />
);
};

export default Pigman;
