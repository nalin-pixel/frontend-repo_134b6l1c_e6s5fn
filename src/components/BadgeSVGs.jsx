export function StarterBadge(props) {
  return (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-label="Starter Badge" {...props}>
      <defs>
        <linearGradient id="wood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a5a3b" />
          <stop offset="50%" stopColor="#6f4a2f" />
          <stop offset="100%" stopColor="#5b3f28" />
        </linearGradient>
        <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5a3c28" />
          <stop offset="50%" stopColor="#3d2a1d" />
          <stop offset="100%" stopColor="#6b4b33" />
        </linearGradient>
        <linearGradient id="starGray" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bcbec2" />
          <stop offset="100%" stopColor="#8f9499" />
        </linearGradient>
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.35" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#softShadow)">
        <path d="M64 8l42 24v40L64 120 22 72V32L64 8z" fill="url(#wood)" />
        <path d="M64 8l42 24v40L64 120 22 72V32L64 8z" fill="none" stroke="url(#rim)" strokeWidth="6" />
        <circle cx="64" cy="64" r="26" fill="rgba(255,255,255,0.06)" />
        <path d="M64 38l7.9 16h17.6L77 64.3l5.9 16.7L64 71 45.1 81l5.9-16.7-14.5-10H54z" fill="url(#starGray)" />
      </g>
      <circle cx="64" cy="64" r="60" fill="none" stroke="#ffffff" strokeOpacity="0.12" />
    </svg>
  )
}

export function ExplorerBadge(props) {
  return (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-label="Explorer Badge" {...props}>
      <defs>
        <linearGradient id="steel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e2e6eb" />
          <stop offset="50%" stopColor="#b9c2cc" />
          <stop offset="100%" stopColor="#8a96a5" />
        </linearGradient>
        <linearGradient id="blueEdge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5ac8ff" />
          <stop offset="100%" stopColor="#1e66ff" />
        </linearGradient>
        <linearGradient id="starGray2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7ccd1" />
          <stop offset="100%" stopColor="#9298a0" />
        </linearGradient>
        <filter id="glowB" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#glowB)">
        <path d="M64 10l40 22v38L64 118 24 70V32l40-22z" fill="url(#steel)" />
        <path d="M64 10l40 22v38L64 118 24 70V32l40-22z" fill="none" stroke="url(#blueEdge)" strokeWidth="6" />
        <circle cx="64" cy="64" r="28" fill="rgba(30,102,255,0.08)" />
        <path d="M64 38l7.9 16h17.6L77 64.3l5.9 16.7L64 71 45.1 81l5.9-16.7-14.5-10H54z" fill="url(#starGray2)" />
      </g>
      <circle cx="64" cy="64" r="60" fill="none" stroke="#5ac8ff" strokeOpacity="0.18" />
    </svg>
  )
}

export function AchieverBadge(props) {
  return (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-label="Achiever Badge" {...props}>
      <defs>
        <linearGradient id="bronze" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c2865a" />
          <stop offset="100%" stopColor="#8d5a35" />
        </linearGradient>
        <linearGradient id="emerald" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2ee59d" />
          <stop offset="100%" stopColor="#118c4f" />
        </linearGradient>
        <linearGradient id="starGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffd37a" />
          <stop offset="100%" stopColor="#ff9f2e" />
        </linearGradient>
        <filter id="shine" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
          <feOffset dx="0" dy="1" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#shine)">
        <path d="M64 10l40 22v38L64 118 24 70V32l40-22z" fill="url(#bronze)" />
        <path d="M64 14l34 19v32L64 112 30 65V33l34-19z" fill="url(#emerald)" />
        <path d="M64 10l40 22v38L64 118 24 70V32l40-22z" fill="none" stroke="#a86d45" strokeWidth="6" />
        <path d="M64 36l8 16h18L77 64.5l6 17L64 72l-19 9.5 6-17-13-12.5h18z" fill="url(#starGold)" />
      </g>
      <circle cx="64" cy="64" r="60" fill="none" stroke="#ff9f2e" strokeOpacity="0.14" />
    </svg>
  )
}

export function EliteBadge(props) {
  return (
    <svg viewBox="0 0 192 128" xmlns="http://www.w3.org/2000/svg" aria-label="Elite Badge" {...props}>
      <defs>
        <linearGradient id="purpleShield" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
        <linearGradient id="wingMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#cfd4da" />
        </linearGradient>
        <linearGradient id="purpleStar" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e9d5ff" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <filter id="aura" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#aura)">
        {/* Wings */}
        <path d="M34 56c10-10 28-18 44-18-4 10-8 24-4 34-12 2-30 0-40-16z" fill="url(#wingMetal)" opacity="0.9" />
        <path d="M158 56c-10-10-28-18-44-18 4 10 8 24 4 34 12 2 30 0 40-16z" fill="url(#wingMetal)" opacity="0.9" />

        {/* Shield */}
        <path d="M96 10l40 22v38L96 118 56 70V32l40-22z" fill="url(#purpleShield)" />
        <path d="M96 10l40 22v38L96 118 56 70V32l40-22z" fill="none" stroke="#bda4ff" strokeWidth="6" />

        {/* Star */}
        <path d="M96 38l8 16h18l-15 10.5 6 17L96 72l-19 9.5 6-17-13-10h18z" fill="url(#purpleStar)" />
      </g>
      <rect x="4" y="4" width="184" height="120" rx="12" fill="none" stroke="#a78bfa" strokeOpacity="0.18" />
    </svg>
  )
}

export function LegendBadge(props) {
  return (
    <svg viewBox="0 0 192 128" xmlns="http://www.w3.org/2000/svg" aria-label="Legend Badge" {...props}>
      <defs>
        <linearGradient id="goldFrame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe08a" />
          <stop offset="100%" stopColor="#d4a017" />
        </linearGradient>
        <linearGradient id="redEnamel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff4d4d" />
          <stop offset="100%" stopColor="#7a0a0a" />
        </linearGradient>
        <linearGradient id="redGoldStar" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffd1a3" />
          <stop offset="100%" stopColor="#ff3b3b" />
        </linearGradient>
        <linearGradient id="wingGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff2bf" />
          <stop offset="100%" stopColor="#e2b93b" />
        </linearGradient>
        <filter id="royalGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#royalGlow)">
        {/* Wings */}
        <path d="M30 58c12-12 32-20 50-20-6 12-9 26-5 36-14 2-34 0-45-16z" fill="url(#wingGold)" />
        <path d="M162 58c-12-12-32-20-50-20 6 12 9 26 5 36 14 2 34 0 45-16z" fill="url(#wingGold)" />

        {/* Shield */}
        <path d="M96 10l40 22v38L96 118 56 70V32l40-22z" fill="url(#redEnamel)" stroke="url(#goldFrame)" strokeWidth="6" />

        {/* Star */}
        <path d="M96 34l8.5 16.5h18L108 62l6.5 17.5L96 72l-18.5 7.5L84 62 67.5 50.5h18z" fill="url(#redGoldStar)" stroke="url(#goldFrame)" strokeWidth="1.5" />
      </g>
      <rect x="4" y="4" width="184" height="120" rx="12" fill="none" stroke="#ffd875" strokeOpacity="0.22" />
    </svg>
  )
}
