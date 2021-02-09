import React from "react";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";


export default function Dictaphone() {
  const { transcript, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <div>
      <button
        className="start"
        onClick={() =>
          SpeechRecognition.startListening({
            continuous: true,
            // language: "ar-EG",
          })
        }
      >
        Start
      </button>
      <button className="stop" onClick={SpeechRecognition.stopListening}>
        Stop
      </button>
      <button className="reset" onClick={resetTranscript}>
        Reset
      </button>
      <p className="transcript">{transcript}</p>
    </div>
  );
}
