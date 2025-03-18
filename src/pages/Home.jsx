import React from 'react';
import DragDropBuilder from '../components/DragDropBuilder';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Website Builder</h1>
      <DragDropBuilder />
    </div>
  );
};

export default Home;