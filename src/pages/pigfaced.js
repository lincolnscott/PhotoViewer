import React from 'react';
import { PhotoAlbum } from 'react-photo-album';
import { pigfaced as pigfaced } from "../photos";

const Pigfaced = () => {
return (
	<PhotoAlbum layout="masonry" photos={pigfaced} />
);
};

export default Pigfaced;
