import { createSignal, onCleanup, onMount } from "solid-js";
import { RemixIcon } from "./Icons";

const modes = ["CONNECTED INTELLIGENCE", "A WORLD OF POSSIBILITIES", "BEAUTIFULLY INTERTWINED"];

export default function SignalSculpture() {
  let canvas!: HTMLCanvasElement;
  let stage!: HTMLDivElement;
  const [mode, setMode] = createSignal(0);
  const [paused, setPaused] = createSignal(false);

  onMount(() => {
    const context = canvas.getContext("2d");
    if (!context) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = true;
    let width = 0;
    let height = 0;
    let rotation = 0.45;
    let lastTime = 0;
    let animationFrame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let easedX = 0;
    let easedY = 0;
    const slices = 170;
    const sides = 14;
    const resize = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width;
      height = entry.contentRect.height;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    });
    resize.observe(stage);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
    });
    observer.observe(stage);
    const move = (event: PointerEvent) => {
      const bounds = stage.getBoundingClientRect();
      pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
      pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;
    };
    const reset = () => {
      pointerX = 0;
      pointerY = 0;
    };
    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerleave", reset);
    const draw = (time: number) => {
      const delta = Math.min(time - lastTime, 40);
      lastTime = time;
      animationFrame = requestAnimationFrame(draw);
      if (!inView || !width) return;
      const motion = !reducedMotion.matches && !paused();
      if (motion) rotation += delta * 0.000085;
      easedX += ((motion ? pointerX : 0) - easedX) * 0.045;
      easedY += ((motion ? pointerY : 0) - easedY) * 0.045;
      context.clearRect(0, 0, width, height);
      const scale = Math.min(width, height) * 0.155;
      const angleY = rotation + easedX * 0.8;
      const angleX = -0.4 + easedY * 0.6;
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const points: { x: number; y: number; z: number }[] = [];
      for (let i = 0; i < slices; i++) {
        const u = (i / slices) * Math.PI * 2;
        for (let j = 0; j < sides; j++) {
          const v = (j / sides) * Math.PI * 2;
          let x: number;
          let y: number;
          let z: number;
          if (mode() === 1) {
            const latitude = (j / (sides - 1)) * Math.PI;
            const radius = 2.35 + 0.12 * Math.sin(u * 6 + latitude * 8);
            x = radius * Math.sin(latitude) * Math.cos(u);
            y = radius * Math.cos(latitude);
            z = radius * Math.sin(latitude) * Math.sin(u);
          } else {
            const twists = mode() === 2 ? 2 : 3;
            const radius = 1.65 + 0.64 * Math.cos(twists * u);
            const tube = 0.32;
            x = (radius + tube * Math.cos(v)) * Math.cos(2 * u);
            y = (radius + tube * Math.cos(v)) * Math.sin(2 * u);
            z = 0.82 * Math.sin(twists * u) + tube * Math.sin(v);
          }
          const rotatedX = x * cosY + z * sinY;
          const rotatedZ = -x * sinY + z * cosY;
          const rotatedY = y * cosX - rotatedZ * sinX;
          const depth = y * sinX + rotatedZ * cosX;
          const perspective = 8 / (8 - depth);
          points.push({
            x: width / 2 + rotatedX * scale * perspective,
            y: height / 2 + rotatedY * scale * perspective,
            z: depth,
          });
        }
      }
      context.lineWidth = 0.65;
      for (let i = 0; i < slices; i++) {
        for (let j = 0; j < sides; j++) {
          const point = points[i * sides + j];
          const next = points[((i + 1) % slices) * sides + j];
          const across = points[i * sides + ((j + 1) % sides)];
          const opacity = Math.max(0.07, Math.min(0.68, (point.z + 2.8) / 7));
          context.strokeStyle = `rgba(239, 75, 26, ${opacity})`;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(next.x, next.y);
          context.moveTo(point.x, point.y);
          context.lineTo(across.x, across.y);
          context.stroke();
          if (i % 13 === 0 && j % 3 === 0) {
            context.fillStyle = `rgba(229, 64, 15, ${opacity + 0.2})`;
            context.beginPath();
            context.arc(point.x, point.y, point.z > 0 ? 2.2 : 1.3, 0, Math.PI * 2);
            context.fill();
          }
        }
      }
    };
    animationFrame = requestAnimationFrame(draw);
    onCleanup(() => {
      cancelAnimationFrame(animationFrame);
      resize.disconnect();
      observer.disconnect();
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerleave", reset);
    });
  });

  return (
    <div
      class="relative mt-[5px] flex min-w-0 flex-col self-stretch max-tablet:mx-auto max-tablet:mt-9 max-tablet:w-full max-tablet:max-w-[520px]"
      id="playground"
    >
      <div class="flex justify-between pt-[5px] pl-[26px] text-[8px] text-[#77766d] max-desktop:pl-[10px] max-tablet:pl-0 max-phone:text-[7px] [&_.status-dot]:size-1 font-mono leading-[1.6] tracking-[.045em]">
        <span>
          <span class="status-dot mr-2 inline-block size-1.5 rounded-full bg-accent align-middle" />{" "}
          A SMALL EXPERIMENT
        </span>
        <span>FIG. 00{mode() + 1}</span>
      </div>
      <div
        class="relative isolate min-h-[400px] flex-1 wide:min-h-[510px] max-desktop:min-h-[350px] max-tablet:min-h-[390px] max-phone:min-h-[340px] max-small:min-h-[290px] [&_canvas]:absolute [&_canvas]:inset-0 [&_canvas]:z-2 [&_canvas]:size-full"
        ref={(element) => {
          stage = element;
        }}
      >
        <div class="pointer-events-none absolute top-1/2 left-1/2 aspect-square -translate-1/2 rounded-full border border-[#dcd8ca] opacity-70 w-[92%] border-dashed" />
        <div class="pointer-events-none absolute top-1/2 left-1/2 aspect-square -translate-1/2 rounded-full border border-[#dcd8ca] opacity-70 w-[67%]" />
        <span class="absolute font-mono text-[15px] text-[#a8a396] top-[20%] left-[4%]">+</span>
        <span class="absolute font-mono text-[15px] text-[#a8a396] right-[2%] bottom-[20%]">+</span>
        <canvas
          ref={(element) => {
            canvas = element;
          }}
          aria-label="An animated orange wireframe sculpture representing connected systems"
          role="img"
        />
        <span class="absolute top-1/2 -right-[17px] -translate-y-1/2 text-[7px] tracking-[.13em] text-[#8e897c] [writing-mode:vertical-rl] max-tablet:-right-2 font-mono leading-[1.6]">
          HUMAN × MACHINE
        </span>
      </div>
      <div class="mb-1.5 ml-[26px] flex items-center justify-between max-desktop:ml-[10px] max-desktop:gap-2 max-tablet:m-0 [&>p]:text-[8px] [&>p]:text-[#7e7b70] max-desktop:[&>p]:text-[6px] max-tablet:[&>p]:text-[8px] max-phone:[&>p]:text-[7px] max-small:[&>p]:text-[6px]">
        <p class="font-mono leading-[1.6] tracking-[.045em] text-[10px]" aria-live="polite">
          0{mode() + 1} / {modes[mode()]}
        </p>
        <div class="flex items-center gap-3">
          <button
            type="button"
            class="min-w-7 bg-transparent p-[7px] text-[11px]"
            onClick={() => setPaused(!paused())}
            aria-label={paused() ? "Resume sculpture animation" : "Pause sculpture animation"}
            aria-pressed={paused()}
          >
            {paused() ? "▶" : "Ⅱ"}
          </button>
          <button
            type="button"
            class="group/remix flex items-center gap-3 rounded-[2px] border border-[#d5cfc1] bg-transparent px-[11px] py-[7px] text-[8px] hover:bg-[#e9e4d8] font-mono leading-[1.6] tracking-[.045em]"
            onClick={() => setMode((mode() + 1) % modes.length)}
          >
            REMIX{" "}
            <RemixIcon class="size-4 transition-transform duration-300 group-hover/remix:rotate-[60deg]" />
          </button>
        </div>
      </div>
    </div>
  );
}
