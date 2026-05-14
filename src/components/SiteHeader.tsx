import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
        <Link to="/" onClick={close} className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl font-medium text-primary group-hover:text-accent transition-colors">
            Lentera Digital
          </span>
          <span className="text-xs uppercase tracking-widest text-muted-foreground hidden sm:inline">
            Jurnal Mahasiswa
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            to="/"
            activeProps={{ className: "text-primary font-medium" }}
            activeOptions={{ exact: true }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Beranda
          </Link>
          <Link
            to="/about"
            activeProps={{ className: "text-primary font-medium" }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Tentang
          </Link>
          <a
            href="https://www.amikom.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-accent/40 px-4 py-1.5 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            amikom.ac.id ↗
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden border-t border-border/60 transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-5xl px-6 py-4 flex flex-col gap-1 text-sm">
          <Link
            to="/"
            onClick={close}
            activeProps={{ className: "bg-secondary text-primary font-medium" }}
            activeOptions={{ exact: true }}
            className="rounded-md px-3 py-2.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
          >
            Beranda
          </Link>
          <Link
            to="/about"
            onClick={close}
            activeProps={{ className: "bg-secondary text-primary font-medium" }}
            className="rounded-md px-3 py-2.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
          >
            Tentang
          </Link>
          <a
            href="https://www.amikom.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="rounded-md px-3 py-2.5 text-accent hover:bg-accent/10 transition-colors"
          >
            amikom.ac.id ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
