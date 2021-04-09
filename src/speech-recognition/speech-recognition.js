import React from "react";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export const SpeechRecognitionContext = React.createContext();

export default function SpeechRecognitionProvider({children}) {
  const { transcript, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <SpeechRecognitionContext.Provider
      value={{ transcript, resetTranscript,SpeechRecognition }}
    >
      {children}
    </SpeechRecognitionContext.Provider>
  );
}


// <button
// className="start"
// onClick={() =>
//   SpeechRecognition.startListening({
//     continuous: true,
//     // language: "ar-EG",
//   })
// }
// >
// Start
// </button>
// <button className="stop" onClick={SpeechRecognition.stopListening}>
// Stop
// </button>
// <button className="reset" onClick={resetTranscript}>
// Reset
// </button>
// <p className="transcript">{transcript}</p>
