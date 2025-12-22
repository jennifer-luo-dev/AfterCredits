import { useState } from "react";
import { createClient } from "../../utils/supabase/client";
import { Button } from "./ui/button";
import { Heart, Film, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface AuthProps {
  onAuthSuccess: (accessToken: string) => void;
}

export function Auth({ onAuthSuccess }: AuthProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const supabase = createClient();
      const { data, error: signInError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (signInError) {
        setError(signInError.message);
        setLoading(false);
        return;
      }

      if (data.session?.access_token) {
        onAuthSuccess(data.session.access_token);
      }
    } catch (err) {
      console.error("Sign in error:", err);
      setError("Failed to sign in");
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Use Supabase client to sign up the user directly from the client
      const supabase = createClient();
      const { data: signUpData, error: signUpError } =
        await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { name },
          },
        });

      if (signUpError) {
        setError(signUpError.message);
        setLoading(false);
        return;
      }

      // After sign up, sign in to obtain session (if needed)
      const { data: signInData, error: signInError } =
        await supabase.auth.signInWithPassword({ email, password });

      if (signInError) {
        setError(signInError.message);
        setLoading(false);
        return;
      }

      if (signInData.session?.access_token) {
        onAuthSuccess(signInData.session.access_token);
      }
    } catch (err) {
      console.error("Sign up error:", err);
      setError("Failed to sign up");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 text-primary/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart className="w-12 h-12" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-16 text-accent/20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-10 h-10" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-20 text-primary/15"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Film className="w-8 h-8" />
      </motion.div>

      <motion.div
        className="w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-10">
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-6 shadow-lg shadow-primary/10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Heart className="w-10 h-10 text-primary" />
          </motion.div>
          <h1 className="text-4xl mb-3 text-foreground tracking-wide">
            After Credits
          </h1>
          <p className="text-muted-foreground italic">
            A private space for our memories
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <Sparkles className="w-4 h-4 text-primary/40" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </div>

        <div className="p-8 shadow-2xl shadow-primary/10 border border-primary/20 bg-gradient-to-br from-card/95 to-secondary/50 backdrop-blur-sm rounded-lg">
          <form
            onSubmit={isSignUp ? handleSignUp : handleSignIn}
            className="space-y-6"
          >
            {isSignUp && (
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label htmlFor="name" className="text-foreground/90 block">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                  required={isSignUp}
                  placeholder="Enter your name"
                  className="w-full bg-input-background/80 border-primary/20 focus:border-primary/40 transition-colors px-3 py-2 rounded"
                />
              </motion.div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-foreground/90 block">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                required
                placeholder="your@email.com"
                className="w-full bg-input-background/80 border-primary/20 focus:border-primary/40 transition-colors px-3 py-2 rounded"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-foreground/90 block">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                required
                placeholder="••••••••"
                className="w-full bg-input-background/80 border-primary/20 focus:border-primary/40 transition-colors px-3 py-2 rounded"
              />
            </div>

            {error && (
              <motion.div
                className="text-sm text-destructive bg-destructive/10 border border-destructive/20 p-3 rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {error}
              </motion.div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/20 transition-all"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                  Please wait...
                </span>
              ) : isSignUp ? (
                "Begin Our Story"
              ) : (
                "Enter Our Cinema"
              )}
            </Button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError("");
                }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors italic"
              >
                {isSignUp
                  ? "Already have an account? Sign in"
                  : "Create a new story together"}
              </button>
            </div>
          </form>
        </div>

        {/* Footer text */}
        <p className="text-center text-xs text-muted-foreground/60 mt-6 italic">
          Where every moment becomes timeless
        </p>
      </motion.div>
    </div>
  );
}
