import { createSignal } from "solid-js";
import { ArrowIcon } from "./Icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = createSignal(false);
  return (
    <header
      id="top"
      tabIndex={-1}
      class="relative z-20 h-[92px] bg-paper outline-none max-tablet:h-[77px]"
    >
      <a
        class="absolute -top-[60px] left-5 z-100 bg-ink px-5 py-3 text-white focus:top-[15px]"
        href="#main"
        onClick={() => setMenuOpen(false)}
      >
        Skip to content
      </a>
      <nav
        class="flex h-full items-center gap-9 border-b border-line max-desktop:gap-5 page-shell"
        aria-label="Main navigation"
      >
        <a
          href="/#top"
          class="text-[32px] leading-none font-[850] tracking-[-2px] max-tablet:text-[29px]"
          aria-label="dawnwin7, home"
          onClick={() => setMenuOpen(false)}
        >
          dawnwin7<span class="text-accent">.</span>
        </a>
        <span class="ml-2 font-mono text-[8px] tracking-[.035em] text-[#6c6c64] max-desktop:hidden">
          A WORK IN PROGRESS. ALWAYS.
        </span>
        <button
          class="hidden max-menu:ml-auto max-menu:block max-menu:bg-transparent max-menu:py-[10px] max-menu:text-[12px]"
          type="button"
          aria-expanded={menuOpen()}
          aria-controls="navigation-links"
          onClick={() => setMenuOpen(!menuOpen())}
        >
          {menuOpen() ? "Close −" : "Menu +"}
        </button>
        <div
          id="navigation-links"
          class="ml-auto flex items-center gap-[33px] text-[12px] font-medium max-tablet:gap-5 max-tablet:text-[11px] max-phone:gap-[15px] max-menu:absolute max-menu:top-[77px] max-menu:left-0 max-menu:hidden max-menu:w-full max-menu:border-b max-menu:border-line max-menu:bg-paper max-menu:px-5 max-menu:py-[25px] max-menu:data-[open=true]:flex max-menu:data-[open=true]:justify-between"
          data-open={menuOpen()}
        >
          <a
            class="transition-colors duration-200 hover:text-accent"
            href="/#work"
            onClick={() => setMenuOpen(false)}
          >
            The work{" "}
            <span class="ml-1 align-super font-mono text-[8px] text-[#76766c] max-tablet:hidden">
              01
            </span>
          </a>
          <a
            class="transition-colors duration-200 hover:text-accent"
            href="/#about"
            onClick={() => setMenuOpen(false)}
          >
            The thinking{" "}
            <span class="ml-1 align-super font-mono text-[8px] text-[#76766c] max-tablet:hidden">
              02
            </span>
          </a>
          <a
            href="/#connect"
            class="ml-[10px] inline-flex items-center gap-5 rounded-[3px] border border-ink px-[18px] py-[11px] transition-colors duration-200 hover:text-accent max-tablet:ml-0 max-tablet:px-3 max-tablet:py-[9px]"
            onClick={() => setMenuOpen(false)}
          >
            Let’s build <ArrowIcon class="size-4 max-tablet:hidden" />
          </a>
        </div>
      </nav>
    </header>
  );
}
