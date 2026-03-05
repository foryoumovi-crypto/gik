import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 64 }: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {/* Instagram-style Gradient Border */}
      <div className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600">
        {/* White Border */}
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-[1px]">
          {/* Teal Circle Background */}
          <div className="w-full h-full rounded-full bg-[#0d7c84] flex flex-col items-center justify-center text-white p-1">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* "THE" Text */}
              <text
                x="50"
                y="24"
                textAnchor="middle"
                fill="white"
                className="font-sans font-black"
                style={{ fontSize: '16px', fontWeight: 900 }}
              >
                THE
              </text>

              {/* Bungalow Shape (White Outline) */}
              <path
                d="M22 52 L50 32 L78 52 L78 72 L62 72 L62 58 L38 58 L38 72 L22 72 Z"
                stroke="white"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              {/* Chimney */}
              <path
                d="M66 44 L66 35 L72 35 L72 48"
                stroke="white"
                strokeWidth="4"
                strokeLinejoin="round"
              />

              {/* Coffee Cup */}
              <path
                d="M44 66 C44 69 46 71 50 71 C54 71 56 69 56 66 L56 63 L44 63 Z"
                fill="white"
              />
              <path
                d="M56 64 C59 64 60 65 60 66 C60 67 59 68 56 68"
                stroke="white"
                strokeWidth="1.5"
              />
              {/* Steam */}
              <path d="M47 60 Q48 58 47 56" stroke="white" strokeWidth="1" />
              <path d="M50 60 Q51 58 50 56" stroke="white" strokeWidth="1" />
              <path d="M53 60 Q54 58 53 56" stroke="white" strokeWidth="1" />

              {/* "BUNGALOW" Text */}
              <text
                x="50"
                y="86"
                textAnchor="middle"
                fill="white"
                className="font-sans font-black"
                style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.02em' }}
              >
                BUNGALOW
              </text>
              {/* "CAFÉ" Text */}
              <text
                x="50"
                y="96"
                textAnchor="middle"
                fill="white"
                className="font-sans font-black"
                style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.02em' }}
              >
                CAFÉ
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
