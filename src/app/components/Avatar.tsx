import { useSanityImage } from "@/providers/sanity";
import { Image } from "next-sanity/image";

interface AvatarProps {
  imageSrc: string;
}

export default function Avatar({ imageSrc }: AvatarProps) {
  const getSanityImage = useSanityImage();
  return (
    <Image
      src={getSanityImage(imageSrc).url()}
      width={160}
      height={160}
      alt="Profile Avatar"
    />
  );
}
