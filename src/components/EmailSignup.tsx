import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";
import emailjs from "emailjs-com";

const EmailSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const templateParams = {
        email,
      };

      await emailjs.send(
        "service_0dqo1tf",
        "template_pgypvr8",
        templateParams,
        "y2N2K2nuEG3CV5rz0"
      );

      toast.success(
        `Thanks — your signal is received! We'll notify you when KarmAnk launches ✨`
      );
      setEmail("");
    } catch (error) {
      console.log(error, "send email error");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
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
    </div>
  );
};

export default EmailSignup;
