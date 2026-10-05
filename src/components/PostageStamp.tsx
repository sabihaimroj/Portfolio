import React from 'react';
import { sound } from '../utils/audio';

interface PostageStampProps {
  imageSrc: string;
  alt?: string;
  onClick?: () => void;
  className?: string;
  imagePosition?: string;
}

export const PostageStamp: React.FC<PostageStampProps> = ({
  imageSrc,
  alt = 'Sabiha portrait',
  onClick,
  className = '',
  imagePosition = 'object-[center_20%]',
}) => {
  // 18 teeth horizontal, 24 teeth vertical
  const numHorizontalTeeth = 18;
  const numVerticalTeeth = 24;

  const handleMouseEnter = () => {
    sound.playTabClick();
  };

  return (
    <div className={`relative inline-block select-none group ${className}`}>
      {/* Postage Stamp Container with Perforated Edges */}
      <div
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        className="relative cursor-pointer transition-transform duration-300 group-hover:scale-[1.02] active:scale-[0.99] filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.14)]"
      >
        <svg
          viewBox="0 0 260 340"
          className="w-[230px] sm:w-[270px] md:w-[290px] h-auto overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Stamp perforation mask */}
            <mask id="postage-stamp-perforation">
              {/* Solid base */}
              <rect x="0" y="0" width="260" height="340" fill="white" />

              {/* Top teeth scallops */}
              {Array.from({ length: numHorizontalTeeth }).map((_, i) => {
                const cx = (i + 0.5) * (260 / numHorizontalTeeth);
                return <circle key={`top-${i}`} cx={cx} cy="0" r="5" fill="black" />;
              })}

              {/* Bottom teeth scallops */}
              {Array.from({ length: numHorizontalTeeth }).map((_, i) => {
                const cx = (i + 0.5) * (260 / numHorizontalTeeth);
                return <circle key={`bottom-${i}`} cx={cx} cy="340" r="5" fill="black" />;
              })}

              {/* Left teeth scallops */}
              {Array.from({ length: numVerticalTeeth }).map((_, i) => {
                const cy = (i + 0.5) * (340 / numVerticalTeeth);
                return <circle key={`left-${i}`} cx="0" cy={cy} r="5" fill="black" />;
              })}

              {/* Right teeth scallops */}
              {Array.from({ length: numVerticalTeeth }).map((_, i) => {
                const cy = (i + 0.5) * (340 / numVerticalTeeth);
                return <circle key={`right-${i}`} cx="260" cy={cy} r="5" fill="black" />;
              })}
            </mask>

            {/* Inner clipping path for the photograph */}
            <clipPath id="stamp-photo-clip">
              <rect x="18" y="18" width="224" height="304" rx="1" />
            </clipPath>
          </defs>

          {/* Stamp Paper Base masked with scallops */}
          <g mask="url(#postage-stamp-perforation)">
            {/* White/Off-white Stamp paper border */}
            <rect
              x="0"
              y="0"
              width="260"
              height="340"
              fill="#f8fafc"
              stroke="#e2e8f0"
              strokeWidth="1"
            />

            {/* Subtle inner framing line */}
            <rect
              x="15"
              y="15"
              width="230"
              height="310"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="0.75"
              strokeDasharray="2,2"
            />

            {/* The Image inside */}
            <foreignObject x="18" y="18" width="224" height="304" clipPath="url(#stamp-photo-clip)">
              <img
                src={imageSrc}
                alt={alt}
                className={`w-full h-full object-cover ${imagePosition} grayscale contrast-115 brightness-95 transition-all duration-500 group-hover:contrast-125`}
              />
            </foreignObject>

            {/* Subtle paper vignette overlay */}
            <rect
              x="18"
              y="18"
              width="224"
              height="304"
              clipPath="url(#stamp-photo-clip)"
              fill="url(#vignette)"
              opacity="0.25"
              className="pointer-events-none"
            />
          </g>
        </svg>

        {/* Hand-stamped Ink text: CREATE BEING BEING CREATE */}
        <div
          className="absolute -bottom-6 -right-8 sm:-bottom-8 sm:-right-10 pointer-events-none select-none z-10 transform -rotate-[14deg] transition-transform duration-300 group-hover:-rotate-[12deg] group-hover:scale-105"
          style={{ fontFamily: "'Reenie Beanie', 'Caveat', cursive" }}
        >
          <div className="text-neutral-900 font-bold text-2xl sm:text-3xl leading-[1.1] tracking-tight text-right opacity-90 drop-shadow-xs">
            <div>CREATE BEING</div>
            <div className="pl-3">BEING CREATE</div>
          </div>
        </div>
      </div>
    </div>
  );
};
