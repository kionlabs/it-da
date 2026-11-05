'use client';

import { useEffect, useState } from 'react';

const message = '선착순 특별 혜택 30분 무료 수업';
const characters = Array.from(message);

export default function TypingOffer() {
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduceMotion(preference.matches);
    updatePreference();
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const delay = count === characters.length && !deleting ? 1700
      : count === 0 && deleting ? 450
        : deleting ? 65 : 110;
    const timer = window.setTimeout(() => {
      if (count === characters.length && !deleting) setDeleting(true);
      else if (count === 0 && deleting) setDeleting(false);
      else setCount((current) => current + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [count, deleting, reduceMotion]);

  return (
    <p className="home-hero-offer mt-5 text-center text-lg font-black tracking-tight text-[#765168] sm:text-left sm:text-xl" aria-label={message}>
      <span className="relative inline-block max-w-full" aria-hidden="true">
        <span className="invisible">{message}</span>
        <span className="absolute inset-0">{reduceMotion ? message : characters.slice(0, count).join('')}{!reduceMotion && count < characters.length && <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.12em] bg-current align-baseline" />}</span>
      </span>
    </p>
  );
}
