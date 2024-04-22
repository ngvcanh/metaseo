import { SOCICAL_IMAGE_SIZE, SOCICAL_IMAGE_SIZE_DEFAULT } from "./constant";
import { MetaCSP, MetaCSPSrc } from "./types";

function genSrc<SourceBuffer, IsArray extends boolean>(src: MetaCSPSrc<SourceBuffer, IsArray>) {
  const result = [`'${src.source}'`];
  
  if (src.url) {
    Array.isArray(src.url) ? result.push(...src.url) : result.push(src.url);
  }

  return result.join(" ");
}

function camelToKebab(key: string) {
  return key.replace(/([A-Z])/g, "-$1".toLowerCase());
}

export function generateMetaCSP(metaCSP: MetaCSP) {
  return Object.keys(metaCSP).reduce((acc, key) => {
    const val = metaCSP[key as keyof MetaCSP];

    if (!val) {
      return acc;
    }

    if (typeof val === "string") {
      acc.push(`${camelToKebab(key)} ${val}`);
    }
    else if (typeof val === "object" && val !== null && !Array.isArray(val)) {
      acc.push(`${camelToKebab(key)} ${genSrc(val)}`);
    }

    return acc;
  }, [] as string[]).join(";\n");
}

export function getOgImageSize(userAgent: string | undefined) {
  if (!userAgent) {
    return SOCICAL_IMAGE_SIZE_DEFAULT;
  }

  const userAgentLower = userAgent.toLowerCase();

  if (userAgentLower.includes("facebookexternalhit") || userAgentLower.includes("facebookcatalog")) {
    return SOCICAL_IMAGE_SIZE.facebook.landscape;
  }

  if (userAgentLower.includes("twitterbot")) {
    return SOCICAL_IMAGE_SIZE.twitter.landscape;
  }

  if (userAgentLower.includes("linkedinbot")) {
    return SOCICAL_IMAGE_SIZE.linkedin.landscape;
  }

  if (userAgentLower.includes("instagram")) {
    return SOCICAL_IMAGE_SIZE.instagram.landscape;
  }

  if (userAgent.includes("zalo")) {
    return SOCICAL_IMAGE_SIZE.zalo.landscape;
  }

  return SOCICAL_IMAGE_SIZE_DEFAULT;
}
