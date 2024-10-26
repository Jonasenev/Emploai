// frontend/src/components/StartVideoGenerator.js
import React from 'react';

const StartVideoGenerator = () => {
    const startGenerator = () => {
        console.log("Video generator started!");
    };

    return (
        <div className="p-4">
            <h2 className="text-xl">Start Video Generator</h2>
            <button onClick={startGenerator} className="mt-2 bg-green-500 text-white p-2 rounded">Start</button>
        </div>
    );
};

export default StartVideoGenerator;