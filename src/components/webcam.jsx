import React, { useState, useCallback } from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const webcamRef = React.useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  }, [webcamRef, setImageSrc]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-600 text-white">
      <div className="max-w-md p-4 bg-white rounded-lg shadow-md">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={640}
          height={480}
          className="mb-4"
        />
        <button
          onClick={capture}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Capture Photo
        </button>
        {imageSrc && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Captured Photo:</h2>
            <img src={imageSrc} alt="Captured" className="rounded-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default WebcamComponent;
