import React, { useState } from 'react';
import { PaperclipNote } from './PaperclipNote';
import { MadridClock } from './MadridClock';
import { WatermarkScript } from './WatermarkScript';
import { sound } from '../utils/audio';
import { Copy, Check, Send, MapPin, Mail, ArrowUpRight } from 'lucide-react';

export const ContactTab: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Branding & Identity',
    budget: '$20k – $40k',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    sound.playTabClick();
    navigator.clipboard.writeText('sabiha@portfolder.studio');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playStamp();
    setSubmitted(true);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between py-6 px-5 sm:px-10 md:px-14 min-h-[720px] md:min-h-[780px]">
      {/* Background Cursive Watermark "Contact" */}
      <WatermarkScript text="Contact" />

      {/* Header Region */}
      <div className="relative z-10 flex flex-col mb-4">
        <h1 className="font-syne font-extrabold uppercase tracking-tighter text-6xl sm:text-8xl text-neutral-950">
          CONTACT
        </h1>
        <div className="mt-4 max-w-sm">
          <p className="text-xl sm:text-2xl font-sans font-medium text-neutral-900 leading-snug">
            Got a brand that needs some love? A project keeping you up at night? Let's talk!
          </p>
        </div>
      </div>

      {/* Center Commission Memo Form or Submitted Confirmation */}
      {/* Minimalist Contact Form & Links */}
      <div className="relative z-10 my-8">
        {submitted ? (
          <div className="border-y border-neutral-400 py-8 text-center max-w-lg">
            <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center mx-auto mb-4 font-mono font-bold text-lg">
              ✓
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 mb-2 font-sans">
              Commission Brief Received
            </h3>
            <p className="text-sm text-neutral-700 mb-6 leading-relaxed">
              Thank you, {formData.name || 'friend'}. Your brief has been stamped and filed. Sabiha will reply within 24–48 hours.
            </p>
            <button
              onClick={() => {
                sound.playPaper();
                setSubmitted(false);
              }}
              className="px-4 py-2 bg-neutral-900 text-white font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              SEND ANOTHER INQUIRY
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-2xl text-sm font-mono uppercase tracking-wide">
            
            {/* Socials Row */}
            <div className="flex flex-col sm:flex-row border-t border-neutral-400 py-3 sm:items-center">
              <div className="w-full sm:w-32 text-neutral-500 font-semibold mb-2 sm:mb-0">SOCIALS</div>
              <div className="flex-1 flex items-center gap-6 sm:gap-8 text-neutral-900">
                <a href="#ig" className="hover:text-neutral-500 transition-colors">IG &rarr;</a>
                <a href="#x" className="hover:text-neutral-500 transition-colors">X &rarr;</a>
                <a href="#in" className="hover:text-neutral-500 transition-colors">IN &rarr;</a>
                <a href="#be" className="hover:text-neutral-500 transition-colors">BE &rarr;</a>
              </div>
            </div>

            {/* Email Row */}
            <div className="flex flex-col sm:flex-row border-t border-neutral-400 py-3 sm:items-center group">
              <div className="w-full sm:w-32 text-neutral-500 font-semibold mb-2 sm:mb-0">EMAIL</div>
              <div className="flex-1 flex items-center justify-between text-neutral-900">
                <a href="mailto:hello@sabiha.com" className="hover:text-neutral-500 transition-colors">HELLO@SABIHA.COM &rarr;</a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 hover:text-neutral-500 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>
            </div>

            {/* Spacer */}
            <div className="h-6"></div>

            {/* Scope Row */}
            <div className="flex flex-col sm:flex-row border-t border-neutral-400 py-3 sm:items-center">
              <label htmlFor="service" className="w-full sm:w-32 text-neutral-500 font-semibold mb-2 sm:mb-0">SCOPE</label>
              <div className="flex-1 flex items-center pr-2">
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-transparent border-none outline-none text-neutral-900 cursor-pointer appearance-none focus:outline-none"
                  style={{ backgroundImage: 'none' }}
                >
                  <option value="" disabled>Select...</option>
                  <option value="Frontend Development">Frontend Development (React)</option>
                  <option value="Backend Development">Backend Architecture (Node.js)</option>
                  <option value="Full-Stack Web App">Full-Stack Web Application</option>
                  <option value="API Integration">API Integration & Services</option>
                </select>
                <div className="text-neutral-500 pointer-events-none">&#x2304;</div>
              </div>
            </div>

            {/* Name Row */}
            <div className="flex flex-col sm:flex-row border-t border-neutral-400 py-3 sm:items-center">
              <label htmlFor="name" className="w-full sm:w-32 text-neutral-500 font-semibold mb-2 sm:mb-0">NAME</label>
              <div className="flex-1">
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Smith"
                  className="w-full bg-transparent border-none outline-none text-neutral-900 placeholder:text-neutral-400 placeholder:normal-case font-sans focus:outline-none"
                />
              </div>
            </div>

            {/* Email Input Row */}
            <div className="flex flex-col sm:flex-row border-t border-neutral-400 py-3 sm:items-center">
              <label htmlFor="email" className="w-full sm:w-32 text-neutral-500 font-semibold mb-2 sm:mb-0">EMAIL</label>
              <div className="flex-1">
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@framer.com"
                  className="w-full bg-transparent border-none outline-none text-neutral-900 placeholder:text-neutral-400 placeholder:normal-case font-sans focus:outline-none"
                />
              </div>
            </div>

            {/* Message Row */}
            <div className="flex flex-col sm:flex-row border-t border-b border-neutral-400 py-3 items-start relative">
              <label htmlFor="message" className="w-full sm:w-32 text-neutral-500 font-semibold mt-1 mb-2 sm:mb-0">MESSAGE</label>
              <div className="flex-1 w-full relative">
                <textarea
                  id="message"
                  rows={2}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write message"
                  className="w-full bg-transparent border-none outline-none text-neutral-900 placeholder:text-neutral-400 placeholder:normal-case font-sans resize-none focus:outline-none"
                />
              </div>
              
              {/* Submit Button */}
              <div className="absolute right-0 bottom-3">
                <button
                  type="submit"
                  className="bg-neutral-950 text-white px-3 py-1 font-mono text-[10px] font-bold tracking-widest hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  SUBMIT
                </button>
              </div>
            </div>

          </form>
        )}
      </div>

      {/* Bottom Bar: Clock & Global Presence */}
      <div className="relative z-10 pt-4 flex items-center justify-between text-[10px] sm:text-xs text-neutral-600 tracking-wider border-t border-neutral-300/40 font-mono">
        <MadridClock />

        <div className="flex items-center gap-3">
          <span className="text-neutral-500 font-mono hidden sm:inline">(2026)</span>
          <span className="font-semibold text-neutral-800 font-mono tracking-widest text-[10px] sm:text-[11px]">
            COMMISSIONS OPEN
          </span>
        </div>
      </div>
    </div>
  );
};
