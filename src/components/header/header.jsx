import React from 'react';
import './header.css';

type IHeader = {};


const Header = (props: IHeader) => {
  return (
    <div className="main-header">
      <div className="title">Shapes</div>
    </div>
  );
}

// Wrap component using `React.memo()`
export default Header;