import React, { useState } from 'react';
import styles from'./Hover.module.css'

const Hover = ({props }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <i className={`${props.iconClass} ${styles['button-container']}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {showInfo && <div className="info-tag">{props.infoText}</div>}
    </i>
  );
};

export default Hover;
