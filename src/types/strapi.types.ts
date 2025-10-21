export type PopulateItem<T> = {
  data: {
    attributes: T | null;
    id: number;
  };
};

export interface DocDataAttributes {
  slug: string;
  createdAt: string; // ISO 8601 date-time
  updatedAt: string; // ISO 8601 date-time
  publishedAt: string | null;
  locale: string;
  seo: Seo | null;
}

export interface Seo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  shareImage: PopulateItem<ShareImage>;
}

type StrapiMediaTumbnail = {
  ext: '.png';
  url: '/uploads/thumbnail_Scraping_2_6176672969.png';
  hash: 'thumbnail_Scraping_2_6176672969';
  mime: 'image/png';
  name: 'thumbnail_Scraping (2).png';
  path: null;
  size: number;
  width: number;
  height: number;
};

type StrapiMediaFormats = {
  thumbnail: StrapiMediaTumbnail;
};

type MimeType = 'image/png';

export interface ShareImage {
  name?: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  formats?: StrapiMediaFormats;
  hash?: string;
  ext?: string;
  mime?: MimeType;
  size?: number;
  url?: string;
  previewUrl?: string | null;
  provider?: string;
  provider_metadata?: null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  start: number;
  limit: number;
  total: number;
}

export type DocDataItem = { id: number; attributes: DocDataAttributes };
export type DocDataResponse = { data: DocDataItem[]; meta: Meta };
