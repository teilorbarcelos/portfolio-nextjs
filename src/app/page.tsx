import { getSanityImageSrc, sanityClient } from "@/providers/sanity";
import Avatar from "./components/Avatar";

interface profileDataProps {
  github: string;
  _createdAt: string;
  _rev: string;
  bio: string;
  _id: string;
  _type: string;
  name: string;
  avatar: Avatar;
  linkedin: string;
  _updatedAt: string;
}

interface Avatar {
  _type: string;
  asset: Asset;
}

interface Asset {
  _ref: string;
  _type: string;
}

export default async function Projects() {
  const profileData: profileDataProps = await sanityClient.fetch(
    `*[_type == "profile"][0]`
  );
  console.log("🚀 ~ Projects ~ profileData:", profileData);
  return (
    <main>
      <h1>Projects</h1>
      <Avatar imageSrc={getSanityImageSrc(profileData.avatar)} />
    </main>
  );
}
