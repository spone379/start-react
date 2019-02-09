import React from 'react';

import LazyLoadImage from '../LazyLoadImage/LazyLoadImage';
import './ModalImage.scss';


const ModalImage = ({ isRound, ...restProps }) => (
  <LazyLoadImage
    {...restProps}
    className={`modal-img ${isRound ? "modal-img--round" : ""}`}
  />
)


export default ModalImage;