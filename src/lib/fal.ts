"use client";

import { createFalClient } from "@fal-ai/client";

export const fal = createFalClient({
  credentials: () => localStorage?.getItem("falKey") as string,
  proxyUrl: "/api/fal",
});

export type InputAsset =
  | "video"
  | "image"
  | "audio"
  | {
      type: "video" | "image" | "audio";
      key: string;
    };

export type ApiInfo = {
  endpointId: string;
  label: string;
  description: string;
  cost: string;
  inferenceTime?: string;
  inputMap?: Record<string, string>;
  inputAsset?: InputAsset[];
  initialInput?: Record<string, unknown>;
  cameraControl?: boolean;
  imageForFrame?: boolean;
  category: "image" | "video" | "music" | "voiceover";
  prompt?: boolean;
};

export const AVAILABLE_ENDPOINTS: ApiInfo[] = [
  {
    endpointId: "fal-ai/imagen3",
    label: "Imagen3",
    description:
      "Imagen3 is a high-quality text-to-image model that generates realistic images from text prompts.",
    cost: "",
    category: "image",
  },
  {
    endpointId: "fal-ai/veo2",
    label: "Veo 2",
    description:
      "Veo creates videos with realistic motion and high quality output, up to 4K.",
    cost: "",
    category: "video",
  },
  {
    endpointId: "cassetteai/music-generator",
    label: "Cassette AI",
    description:
      "CassetteAI’s model generates a 30-second sample in under 2 seconds and a full 3-minute track in under 10 seconds. At 44.1 kHz stereo audio, expect a level of professional consistency with no breaks, no squeaks, and no random interruptions in your creations.",
    cost: "",
    category: "music",
  },
  {
    endpointId: "fal-ai/minimax-music",
    label: "Minimax Music",
    description:
      "Advanced AI techniques to create high-quality, diverse musical compositions",
    cost: "",
    category: "music",
    inputAsset: [
      {
        type: "audio",
        key: "reference_audio_url",
      },
    ],
  },
  {
    endpointId: "fal-ai/minimax/speech-02-hd",
    label: "MiniMax Speech-02 HD",
    description:
      "Generate speech from text prompts and different voices using the MiniMax Speech-02 HD model, which leverages advanced AI techniques to create high-quality text-to-speech.",
    cost: "",
    category: "voiceover",
    inputMap: {
      prompt: "text",
    },
    initialInput: {
      voice: "Dexter (English (US)/American)",
    },
  },
  {
    endpointId: "fal-ai/elevenlabs/tts/multilingual-v2",
    label: "ElevenLabs TTS Multilingual v2",
    description:
      "Generate multilingual text-to-speech audio using ElevenLabs TTS Multilingual v2.",
    cost: "",
    category: "voiceover",
    inputMap: {
      prompt: "text",
    },
  },
  {
    endpointId: "fal-ai/topaz/upscale/video",
    label: "Video Upscale",
    description:
      "Professional-grade video upscaling using Topaz technology. Enhance your videos with high-quality upscaling.",
    cost: "",
    category: "video",
    prompt: false,
    inputAsset: ["video"],
  },
];
