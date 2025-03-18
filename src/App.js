import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Home from './pages/Home';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Home />
      </div>
    </DndProvider>
  );
}

export default App;