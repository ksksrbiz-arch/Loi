"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

interface LazyImageProps extends Omit<ImageProps, "onLoad"> {
  /** Tailwind class for the wrapper aspect / sizing. */
  wrapperClassName?: string;
  /** Optional rounded class for both image + skeleton. */
  rounded?: string;
}

/**
 * Image with shimmer skeleton + fade-in when the network finishes.
 * Uses Next/Image under the hood so we still get format optimization,
 * srcset, and built-in lazy loading.
 */
export default function LazyImage({
  wrapperClassName = "",
  rounded = "rounded-2xl",
  className = "",
  alt,
  ...rest
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${rounded} ${wrapperClassName}`}>
      {!loaded && (
        <div
          className={`absolute inset-0 skeleton-shimmer ${rounded}`}
          aria-hidden="true"
        />
      )}
      <Image
        {...rest}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`${className} img-fade-in ${loaded ? "loaded" : ""}`}
      />
    </div>
  );
}
