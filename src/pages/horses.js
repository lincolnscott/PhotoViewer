import React from 'react';
import { PhotoAlbum } from 'react-photo-album';
import {horses as horses} from "../photos";

const Horses = () => {
return (
	<PhotoAlbum layout="masonry" photos={horses} />
);
};

export default Horses;
