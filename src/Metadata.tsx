import { FC } from "react";
import { MetadataConfiguration } from "./types";
import {
  META_ANDROID_DEFAULT_CAPABLE,
  META_ANDROID_DEFAULT_FULLSCREEN,
  META_ANDROID_DEFAULT_ORIENTATION,
  META_DEFAULT_DISTRIBUTION,
  META_DEFAULT_RATING,
  META_DEFAULT_REVISIT,
  META_DEFAULT_VIEWPORT,
  META_EQUIV_DEFAULT_IE,
  META_EQUIV_DEFAULT_TYPE,
  META_OG_DEFAULT_TYPE,
} from "./constant";
import { generateMetaCSP, getOgImageSize } from "./utils";

export interface MetadataProps {
  config: MetadataConfiguration;
}

const Metadata: FC<MetadataProps> = (props) => {
  const { config } = props;

  const {
    charSet = META_EQUIV_DEFAULT_TYPE,
    name,
    title,
    keywords,
    description,
    image,
    canonical,
    viewport,
    hreflang = {},
    disableOg,
    og = {},
    robots,
    revisit = META_DEFAULT_REVISIT,
    rating = META_DEFAULT_RATING,
    distribution = META_DEFAULT_DISTRIBUTION,
    copyright,
    apple,
    android,
    equiv,
    icon,
    shortcut,
    csp,
    userAgent,
    mode,
  } = config;

  const keywordString = Array.isArray(keywords) ? keywords.join(", ") : keywords;
  const ogImageSize = getOgImageSize(userAgent);

  const objOG = (disableOg ? {} : Object.assign({}, {
    ...og,
    title: og.title || title,
    description: og.description || description,
    url: og.url || canonical,
    image: og.image || image,
    imageWidth: og.imageWidth || ogImageSize.width,
    imageHeight: og.imageHeight || ogImageSize.height,
  })) as Record<string, string>;

  return (
    <>
      {charSet !== "off" ? <meta charSet={charSet} /> : null}

      {equiv ? (
        <>
          <meta
            http-equiv="Content-type"
            content={`text/html; charset=${equiv?.type || META_EQUIV_DEFAULT_TYPE.toLowerCase()}`}
          />
          {equiv.language ? <meta http-equiv="Content-Language" content={equiv.language} /> : null}
          {(equiv.ie ?? META_EQUIV_DEFAULT_IE) ? <meta http-equiv="X-UA-Compatible" content="IE=edge" /> : null}
          {equiv.clearType ? <meta http-equiv="cleartype" content="on" /> : null}
        </>
      ) : null}

      {copyright ? <meta name="copyright" content={copyright} /> : null}
      {revisit !== "off" ? <meta name="REVISIT-AFTER" content={revisit} /> : null}
      {rating !== "off" ? <meta name="RATING" content="GENERAL" /> : null}
      {distribution !== "off" ? <meta name="distribution" content={distribution} /> : null}
      
      {mode ? (
        <>
          <meta name="browsermode" content="application" />
          <meta name="layoutmode" content="fitscreen" />
          <meta name="imagemode" content="force" />
        </>
      ) : null}

      {viewport ? (
        <meta
          name="viewport"
          content={typeof viewport === "string" ? viewport : META_DEFAULT_VIEWPORT}
        />
      ) : null}

      {name ? <meta name="application-name" content={name} /> : null}
      {title ? <title>{title}</title> : null}
      {keywordString ? <meta name="keywords" content={keywordString} /> : null}
      {description ? <meta name="description" content={description} /> : null}
      {image ? <link rel="image_src" href={image} /> : null}
      {shortcut ? <link rel="shortcut icon" href={shortcut} /> : null}
      {icon ? <link rel="icon" sizes={icon.size} href={icon.href} /> : null}

      {canonical ? <link rel="canonical" href={canonical} /> : null}

      <meta name="robots" content={robots || "index, follow, noodp, noydir"} />

      {apple ? (
        <>
          <meta name="apple-mobile-web-app-title" content={apple.title} />
          <meta name="apple-mobile-web-app-capable" content={apple.capable ? "yes" : "no"} />
          <meta name="apple-mobile-web-app-status-bar-style" content={apple.statusBarStyle || "black"} />
          <link rel="apple-touch-icon" href={apple.touchIcon} />
          <link rel="apple-touch-startup-image" sizes={apple.touchStartupIcon?.size} href={apple.touchStartupIcon?.href} />
        </>
      ) : null}

      {android ? (
        <>
          <meta name="theme-color" content={android.theme} />
          <meta name="mobile-web-app-capable" content={(android.capable ?? META_ANDROID_DEFAULT_CAPABLE) ? "yes" : "no"} />
          <meta name="fullscreen" content={(android.fullscreen ?? META_ANDROID_DEFAULT_FULLSCREEN) ? "yes" : "no"} />
          <meta name="screen-orientation" content={android.orientation ?? META_ANDROID_DEFAULT_ORIENTATION} />
        </>
      ) : null}

      {Object.keys(hreflang).map((key) => (
        <link {...{
          rel: "alternate",
          hrefLang: key,
          href: hreflang[key],
          key,
        }} />
      ))}

      {!disableOg ? (
        <>
          <meta property="og:site_name" content={objOG.siteName} />
          <meta property="og:type" content={objOG.type || META_OG_DEFAULT_TYPE} />
          <meta property="og:title" name="title" content={objOG.title} />
          <meta property="og:description" name="description" content={objOG.description} />
          <meta property="og:url" content={objOG.url} />
          <meta property="og:image" content={objOG.image} />
          <meta property="og:image:width" content={objOG.imageWidth} />
          <meta property="og:image:height" content={objOG.imageHeight} />
          {Array.isArray(objOG.locale) ? (
            objOG.locale.map((locale) => (
              <meta {...{
                property: "og:locale",
                itemprop: "inLanguage",
                content: locale,
                key: locale,
              }} />
            ))
          ) : (objOG.locale && (
            <meta {...{
              property: "og:locale",
              itemprop: "inLanguage",
              content: "vi_VN"
            }} />
          ))}
        </>
      ) : null}

      {csp ? <meta http-equiv="Content-Security-Policy" content={generateMetaCSP(csp)} /> : null}
    </>
  );
}

export default Metadata;
