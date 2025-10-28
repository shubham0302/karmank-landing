import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Simulate signup
    setIsSubmitted(true);
    toast.success('Thanks — your signal is received! ✨');
    setEmail('');

    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="you@cosmicmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="glass-card h-12 text-base border-2 border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground"
          />
          <Button
            type="submit"
            className="h-12 px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white font-semibold shadow-lg hover:shadow-xl"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Join Waitlist
          </Button>
        </form>
      ) : (
        <div className="glass-card rounded-2xl p-6 text-center animate-float">
          <div className="text-2xl mb-2">🌟</div>
          <p className="text-lg font-semibold text-gradient-cosmic">
            Your cosmic journey begins soon!
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            We'll notify you when KarmAnk launches
          </p>
        </div>
      )}
    </div>
  );
};

export default EmailSignup;
