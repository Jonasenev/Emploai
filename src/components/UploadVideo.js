// frontend/src/components/UploadVideo.js
import React, { useState } from 'react';

const UploadVideo = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadVideo = async () => {
        const formData = new FormData();
        formData.append('video', file);

        const response = await fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl">Upload Video</h2>
            <input type="file" onChange={handleFileChange} accept="video/*" />
            <button onClick={uploadVideo} className="mt-2 bg-blue-500 text-white p-2 rounded">Upload</button>
        </div>
    );
};

export default UploadVideo;