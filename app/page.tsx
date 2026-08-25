const movies = [
  { title: "Midnight Run", genre: "Action", year: "2025", color: "from-red-700 to-orange-500" },
  { title: "The Last Signal", genre: "Sci-Fi", year: "2024", color: "from-cyan-700 to-blue-500" },
  { title: "Silent City", genre: "Thriller", year: "2025", color: "from-violet-800 to-fuchsia-600" },
  { title: "Beyond the Sea", genre: "Drama", year: "2024", color: "from-emerald-700 to-teal-500" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-12">
        <h1 className="text-2xl font-bold text-red-500">CineVerse</h1>
        <div className="hidden gap-7 text-sm text-zinc-300 md:flex">
          <a href="#home">Home</a>
          <a href="#movies">Movies</a>
          <a href="#genres">Genres</a>s
        </div>
        <button className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-500">
          Sign In
        </button>
      </nav>

      <section id="home" className="relative overflow-hidden px-6 py-24 md:px-12 md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,#991b1b,transparent_35%)]" />
        <div className="relative max-w-2xl">
          <p className="mb-4 font-semibold tracking-[0.3em] text-red-400">NOW STREAMING</p>
          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            Your next favorite movie is here.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            Discover trending movies, timeless classics, and stories you will never forget.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-red-600 px-6 py-3 font-bold hover:bg-red-500">
              ▶ Watch Now
            </button>
            <button className="rounded-lg border border-white/30 px-6 py-3 font-bold hover:bg-white/10">
              More Info
            </button>
          </div>
        </div>
      </section>

      <section id="movies" className="px-6 pb-16 md:px-12">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Trending Movies</h2>
          <button className="text-sm font-semibold text-red-400">View All</button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {movies.map((movie) => (
            <article
              key={movie.title}
              className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900 transition hover:-translate-y-1 hover:border-red-500/60"
            >
              <div className={`h-56 bg-linear-to-br ${movie.color} p-5`}>
                <span className="rounded bg-black/30 px-2 py-1 text-xs font-bold">HD</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold">{movie.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  {movie.genre} · {movie.year}
                </p>
                <p className="mt-3 text-sm text-yellow-400">★ 8.7 / 10</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 CineVerse — Your Movie Website
      </footer>
    </main>
  );
}