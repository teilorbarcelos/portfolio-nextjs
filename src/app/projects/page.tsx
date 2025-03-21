import { getSanityImageSrc, sanityClient } from "@/providers/sanity";
import Avatar from "./components/Avatar";

export default async function Projects() {
  const profileData = await sanityClient.fetch(`*[_type == "profile"][0]`);
  console.log("🚀 ~ Projects ~ profileData:", profileData);

  const imageSrc = profileData?.avatar
    ? getSanityImageSrc(profileData.avatar)
    : null;

  return (
    <main>
      <h1>Projects</h1>
      <Avatar imageSrc={imageSrc} />
    </main>
  );
}
