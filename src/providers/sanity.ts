import imageUrlBuilder from "@sanity/image-url"; // Importação correta
import { createClient } from "next-sanity";

// Configuração do cliente Sanity
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export const useSanityImage = () => {
  const builder = imageUrlBuilder(sanityClient);
  const urlFor = (source: string) => {
    return builder.image(source);
  };
  return urlFor;
};

interface SanityObjectImageProps {
  asset: {
    _ref: string;
  };
}

export const getSanityImageSrc = (
  sanityImageObject: SanityObjectImageProps
) => {
  return sanityImageObject.asset._ref;
};
