import React from 'react';
import { PhotoAlbum } from 'react-photo-album';
import { fighting as fighting } from "../photos";

const Fighting = () => {
return (
	<PhotoAlbum layout="masonry" photos={fighting} />
);
};

export default Fighting;
