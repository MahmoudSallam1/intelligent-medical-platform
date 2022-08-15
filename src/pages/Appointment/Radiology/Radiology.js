import React, { useState } from "react";

import { Button } from "@material-ui/core";


function Radiology() {
  const [imageData, setImageData] = useState(null);
  const [selectedFile, setSelectedFile] = useState();
  const [prediction, setPrediction] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUri = reader.result;
      setImageData(imageDataUri);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmission = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    let predict = await fetch("/uploader", {
      method: "POST",
      body: formData,
    });
    let res = await predict.json();
    setPrediction(res.result);
  };

  console.log(prediction);

  return (
    <div>
      <div>
        <p>Choose an Image</p>
        <input
          type="file"
          name=""
          id=""
          onChange={handleImageChange}
          accept="image/*"
        />
      </div>

      <div>
        <img src={imageData} alt="" srcset="" />

        <div>
          <Button
            variant="contained"
            color="primary"
            disabled={!imageData}
            onClick={handleSubmission}
          >
            Submit
          </Button>
        </div>

        <div className="extracted-text">
          <h3>Results...</h3>
          <p>{prediction}</p>
        </div>
      </div>
    </div>
  );
}

export default Radiology;
