import React, { memo } from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-space-lg px-gutter lg:px-gutter-desktop mt-space-xl">
      <div className="w-full flex items-center justify-center">
        <div className="px-space-md py-space-xs bg-primary-fixed border border-on-surface shadow-[4px_4px_0px_#111116] -rotate-1 text-center">
          <p className="font-code-md text-body-md font-bold text-on-primary-fixed">
            Every Senior Dev started in their O(n³) villain era. Keep cooking. ⚡
          </p>
        </div>
      </div>

      <div className="mt-space-md text-center font-label-sm text-label-sm uppercase text-on-surface-variant tracking-widest">
        ARC // DSA SCRAPBOOK &amp; VIBE ENGINE © 2026
      </div>
    </footer>
  );
};

export default memo(Footer);
