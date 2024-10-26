// frontend/src/components/FinalResults.js
import React from 'react';

const FinalResults = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl">Final Results</h2>
            <div id="progress">Progress bar will go here</div>
            <button className="mt-2 bg-yellow-500 text-white p-2 rounded">Download CSV</button>
        </div>
    );
};

export default FinalResults;