import {VoiceRecorder} from 'react-voice-recorder-player';
import {useState} from "react";
import Back from "../extras/Back.jsx";

export default function RecordDetails() {
    const [audioData, setAudioData] = useState(null);

    const handleStopRecording = (audioData) => {
        setAudioData(audioData);
        console.log(audioData)
    };


    return (
        <>
            <Back/>
            <div style={{paddingTop: "80px"}}>
                <h2 style={{textAlign: "center", paddingBottom: "10px"}}>Record Extra Details</h2>
                <VoiceRecorder
                    onRecordingEnd={handleStopRecording}
                    downloadable={false}
                />
            </div>
            {audioData && <button className={"send"}>Send to TTS</button>}
        </>
    )
}