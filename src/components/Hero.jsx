import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-blue-200/90 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> New badge set
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Premium Level Badges
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            A collectible set of game-ready rank icons designed with clean vectors, smooth
            gradients, layered depth and subtle glows. Perfect for mobile games and modern apps.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#badges" className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 ring-1 ring-blue-400/30 transition hover:brightness-110">
              View Badges
            </a>
            <a href="/test" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15">
              Backend Test
            </a>
          </div>
        </div>

        <div className="relative h-[420px] w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <Spline scene="https://prod.spline.design/zBXGLjse1OwBSbps/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
