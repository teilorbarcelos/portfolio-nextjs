import { useSanityImage } from "@/providers/sanity";
import { Image } from "next-sanity/image";

interface AvatarProps {
  imageSrc: string | null;
}

export default function Avatar({ imageSrc }: AvatarProps) {
  const getSanityImage = useSanityImage();
  if (!imageSrc) {
    return <div>Loading image...</div>;
  }

  return (
    <Image
      src={getSanityImage(imageSrc).url()}
      width={160}
      height={160}
      alt="Profile Avatar"
    />
  );
}
