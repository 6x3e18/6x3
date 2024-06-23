"use client";

import React, { useState } from 'react';

function DownloadPage() {
  const [email, setEmail] = useState('');
  const [showDownloadLink, setShowDownloadLink] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail(event.target.elements.email.value);
    setShowDownloadLink(true);
    setTimeout(() => setShowDownloadLink(false), 2000); // Hide link after 2 seconds
  };

  const downloadLink = (
    <a href="path/to/your/file.pdf" download="myfile.pdf" style={{ display: showDownloadLink ? 'block' : 'none' }}>
      Download File
    </a>
  );

  return (
    <div>
      <h2>Download File</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your email address:</label>
        <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
      {email && <p>Thank you for your email: {email}</p>}
      {downloadLink}
    </div>
  );
}

export default DownloadPage;
