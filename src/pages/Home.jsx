import HeroSection from "../sections/HeroSection";
import Features from "../sections/Features";
import CoursesPreview from "../sections/CoursesPreview";
import MentorsPreview from "../sections/MentorsPreview";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <CoursesPreview />
      <MentorsPreview />
    </div>
  );
}
