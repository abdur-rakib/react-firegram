import React from "react";
import "./App.css";
import Title from "./Component/Title";
import UploadForm from "./Component/UploadForm";
import ImageGrid from "./Component/ImageGrid";

const App = () => {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
};

export default App;
