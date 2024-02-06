import {VoiceRecorder} from 'react-voice-recorder-player';
import {useState} from "react";
import Back from "../extras/Back.jsx";
import {useNavigate} from "react-router-dom";

export default function RecordDetails({moreInformation, updateFields}) {
    const [audioData, setAudioData] = useState(null);
    const [hasAudio, setHasAudio] = useState(false);

    const handleStopRecording = (audioData) => {
        setAudioData(audioData);
        setHasAudio(true);
    };

    const navigate = useNavigate()
    return (
        <>
            <Back/>
            <div style={{paddingTop: "80px"}}>
                <h2 style={{textAlign: "center", paddingBottom: "10px"}}>Record Extra Details</h2>
                <VoiceRecorder
                    onRecordingEnd={handleStopRecording}
                />
            </div>
            {audioData && <button className={"send"} >Send to TTS</button>}
        </>
    )
}