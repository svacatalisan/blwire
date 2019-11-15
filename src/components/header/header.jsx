import React, { memo } from 'react';
import './header.css';

function Header() {
  return (
    <div className="main-header">
      <div className="title">Shapes</div>
    </div>
  );
}

// Wrap component using `React.memo()`
export default memo(Header);