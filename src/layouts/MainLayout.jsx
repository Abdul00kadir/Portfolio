import CustomCursor from '../components/CustomCursor';
import LenisScroll from '../components/LenisScroll';
import BackgroundEffect from '../components/BackgroundEffect';
import Navbar from '../components/Navbar';

export default function MainLayout({ children }) {
  return (
    <LenisScroll>
      <div className="relative min-h-screen text-slate-100 font-sans selection:bg-primary/20 selection:text-primary">
        {/* Animated Custom Cursor */}
        <CustomCursor />

        {/* Cinematic Backdrop Layer */}
        <BackgroundEffect />

        {/* Global Nav Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10 w-full pt-20">
          {children}
        </main>
      </div>
    </LenisScroll>
  );
}
