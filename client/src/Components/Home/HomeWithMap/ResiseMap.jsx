import React, { useState } from 'react';
const ResiseMap = () => {
    
      const [size, setSize] = useState({ width: 300, height: 150 });
      const [isResizing, setIsResizing] = useState(false);
    
      const startResize = (e) => {
        e.preventDefault();
        setIsResizing(true);
      };
    
      const resize = (e) => {
        if (isResizing) {
          const newWidth = e.clientX - e.target.parentNode.offsetLeft;
          const newHeight = e.clientY - e.target.parentNode.offsetTop;
          setSize({ width: newWidth, height: newHeight });
        }
      };
    
      const stopResize = () => {
        setIsResizing(false);
      };
    
      return (
        <div
          className="sticky bottom-0 left-0 bg-gray-200 border border-gray-400 relative"
          style={{ width: `${size.width}px`, height: `${size.height}px` }}
          onMouseMove={resize}
          onMouseUp={stopResize}
          onMouseLeave={stopResize}
        >
          <div className="p-4">
            {/* Your content goes here */}
            <p>This is the resizable content.</p>
          </div>
          <div
            className="absolute bottom-0 right-0 bg-blue-500 cursor-se-resize p-2"
            onMouseDown={startResize}
          >
            {/* Resize handle */}
          </div>
        </div>
      );
    }

    
export default ResiseMap