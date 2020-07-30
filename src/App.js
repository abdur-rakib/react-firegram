import React, { useState } from "react";
import "./App.css";
import Title from "./Component/Title";
import UploadForm from "./Component/UploadForm";
import ImageGrid from "./Component/ImageGrid";
import Modal from "./Component/Modal";

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default App;
