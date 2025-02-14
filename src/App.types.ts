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
