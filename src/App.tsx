import React, { useState, useEffect } from 'react';
import CompareFiles from './components/CompareFiles';
import CompareResultTable from './components/CompareResultTable';

function App() {
  const data: any = { 'A1': {"doc1value": "a1 result doc1", 
                        "doc2value": "a1 result doc2"
                       }, 
               'A2': {"doc1value": "a2 result doc1", 
               "doc2value": "a2 result doc2"}, 
               'A3': {"doc1value": "a3 result doc1", 
               "doc2value": "a3 result doc2"}
            };
  return (
    // <CompareFiles />
    <CompareResultTable data = {data}/>
  );
}

export default App;
