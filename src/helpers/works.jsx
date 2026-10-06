import mainer from "../assets/previews/mainer.webp";
import caucasync from "../assets/previews/caucasync.webp";
import parfume from "../assets/previews/parfume.webp";
import galeon from "../assets/previews/galeon.webp";
import hjem from "../assets/previews/hjem.webp";
import qulp from "../assets/previews/qulp.webp";
import damai from "../assets/previews/damai.webp";
import barshop from "../assets/previews/barshop.webp";
import epromo from "../assets/previews/epromo.webp";
import sigorta from "../assets/previews/sigorta.webp";
import baharatci from "../assets/previews/baharatci.webp";
import cosmopark from "../assets/previews/cosmopark.webp";
import workr from "../assets/previews/workr.webp";
import azer from "../assets/previews/azer.webp";
import sssystem from "../assets/previews/sssystem.webp";
import berbershop from "../assets/previews/berbershop.webp";

// `color` is the backdrop of the hover preview; `image` is a top-fold screenshot (optional)
export const projects = [
  { name: "Mainer", url: "https://mainer.az/az", image: mainer, color: "#E8EEF8" },
  { name: "Caucasync", url: "https://caucasync.com/en", image: caucasync, color: "#E3EBDD" },
  { name: "Parfume", url: "https://parfumedeparis.az/az", image: parfume, color: "#3B2A4A" },
  { name: "Hjem", url: "https://hjem-store.vercel.app/", image: hjem, color: "#EFE9E1" },
  { name: "Qulp", url: "https://qulp.vercel.app/", image: qulp, color: "#0A1A33" },
  { name: "Damai", url: "https://hotel-damai.vercel.app/", image: damai, color: "#3A3328" },
  { name: "Galeon", url: "https://galeon.az/az", image: galeon, color: "#E6E3F4" },
  { name: "Barshop", url: "https://barshop-clone.vercel.app/", image: barshop, color: "#2B2522" },
  { name: "ePROMO", url: "https://epromo.az", image: epromo, color: "#FDEBD8" },
  { name: "1sigorta.az", url: "https://1sigorta.az/", image: sigorta, color: "#D8DDE6" },
  { name: "Baharatci", url: "https://baharatci-clone.vercel.app/", image: baharatci, color: "#EFE4D4" },
  { name: "GN Traffic", url: "https://v2.gntraffic.dev", color: "#1F2A44" },
  { name: "Cosmopark", url: "https://cosmo-parkme.vercel.app/", image: cosmopark, color: "#D9F1F5" },
  { name: "Workr", url: "https://yusifsworkr.vercel.app/", image: workr, color: "#E4E7EC" },
  { name: "Mi'esta", url: "https://method.kon.az/", color: "#C9B8A6" },
  { name: "Action", url: null, color: "#B9C3CF" },
  { name: "Azer Tech", url: "https://azer-tech-clone.vercel.app/", image: azer, color: "#3A3F47" },
  { name: "SS System", url: "https://www.smartsistem.az/", image: sssystem, color: "#D6E2F0" },
  { name: "Berber.Shop", url: "https://berbershop.az/", image: berbershop, color: "#2F2A26" },
];

export const domainOf = (url) => (url ? url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "") : "Private project");
