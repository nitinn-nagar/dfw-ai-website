import { useEffect, useRef } from 'react'

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return }
    const s = document.createElement('script')
    s.src = src
    s.onload  = resolve
    s.onerror = reject
    document.head.appendChild(s)
  })
}

export default function VantaHalo() {
  const vantaRef    = useRef(null)
  const vantaEffect = useRef(null)

  useEffect(() => {
    let cancelled = false

    async function init() {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')
      await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js')
      if (cancelled || !vantaRef.current) return
      if (vantaEffect.current) vantaEffect.current.destroy()

      vantaEffect.current = window.VANTA.HALO({
  el:              vantaRef.current,
  mouseControls:   true,
  touchControls:   true,
  gyroControls:    false,
  minHeight:       200.00,
  minWidth:        200.00,
  backgroundColor: 0x000000,  // ← add this line
})
    }

    init()

    return () => {
      cancelled = true
      if (vantaEffect.current) { vantaEffect.current.destroy(); vantaEffect.current = null }
    }
  }, [])

  return (
    <div
      ref={vantaRef}
      className="absolute top-0 bottom-0 hidden md:block"
      style={{ width: '55%', right: '-8%' }}
    />
  )
}