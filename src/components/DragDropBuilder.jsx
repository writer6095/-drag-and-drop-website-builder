import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Card, CardContent } from './card';
import Element from './Element';
import DropZone from './DropZone';

const DragDropBuilder = () => {
  const [elements, setElements] = useState([]);

  const handleDrop = (item) => {
    const newItem = {
      ...item,
      content:
        item.type === 'button' ? (
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            {item.content}
          </button>
        ) : (
          item.content
        )
    };
    setElements((prev) => [...prev, newItem]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="col-span-1 border p-4">
          <h2 className="text-xl mb-4">Elements</h2>
          <Element type="text" content="Text Block" />
          <Element type="image" content="Image" />
          <Element type="button" content="Button" />
        </div>

        <div className="col-span-3 border p-4">
          <h2 className="text-xl mb-4">Canvas</h2>
          <DropZone onDrop={handleDrop}>
            {elements.map((el, index) => (
              <Card key={index} className="mb-2">
                <CardContent>{el.content}</CardContent>
              </Card>
            ))}
          </DropZone>
        </div>
      </div>
    </DndProvider>
  );
};

export default DragDropBuilder;