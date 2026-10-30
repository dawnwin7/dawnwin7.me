import { createFileRoute } from "@tanstack/solid-router";
import { createSignal, For, onCleanup, onMount } from "solid-js";
import SignalSculpture from "../components/SignalSculpture";
import Toolbox from "../components/Toolbox";
import { ArrowIcon } from "../components/Icons";

export const Route = createFileRoute("/")({ component: Home });

function Star(props: { class?: string }) {
  return (
    <svg class={props.class} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path
        d="M50 0v100M0 50h100M14.6 14.6l70.8 70.8M14.6 85.4l70.8-70.8"
        stroke="currentColor"
        stroke-width="18"
      />
    </svg>
  );
}

function Home() {
  const [tickerPaused, setTickerPaused] = createSignal(false);
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    onCleanup(() => {
      observer.disconnect();
    });
  });

  return (
    <main id="main" tabIndex={-1} class="outline-none">
      <section class="pt-8 max-tablet:pt-6 page-shell" aria-labelledby="hero-heading">
        <div class="flex justify-between text-[9px] max-tablet:text-[8px] [&>span:last-child]:text-[#77766d] max-tablet:[&>span:last-child]:hidden font-mono leading-[1.6] tracking-[.045em]">
          <span>
            <span class="status-dot mr-2 inline-block size-1.5 rounded-full bg-accent align-middle" />{" "}
            HELLO, WORLD. I’M JACKSON. AKA DAWNWIN7.
          </span>
          <span>CURIOUS BY DEFAULT. BUILDER BY CHOICE.</span>
        </div>
        <div class="relative grid grid-cols-[1.05fr_1fr] items-center gap-[10px] pt-[39px] pb-[50px] wide:pt-[60px] wide:pb-[65px] max-desktop:grid-cols-[1.1fr_1fr] max-desktop:gap-0 max-tablet:grid-cols-1 max-tablet:pt-[33px] max-tablet:pb-[27px] max-phone:pt-[30px]">
          <div class="relative z-2 max-tablet:z-3">
            <h1
              id="hero-heading"
              class="text-[clamp(83px,9.75vw,153px)] leading-[.87] font-[850] tracking-[-.075em] max-desktop:text-[10vw] max-tablet:text-[clamp(82px,16.5vw,125px)] max-tablet:leading-[.9] max-tablet:tracking-[-.07em] max-small:text-[21vw]"
            >
              BUILDING
              <br />
              WHAT’S
              <br />
              <span class="flex items-center gap-[26px] text-accent max-tablet:gap-[22px]">
                NEXT
                <Star class="size-[.59em] shrink-0 animate-star-arrive" />
              </span>
              <span class="sr-only">.</span>
            </h1>
            <p class="mt-7 text-[15px] leading-[1.6] tracking-[-.015em] text-[#65665e] wide:text-[18px] max-desktop:text-[13px] max-tablet:mt-[25px] max-tablet:text-[14px]">
              A little obsessed with what comes next.
              <br />
              Very obsessed with making it real.
            </p>
            <a
              class="mt-6 inline-flex items-center gap-[35px] rounded-[2px] bg-ink px-5 py-[15px] text-[12px] text-paper transition-colors duration-200 hover:bg-accent wide:text-[14px] max-tablet:mt-[22px] max-tablet:px-[18px] max-tablet:py-[14px]"
              href="#work"
            >
              Step into my world <ArrowIcon direction="down-right" class="size-5" />
            </a>
          </div>
          <SignalSculpture />
        </div>
        <div class="flex justify-between border-t border-line pt-[19px] pb-[22px] text-[8px] text-[#6c6c64] max-tablet:gap-[15px] max-tablet:py-4 max-tablet:text-[7px] max-tablet:[&>span]:max-w-[170px] [&_a]:text-ink max-tablet:[&_a]:self-center max-tablet:[&_a]:whitespace-nowrap font-mono leading-[1.6] tracking-[.045em]">
          <span>HUMAN AMBITION. MACHINE POSSIBILITIES.</span>
          <a class="inline-flex items-center gap-[22px] max-tablet:gap-[9px]" href="#work">
            SCROLL TO EXPLORE <ArrowIcon direction="down" class="size-4" />
          </a>
        </div>
      </section>

      <div
        class="group/ticker relative overflow-hidden bg-accent py-[17px] text-ink max-tablet:py-[14px]"
        data-paused={tickerPaused()}
        aria-label="Agents, infrastructure, first principles, and unreasonable ambition"
      >
        <div
          class="flex w-max animate-marquee group-data-[paused=true]/ticker:[animation-play-state:paused]"
          aria-hidden="true"
        >
          <For each={[0, 1]}>
            {() => (
              <div class="flex items-center gap-8 pr-8 max-tablet:gap-[23px] max-tablet:pr-[23px] [&>span]:text-[17px] [&>span]:font-bold [&>span]:tracking-[-.02em] [&>span]:whitespace-nowrap max-tablet:[&>span]:text-[14px] [&_svg]:size-[19px] max-tablet:[&_svg]:size-4">
                <span>AGENTS</span>
                <Star />
                <span>INFRASTRUCTURE</span>
                <Star />
                <span>FIRST PRINCIPLES</span>
                <Star />
                <span>UNREASONABLE AMBITION</span>
                <Star />
              </div>
            )}
          </For>
        </div>
        <button
          class="absolute inset-y-0 right-0 w-10 border-l border-ink/20 bg-accent text-[12px] focus-visible:outline-ink focus-visible:-outline-offset-[5px]"
          type="button"
          aria-label={tickerPaused() ? "Resume scrolling topics" : "Pause scrolling topics"}
          aria-pressed={tickerPaused()}
          onClick={() => setTickerPaused(!tickerPaused())}
        >
          {tickerPaused() ? "▶" : "Ⅱ"}
        </button>
      </div>

      <section class="pt-[108px] pb-[104px] max-tablet:py-[70px]" aria-labelledby="work-heading">
        <div id="work" tabIndex={-1} class="page-shell outline-none">
          <div class="mb-11 flex items-end justify-between gap-6 max-tablet:mb-8 max-tablet:block reveal">
            <div>
              <p class="text-[10px] tracking-[.065em] max-tablet:text-[9px] font-mono leading-[1.6]">
                01 / THINGS I’M PUTTING INTO THE WORLD
              </p>
              <h2
                id="work-heading"
                class="mt-5 text-[64px] leading-none font-[650] tracking-[-.055em] max-desktop:text-[58px] max-tablet:mt-4 max-tablet:text-[57px] max-phone:text-[52px] [&>span]:text-[1.12em]"
              >
                Big ideas.
                <br />
                <span class="font-editorial font-normal italic tracking-[-.04em]">
                  Actual things.
                </span>
              </h2>
            </div>
            <p class="pb-[7px] text-[13px] leading-[1.8] text-[#77766d] max-tablet:mt-[23px] max-tablet:text-[12px]">
              Somewhere between “what if” and “it works.”
              <br />A few pieces of the future I’m building.
            </p>
          </div>
          <Toolbox />
        </div>
      </section>

      <section
        class="border-y border-[#dedbd0] bg-[#eae8e0] pt-[108px] pb-[104px] max-tablet:py-[70px]"
        aria-labelledby="about-heading"
      >
        <div id="about" tabIndex={-1} class="page-shell outline-none">
          <div class="grid grid-cols-[1fr_1.48fr] gap-[60px] max-desktop:grid-cols-[1fr_1.55fr] max-desktop:gap-[35px] max-tablet:grid-cols-1 max-tablet:gap-[30px] reveal">
            <div class="flex flex-col justify-between max-tablet:flex-row max-tablet:items-start [&>p]:max-w-[220px] [&>p]:leading-[1.8] max-tablet:[&>p]:max-w-[180px]">
              <p class="text-[10px] tracking-[.065em] max-tablet:text-[9px] font-mono leading-[1.6]">
                02 / THE PERSON BEHIND THE PULL REQUESTS
              </p>
              <div
                class="relative mt-[55px] flex flex-col items-start gap-[25px] max-tablet:m-0 max-tablet:gap-0 [&_svg]:size-[143px] [&_svg]:text-accent max-tablet:[&_svg]:size-[47px] [&>span]:text-[8px] [&>span]:text-[#77766d] max-tablet:[&>span]:hidden"
                aria-hidden="true"
              >
                <Star />
                <span class="font-mono leading-[1.6] tracking-[.045em] text-[10px]">
                  PERPETUALLY
                  <br />
                  UNDER CONSTRUCTION
                </span>
              </div>
            </div>
            <div>
              <h2
                id="about-heading"
                class="text-[58px] leading-[1.03] font-[550] tracking-[-.055em] max-desktop:text-[50px] max-tablet:text-[52px] max-phone:text-[46px] [&>span]:text-[1.17em]"
              >
                Not here to
                <br />
                predict the future.
                <br />
                <span class="font-editorial font-normal italic tracking-[-.04em]">
                  Here to build it.
                </span>
              </h2>
              <div class="mt-[30px] max-w-[480px] text-[14px] leading-[1.9] text-[#6d6d63] max-desktop:text-[13px] max-tablet:mt-[26px] max-tablet:text-[14px] [&>p+p]:mt-4">
                <p>
                  I’m dawnwin7. I work where AI agents, software, and ambitious ideas meet. From the
                  product you touch to the infrastructure you never see, I like getting the whole
                  thing to work.
                </p>
                <p>
                  I’m drawn to the spaces between things. Between one agent and another. Between
                  identity and trust. Between a wild idea and the first version that actually ships.
                </p>
                <p class="font-semibold text-ink">Less hand-waving. More hands on.</p>
              </div>
            </div>
          </div>
          <div class="mt-[75px] grid grid-cols-3 gap-10 border-t border-[#c9c8bb] pt-[31px] max-desktop:gap-[30px] max-tablet:mt-10 max-tablet:grid-cols-1 max-tablet:gap-[27px] max-tablet:pt-[27px] max-tablet:[&>article]:grid max-tablet:[&>article]:grid-cols-[45px_1fr] max-tablet:[&>article]:gap-x-3 [&_h3]:mt-[18px] [&_h3]:text-[21px] [&_h3]:font-[550] [&_h3]:tracking-[-.04em] max-tablet:[&_h3]:m-0 [&_p]:mt-2.5 [&_p]:max-w-[290px] [&_p]:text-[12px] [&_p]:leading-[1.8] [&_p]:text-[#757467] max-tablet:[&_p]:col-start-2 max-tablet:[&_p]:mt-2 max-tablet:[&_p]:max-w-full reveal">
            <For
              each={[
                [
                  "01",
                  "Question the default.",
                  "Start with first principles. The way it’s always been done is a starting point, not an answer.",
                ],
                [
                  "02",
                  "Connect the dots.",
                  "The interesting things happen at the edges—where tools, people, and ideas meet.",
                ],
                [
                  "03",
                  "Make it real.",
                  "An idea gets a lot more interesting when you can use it. Build, learn, and keep going.",
                ],
              ]}
            >
              {(principle) => (
                <article>
                  <span class="text-[9px] text-[#818074] max-tablet:pt-[5px] font-mono leading-[1.6] tracking-[.045em]">
                    {principle[0]} /
                  </span>
                  <h3>{principle[1]}</h3>
                  <p>{principle[2]}</p>
                </article>
              )}
            </For>
          </div>
        </div>
      </section>

      <section
        class="grid grid-cols-[1fr_1.5fr] items-start gap-x-[50px] gap-y-6 py-14 max-desktop:grid-cols-[1fr_1.55fr] max-desktop:gap-x-[35px] max-tablet:block max-tablet:py-10 [&>p]:pt-[9px] [&>p]:text-[9px] page-shell reveal"
        aria-label="Current interests"
      >
        <p class="text-[10px] tracking-[.065em] max-tablet:text-[9px] font-mono leading-[1.6]">
          <span class="status-dot mr-2 inline-block size-1.5 rounded-full bg-accent align-middle" />{" "}
          RIGHT NOW, ON MY MIND
        </p>
        <div class="flex flex-wrap gap-[9px] max-tablet:mt-[22px] max-tablet:gap-2 [&>span]:rounded-[30px] [&>span]:border [&>span]:border-[#d6d1c4] [&>span]:px-[13px] [&>span]:py-2 [&>span]:text-[11px] [&>span]:whitespace-nowrap max-tablet:[&>span]:px-[11px] max-tablet:[&>span]:py-[7px] max-tablet:[&>span]:text-[10px]">
          <span>Agents that collaborate</span>
          <span>Identity that travels</span>
          <span>Systems that hold up</span>
          <span>What comes after the interface?</span>
        </div>
        <span class="col-start-2 -mt-[7px] text-[7px] text-[#817b6e] max-tablet:mt-[17px] max-tablet:block font-mono leading-[1.6] tracking-[.045em]">
          THE LIST IS NEVER FINISHED.
        </span>
      </section>
      <section
        class="bg-accent pt-[37px] pb-[45px] max-tablet:pt-[29px] max-tablet:pb-[31px]"
        aria-labelledby="contact-heading"
      >
        <div id="connect" tabIndex={-1} class="page-shell outline-none">
          <div class="flex justify-between pb-[42px] text-[8px] max-tablet:pb-9 max-tablet:text-[7px] max-tablet:[&>span:last-child]:hidden font-mono leading-[1.6] tracking-[.045em]">
            <span>03 / THIS IS WHERE SOMETHING STARTS</span>
            <span>GOOD THINGS BEGIN WITH A CONNECTION.</span>
          </div>
          <div class="flex items-center justify-between gap-10 max-tablet:items-start max-tablet:gap-[7px]">
            <h2
              id="contact-heading"
              class="text-[clamp(70px,9.4vw,140px)] leading-[.95] font-[750] tracking-[-.07em] max-desktop:text-[9.8vw] max-tablet:text-[clamp(47px,11.8vw,83px)] max-phone:text-[12.4vw] [&>span]:text-[1.14em]"
            >
              LET’S MAKE
              <br />
              <span class="font-editorial font-normal italic tracking-[-.04em]">what’s next.</span>
            </h2>
            <div
              class="relative flex size-[clamp(130px,17vw,230px)] shrink-0 -rotate-[12deg] items-center justify-center rounded-full border border-ink/40 max-tablet:mt-1 max-tablet:size-[21vw] max-phone:size-[20vw]"
              aria-hidden="true"
            >
              <span class="absolute top-[13%] font-mono text-[clamp(7px,.7vw,10px)] tracking-[.24em] max-tablet:hidden">
                ALWAYS
              </span>
              <Star class="size-[50%]" />
              <span class="absolute bottom-[13%] font-mono text-[clamp(7px,.7vw,10px)] tracking-[.24em] max-tablet:hidden">
                MAKING
              </span>
            </div>
          </div>
        </div>
      </section>
      <footer class="flex items-center justify-between gap-5 py-[33px] max-tablet:flex-wrap max-tablet:py-[25px] [&>p]:text-[7px] [&>p]:text-[#7f7b70] max-tablet:[&>p]:order-3 max-tablet:[&>p]:basis-full max-tablet:[&>p]:text-center page-shell">
        <a
          href="#top"
          aria-label="dawnwin7, back to top"
          class="text-[28px] leading-none font-[850] tracking-[-2px] max-tablet:text-[26px]"
        >
          dawnwin7<span class="text-accent">.</span>
        </a>
        <p class="font-mono leading-[1.6] tracking-[.045em] text-[10px]">
          BUILT WITH INTENTION. ALWAYS IN BETA.
        </p>
        <a
          class="inline-flex items-center gap-3 text-[8px] font-mono leading-[1.6] tracking-[.045em]"
          href="#top"
        >
          BACK TO TOP <ArrowIcon direction="up" class="size-4" />
        </a>
      </footer>
    </main>
  );
}
