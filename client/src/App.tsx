import React from 'react';
import './App.css';
import FundraisingWidget from './components/FundraisingWidget/FundraisingWidget';
import Instructions from './components/Instructions';

const App = (): React.ReactElement => (
    <div className="container">
        {/* <Instructions /> */}
        <FundraisingWidget />
    </div>
);

export default App;
