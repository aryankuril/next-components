"use client";

import { useEffect } from "react";


export default function Blackhole() {
  useEffect(() => {
    const container = document.querySelector("#blackhole") as HTMLElement | null;
    if (!container) return;

    const h = container.offsetHeight;
    const w = container.offsetWidth;
    const cw = w;
    const ch = h;
    const maxorbit = 255;
    const centery = ch / 2;
    const centerx = cw / 2;
    const startTime = new Date().getTime();
    let currentTime = 0;
    const stars: any[] = [];
    let collapse = false;
    let expanse = false;
    let returning = false;

    const canvas = document.createElement("canvas");
    canvas.width = cw;
    canvas.height = ch;
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "0";
    canvas.style.pointerEvents = "none";
    container.insertBefore(canvas, container.firstChild);

    const context = canvas.getContext("2d");
    if (!context) return;
    context.globalCompositeOperation = "multiply";

    function setDPI(canvas: HTMLCanvasElement, dpi: number) {
      if (!canvas.style.width) canvas.style.width = canvas.width + "px";
      if (!canvas.style.height) canvas.style.height = canvas.height + "px";
      const scaleFactor = dpi / 96;
      canvas.width = Math.ceil(canvas.width * scaleFactor);
      canvas.height = Math.ceil(canvas.height * scaleFactor);
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(scaleFactor, scaleFactor);
    }

    function rotate(
      cx: number,
      cy: number,
      x: number,
      y: number,
      angle: number
    ): [number, number] {
      const radians = angle;
      const cos = Math.cos(radians);
      const sin = Math.sin(radians);
      const nx = cos * (x - cx) + sin * (y - cy) + cx;
      const ny = cos * (y - cy) - sin * (x - cx) + cy;
      return [nx, ny];
    }

    setDPI(canvas, 192);

    class Star {
      orbital: number;
      x: number;
      y: number;
      yOrigin: number;
      speed: number;
      rotation: number;
      startRotation: number;
      id: number;
      collapseBonus: number;
      color: string;
      hoverPos: number;
      expansePos: number;
      prevR: number;
      prevX: number;
      prevY: number;
      originalY: number;

      constructor() {
        const rands = [];
        rands.push(Math.random() * (maxorbit / 2) + 1);
        rands.push(Math.random() * (maxorbit / 2) + maxorbit);
        this.orbital = rands.reduce((p, c) => p + c, 0) / rands.length;
        this.x = centerx;
        this.y = centery + this.orbital;
        this.yOrigin = centery + this.orbital;
        this.speed = (Math.floor(Math.random() * 2.5) + 1.5) * Math.PI / 180;
        this.rotation = 0;
        this.startRotation = (Math.floor(Math.random() * 360) + 1) * Math.PI / 180;
        this.id = stars.length;
        this.collapseBonus = Math.max(0, this.orbital - maxorbit * 0.7);
        this.color = `rgba(255,255,255,${1 - this.orbital / 255})`;
        this.hoverPos = centery + maxorbit / 2 + this.collapseBonus;
        this.expansePos = centery + (this.id % 100) * -10 + Math.floor(Math.random() * 20 + 1);
        this.prevR = this.startRotation;
        this.prevX = this.x;
        this.prevY = this.y;
        this.originalY = this.yOrigin;
        stars.push(this);
      }

      draw() {
        if (!context) return;

        if (!expanse && !returning) {
          this.rotation = this.startRotation + currentTime * this.speed;
          if (!collapse) {
            if (this.y > this.yOrigin) this.y -= 2.5;
            if (this.y < this.yOrigin - 4) this.y += (this.yOrigin - this.y) / 10;
          } else {
            if (this.y > this.hoverPos) this.y -= (this.hoverPos - this.y) / -5;
            if (this.y < this.hoverPos - 4) this.y += 2.5;
          }
        } else if (expanse && !returning) {
          this.rotation = this.startRotation + currentTime * (this.speed / 2);
          if (this.y > this.expansePos) this.y -= (this.expansePos - this.y) / -80;
        } else if (returning) {
          this.rotation = this.startRotation + currentTime * this.speed;
          if (Math.abs(this.y - this.originalY) > 2) {
            this.y += (this.originalY - this.y) / 50;
          } else {
            this.y = this.originalY;
            this.yOrigin = this.originalY;
          }
        }

        context.save();
        context.fillStyle = this.color;
        context.strokeStyle = this.color;
        context.beginPath();
        const oldPos = rotate(centerx, centery, this.prevX, this.prevY, -this.prevR);
        context.moveTo(oldPos[0], oldPos[1]);
        context.translate(centerx, centery);
        context.rotate(this.rotation);
        context.translate(-centerx, -centery);
        context.lineTo(this.x, this.y);
        context.stroke();
        context.restore();

        this.prevR = this.rotation;
        this.prevX = this.x;
        this.prevY = this.y;
      }
    }

    const centerHover = document.querySelector(".centerHover") as HTMLElement | null;
    if (!centerHover) return;

    centerHover.addEventListener("click", () => {
      collapse = false;
      expanse = true;
      returning = false;
      centerHover.classList.add("open");
      container.classList.add("activated");
      document.body.classList.add("blackhole-active");

      setTimeout(() => {
        expanse = false;
        returning = true;
        setTimeout(() => {
          returning = false;
          centerHover.classList.remove("open");
          container.classList.remove("activated");
          document.body.classList.remove("blackhole-active");
        }, 8000);
      }, 25000);
    });

    centerHover.addEventListener("mouseover", () => {
      if (!expanse) collapse = true;
    });

    centerHover.addEventListener("mouseout", () => {
      if (!expanse) collapse = false;
    });

    function loop() {
      if (!context) return;
      const now = new Date().getTime();
      currentTime = (now - startTime) / 50;
      context.fillStyle = "rgba(25,25,25,0.2)";
      context.fillRect(0, 0, cw, ch);
      for (let i = 0; i < stars.length; i++) {
        if (stars[i]) stars[i].draw();
      }
      requestAnimationFrame(loop);
    }

    function init() {
      if (!context) return;
      context.fillStyle = "rgba(25,25,25,1)";
      context.fillRect(0, 0, cw, ch);
      for (let i = 0; i < 2500; i++) new Star();
      loop();
    }

    init();
  }, []);

  return (
    <div id="blackhole" className="h-screen w-screen relative overflow-hidden bg-[#191919] transition-all duration-1000">
      <div className="centerHover pointer-events-auto rounded-full w-[255px] h-[255px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[10] cursor-pointer text-center leading-[255px] transition-all">
        <span className="text-[#666] font-serif text-[18px] relative transition-all before:inline-block before:h-[1px] before:w-4 before:mr-3 before:mb-1 before:bg-[#666] after:inline-block after:h-[1px] after:w-4 after:ml-3 after:mb-1 after:bg-[#666] top-25 ml-35">
          ENTER
        </span>
      </div>
    </div>
  );
}
