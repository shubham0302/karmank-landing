import CosmicBackground from "@/components/CosmicBackground";
import CountdownTimer from "@/components/CountdownTimer";
import EmailSignup from "@/components/EmailSignup";
import SocialLinks from "@/components/SocialLinks";
import cosmicNebula from "@/assets/cosmic-nebula.jpg";
import logoImage from "@/assets/karmank-logo.png";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Cosmic Background */}
      <CosmicBackground />

      {/* Background Image Overlay */}
      <div
        className="fixed inset-0 opacity-30 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url(${cosmicNebula})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="pt-8 px-4 sm:px-6 lg:px-8 animate-float">
          <div className="flex items-center justify-center gap-3">
            <div className="animate-pulse-glow">
              <img src={logoImage} alt="logo" className="h-16 " />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-cosmic font-playfair">
              karmAnk
            </h1>
          </div>
          <p className="text-center mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Numerology, cosmic insights & personalised forecasts — aligning fate
            with intention.
          </p>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
          <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 max-w-4xl w-full space-y-8 sm:space-y-12 animate-float">
            {/* Cosmic Tagline */}
            <div className="space-y-4 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-glow leading-tight font-playfair">
                A divine experience
                <br />
                <span className="text-gradient-cosmic">is aligning</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join the constellation of souls seeking cosmic guidance.
                Experience the marriage of ancient numerology wisdom with modern
                insights, where every number tells your destiny's story.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="py-4">
              <CountdownTimer />
            </div>

            {/* Email Signup */}
            {/* <div className="space-y-3">
              <p className="text-center text-sm text-muted-foreground uppercase tracking-widest">
                Get Early Access
              </p>
              <EmailSignup />
            </div> */}

            {/* Features Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="text-center space-y-2 p-4 glass-card rounded-xl">
                <div className="text-2xl">🔮</div>
                <h3 className="font-semibold text-sm">Numerology Readings</h3>
                <p className="text-xs text-muted-foreground">
                  Personalized destiny insights
                </p>
              </div>
              <div className="text-center space-y-2 p-4 glass-card rounded-xl">
                <div className="text-2xl">✨</div>
                <h3 className="font-semibold text-sm">Cosmic Forecasts</h3>
                <p className="text-xs text-muted-foreground">
                  Daily & weekly predictions
                </p>
              </div>
              <div className="text-center space-y-2 p-4 glass-card rounded-xl">
                <div className="text-2xl">🌙</div>
                <h3 className="font-semibold text-sm">Wisdom</h3>
                <p className="text-xs text-muted-foreground">
                  Ancient meets innovation
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 space-y-4">
          <SocialLinks />
          <p className="text-center text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} karmAnk — All rights reserved. Crafted
            with cosmic energy.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
