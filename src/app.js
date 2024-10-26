// frontend/src/App.js
import React from 'react';
import UploadVideo from './components/UploadVideo';
import StartVideoGenerator from './components/StartVideoGenerator';
import FinalResults from './components/FinalResults';

const App = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl text-center my-4">Personaliset Video Generator</h1>
            <StartVideoGenerator />
            <UploadVideo />
            <FinalResults />
        </div>
    );
};

export default App;