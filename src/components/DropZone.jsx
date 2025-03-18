import React from 'react';
import { useDrop } from 'react-dnd';

const DropZone = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'element', // Ensure this matches Element's "type"
    drop: (item) => {
      if (item) onDrop(item); // Ensure data is captured
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`min-h-[200px] p-4 border-2 ${
        isOver ? 'border-blue-500 bg-blue-100' : 'border-dashed'
      }`}
    >
      {children.length > 0 ? children : <p>Drop elements here</p>}
    </div>
  );
};

export default DropZone;
