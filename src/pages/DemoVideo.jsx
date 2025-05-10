// src/pages/DemoVideo.jsx
import React from 'react';

const DemoVideo = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Expense Sharing App Demo</h2>
      <video
        controls
        autoPlay
        style={{ width: '80%', maxWidth: '800px', borderRadius: '10px', marginTop: '1rem' }}
      >
        <source
          src="377599719919357953.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default DemoVideo;
