import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import CoreProcessSection from '@/components/CoreProcessSection';
import TeacherShowcase from '@/components/TeacherShowcase';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import VideoSection from '@/components/VideoSection';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-purple-600 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ValueProposition />
        <CoreProcessSection />
        <TeacherShowcase />
        <SuccessStoriesSection />
        <VideoSection />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
