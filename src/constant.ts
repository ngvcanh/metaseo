export const META_ANDROID_DEFAULT_CAPABLE = true;
export const META_ANDROID_DEFAULT_FULLSCREEN = true;
export const META_ANDROID_DEFAULT_ORIENTATION = "portrait";

export const META_EQUIV_DEFAULT_TYPE = "UTF-8";
export const META_EQUIV_DEFAULT_IE = true;

export const META_OG_DEFAULT_TYPE = "website";

export const META_DEFAULT_REVISIT = "1 DAYS";
export const META_DEFAULT_RATING = "GENERAL";
export const META_DEFAULT_DISTRIBUTION = "Global";
export const META_DEFAULT_VIEWPORT = "width=device-width,initial-scale=1,maximum-scale=1.0, user-scalable=no";

export const SOCICAL_IMAGE_SIZE = {
  instagram: {
    profile: {
      width: 320,
      height: 320,
    },
    landscape: {
      width: 1080,
      height: 566,
    },
    portrait: {
      width: 1080,
      height: 1350,
    },
    square: {
      width: 1080,
      height: 1080,
    },
    stories: {
      width: 1080,
      height: 1920,
    },
  },
  facebook: {
    profile: {
      width: 170,
      height: 170,
    },
    landscape: {
      width: 1200,
      height: 630,
    },
    portrait: {
      width: 630,
      height: 1200,
    },
    square: {
      width: 1200,
      height: 1200,
    },
    stories: {
      width: 1080,
      height: 1920,
    },
    cover: {
      width: 851,
      height: 315,
    }
  },
  twitter: {
    profile: {
      width: 400,
      height: 400,
    },
    landscape: {
      width: 1600,
      height: 900,
    },
    portrait: {
      width: 1080,
      height: 1350,
    },
    square: {
      width: 1080,
      height: 1080,
    },
    cover: {
      width: 1500,
      height: 500,
    }
  },
  linkedin: {
    profile: {
      width: 400,
      height: 400,
    },
    landscape: {
      width: 1200,
      height: 627,
    },
    portrait: {
      width: 627,
      height: 1200,
    },
    square: {
      width: 1080,
      height: 1080,
    },
    cover: {
      width: 1128,
      height: 191,
    }
  },
  tiktok: {
    profile: {
      width: 200,
      height: 200,
    },
    landscape: {
      width: 1920,
      height: 1080,
    },
    portrait: {
      width: 1080,
      height: 1920,
    },
    square: {
      width: 1080,
      height: 1080,
    },
    stories: {
      width: 1080,
      height: 1920,
    },
  },
  zalo: {
    profile: {
      width: 150,
      height: 150,
    },
    landscape: {
      width: 320,
      height: 180,
    },
    partrait: {
      width: 180,
      height: 320,
    },
    stories: {
      width: 500,
      height: 500,
    },
    square: {
      width: 500,
      height: 500,
    },
    cover: {
      width: 740,
      height: 220,
    }
  }
};

export const SOCICAL_IMAGE_SIZE_DEFAULT = {
  ...SOCICAL_IMAGE_SIZE.facebook.landscape,
};
