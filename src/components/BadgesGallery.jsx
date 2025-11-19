import { StarterBadge, ExplorerBadge, AchieverBadge, EliteBadge, LegendBadge } from './BadgeSVGs'

export default function BadgesGallery() {
  const items = [
    { id: 1, name: 'Starter', color: 'from-amber-900/20 to-stone-800/10', Component: StarterBadge, desc: 'Wooden shield, gray star' },
    { id: 2, name: 'Explorer', color: 'from-blue-500/20 to-indigo-500/10', Component: ExplorerBadge, desc: 'Silver-blue shield, gray star' },
    { id: 3, name: 'Achiever', color: 'from-emerald-500/20 to-amber-500/10', Component: AchieverBadge, desc: 'Green-bronze shield, gold star' },
    { id: 4, name: 'Elite', color: 'from-purple-500/20 to-fuchsia-500/10', Component: EliteBadge, desc: 'Purple shield with wings' },
    { id: 5, name: 'Legend', color: 'from-red-500/20 to-amber-400/10', Component: LegendBadge, desc: 'Gold wings, red-gold star' },
  ]

  return (
    <section id="badges" className="relative w-full bg-slate-950 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(99,102,241,0.12),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Level Icon Set</h2>
            <p className="mt-2 text-slate-300">Vector-grade SVG badges with smooth gradients and soft glows.</p>
          </div>
          <a href="#hero" className="hidden rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur hover:bg-white/15 md:block">Back to top</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map(({ id, name, color, Component, desc }) => (
            <div key={id} className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${color} p-4 transition hover:scale-[1.02] hover:border-white/20`}>
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />
              <div className="flex h-48 items-center justify-center">
                <Component className="h-40 w-40" />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold text-white">{name} Badge</h3>
                <p className="text-sm text-slate-300/80">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
