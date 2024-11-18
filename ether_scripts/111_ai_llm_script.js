// const { pipeline } = require('@xenova/transformers');
const TransformersApi = Function('return import("@xenova/transformers")')();



const sentiment = async () => {
    const { pipeline } = await TransformersApi;

    // Allocate a pipeline for sentiment-analysis
    const pipe = await pipeline('sentiment-analysis');

    const out = await pipe('I love transformers!');
    // [{'label': 'POSITIVE', 'score': 0.999817686}]

    console.log(`Sentiment behind the sentence is: \n${out}\n`)
}

sentiment()

// async function transcribeAudio() {
//     // let pipe = await import('@xenova/transformers')
//     // let transcriber = await pipe.pipeline("automatic-speech-recognition", "Xenova/whisper-tiny.en");
//     TransformersApi = Function('return import("@xenova/transformers")')();
//     const { pipeline } = await TransformersApi;
//     let transcriber = await pipeline("automatic-speech-recognition", "Xenova/whisper-tiny.en");

//     // Load audio data
//     let url = "https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/jfk.wav";
//     let buffer = Buffer.from(await fetch(url).then((x) => x.arrayBuffer()));

//     // Read .wav file and convert it to required format
//     let wav = new wavefile.WaveFile(buffer);
//     wav.toBitDepth("32f"); // Pipeline expects input as a Float32Array
//     wav.toSampleRate(16000); // Whisper expects audio with a sampling rate of 16000
//     let audioData = wav.getSamples();
//     if (Array.isArray(audioData)) {
//         // For this demo, if there are multiple channels for the audio file, we just select the first one.
//         // In practice, you'd probably want to convert all channels to a single channel (e.g., stereo -> mono).
//         audioData = audioData[0];
//     }
//     let start = performance.now();
//     let output = await transcriber(audioData);
//     let end = performance.now();
//     console.log(`Execution duration: ${(end - start) / 1000} seconds`);
// }

// transcribeAudio()