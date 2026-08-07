import React, { useEffect, useState } from 'react';

import logo from "./logo-getsite.png";

export const GetSiteBadge = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [badgeUrl, setBadgeUrl] = useState("https://getsite.com.br");

  useEffect(() => {
    setBadgeUrl(
      `https://getsite.com.br?utm_source=${encodeURIComponent(
        window.location.hostname,
      )}&utm_medium=referral&utm_campaign=site_credit`,
    );
  }, []);

  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 240);
  };

  return (
    <aside
      id="getsite-badge"
      role="complementary"
      dir="ltr"
      lang="pt-BR"
      aria-label="Criado por GetSite"
      className={`fixed bottom-3 left-3 z-[9999] flex items-stretch gap-1 rounded-[7px] bg-[#121212] hover:bg-[#242424] transition-colors duration-200 px-2 py-[4px] text-xs text-white shadow-lg border-1 border-[#000000] transition-opacity duration-200 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <a
        id="getsite-badge-cta"
        target="_blank"
        href={badgeUrl}
        rel="noopener nofollow"
        aria-label="Criado por GetSite"
        className="flex items-center gap-1.5 text-white no-underline hover:opacity-90"
      >
        <span id="getsite-badge-text" className="text-[12px] font-normal text-white/70">Criado por</span>
        <img src={logo} alt="GetSite" className="h-3 w-[48px] object-contain ml-[8px] mr-[12px] scale-125" />
      </a>
      <span id="getsite-badge-divider" aria-hidden="true" className="w-[1px] bg-white/5" />
      <button
        id="getsite-badge-close"
        aria-label="Fechar"
        title="Fechar"
        type="button"
        onClick={handleClose}
        className="text-white/60 hover:text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true">
          <path fill="currentColor" d="M10.646 4.646a.5.5 0 1 1 .707.708L8.707 8l2.646 2.646a.5.5 0 1 1-.707.707L8 8.707l-2.646 2.646a.5.5 0 1 1-.708-.707L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708L8 7.293l2.646-2.647Z" />
        </svg>
      </button>
    </aside>
  );
};

export default GetSiteBadge;
