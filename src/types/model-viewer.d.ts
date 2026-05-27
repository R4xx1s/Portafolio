import "react";

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        "auto-rotate"?: boolean;
        "camera-controls"?: boolean;
        "rotation-per-second"?: string;
        "interaction-prompt"?: string;
        "disable-zoom"?: boolean;
        exposure?: string;
        "shadow-intensity"?: string;
        "tone-mapping"?: string;
        "camera-orbit"?: string;
        "environment-image"?: string;
        "skybox-image"?: string;
      };
    }
  }
}

export {};
