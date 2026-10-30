import { For } from "solid-js";
import { ArrowIcon } from "./Icons";

const tools = [
  {
    name: "Codex",
    role: "AI CODING",
    description: "A little extra intelligence.",
    href: "https://openai.com/codex/",
    image: "/tools/codex.svg",
    surface: "bg-[#262b24] text-[#f4f3eb] border-[#262b24] hover:bg-[#30372b]",
    icon: "size-[62px] invert max-tablet:size-[48px]",
    detail: "text-[#bec6b5]",
  },
  {
    name: "Docker",
    role: "CONTAINERS",
    description: "Ready to run. Anywhere.",
    href: "https://www.docker.com/",
    image: "/tools/docker.svg",
    surface: "bg-[#eef2ed] text-[#242d21] border-[#f8faf4] hover:bg-[#f8faf4]",
    icon: "w-[81px] h-[62px] max-tablet:w-[66px] max-tablet:h-[48px]",
    detail: "text-[#64705e]",
  },
  {
    name: "JetBrains",
    role: "DEVELOPMENT",
    description: "Room to think in code.",
    href: "https://www.jetbrains.com/",
    image: "/tools/jetbrains.svg",
    surface: "bg-[#f4f1e8] text-[#242d21] border-[#fffdf6] hover:bg-[#fffdf6]",
    icon: "size-[68px] max-tablet:size-[54px]",
    detail: "text-[#6e7164]",
  },
  {
    name: "Ghostty",
    role: "TERMINAL",
    description: "Straight into the flow.",
    href: "https://ghostty.org/",
    image: "/tools/ghostty.png",
    surface: "bg-[#e9eee2] text-[#242d21] border-[#f6f9ee] hover:bg-[#f6f9ee]",
    icon: "size-[78px] max-tablet:size-[64px]",
    detail: "text-[#64705e]",
  },
];

export default function Toolbox() {
  return (
    <article class="w-full text-left reveal" aria-labelledby="tools-title">
      <div class="relative isolate grid grid-cols-[.82fr_1.18fr] items-stretch gap-[7%] overflow-hidden rounded-[3px] bg-[#e3e7dc] p-12 text-[#283124] max-desktop:gap-7 max-desktop:p-8 max-tablet:grid-cols-1 max-tablet:gap-8 max-tablet:p-6 max-phone:gap-7 max-phone:p-5">
        <div
          class="pointer-events-none absolute inset-0 -z-1 bg-network-grid bg-[size:32px_32px] opacity-80 [mask-image:linear-gradient(100deg,transparent_10%,black)]"
          aria-hidden="true"
        />
        <div class="flex min-w-0 flex-col items-start justify-between max-tablet:gap-5">
          <span class="inline-flex items-center gap-2.5 font-mono text-[9px] leading-relaxed tracking-[.08em] text-[#5e6c53] max-phone:text-[8px]">
            <span class="size-1.5 rounded-full bg-[#536b43]" aria-hidden="true" />
            THE DAILY SETUP
          </span>
          <div class="py-10 max-tablet:py-0">
            <p class="text-[clamp(40px,4.3vw,68px)] leading-[1.04] font-[550] tracking-[-.065em] max-tablet:text-[48px] max-phone:text-[41px]">
              Less friction.
              <br />
              <span class="font-editorial text-[1.11em] font-normal italic tracking-[-.045em] text-[#60714f]">
                More making.
              </span>
            </p>
            <p class="mt-6 max-w-[240px] text-[13px] leading-[1.8] text-[#64705c] max-tablet:mt-4 max-tablet:max-w-[330px] max-tablet:text-[12px]">
              A few well-chosen tools.
              <br class="max-tablet:hidden" /> A lot of room for what comes next.
            </p>
          </div>
          <div class="flex w-full items-center gap-4 font-mono text-[8px] tracking-[.06em] text-[#5e6c53] max-tablet:hidden">
            <span class="whitespace-nowrap">CHOSEN WITH INTENTION</span>
            <span class="h-px flex-1 bg-[#bcc6b2]" aria-hidden="true" />
            <span>01—04</span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3.5 max-phone:gap-2.5">
          <For each={tools}>
            {(tool, index) => (
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${tool.name} website (opens in a new tab)`}
                class={`group/tool relative flex min-h-[211px] min-w-0 flex-col rounded-[10px] border p-[22px] shadow-[0_2px_3px_#34402b05,0_10px_24px_-14px_#34402b30] transition-[background-color,box-shadow] duration-300 hover:shadow-[0_3px_5px_#34402b08,0_12px_25px_-10px_#34402b40] focus-visible:outline-offset-4 max-desktop:min-h-[190px] max-desktop:p-[18px] max-tablet:min-h-[190px] max-phone:min-h-[181px] max-phone:p-[15px] max-small:p-3 ${tool.surface}`}
              >
                <div
                  class={`flex items-center justify-between gap-2 font-mono text-[8px] leading-[1.4] tracking-[.06em] max-phone:text-[7px] ${tool.detail}`}
                >
                  <span>{tool.role}</span>
                  <span class="opacity-70">0{index() + 1}</span>
                </div>
                <div
                  class="flex h-[108px] items-center max-desktop:h-[94px] max-tablet:h-[90px] max-phone:h-[84px]"
                  aria-hidden="true"
                >
                  <img
                    src={tool.image}
                    alt=""
                    width="80"
                    height="80"
                    loading="lazy"
                    class={`object-contain object-left transition-transform duration-400 group-hover/tool:-translate-y-1 group-focus-visible/tool:-translate-y-1 ${tool.icon}`}
                  />
                </div>
                <div class="mt-auto flex items-center justify-between gap-2 max-small:gap-1">
                  <span class="text-[23px] leading-[1.2] font-semibold tracking-[-.045em] max-desktop:text-[21px] max-phone:text-[19px] max-small:text-base">
                    {tool.name}
                  </span>
                  <ArrowIcon class="size-[19px] opacity-50 transition-[opacity,transform] duration-300 group-hover/tool:translate-x-0.5 group-hover/tool:-translate-y-0.5 group-hover/tool:opacity-100 group-focus-visible/tool:opacity-100 max-phone:size-[17px] max-small:size-3.5" />
                </div>
                <span
                  class={`mt-1.5 text-[11px] leading-[1.5] tracking-[-.01em] max-phone:text-[10px] ${tool.detail}`}
                >
                  {tool.description}
                </span>
              </a>
            )}
          </For>
        </div>
      </div>
      <div class="flex justify-between gap-[15px] pt-[21px] max-tablet:flex-wrap max-tablet:gap-[5px] max-tablet:pt-[17px]">
        <div>
          <h3
            id="tools-title"
            class="text-[23px] font-semibold tracking-[-.045em] max-tablet:text-[22px]"
          >
            Tools
          </h3>
          <p class="mt-[5px] text-[12px] leading-[1.6] text-[#7b7a71] max-tablet:text-[11px]">
            Because the best ideas don’t work alone.
          </p>
        </div>
        <span class="pt-[9px] text-right font-mono text-[7px] leading-[1.6] tracking-[.045em] text-[#6b6a60] max-desktop:text-[6px] max-tablet:text-[7px]">
          DEVELOPER TOOLS
        </span>
      </div>
    </article>
  );
}
