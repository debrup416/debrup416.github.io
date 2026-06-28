import { useEffect } from 'react'

const particlesConfig = {
  particles: {
    // number is overridden per-device below (see getNumberConfig)
    number: { value: 110, density: { enable: true, value_area: 1000 } },
    // Tightened palette toward a coherent violet→blue range (dropped near-black navys that disappeared on the dark bg)
    color: { value: ['#9D4EDD', '#7B61FF', '#5A7CFF', '#4CC9F0'] },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
    },
    opacity: {
      value: 0.6,
      random: true,
      anim: { enable: true, speed: 0.8, opacity_min: 0.15, sync: false },
    },
    size: {
      // Larger range creates a parallax/depth feel between near and far particles
      value: 4,
      random: true,
      anim: { enable: true, speed: 1.5, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 140,
      // Lines tinted to match the palette instead of stark white — less harsh
      color: '#6f8cff',
      opacity: 0.25,
      width: 1,
    },
    move: {
      // Calmer drift reads as more elegant than fast jitter
      enable: true,
      speed: 1.6,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: true, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    // Detect on window (not canvas): the canvas sits behind page content (z-index:-1),
    // so canvas-only detection never fires over cards/header. Window covers desktop + touch.
    detect_on: 'window',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      grab: { distance: 160, line_linked: { opacity: 0.8 } },
      bubble: { distance: 250, size: 8, duration: 2, opacity: 0.8, speed: 3 },
      repulse: { distance: 120, duration: 0.4 },
      push: { particles_nb: 3 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
}

// particles.js scales the count to the canvas area when density is enabled, so a
// small phone screen ends up sparse. Shrink value_area on small screens to pack
// the particles tighter (= higher visual density) without exploding the count on desktop.
function getNumberConfig() {
  const width = window.innerWidth
  if (width <= 480) {
    return { value: 90, density: { enable: true, value_area: 320 } }
  }
  if (width <= 768) {
    return { value: 100, density: { enable: true, value_area: 500 } }
  }
  return { value: 110, density: { enable: true, value_area: 1000 } }
}

export default function ParticlesBackground() {
  useEffect(() => {
    if (window.particlesJS) {
      const config = {
        ...particlesConfig,
        particles: { ...particlesConfig.particles, number: getNumberConfig() },
      }
      window.particlesJS('particles-js', config)
    }
  }, [])

  return <div id="particles-js"></div>
}
