import React from "react";
import { useState, useEffect } from "react";
import { createWorker } from "tesseract.js";
import "./ocr.css"

import {useTranslation} from 'react-i18next'

function OCR() {
  const [ocr, setOcr] = useState("");
  const [progress, setProgress] = useState(0);
  const { t } = useTranslation();

  const [imageData, setImageData] = useState(null);
  const worker = createWorker({
    logger: (m) => {
      console.log(m);
      setProgress(parseInt(m.progress * 100));
    },
  }); 

  const convertImageToText = async () => {
    if (!imageData) return;
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(imageData);
    setOcr(text);
  };

  useEffect(() => {
    convertImageToText();
  }, [imageData]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUri = reader.result;
      console.log({ imageDataUri });
      setImageData(imageDataUri);
    };
    reader.readAsDataURL(file);
  }
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
      {progress < 100 && progress > 0 && <div>
        <div className="progress-label">Progress ({progress}%)</div>
        <div className="progress-bar">
          <div className="progress" style={{width: `${progress}%`}} ></div>
        </div>
      </div>}
      <div>
        <img src={imageData} alt="" srcset="" />

        <div className="extracted-text">
        <h3>{t("results")}</h3>
        <p>{ocr}</p>
        </div>
     
      </div>
    </div>
  );
}

export default OCR;
