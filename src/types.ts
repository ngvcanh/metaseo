export interface MetaIcon {
  size?: string;
  href?: string;
}

export interface MetaApple {
  title?: string;
  capable?: boolean;
  statusBarStyle?: "default" | "black" | "black-translucent";
  touchIcon?: string;
  touchStartupIcon?: MetaIcon;
}

export interface MetaAndroid {
  theme?: string;
  capable?: boolean;
  fullscreen?: boolean;
  orientation?:
    | "portrait"
    | "portrait-primary"
    | "portrait-secondary"
    | "landscape"
    | "landscape-primary"
    | "landscape-secondary";
}

export interface MetaEquiv {
  type?: string;
  language?: string;
  ie?: boolean;
}

export interface MetaCSPSrc<Source, IsArray extends boolean = true> {
  source: Source;
  url?: IsArray extends true ? string[] : string;
}

export interface MetaCSP {
  defaultSrc?: MetaCSPSrc<"self" | "none", false>;
  scriptSrc?: MetaCSPSrc<"self" | "unsafe-inline" | "unsafe-eval">;
  styleSrc?: MetaCSPSrc<"self" | "unsafe-inline">;
  imgSrc?: MetaCSPSrc<"self" | "data">;
  connectSrc?: MetaCSPSrc<"self">;
  fontSrc?: MetaCSPSrc<"self">;
  objectSrc?: MetaCSPSrc<"self" | "none">;
  mediaSrc?: MetaCSPSrc<"self">;
  frameSrc?: MetaCSPSrc<"self">;
  sandbox?: Array<"allow-forms" | "allow-scripts" | "allow-same-origin" | "allow-popups">;
  reportUri?: string;
  childSrc?: string;
  formAction?: string;
  frameAncestors?: string;
  pluginType?: string;
  baseUri?: string;
  reportTo?: string;
  workerSrc?: string;
  minifestSrc?: string;
  prefetchSrc?: string;
  navigateTo?: string;
}
