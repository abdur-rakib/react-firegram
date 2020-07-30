import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setError(null);
    let selected = e.target.files[0];
    const types = ["image/jpg", "image/jpeg"];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setError("Please select an image file(png or jpeg)");
    }
  };
  return (
    <>
      <form>
        <input type="file" onChange={handleChange} />
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div className="">{file.name}</div>}
        </div>
      </form>
    </>
  );
};

export default UploadForm;
