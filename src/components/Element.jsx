import React from 'react';
import { useDrag } from 'react-dnd';

const Element = ({ type, content }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'element', // Ensure this matches DropZone's "accept"
    item: { type, content },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-2 cursor-pointer border ${isDragging ? 'opacity-50' : ''}`}
    >
      {type === 'button' ? (
        <button className="bg-blue-500 text-white px-4 py-2 rounded">{content}</button>
      ) : (
        content
      )}
    </div>
  );
};

export default Element;