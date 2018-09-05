import React from 'react';

// Put svgSprite to public folder
const url = './sprite-svg.svg';

const SvgIcon = (props) => (
  <svg viewBox='0 0 16 16' fill={props.fill} width={props.width} height={props.height} className={props.className}>
    <use xlinkHref={`${url}#${props.icon}`} />
  </svg>
);

export default SvgIcon;