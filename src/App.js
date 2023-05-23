import "./styles.css";
import { useReactMediaRecorder } from "react-media-recorder";
import VideoRecorder from "react-video-recorder";
import {
  RecordWebcam,
  useRecordWebcam,
  CAMERA_STATUS
} from "react-record-webcam";
const OPTIONS = {
  filename: "test-filename",
  fileType: "mp4",
  width: 800,
  height: 256
};
const RecordView = () => {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl
  } = useReactMediaRecorder({
    video: true,
    facingMode: { exact: "environment" }
  });

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <video src={mediaBlobUrl} controls autoPlay loop />
    </div>
  );
};

export default function App() {
  const recordWebcam = useRecordWebcam(OPTIONS);
  const getRecordingFileHooks = async () => {
    const blob = await recordWebcam.getRecording();
    console.log({ blob });
  };

  const getRecordingFileRenderProp = async (blob) => {
    console.log({ blob });
  };
  return (
    <div style={{ height: '800px', width: '256px', margin: '0 auto' }}>
      <h1>One minute</h1>
      <VideoRecorder
        isOnInitially
        isFliped
        showReplayControls
        // mimeType={text('mimeType')}
        countdownTime="3000"
        timeLimit="60000"
        onRecordingComplete={(videoBlob) => {
          // Do something with the video...
          console.log("videoBlob", videoBlob);
        }}
      />
    </div>
  );
}