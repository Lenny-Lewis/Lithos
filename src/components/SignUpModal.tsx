import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-stone-900 border border-white/20 rounded-3xl p-6 sm:p-8 max-w-md w-full text-white shadow-2xl relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-playfair italic text-white mb-2">
              Welcome to the Strata
            </h3>
            <p className="text-sm text-white/70 max-w-xs mx-auto mb-6 leading-relaxed">
              We've noted <span className="text-white font-medium">{email}</span>. You'll receive early access to new field surveys and cohort dates.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setEmail('');
                onClose();
              }}
              className="bg-white text-gray-900 text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e8702a] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Early Member Access</span>
            </div>
            <h3 className="text-3xl font-playfair italic text-white mb-3">
              Join Lithos
            </h3>
            <p className="text-sm text-white/70 mb-6 leading-relaxed">
              Receive notifications when new high-resolution stratigraphic maps, live tour seats, and research cohorts become available.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-stone-800/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#e8702a] transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-semibold py-3 rounded-full transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#e8702a]/20 mt-1"
              >
                Join Network
              </button>
            </form>

            <p className="text-[11px] text-white/40 text-center mt-4">
              No account creation needed. Unsubscribe anytime.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
