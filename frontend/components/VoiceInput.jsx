import React, { useState } from 'react';

function VoiceInput({ onVoiceInput }) {
    const [isRecording, setIsRecording] = useState(false);
    
    const startRecording = () => {
        setIsRecording(true);
        // Use Web Speech API or another library for voice input
    };
    
    const stopRecording = () => {
        setIsRecording(false);
        // Capture the speech and pass to parent component
        onVoiceInput("Voice input text here");
    };

    return (
        <div>
            <button onClick={startRecording} disabled={isRecording}>
                Start Recording
            </button>
            <button onClick={stopRecording} disabled={!isRecording}>
                Stop Recording
            </button>
        </div>
    );
}

export default VoiceInput;
