export type Image = {
  id: string;
  urls: { small: string; regular: string };
  description: string;
  alt_description: string;
};

export type Gallery = [] | Image[];

export type ModalInfo = {
  modalSrc: string;
  alt: string | undefined;
  alt_description?: string;
};

export interface Information {
  total: number;
  total_pages: number;
  results: Gallery[];
}

export interface Images {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
  };
  likes: number;
  description?: string;
  alt_description?: string;
}
