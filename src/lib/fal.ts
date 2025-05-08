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
    endpointId: "fal-ai/ideogram/v3",
    label: "Ideogram V3",
    description:
      "Generate high-quality images, posters, and logos with Ideogram V3. Features exceptional typography handling and realistic outputs optimized for commercial and creative use.",
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
    endpointId: "fal-ai/flux-pro/v1.1-ultra",
    label: "Flux Pro 1.1 Ultra",
    description: "Generate a video from a text prompt",
    cost: "",
    category: "image",
  },
  {
    endpointId: "fal-ai/recraft/v3/text-to-image",
    label: "Recraft V3",
    description:
      "Recraft V3 is a text-to-image model with the ability to generate long texts, vector art, images in brand style, and much more. As of today, it is SOTA in image generation, proven by Hugging Face's industry-leading Text-to-Image Benchmark by Artificial Analysis.",
    cost: "",
    category: "image",
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
    endpointId: "cassetteai/music-generator",
    label: "Cassette AI",
    description:
      "CassetteAI’s model generates a 30-second sample in under 2 seconds and a full 3-minute track in under 10 seconds. At 44.1 kHz stereo audio, expect a level of professional consistency with no breaks, no squeaks, and no random interruptions in your creations.",
    cost: "",
    category: "music",
  },
  {
    endpointId: "fal-ai/playht/tts/v3",
    label: "PlayHT TTS v3",
    description: "Fluent and faithful speech with flow matching",
    cost: "",
    category: "voiceover",
    initialInput: {
      voice: "Dexter (English (US)/American)",
    },
  },
  {
    endpointId: "fal-ai/playai/tts/dialog",
    label: "PlayAI Text-to-Speech Dialog",
    description:
      "Generate natural-sounding multi-speaker dialogues. Perfect for expressive outputs, storytelling, games, animations, and interactive media.",
    cost: "",
    category: "voiceover",
    inputMap: {
      prompt: "input",
    },
    initialInput: {
      voices: [
        {
          voice: "Jennifer (English (US)/American)",
          turn_prefix: "Speaker 1: ",
        },
        {
          voice: "Furio (English (IT)/Italian)",
          turn_prefix: "Speaker 2: ",
        },
      ],
    },
  },
  {
    endpointId: "fal-ai/f5-tts",
    label: "F5 TTS",
    description: "Fluent and faithful speech with flow matching",
    cost: "",
    category: "voiceover",
    initialInput: {
      ref_audio_url:
        "https://github.com/SWivid/F5-TTS/raw/21900ba97d5020a5a70bcc9a0575dc7dec5021cb/tests/ref_audio/test_en_1_ref_short.wav",
      ref_text: "Some call me nature, others call me mother nature.",
      model_type: "F5-TTS",
      remove_silence: true,
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
