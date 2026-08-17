import React, { forwardRef } from "react";

const OrbitRing = forwardRef(
  ({ size, icons, iconSize, className }, ref) => {
    // Icon ka center ring ke upar rahe
    const orbitRadius = size / 2 - iconSize / 2;

    return (
      <div
        ref={ref}
        className={`absolute rounded-full ${className}`}
        style={{
          width: size,
          height: size,
        }}
      >
        {icons.map((item, index) => {
          const angle = (360 / icons.length) * index;

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                width: 0,
                height: 0,
                transform: `rotate(${angle}deg) translateY(-${orbitRadius}px)`,
                transformOrigin: "center center",
              }}
            >
              <div
                className="orbit-icon flex items-center justify-center rounded-2xl shadow-xl border border-white"
                style={{
                  width: iconSize,
                  height: iconSize,
                  background: item.bg,
                  color: item.color,

                  // icon center
                  marginLeft: -iconSize / 2,
                  marginTop: -iconSize / 2,

                  // icon seedha rahe
                  transform: `rotate(-${angle}deg)`,
                }}
              >
                <item.Icon size="55%" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

OrbitRing.displayName = "OrbitRing";

export default OrbitRing;