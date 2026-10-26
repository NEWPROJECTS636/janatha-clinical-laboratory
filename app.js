/**
 * JANATHA CLINICAL LABORATORY - APPLICATION LOGIC
 * Comprehensive Diagnostic Portal for Malebennur (577530)
 * 13 Diagnostic Test Sections + Full Body Health Checkup Packages
 */

// 1. Clinical Diagnostic Sections (1 to 14)
const SECTIONS = [
  {
    id: "hematology",
    num: 1,
    name: "1. Complete Blood Count & Routine Hematology",
    shortName: "Hematology / CBC",
    badge: "18 Tests",
    desc: "Hemoglobin, platelets, cell counts, anemia markers, and coagulation profiles.",
    color: "#E53935",
    iconSvg: `<svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="bloodGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#FF7A7A"/>
          <stop offset="60%" stop-color="#E53935"/>
          <stop offset="100%" stop-color="#B71C1C"/>
        </radialGradient>
      </defs>
      <path d="M24 7C24 7 13 21 13 29C13 35.07 17.93 40 24 40C30.07 40 35 35.07 35 29C35 21 24 7 24 7Z" fill="url(#bloodGrad)"/>
      <path d="M19 23C17.5 26 17.5 29 19 32" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
      <circle cx="37" cy="35" r="2.5" fill="#E53935" opacity="0.8"/>
      <circle cx="34" cy="39" r="1.5" fill="#E53935" opacity="0.6"/>
    </svg>`
  },
  {
    id: "diabetes",
    num: 2,
    name: "2. Blood Sugar & Diabetes",
    shortName: "Blood Sugar & Diabetes",
    badge: "9 Tests",
    desc: "Glucose tracking, 90-day HbA1c average, insulin sensitivity, and diabetic kidney risk markers.",
    color: "#F26D00",
    iconSvg: `<svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" fill="#FFF4EC" stroke="#F26D00" stroke-width="2.5"/>
      <path d="M16 24H32M24 16V32" stroke="#F26D00" stroke-width="3" stroke-linecap="round"/>
      <circle cx="24" cy="24" r="5" fill="#F26D00"/>
    </svg>`
  },
  {
    id: "lft",
    num: 3,
    name: "3. Liver Function Tests (LFT)",
    shortName: "Liver Function (LFT)",
    badge: "12 Tests",
    desc: "Hepatic enzymes, jaundice screening, bilirubin fractions, and liver protein synthesis.",
    color: "#8D6E63",
    iconSvg: `<svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="liverGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#D7CCC8"/>
          <stop offset="50%" stop-color="#A1887F"/>
          <stop offset="100%" stop-color="#5D4037"/>
        </radialGradient>
      </defs>
      <path d="M12 21C12 16 18 14 28 15C36 16 39 20 38 26C37 31 32 34 22 33C15 32 12 27 12 21Z" fill="url(#liverGrad)"/>
      <ellipse cx="26" cy="29" rx="2.5" ry="3.5" fill="#81C784"/>
      <path d="M16 19C21 17 29 18 34 21" stroke="#FFFFFF" stroke-width="1.2" opacity="0.4" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "kft",
    num: 4,
    name: "4. Kidney Function Tests (KFT / RFT)",
    shortName: "Kidney Function (KFT)",
    badge: "13 Tests",
    desc: "Glomerular filtration, creatinine clearance, blood urea nitrogen, and electrolyte balance.",
    color: "#1976D2",
    iconSvg: `<svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <path d="M17 14C13 18 13 26 17 31C20 34 24 35 27 33C29 31 29 28 27 26C25 24 24 21 26 18C28 15 26 12 23 12C20 12 18 13 17 14Z" fill="#E3F2FD" stroke="#1976D2" stroke-width="2.2"/>
      <path d="M31 14C35 18 35 26 31 31C28 34 24 35 21 33C19 31 19 28 21 26C23 24 24 21 22 18C20 15 22 12 25 12C28 12 30 13 31 14Z" fill="#BBDEFB" stroke="#1976D2" stroke-width="2.2"/>
    </svg>`
  },
  {
    id: "cardiac",
    num: 5,
    name: "5. Lipid Profile & Cardiac Tests",
    shortName: "Lipid & Cardiac",
    badge: "17 Tests",
    desc: "Cardiovascular health, bad and good cholesterol, cardiac enzymes, troponin, and arterial risk.",
    color: "#E53935",
    iconSvg: `<svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="heartGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#FF8A80"/>
          <stop offset="50%" stop-color="#E53935"/>
          <stop offset="100%" stop-color="#880E4F"/>
        </radialGradient>
      </defs>
      <path d="M21 9V16" stroke="#90A4AE" stroke-width="3" stroke-linecap="round"/>
      <path d="M26 8V15" stroke="#E53935" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M20 16C15 16 12 21 14 27C16 33 22 38 25 40C26 39 33 32 35 25C37 19 33 15 28 16C26 16.5 24 18 24 18C24 18 22 16 20 16Z" fill="url(#heartGrad)"/>
      <path d="M22 22C24 26 23 30 25 34" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
    </svg>`
  },
  {
    id: "thyroid",
    num: 6,
    name: "6. Thyroid Profile",
    shortName: "Thyroid Profile",
    badge: "9 Tests",
    desc: "T3, T4, ultra-sensitive TSH, free hormone fractions, and thyroid autoantibodies.",
    color: "#D32F2F",
    iconSvg: `<svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <rect x="22" y="8" width="4" height="28" rx="2" fill="#CFD8DC"/>
      <line x1="21" y1="13" x2="27" y2="13" stroke="#90A4AE" stroke-width="1.5"/>
      <line x1="21" y1="18" x2="27" y2="18" stroke="#90A4AE" stroke-width="1.5"/>
      <path d="M22 23C19 19 11 17 10 24C9 31 16 34 20 31C21 30 22 26 22 23Z" fill="#EF9A9A"/>
      <path d="M26 23C29 19 37 17 38 24C39 31 32 34 28 31C27 30 26 26 26 23Z" fill="#E57373"/>
      <path d="M20 26C24 28 24 28 28 26" stroke="#D32F2F" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "vitamins",
    num: 7,
    name: "7. Vitamins & Iron Profile",
    shortName: "Vitamins & Iron",
    badge: "11 Tests",
    desc: "Vitamin D3, B12, iron stores, ferritin, and essential micronutrient deficiencies.",
    color: "#FB8C00",
    iconSvg: `<svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="pillRed" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FF6B6B"/>
          <stop offset="100%" stop-color="#D32F2F"/>
        </linearGradient>
        <linearGradient id="pillWhite" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="#E2E8F0"/>
        </linearGradient>
      </defs>
      <g transform="rotate(-45 24 24)">
        <path d="M17 12C17 8.69 19.69 6 23 6H25C28.31 6 31 8.69 31 12V24H17V12Z" fill="url(#pillRed)"/>
        <path d="M17 24H31V36C31 39.31 28.31 42 25 42H23C19.69 42 17 39.31 17 36V24Z" fill="url(#pillWhite)"/>
        <line x1="17" y1="24" x2="31" y2="24" stroke="#CBD5E1" stroke-width="1.5"/>
      </g>
    </svg>`
  },
  {
    id: "hormones",
    num: 8,
    name: "8. Hormones & Reproductive Tests",
    shortName: "Hormones & Fertility",
    badge: "17 Tests",
    desc: "Reproductive hormones, testosterone, fertility markers (AMH), cortisol, and prostate PSA.",
    color: "#C2185B",
    iconSvg: `<svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <polygon points="18,16 26,16 30,23 26,30 18,30 14,23" stroke="#E57373" stroke-width="2.5" fill="none"/>
      <polygon points="26,16 34,16 38,23 34,30 26,30 22,23" stroke="#EF5350" stroke-width="2.5" fill="none" opacity="0.6"/>
      <circle cx="18" cy="16" r="2.5" fill="#C62828"/>
      <circle cx="26" cy="16" r="2.5" fill="#C62828"/>
      <circle cx="34" cy="16" r="2.5" fill="#C62828"/>
    </svg>`
  },
  {
    id: "infection",
    num: 9,
    name: "9. Infection, Serology & Immunology",
    shortName: "Infection & Immunity",
    badge: "18 Tests",
    desc: "Viral fevers, dengue, typhoid (Widal), malaria, autoimmune markers, and hepatitis screening.",
    color: "#EF6C00",
    iconSvg: `<svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="14" fill="#FFE0B2" stroke="#FB8C00" stroke-width="2.5"/>
      <path d="M24 10V14M24 34V38M10 24H14M34 24H38M14 14L17 17M31 31L34 34M14 34L17 31M31 17L34 14" stroke="#E65100" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="24" cy="24" r="5" fill="#EF6C00"/>
    </svg>`
  },
  {
    id: "urine",
    num: 10,
    name: "10. Urine Tests",
    shortName: "Urine Tests",
    badge: "12 Tests",
    desc: "Routine analysis, microscopy, pregnancy test, proteinuria, and urine culture sensitivity.",
    color: "#FBC02D",
    iconSvg: `<svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <path d="M16 10H32V14H30V34C30 37.3 27.3 40 24 40C20.7 40 18 37.3 18 34V14H16V10Z" fill="#FFF9C4" stroke="#FBC02D" stroke-width="2.5"/>
      <path d="M19 26C21 28 27 28 29 26V34C29 36.8 26.8 39 24 39C21.2 39 19 36.8 19 34V26Z" fill="#FDD835"/>
      <line x1="21" y1="18" x2="27" y2="18" stroke="#F57F17" stroke-width="1.5"/>
    </svg>`
  },
  {
    id: "stool",
    num: 11,
    name: "11. Stool Tests",
    shortName: "Stool Tests",
    badge: "7 Tests",
    desc: "Gastrointestinal health, occult blood screening, calprotectin, and pathogen detection.",
    color: "#795548",
    iconSvg: `<svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <path d="M14 34C14 37 17 39 24 39C31 39 34 37 34 34C34 31 30 30 28 28C26 26 29 23 29 20C29 17 26 15 24 15C22 15 19 17 19 20C19 23 22 26 20 28C18 30 14 31 14 34Z" fill="#D7CCC8" stroke="#795548" stroke-width="2.5"/>
    </svg>`
  },
  {
    id: "biochemistry",
    num: 12,
    name: "12. Enzymes & Special Biochemistry",
    shortName: "Enzymes & Biochem",
    badge: "8 Tests",
    desc: "Pancreatic enzymes (amylase, lipase), lactate, serum osmolality, and essential trace minerals.",
    color: "#8E24AA",
    iconSvg: `<svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <path d="M18 10H30V16L24 24L18 16V10Z" fill="#E1BEE7" stroke="#8E24AA" stroke-width="2"/>
      <path d="M24 24L32 36C33 37.5 32 40 30 40H18C16 40 15 37.5 16 36L24 24Z" fill="#CE93D8" stroke="#8E24AA" stroke-width="2"/>
      <circle cx="24" cy="33" r="2.5" fill="#4A148C"/>
    </svg>`
  },
  {
    id: "microbiology",
    num: 13,
    name: "13. Microbiology & Culture Tests",
    shortName: "Microbiology & Cultures",
    badge: "9 Tests",
    desc: "Sterile blood cultures, sputum, pus swab analysis, Gram stain, and fungal identification.",
    color: "#2E7D32",
    iconSvg: `<svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="16" fill="#C8E6C9" stroke="#388E3C" stroke-width="2.5"/>
      <circle cx="19" cy="20" r="3" fill="#2E7D32"/>
      <circle cx="28" cy="22" r="4" fill="#1B5E20"/>
      <circle cx="22" cy="29" r="2" fill="#43A047"/>
    </svg>`
  },
  {
    id: "checkups",
    num: 14,
    name: "14. Health Checkup Packages",
    shortName: "Full Body Checkups",
    badge: "19 Packages",
    desc: "Curated preventive health packages, full-body wellness, and organ-specific checkups.",
    color: "#F26D00",
    iconSvg: `<svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="10" width="32" height="30" rx="6" fill="#FFF3E0" stroke="#F26D00" stroke-width="2.5"/>
      <path d="M16 22H32M16 28H28M16 34H24" stroke="#F26D00" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="34" cy="18" r="5" fill="#0E9F6E"/>
      <path d="M32 18L33.5 19.5L36 17" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`
  }
];




// 2. Specialty Carousel Categories
// The first ten entries mirror the supplied medical-category reference. The
// remaining current departments continue after them in the horizontal rail.
const referenceSectionIcons = {
  hematology: `<svg width="58" height="58" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <defs><linearGradient id="bloodDrop" x1="18" y1="10" x2="46" y2="54" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF"/><stop offset=".62" stop-color="#E9E9E6"/><stop offset="1" stop-color="#BDBDB9"/></linearGradient></defs>
    <path d="M32 8C32 8 17 29 17 40.5C17 49.6 23.7 56 32 56C40.3 56 47 49.6 47 40.5C47 29 32 8 32 8Z" fill="url(#bloodDrop)"/>
    <path d="M24 41C24.5 45 27 47 30 48" stroke="#EF776A" stroke-width="3" stroke-linecap="round"/>
    <circle cx="49" cy="48" r="3.5" fill="#D4D4D0"/><circle cx="54" cy="53" r="2" fill="#D4D4D0"/>
  </svg>`,
  vitamins: `<svg width="58" height="58" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <defs><linearGradient id="pillRed" x1="23" y1="17" x2="44" y2="42" gradientUnits="userSpaceOnUse"><stop stop-color="#E89279"/><stop offset="1" stop-color="#A84736"/></linearGradient><linearGradient id="pillWhite" x1="18" y1="31" x2="37" y2="53" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF"/><stop offset="1" stop-color="#D8D8D5"/></linearGradient></defs>
    <g transform="rotate(42 32 32)"><rect x="22" y="11" width="20" height="42" rx="10" fill="url(#pillWhite)"/><path d="M22 21C22 15.5 26.5 11 32 11H32C37.5 11 42 15.5 42 21V32H22V21Z" fill="url(#pillRed)"/><path d="M22 32H42" stroke="#D0D0CB" stroke-width="1.5"/></g>
  </svg>`,
  cardiac: `<svg width="58" height="58" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <defs><linearGradient id="heartRed" x1="23" y1="17" x2="45" y2="52" gradientUnits="userSpaceOnUse"><stop stop-color="#E98A79"/><stop offset="1" stop-color="#A9433E"/></linearGradient></defs>
    <path d="M30 18C25 12 16 15 16 23C16 34 28 45 33 51C38 45 50 34 50 23C50 15 41 12 36 18L33 22L30 18Z" fill="url(#heartRed)"/>
    <path d="M33 20V11M37 18V9M28 14V9" stroke="#A6544D" stroke-width="3" stroke-linecap="round"/><path d="M36 32C40 28 42 24 42 20" stroke="#F1B2A5" stroke-width="2" stroke-linecap="round" opacity=".7"/>
  </svg>`,
  thyroid: `<svg width="58" height="58" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <defs><linearGradient id="thyroidGray" x1="19" y1="19" x2="48" y2="47" gradientUnits="userSpaceOnUse"><stop stop-color="#F6F6F3"/><stop offset="1" stop-color="#A7A7A3"/></linearGradient></defs>
    <rect x="30" y="10" width="4" height="33" rx="2" fill="#C6C6C2"/><path d="M30 24C24 18 14 20 14 29C14 39 22 46 29 42C31 40 31 30 30 24Z" fill="url(#thyroidGray)"/><path d="M34 24C40 18 50 20 50 29C50 39 42 46 35 42C33 40 33 30 34 24Z" fill="url(#thyroidGray)"/><path d="M27 39C31 42 33 42 37 39" stroke="#C1766B" stroke-width="4" stroke-linecap="round"/>
  </svg>`,
  lft: `<svg width="58" height="58" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <defs><linearGradient id="liverSoft" x1="14" y1="18" x2="50" y2="50" gradientUnits="userSpaceOnUse"><stop stop-color="#F0EEEA"/><stop offset="1" stop-color="#ABA9A5"/></linearGradient></defs>
    <path d="M11 31C13 20 23 16 36 18C45 19 52 24 52 32C52 41 43 48 31 48H20C13 48 9 41 11 31Z" fill="url(#liverSoft)"/><path d="M18 27C27 24 37 25 47 29" stroke="#D0A092" stroke-width="2" stroke-linecap="round" opacity=".75"/><path d="M27 45C32 39 34 34 34 27" stroke="#BBB9B4" stroke-width="2" opacity=".5"/>
  </svg>`,
  infection: `<svg width="58" height="58" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <defs><linearGradient id="jointBone" x1="24" y1="12" x2="43" y2="52" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF"/><stop offset="1" stop-color="#B6B6B3"/></linearGradient></defs>
    <path d="M27 10C22 16 24 23 29 28L35 34C39 38 40 45 36 52" stroke="url(#jointBone)" stroke-width="10" stroke-linecap="round"/><path d="M43 11C48 17 46 24 41 29L35 35C31 39 30 46 34 53" stroke="#AFAFAD" stroke-width="10" stroke-linecap="round"/><path d="M18 22C14 26 14 36 18 40M46 22C50 26 50 36 46 40" stroke="#D38D80" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  stool: `<svg width="58" height="58" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <defs><linearGradient id="gutWhite" x1="17" y1="13" x2="50" y2="53" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF"/><stop offset="1" stop-color="#AAAAA6"/></linearGradient></defs>
    <path d="M18 17C14 22 18 27 24 27H40C46 27 50 32 46 37C43 41 32 38 25 38C19 38 17 44 21 48C25 52 37 52 42 48" stroke="url(#gutWhite)" stroke-width="8" stroke-linecap="round"/><path d="M22 19H43M22 30H43M23 41H41" stroke="#C58476" stroke-width="2" stroke-linecap="round" opacity=".8"/>
  </svg>`,
  biochemistry: `<svg width="58" height="58" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <defs><linearGradient id="bowl" x1="15" y1="28" x2="49" y2="53" gradientUnits="userSpaceOnUse"><stop stop-color="#F9F8F3"/><stop offset="1" stop-color="#B7B5AE"/></linearGradient></defs>
    <path d="M14 31C15 44 23 51 32 51C41 51 49 44 50 31H14Z" fill="url(#bowl)"/><path d="M14 31C20 27 27 30 32 27C38 24 42 28 50 31" stroke="#C77968" stroke-width="2.5" stroke-linecap="round"/><path d="M23 28C19 23 20 18 24 15M40 28C44 22 43 17 39 14" stroke="#C77968" stroke-width="3" stroke-linecap="round"/><circle cx="25" cy="18" r="4" fill="#D88A72"/><circle cx="40" cy="15" r="4" fill="#D88A72"/>
  </svg>`,
  checkups: `<svg width="58" height="58" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <defs><linearGradient id="arm" x1="18" y1="16" x2="46" y2="49" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFF"/><stop offset="1" stop-color="#A7A7A3"/></linearGradient></defs>
    <path d="M17 47C23 48 28 45 30 40L33 32C35 27 39 25 43 27C48 29 49 35 45 38L39 42C36 44 35 48 38 51" stroke="url(#arm)" stroke-width="10" stroke-linecap="round"/><path d="M32 34C37 37 40 39 45 38" stroke="#C37A6D" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,
  hormones: `<svg width="58" height="58" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <path d="M14 23L22 18L30 23L30 33L22 38L14 33V23Z" stroke="#C37D70" stroke-width="3"/><path d="M36 13L44 8L52 13V23L44 28L36 23V13Z" stroke="#C37D70" stroke-width="3"/><path d="M36 39L44 34L52 39V49L44 54L36 49V39Z" stroke="#D9A59A" stroke-width="3"/><path d="M30 27L36 20M29 34L36 43" stroke="#C37D70" stroke-width="3" stroke-linecap="round"/><circle cx="22" cy="28" r="3" fill="#E2B0A5"/><circle cx="44" cy="18" r="3" fill="#D48879"/><circle cx="44" cy="44" r="3" fill="#D48879"/>
  </svg>`
};

// Alternate realistic icon family: richer anatomical silhouettes with soft
// volume and coral clinical accents, used by the visible reference rail.
const alternateSectionIcons = {
  hematology: `<img class="specialty-logo-image" src="blood-logo.png" alt="" aria-hidden="true">`,
  vitamins: `<img class="specialty-logo-image" src="vitamin-logo.png" alt="" aria-hidden="true">`,
  cardiac: `<img class="specialty-logo-image" src="heart-logo.png" alt="" aria-hidden="true">`,
  thyroid: `<img class="specialty-logo-image" src="thyroid-logo.png" alt="" aria-hidden="true">`,
  lft: `<img class="specialty-logo-image" src="liver-logo.png" alt="" aria-hidden="true">`,
  infection: `<img class="specialty-logo-image" src="inflammation-logo.png" alt="" aria-hidden="true">`,
  stool: `<img class="specialty-logo-image" src="gut-logo.png" alt="" aria-hidden="true">`,
  biochemistry: `<img class="specialty-logo-image" src="nutrition-logo.png" alt="" aria-hidden="true">`,
  checkups: `<img class="specialty-logo-image" src="recovery-logo.png" alt="" aria-hidden="true">`,
  hormones: `<svg width="58" height="58" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <defs><radialGradient id="realMolecule" cx="28%" cy="20%" r="90%"><stop stop-color="#F2C0B4"/><stop offset="1" stop-color="#B8655A"/></radialGradient></defs>
    <path d="M14 24L22 19L30 24V34L22 39L14 34V24ZM36 14L44 9L52 14V24L44 29L36 24V14ZM36 40L44 35L52 40V50L44 55L36 50V40Z" stroke="#C77D70" stroke-width="3"/><path d="M30 29L36 21M30 36L36 44" stroke="#B96F64" stroke-width="3" stroke-linecap="round"/><circle cx="22" cy="29" r="4" fill="url(#realMolecule)"/><circle cx="44" cy="19" r="4" fill="url(#realMolecule)"/><circle cx="44" cy="45" r="4" fill="url(#realMolecule)"/>
  </svg>`
};

const referenceSpecialtyOrder = [
  ["hematology", "Blood"],
  ["vitamins", "Vitamins"],
  ["cardiac", "Heart"],
  ["thyroid", "Thyroid"],
  ["lft", "Liver"],
  ["infection", "Inflammation"],
  ["stool", "Gut"],
  ["biochemistry", "Nutrition"],
  ["checkups", "Recovery"],
  ["hormones", "Hormonal"]
];

const sectionById = Object.fromEntries(SECTIONS.map(sec => [sec.id, sec]));
const referenceIds = new Set(referenceSpecialtyOrder.map(([id]) => id));

const SPECIALTIES = [
  ...referenceSpecialtyOrder.map(([id, name]) => {
    const sec = sectionById[id];
    return { id, num: sec.num, name, fullName: sec.name, badge: sec.badge, desc: sec.desc, color: sec.color, svg: alternateSectionIcons[id] };
  }),
  ...SECTIONS.filter(sec => !referenceIds.has(sec.id)).map(sec => ({
    id: sec.id,
    num: sec.num,
    name: sec.shortName,
    fullName: sec.name,
    badge: sec.badge,
    desc: sec.desc,
    color: sec.color,
    svg: sec.iconSvg
  }))
];

// 3. Complete Diagnostic & Checkup Catalog (181 Tests & Packages)
const CATALOG = [
  {
    "id": "test-cbc",
    "type": "test",
    "section": "hematology",
    "name": "CBC",
    "fullName": "Complete Blood Count (CBC)",
    "parameters": 24,
    "reportTime": "6 to 10 hours",
    "price": 250,
    "mrp": 350,
    "discount": "29% Off",
    "summary": "Essential screening for infections, anemia, platelets, white cells, and general immune response.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Hemoglobin",
      "Platelets",
      "WBC",
      "RBC",
      "ESR",
      "DLC"
    ]
  },
  {
    "id": "test-complete-haemogram",
    "type": "test",
    "section": "hematology",
    "name": "Complete Haemogram",
    "fullName": "Complete Haemogram with Smear",
    "parameters": 26,
    "reportTime": "6 to 10 hours",
    "price": 250,
    "mrp": 380,
    "discount": "34% Off",
    "summary": "Comprehensive red, white blood cell and platelet counts combined with peripheral smear evaluation.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "CBC (24)",
      "Peripheral Smear",
      "Platelet Estimation"
    ]
  },
  {
    "id": "test-hb",
    "type": "test",
    "section": "hematology",
    "name": "Haemoglobin (Hb)",
    "fullName": "Haemoglobin (Hb)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 200,
    "discount": "25% Off",
    "summary": "Accurate blood hemoglobin concentration measurement for diagnosing anemia and oxygen transport capacity.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Cyanmethemoglobin",
      "Anemia Triage"
    ]
  },
  {
    "id": "test-wbc",
    "type": "test",
    "section": "hematology",
    "name": "Total WBC Count",
    "fullName": "Total White Blood Cell Count (TLC)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 200,
    "mrp": 280,
    "discount": "29% Off",
    "summary": "Measures total circulating leukocytes to detect bacterial infections, leukocytosis, and immunity status.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Leukocytes",
      "Infection Marker"
    ]
  },
  {
    "id": "test-dlc",
    "type": "test",
    "section": "hematology",
    "name": "Differential Count (DLC)",
    "fullName": "Differential Leukocyte Count (DLC)",
    "parameters": 5,
    "reportTime": "4 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Percentage breakdown of neutrophils, lymphocytes, eosinophils, monocytes, and basophils.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Neutrophils",
      "Lymphocytes",
      "Eosinophils",
      "Monocytes",
      "Basophils"
    ]
  },
  {
    "id": "test-platelet",
    "type": "test",
    "section": "hematology",
    "name": "Platelet Count",
    "fullName": "Platelet Count (Thrombocytes)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Crucial blood clotting cell evaluation, especially critical in dengue, viral fevers, and bleeding disorders.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Platelet Count",
      "Dengue Monitoring",
      "Hemostasis"
    ]
  },
  {
    "id": "test-esr",
    "type": "test",
    "section": "hematology",
    "name": "ESR",
    "fullName": "Erythrocyte Sedimentation Rate (ESR)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Westergren method measurement of red cell sedimentation indicating systemic or chronic inflammation.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Westergren Method",
      "Inflammation Index"
    ]
  },
  {
    "id": "test-pcv",
    "type": "test",
    "section": "hematology",
    "name": "PCV / Hematocrit",
    "fullName": "Packed Cell Volume (PCV / Hematocrit)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Percentage of whole blood volume made up of red blood cells; tracks hemoconcentration and severe dehydration.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Hematocrit %",
      "Hemoconcentration"
    ]
  },
  {
    "id": "test-pbs",
    "type": "test",
    "section": "hematology",
    "name": "Peripheral Blood Smear (PBS)",
    "fullName": "Peripheral Blood Smear Examination",
    "parameters": 4,
    "reportTime": "6 to 10 hours",
    "price": 200,
    "mrp": 300,
    "discount": "33% Off",
    "summary": "Expert microscopic examination of RBC size/shape, WBC maturation, and abnormal immature cells.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "RBC Morphology",
      "WBC Maturity",
      "Platelet Smear"
    ]
  },
  {
    "id": "test-aec",
    "type": "test",
    "section": "hematology",
    "name": "Absolute Eosinophil Count (AEC)",
    "fullName": "Absolute Eosinophil Count (AEC)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "Detects allergic reactions, bronchial asthma, skin allergies, and intestinal parasite infestations.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Allergy Triage",
      "Asthma Biomarker"
    ]
  },
  {
    "id": "test-reticulocyte",
    "type": "test",
    "section": "hematology",
    "name": "Reticulocyte Count",
    "fullName": "Reticulocyte Count (Immature RBCs)",
    "parameters": 2,
    "reportTime": "6 to 10 hours",
    "price": 200,
    "mrp": 300,
    "discount": "33% Off",
    "summary": "Assesses bone marrow RBC generation rate; helpful in anemia diagnosis and post-hemorrhage recovery.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Reticulocyte %",
      "Bone Marrow Activity"
    ]
  },
  {
    "id": "test-rbc-count",
    "type": "test",
    "section": "hematology",
    "name": "RBC Count",
    "fullName": "Total Red Blood Cell Count",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Quantitative calculation of circulating erythrocytes responsible for lung-to-tissue oxygenation.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Total Erythrocytes",
      "Oxygen Capacity"
    ]
  },
  {
    "id": "test-bt-ct",
    "type": "test",
    "section": "hematology",
    "name": "BT / CT",
    "fullName": "Bleeding Time & Clotting Time",
    "parameters": 2,
    "reportTime": "2 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "Pre-operative evaluation of vascular platelet plug formation and fibrin mesh clotting time.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Duke's Bleeding Time",
      "Capillary Clotting Time"
    ]
  },
  {
    "id": "test-pt-inr",
    "type": "test",
    "section": "hematology",
    "name": "PT / INR",
    "fullName": "Prothrombin Time & INR",
    "parameters": 3,
    "reportTime": "6 to 10 hours",
    "price": 300,
    "mrp": 450,
    "discount": "33% Off",
    "summary": "Measures extrinsic coagulation cascade; essential for liver disease monitoring and blood-thinner safety.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Prothrombin Time",
      "INR Ratio",
      "Warfarin Monitoring"
    ]
  },
  {
    "id": "test-aptt",
    "type": "test",
    "section": "hematology",
    "name": "APTT",
    "fullName": "Activated Partial Thromboplastin Time",
    "parameters": 2,
    "reportTime": "6 to 10 hours",
    "price": 400,
    "mrp": 600,
    "discount": "33% Off",
    "summary": "Screens intrinsic and common coagulation pathways; tracks heparin therapy and hemophilia disorders.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "APTT Seconds",
      "Ratio Control",
      "Coagulation Factor"
    ]
  },
  {
    "id": "test-blood-group",
    "type": "test",
    "section": "hematology",
    "name": "Blood Group & Rh",
    "fullName": "ABO Grouping & Rh Factor",
    "parameters": 2,
    "reportTime": "2 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Determines blood type (A, B, AB, O) and Rh factor (Positive / Negative) with a clear laboratory result card.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "ABO System",
      "Rh Antigen D"
    ]
  },
  {
    "id": "test-sickling",
    "type": "test",
    "section": "hematology",
    "name": "Sickling Test",
    "fullName": "Sickle Cell Screening Test",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 250,
    "mrp": 350,
    "discount": "29% Off",
    "summary": "Detects presence of Hemoglobin S causing abnormal sickle-shaped red blood cells under low oxygen.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Sodium Metabisulfite",
      "HbS Sickle Cell"
    ]
  },
  {
    "id": "test-g6pd",
    "type": "test",
    "section": "hematology",
    "name": "G6PD",
    "fullName": "Glucose-6-Phosphate Dehydrogenase Quantitative",
    "parameters": 1,
    "reportTime": "8 hours",
    "price": 500,
    "mrp": 750,
    "discount": "33% Off",
    "summary": "Enzyme assay diagnosing inherited deficiency causing acute hemolytic anemia following certain drugs or foods.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "G6PD Enzyme Activity",
      "Hemolysis Prevention"
    ]
  },
  {
    "id": "test-fbs",
    "type": "test",
    "section": "diabetes",
    "name": "Fasting Blood Sugar (FBS)",
    "fullName": "Fasting Blood Sugar (FBS)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 50,
    "mrp": 80,
    "discount": "38% Off",
    "summary": "Foundational diabetes test measuring glucose levels after 8 to 10 hours of overnight fasting.",
    "fasting": "8-10 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Fasting Plasma Glucose",
      "Diabetes Screen"
    ]
  },
  {
    "id": "test-rbs",
    "type": "test",
    "section": "diabetes",
    "name": "Random Blood Sugar (RBS)",
    "fullName": "Random Blood Sugar (RBS)",
    "parameters": 1,
    "reportTime": "2 hours",
    "price": 50,
    "mrp": 80,
    "discount": "38% Off",
    "summary": "Instant glucose measurement taken at any time of day to identify hypoglycemia or acute hyperglycemia.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Random Glucose",
      "Instant Results"
    ]
  },
  {
    "id": "test-ppbs",
    "type": "test",
    "section": "diabetes",
    "name": "Postprandial Blood Sugar (PPBS)",
    "fullName": "Postprandial Blood Sugar (PPBS)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 60,
    "mrp": 90,
    "discount": "33% Off",
    "summary": "Evaluates the body's insulin response and post-meal glucose clearance exactly 2 hours after a meal.",
    "fasting": "Sample 2 hrs After Meal",
    "sampleType": "Blood",
    "chips": [
      "Post-Meal Glucose",
      "Insulin Spike Control"
    ]
  },
  {
    "id": "test-hba1c",
    "type": "test",
    "section": "diabetes",
    "name": "HbA1c",
    "fullName": "HbA1c (Glycosylated Hemoglobin)",
    "parameters": 2,
    "reportTime": "6 to 10 hours",
    "price": 450,
    "mrp": 650,
    "discount": "31% Off",
    "summary": "Gold standard diagnostic test tracking 90-day average blood glucose and diabetic regulation.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "HbA1c %",
      "Estimated Average Glucose (eAG)"
    ]
  },
  {
    "id": "test-gtt",
    "type": "test",
    "section": "diabetes",
    "name": "Glucose Tolerance Test (GTT)",
    "fullName": "Oral Glucose Tolerance Test (OGTT)",
    "parameters": 3,
    "reportTime": "8 hours",
    "price": 300,
    "mrp": 450,
    "discount": "33% Off",
    "summary": "Serial glucose draws following a standardized 75g oral glucose drink; screens gestational diabetes.",
    "fasting": "Overnight Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Fasting",
      "1-Hour",
      "2-Hour Post Load"
    ]
  },
  {
    "id": "test-urine-sugar",
    "type": "test",
    "section": "diabetes",
    "name": "Urine Sugar",
    "fullName": "Urine Glucose (Benedict's / Strip)",
    "parameters": 1,
    "reportTime": "2 hours",
    "price": 50,
    "mrp": 80,
    "discount": "38% Off",
    "summary": "Screens for glycosuria occurring when blood sugar surpasses the physiological renal threshold.",
    "fasting": "No Fasting Required",
    "sampleType": "Urine",
    "chips": [
      "Urine Glucose",
      "Renal Threshold"
    ]
  },
  {
    "id": "test-microalbumin-urine",
    "type": "test",
    "section": "diabetes",
    "name": "Microalbumin Urine",
    "fullName": "Microalbuminuria Quantitative Urine",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 350,
    "mrp": 500,
    "discount": "30% Off",
    "summary": "Detects trace amounts of albumin leakage to catch diabetic kidney damage before clinical symptoms emerge.",
    "fasting": "Morning Urine Preferred",
    "sampleType": "Urine",
    "chips": [
      "Trace Albumin",
      "Early Nephropathy"
    ]
  },
  {
    "id": "test-urine-acr",
    "type": "test",
    "section": "diabetes",
    "name": "Urine ACR",
    "fullName": "Urine Albumin-to-Creatinine Ratio (ACR)",
    "parameters": 2,
    "reportTime": "6 to 10 hours",
    "price": 400,
    "mrp": 600,
    "discount": "33% Off",
    "summary": "Recommended clinical ratio correcting microalbumin for urine concentration on a single spot urine sample.",
    "fasting": "Spot Urine Sample",
    "sampleType": "Urine",
    "chips": [
      "Albumin/Creatinine",
      "Nephrology Guideline"
    ]
  },
  {
    "id": "test-fasting-insulin",
    "type": "test",
    "section": "diabetes",
    "name": "Fasting Insulin",
    "fullName": "Fasting Serum Insulin",
    "parameters": 1,
    "reportTime": "8 hours",
    "price": 600,
    "mrp": 900,
    "discount": "33% Off",
    "summary": "Measures baseline pancreatic insulin production; calculates insulin resistance (HOMA-IR) and PCOS risk.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Serum Insulin",
      "HOMA-IR Resistance"
    ]
  },
  {
    "id": "test-lft-profile",
    "type": "test",
    "section": "lft",
    "name": "LFT Profile",
    "fullName": "Liver Function Test Profile (Complete)",
    "parameters": 12,
    "reportTime": "6 to 10 hours",
    "price": 400,
    "mrp": 600,
    "discount": "33% Off",
    "summary": "Complete liver health panel including enzymes, jaundice bilirubin fractions, and protein balance.",
    "fasting": "8-10 hrs Fasting Recommended",
    "sampleType": "Blood",
    "chips": [
      "Bilirubin (T/D/I)",
      "SGOT/AST",
      "SGPT/ALT",
      "ALP",
      "Albumin",
      "A/G Ratio"
    ]
  },
  {
    "id": "test-total-bilirubin",
    "type": "test",
    "section": "lft",
    "name": "Total Bilirubin",
    "fullName": "Bilirubin Total",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Measures total yellow bile pigment in blood to evaluate clinical jaundice and liver metabolic load.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Jaundice Screening",
      "Bile Pigment"
    ]
  },
  {
    "id": "test-direct-bilirubin",
    "type": "test",
    "section": "lft",
    "name": "Direct Bilirubin",
    "fullName": "Direct / Conjugated Bilirubin",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Water-soluble conjugated bilirubin; elevated levels indicate gallstones or biliary tract obstruction.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Conjugated Bilirubin",
      "Biliary Tract"
    ]
  },
  {
    "id": "test-indirect-bilirubin",
    "type": "test",
    "section": "lft",
    "name": "Indirect Bilirubin",
    "fullName": "Indirect / Unconjugated Bilirubin",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Calculated unconjugated bilirubin, diagnosing excessive red cell breakdown and Gilbert's syndrome.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Unconjugated Fraction",
      "Hemolysis Marker"
    ]
  },
  {
    "id": "test-sgot-ast",
    "type": "test",
    "section": "lft",
    "name": "SGOT / AST",
    "fullName": "Aspartate Aminotransferase (SGOT / AST)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 120,
    "mrp": 180,
    "discount": "33% Off",
    "summary": "Intracellular enzyme found in liver, heart, and muscle cells; elevated in hepatitis and muscle injury.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "SGOT / AST",
      "Cellular Injury"
    ]
  },
  {
    "id": "test-sgpt-alt",
    "type": "test",
    "section": "lft",
    "name": "SGPT / ALT",
    "fullName": "Alanine Aminotransferase (SGPT / ALT)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 120,
    "mrp": 180,
    "discount": "33% Off",
    "summary": "Most specific liver biomarker; sensitive to acute liver inflammation, fatty liver, and drug toxicity.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "SGPT / ALT",
      "Fatty Liver Marker"
    ]
  },
  {
    "id": "test-alp",
    "type": "test",
    "section": "lft",
    "name": "Alkaline Phosphatase (ALP)",
    "fullName": "Serum Alkaline Phosphatase",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "Enzyme concentrated in liver bile ducts and growing bone tissue; diagnoses cholestasis and bone conditions.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "ALP Enzyme",
      "Biliary Drainage",
      "Bone Turnover"
    ]
  },
  {
    "id": "test-ggt",
    "type": "test",
    "section": "lft",
    "name": "GGT",
    "fullName": "Gamma-Glutamyl Transferase (GGT)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 200,
    "mrp": 300,
    "discount": "33% Off",
    "summary": "Highly sensitive marker of bile duct inflammation and alcohol-induced liver enzyme induction.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "GGT",
      "Bile Ducts",
      "Alcohol Sensitivity"
    ]
  },
  {
    "id": "test-total-protein",
    "type": "test",
    "section": "lft",
    "name": "Total Protein",
    "fullName": "Serum Total Protein",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 120,
    "mrp": 180,
    "discount": "33% Off",
    "summary": "Measures combined albumin and globulins; assesses malnutrition, chronic liver disease, and myeloma.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Total Protein",
      "Nutritional Reserve"
    ]
  },
  {
    "id": "test-serum-albumin",
    "type": "test",
    "section": "lft",
    "name": "Serum Albumin",
    "fullName": "Serum Albumin",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 120,
    "mrp": 180,
    "discount": "33% Off",
    "summary": "Main circulating protein synthesized by the liver; prevents fluid swelling (edema) in limbs and abdomen.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Serum Albumin",
      "Liver Synthetic Function"
    ]
  },
  {
    "id": "test-globulin",
    "type": "test",
    "section": "lft",
    "name": "Globulin",
    "fullName": "Serum Globulin",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 120,
    "mrp": 180,
    "discount": "33% Off",
    "summary": "Calculated protein fraction reflecting immunoglobulins, antibodies, and systemic immune activation.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Serum Globulins",
      "Immune Defense"
    ]
  },
  {
    "id": "test-ag-ratio",
    "type": "test",
    "section": "lft",
    "name": "A/G Ratio",
    "fullName": "Albumin to Globulin Ratio",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Clinical balance ratio between albumin and globulin indicating liver synthetic strain or auto-antibodies.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "A/G Equilibrium",
      "Clinical Ratio"
    ]
  },
  {
    "id": "test-kft-profile",
    "type": "test",
    "section": "kft",
    "name": "KFT / RFT Profile",
    "fullName": "Kidney Function Test Profile (Complete)",
    "parameters": 10,
    "reportTime": "6 to 10 hours",
    "price": 400,
    "mrp": 600,
    "discount": "33% Off",
    "summary": "Complete renal health assessment covering filtration, creatinine, urea, uric acid, and electrolytes.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Creatinine",
      "Blood Urea",
      "BUN",
      "Uric Acid",
      "Electrolytes",
      "Calcium"
    ]
  },
  {
    "id": "test-serum-creatinine",
    "type": "test",
    "section": "kft",
    "name": "Serum Creatinine",
    "fullName": "Serum Creatinine",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "The single most reliable marker of nephron filtration rate and acute or chronic kidney performance.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Creatinine Clearance",
      "Renal Filtration"
    ]
  },
  {
    "id": "test-blood-urea",
    "type": "test",
    "section": "kft",
    "name": "Blood Urea",
    "fullName": "Blood Urea",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Main end-product of dietary protein breakdown excreted by kidneys; monitors renal clearance and hydration.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Urea Excretion",
      "Renal Clearance"
    ]
  },
  {
    "id": "test-bun",
    "type": "test",
    "section": "kft",
    "name": "BUN",
    "fullName": "Blood Urea Nitrogen (BUN)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "Measures nitrogen component of urea, providing high sensitivity for acute prerenal azotemia.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Urea Nitrogen",
      "Prerenal Azotemia"
    ]
  },
  {
    "id": "test-uric-acid",
    "type": "test",
    "section": "kft",
    "name": "Uric Acid",
    "fullName": "Serum Uric Acid",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "Purine metabolism marker; elevated levels cause painful gout arthritis and crystallization of kidney stones.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Gout Screening",
      "Joint Pain",
      "Urate Stones"
    ]
  },
  {
    "id": "test-serum-calcium",
    "type": "test",
    "section": "kft",
    "name": "Serum Calcium",
    "fullName": "Serum Calcium Total",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "Essential for healthy bones, neuromuscular signaling, cardiac rhythm, and parathyroid monitoring.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Total Calcium",
      "Bone Metabolism"
    ]
  },
  {
    "id": "test-serum-phosphorus",
    "type": "test",
    "section": "kft",
    "name": "Serum Phosphorus",
    "fullName": "Serum Inorganic Phosphorus",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "Mineral paired with calcium in bone matrix; monitored closely in renal osteodystrophy.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Inorganic Phosphate",
      "Bone & Kidney Balance"
    ]
  },
  {
    "id": "test-sodium",
    "type": "test",
    "section": "kft",
    "name": "Sodium",
    "fullName": "Serum Sodium (Na+)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 200,
    "mrp": 300,
    "discount": "33% Off",
    "summary": "Primary extracellular cation regulating osmotic blood volume, cellular hydration, and blood pressure.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Sodium Electrolyte",
      "Fluid Balance"
    ]
  },
  {
    "id": "test-potassium",
    "type": "test",
    "section": "kft",
    "name": "Potassium",
    "fullName": "Serum Potassium (K+)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 200,
    "mrp": 300,
    "discount": "33% Off",
    "summary": "Crucial intracellular mineral directly responsible for cardiac electrical impulses and rhythm stability.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Potassium Level",
      "Heart Rhythm Safety"
    ]
  },
  {
    "id": "test-chloride",
    "type": "test",
    "section": "kft",
    "name": "Chloride",
    "fullName": "Serum Chloride (Cl-)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 200,
    "mrp": 300,
    "discount": "33% Off",
    "summary": "Major extracellular anion maintaining systemic acid-base equilibrium and physiological hydration.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Chloride Ion",
      "Acid-Base Balance"
    ]
  },
  {
    "id": "test-electrolytes-profile",
    "type": "test",
    "section": "kft",
    "name": "Electrolytes Profile",
    "fullName": "Serum Electrolytes Profile (Na, K, Cl)",
    "parameters": 3,
    "reportTime": "4 hours",
    "price": 350,
    "mrp": 500,
    "discount": "30% Off",
    "summary": "Triple ionic panel measuring Sodium, Potassium, and Chloride for hydration, fatigue, and recovery.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Sodium (Na)",
      "Potassium (K)",
      "Chloride (Cl)"
    ]
  },
  {
    "id": "test-egfr",
    "type": "test",
    "section": "kft",
    "name": "eGFR",
    "fullName": "Estimated Glomerular Filtration Rate (eGFR)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Accurate mathematical calculation classifying kidney disease staging according to KDIGO clinical criteria.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "KDIGO Staging",
      "Filtration Rate"
    ]
  },
  {
    "id": "test-creatinine-clearance",
    "type": "test",
    "section": "kft",
    "name": "Creatinine Clearance",
    "fullName": "Creatinine Clearance Rate (24-Hour)",
    "parameters": 3,
    "reportTime": "24 hours",
    "price": 400,
    "mrp": 600,
    "discount": "33% Off",
    "summary": "Gold standard physiological clearance comparison between 24-hour urine collection and blood creatinine.",
    "fasting": "24-Hr Urine + Blood Draw",
    "sampleType": "Blood & Urine",
    "chips": [
      "24-Hour Urine",
      "GFR Clearance Ratio"
    ]
  },
  {
    "id": "test-lipid-profile",
    "type": "test",
    "section": "cardiac",
    "name": "Lipid Profile",
    "fullName": "Lipid Profile (Complete Heart Risk Panel)",
    "parameters": 9,
    "reportTime": "6 to 10 hours",
    "price": 350,
    "mrp": 500,
    "discount": "30% Off",
    "summary": "Measures good (HDL) and bad (LDL) cholesterol, triglycerides, and atherogenic ratios.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Cholesterol",
      "HDL",
      "LDL",
      "Triglycerides",
      "VLDL",
      "Ratios"
    ]
  },
  {
    "id": "test-total-cholesterol",
    "type": "test",
    "section": "cardiac",
    "name": "Total Cholesterol",
    "fullName": "Serum Total Cholesterol",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 120,
    "mrp": 180,
    "discount": "33% Off",
    "summary": "Total blood cholesterol concentration; baseline screening for hypercholesterolemia.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Total Lipids",
      "Cardiovascular Screen"
    ]
  },
  {
    "id": "test-triglycerides",
    "type": "test",
    "section": "cardiac",
    "name": "Triglycerides",
    "fullName": "Serum Triglycerides",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "Circulating blood fats derived from diet and carbohydrates; high levels increase pancreatitis and heart risks.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Blood Fats",
      "Metabolic Marker"
    ]
  },
  {
    "id": "test-hdl",
    "type": "test",
    "section": "cardiac",
    "name": "HDL Cholesterol",
    "fullName": "High-Density Lipoprotein (HDL - Good Cholesterol)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "Protective cholesterol scavenger transporting excess arterial fat back to the liver for disposal.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Good Cholesterol",
      "Cardio-Protective"
    ]
  },
  {
    "id": "test-ldl",
    "type": "test",
    "section": "cardiac",
    "name": "LDL Cholesterol",
    "fullName": "Low-Density Lipoprotein (LDL - Bad Cholesterol)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "Primary culprit in coronary artery plaque formation, narrowing arteries and causing heart attacks.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Bad Cholesterol",
      "Plaque Risk"
    ]
  },
  {
    "id": "test-vldl",
    "type": "test",
    "section": "cardiac",
    "name": "VLDL Cholesterol",
    "fullName": "Very Low-Density Lipoprotein (VLDL)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "Very low density particles rich in triglycerides; synthesized by liver to distribute energy to tissues.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "VLDL Particles",
      "Liver Lipids"
    ]
  },
  {
    "id": "test-non-hdl",
    "type": "test",
    "section": "cardiac",
    "name": "Non-HDL Cholesterol",
    "fullName": "Non-HDL Cholesterol",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "Calculation of all atherogenic lipoproteins (Total Cholesterol minus HDL); superior predictor of heart disease.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Atherogenic Burden",
      "Coronary Risk"
    ]
  },
  {
    "id": "test-hscrp",
    "type": "test",
    "section": "cardiac",
    "name": "hs-CRP",
    "fullName": "High Sensitivity CRP (hs-CRP Cardiac)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 500,
    "mrp": 750,
    "discount": "33% Off",
    "summary": "Ultra-precise vascular inflammation test detecting early arterial swelling and future cardiac risk.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Arterial Swelling",
      "Cardiac Prognostic"
    ]
  },
  {
    "id": "test-crp",
    "type": "test",
    "section": "cardiac",
    "name": "CRP",
    "fullName": "C-Reactive Protein (Quantitative)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 350,
    "mrp": 500,
    "discount": "30% Off",
    "summary": "Acute phase reactant elevated rapidly during systemic infection, tissue injury, and autoimmune flare-ups.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Acute Inflammation",
      "Infection Index"
    ]
  },
  {
    "id": "test-cpk-total",
    "type": "test",
    "section": "cardiac",
    "name": "CPK Total",
    "fullName": "Creatine Phosphokinase (CPK Total)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 400,
    "mrp": 600,
    "discount": "33% Off",
    "summary": "Measures overall creatine kinase released following strenuous workouts, muscular dystrophies, or trauma.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Muscle Biomarker",
      "Rhabdomyolysis"
    ]
  },
  {
    "id": "test-ck-mb",
    "type": "test",
    "section": "cardiac",
    "name": "CK-MB",
    "fullName": "Creatine Kinase-MB (Cardiac Isoenzyme)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 400,
    "mrp": 600,
    "discount": "33% Off",
    "summary": "Cardiac-specific isoenzyme rising within hours of myocardial cell injury or suspected heart attack.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Cardiac Isoenzyme",
      "Chest Pain Triage"
    ]
  },
  {
    "id": "test-troponin-i",
    "type": "test",
    "section": "cardiac",
    "name": "Troponin I",
    "fullName": "Troponin I (High Sensitive Quantitative)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 600,
    "mrp": 900,
    "discount": "33% Off",
    "summary": "The definitive gold standard biomarker for diagnosing acute myocardial infarction and coronary damage.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Myocardial Infarction",
      "Emergency Cardiac Marker"
    ]
  },
  {
    "id": "test-troponin-t",
    "type": "test",
    "section": "cardiac",
    "name": "Troponin T",
    "fullName": "Troponin T (Quantitative)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 600,
    "mrp": 900,
    "discount": "33% Off",
    "summary": "Specific cardiac protein released into blood when heart muscle cells suffer ischemic damage.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Ischemic Biomarker",
      "Myocardial Necrosis"
    ]
  },
  {
    "id": "test-ldh",
    "type": "test",
    "section": "cardiac",
    "name": "LDH",
    "fullName": "Lactate Dehydrogenase (LDH)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 350,
    "mrp": 500,
    "discount": "30% Off",
    "summary": "Enzyme present in almost all body tissues; general marker for cell destruction, hemolysis, and tissue damage.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Tissue Breakdown",
      "Cell Lysis"
    ]
  },
  {
    "id": "test-homocysteine",
    "type": "test",
    "section": "cardiac",
    "name": "Homocysteine",
    "fullName": "Serum Homocysteine",
    "parameters": 1,
    "reportTime": "8 hours",
    "price": 700,
    "mrp": 1050,
    "discount": "33% Off",
    "summary": "Amino acid associated with endothelial vascular damage, blood clot predisposition, and folate/B12 deficiency.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Endothelial Health",
      "Thrombosis Risk"
    ]
  },
  {
    "id": "test-apob",
    "type": "test",
    "section": "cardiac",
    "name": "ApoB",
    "fullName": "Apolipoprotein B (ApoB)",
    "parameters": 1,
    "reportTime": "8 hours",
    "price": 700,
    "mrp": 1050,
    "discount": "33% Off",
    "summary": "Counts the exact number of atherogenic particles in the bloodstream; superior to standard LDL.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Atherogenic Particles",
      "Precision Lipidology"
    ]
  },
  {
    "id": "test-apoa1",
    "type": "test",
    "section": "cardiac",
    "name": "ApoA1",
    "fullName": "Apolipoprotein A1 (ApoA1)",
    "parameters": 1,
    "reportTime": "8 hours",
    "price": 700,
    "mrp": 1050,
    "discount": "33% Off",
    "summary": "Primary structural protein of protective HDL particles that carries cholesterol away from arteries.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "HDL Structural Protein",
      "Arterial Defense"
    ]
  },
  {
    "id": "test-tft",
    "type": "test",
    "section": "thyroid",
    "name": "TFT (T3, T4, TSH) [Thyroid Profile]",
    "fullName": "Thyroid Function Test (TFT - T3, T4, TSH)",
    "parameters": 3,
    "reportTime": "6 to 10 hours",
    "price": 400,
    "mrp": 600,
    "discount": "33% Off",
    "summary": "Comprehensive thyroid assessment measuring Total T3, Total T4, and ultra-sensitive pituitary TSH.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Total T3",
      "Total T4",
      "TSH Ultra-Sensitive"
    ]
  },
  {
    "id": "test-tsh",
    "type": "test",
    "section": "thyroid",
    "name": "TSH",
    "fullName": "Thyroid Stimulating Hormone (TSH)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "3rd generation chemiluminescent pituitary gland marker used to diagnose hypothyroidism or hyperthyroidism.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "TSH 3rd Gen",
      "Thyroid Screening"
    ]
  },
  {
    "id": "test-total-t3",
    "type": "test",
    "section": "thyroid",
    "name": "Total T3",
    "fullName": "Triiodothyronine Total (T3)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "Measures total circulating T3 regulating metabolic burn rate, heart rate, and body temperature.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Total T3",
      "Metabolic Regulation"
    ]
  },
  {
    "id": "test-total-t4",
    "type": "test",
    "section": "thyroid",
    "name": "Total T4",
    "fullName": "Thyroxine Total (T4)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "Measures the main prohormone produced by the thyroid gland, vital for tracking replacement dosage.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Total T4",
      "Thyroid Output"
    ]
  },
  {
    "id": "test-ft3",
    "type": "test",
    "section": "thyroid",
    "name": "Free T3 (FT3)",
    "fullName": "Free Triiodothyronine (FT3)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 350,
    "mrp": 500,
    "discount": "30% Off",
    "summary": "Measures the unbound, biologically active fraction of T3 unaffected by protein binding variations.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Active FT3",
      "Unbound Fraction"
    ]
  },
  {
    "id": "test-ft4",
    "type": "test",
    "section": "thyroid",
    "name": "Free T4 (FT4)",
    "fullName": "Free Thyroxine (FT4)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 350,
    "mrp": 500,
    "discount": "30% Off",
    "summary": "Measures unbound free thyroxine available to body tissues; crucial in pregnancy and thyroid disorders.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Active FT4",
      "Pregnancy Thyroid"
    ]
  },
  {
    "id": "test-anti-tpo",
    "type": "test",
    "section": "thyroid",
    "name": "Anti-TPO Antibody",
    "fullName": "Anti-Thyroid Peroxidase Antibody (Anti-TPO)",
    "parameters": 1,
    "reportTime": "8 hours",
    "price": 500,
    "mrp": 750,
    "discount": "33% Off",
    "summary": "Definitive autoimmune marker diagnosing Hashimoto's thyroiditis and autoimmune hypothyroidism.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Hashimoto's Marker",
      "Thyroid Antibodies"
    ]
  },
  {
    "id": "test-anti-tg",
    "type": "test",
    "section": "thyroid",
    "name": "Anti-Thyroglobulin Antibody",
    "fullName": "Anti-Thyroglobulin Antibody (Anti-Tg)",
    "parameters": 1,
    "reportTime": "8 hours",
    "price": 500,
    "mrp": 750,
    "discount": "33% Off",
    "summary": "Screens for immune antibodies targeted against thyroglobulin protein in autoimmune thyroid disease.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Anti-Tg",
      "Autoimmune Thyroid Panel"
    ]
  },
  {
    "id": "test-thyroglobulin",
    "type": "test",
    "section": "thyroid",
    "name": "Thyroglobulin",
    "fullName": "Thyroglobulin (Tg Quantitative)",
    "parameters": 1,
    "reportTime": "8 hours",
    "price": 700,
    "mrp": 1050,
    "discount": "33% Off",
    "summary": "Tumor marker and tissue protein used primarily in the surveillance and follow-up of thyroid conditions.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Thyroglobulin Protein",
      "Post-Treatment Marker"
    ]
  },
  {
    "id": "test-vitd",
    "type": "test",
    "section": "vitamins",
    "name": "Vitamin D (25-OH)",
    "fullName": "Vitamin D (25-Hydroxyvitamin D Total)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 400,
    "mrp": 650,
    "discount": "38% Off",
    "summary": "Essential test for unexplained fatigue, bone aches, calcium absorption, mood, and immune resilience.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "25-OH Vitamin D",
      "Bone Strength",
      "Immunity"
    ]
  },
  {
    "id": "test-vitb12",
    "type": "test",
    "section": "vitamins",
    "name": "Vitamin B12",
    "fullName": "Vitamin B12 (Cyanocobalamin)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 500,
    "mrp": 800,
    "discount": "38% Off",
    "summary": "Crucial vitamin for nerve myelination, memory, red blood cell synthesis, tingling prevention, and vitality.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Nerve Health",
      "RBC Formation",
      "Energy"
    ]
  },
  {
    "id": "test-ferritin",
    "type": "test",
    "section": "vitamins",
    "name": "Ferritin",
    "fullName": "Serum Ferritin",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 600,
    "mrp": 900,
    "discount": "33% Off",
    "summary": "The most sensitive test for total body iron stores; detects latent iron deficiency before anemia appears.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Iron Stores",
      "Hair Fall & Anemia"
    ]
  },
  {
    "id": "test-serum-iron",
    "type": "test",
    "section": "vitamins",
    "name": "Serum Iron",
    "fullName": "Serum Iron",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 250,
    "mrp": 380,
    "discount": "34% Off",
    "summary": "Measures circulating iron bound to transferrin in blood; evaluates acute iron deficiency or overload.",
    "fasting": "Morning Sample Preferred",
    "sampleType": "Blood",
    "chips": [
      "Circulating Iron",
      "Oxygen Carrier"
    ]
  },
  {
    "id": "test-tibc",
    "type": "test",
    "section": "vitamins",
    "name": "TIBC",
    "fullName": "Total Iron Binding Capacity (TIBC)",
    "parameters": 2,
    "reportTime": "6 to 10 hours",
    "price": 300,
    "mrp": 450,
    "discount": "33% Off",
    "summary": "Calculates the maximum amount of iron that transferrin can bind; rises in iron deficiency anemia.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Transferrin Capacity",
      "Anemia Differentiation"
    ]
  },
  {
    "id": "test-transferrin-sat",
    "type": "test",
    "section": "vitamins",
    "name": "Transferrin Saturation",
    "fullName": "Transferrin Saturation %",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 350,
    "mrp": 500,
    "discount": "30% Off",
    "summary": "The ratio of serum iron to TIBC expressed as a percentage; reflects iron available for erythropoiesis.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "% Saturation",
      "Iron Availability"
    ]
  },
  {
    "id": "test-folate",
    "type": "test",
    "section": "vitamins",
    "name": "Folate / Folic Acid",
    "fullName": "Serum Folate (Vitamin B9)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 600,
    "mrp": 900,
    "discount": "33% Off",
    "summary": "Critical B-vitamin for DNA repair, pregnancy fetal development, and macrocytic megaloblastic anemia.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Vitamin B9",
      "Pregnancy Nutrition"
    ]
  },
  {
    "id": "test-vitb1",
    "type": "test",
    "section": "vitamins",
    "name": "Vitamin B1",
    "fullName": "Vitamin B1 (Thiamine)",
    "parameters": 1,
    "reportTime": "24 hours",
    "price": 1000,
    "mrp": 1500,
    "discount": "33% Off",
    "summary": "Coenzyme essential for carbohydrate metabolism and neuronal conduction; prevents beriberi and neuropathy.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Thiamine",
      "Nerve Conduction"
    ]
  },
  {
    "id": "test-vitb6",
    "type": "test",
    "section": "vitamins",
    "name": "Vitamin B6",
    "fullName": "Vitamin B6 (Pyridoxal 5-Phosphate)",
    "parameters": 1,
    "reportTime": "24 hours",
    "price": 1000,
    "mrp": 1500,
    "discount": "33% Off",
    "summary": "Cofactor in neurotransmitter synthesis (serotonin, dopamine, GABA) and amino acid metabolism.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Pyridoxine",
      "Neurotransmitters"
    ]
  },
  {
    "id": "test-vita",
    "type": "test",
    "section": "vitamins",
    "name": "Vitamin A",
    "fullName": "Vitamin A (Retinol)",
    "parameters": 1,
    "reportTime": "24 hours",
    "price": 1000,
    "mrp": 1500,
    "discount": "33% Off",
    "summary": "Fat-soluble vitamin essential for rod photoreceptors (night vision), epithelial mucosal lining, and immunity.",
    "fasting": "8-10 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Retinol",
      "Vision & Skin Health"
    ]
  },
  {
    "id": "test-vite",
    "type": "test",
    "section": "vitamins",
    "name": "Vitamin E",
    "fullName": "Vitamin E (Alpha-Tocopherol)",
    "parameters": 1,
    "reportTime": "24 hours",
    "price": 1000,
    "mrp": 1500,
    "discount": "33% Off",
    "summary": "Potent lipid-soluble antioxidant protecting polyunsaturated cell membranes from free radical oxidation.",
    "fasting": "8-10 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Alpha-Tocopherol",
      "Antioxidant Defense"
    ]
  },
  {
    "id": "test-prolactin",
    "type": "test",
    "section": "hormones",
    "name": "Prolactin",
    "fullName": "Serum Prolactin",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 450,
    "mrp": 650,
    "discount": "31% Off",
    "summary": "Anterior pituitary hormone; elevated levels cause irregular periods, galactorrhea, and infertility.",
    "fasting": "Morning Draw (2h post wake)",
    "sampleType": "Blood",
    "chips": [
      "Pituitary Hormone",
      "Menstrual Regularity"
    ]
  },
  {
    "id": "test-fsh",
    "type": "test",
    "section": "hormones",
    "name": "FSH",
    "fullName": "Follicle Stimulating Hormone (FSH)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 400,
    "mrp": 600,
    "discount": "33% Off",
    "summary": "Regulates ovarian follicle maturation in females and spermatogenesis in males; diagnoses menopause.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Follicular Growth",
      "Menopause Staging"
    ]
  },
  {
    "id": "test-lh",
    "type": "test",
    "section": "hormones",
    "name": "LH",
    "fullName": "Luteinizing Hormone (LH)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 400,
    "mrp": 600,
    "discount": "33% Off",
    "summary": "Triggers mid-cycle ovulation and progesterone synthesis; high LH:FSH ratio indicates PCOS.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Ovulation Trigger",
      "PCOS Assessment"
    ]
  },
  {
    "id": "test-estradiol",
    "type": "test",
    "section": "hormones",
    "name": "Estradiol (E2)",
    "fullName": "Serum Estradiol (E2)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 500,
    "mrp": 750,
    "discount": "33% Off",
    "summary": "Primary bioactive female estrogen regulating menstrual cycle, uterine lining, and bone mineral density.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Estrogen E2",
      "Uterine Endometrium"
    ]
  },
  {
    "id": "test-progesterone",
    "type": "test",
    "section": "hormones",
    "name": "Progesterone",
    "fullName": "Serum Progesterone",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 500,
    "mrp": 750,
    "discount": "33% Off",
    "summary": "Steroid hormone confirming successful ovulation; evaluates luteal phase sufficiency and early pregnancy.",
    "fasting": "Day 21 Sample Preferred",
    "sampleType": "Blood",
    "chips": [
      "Ovulation Confirmation",
      "Luteal Phase"
    ]
  },
  {
    "id": "test-testosterone-total",
    "type": "test",
    "section": "hormones",
    "name": "Testosterone Total",
    "fullName": "Total Testosterone (ECLIA)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 500,
    "mrp": 750,
    "discount": "33% Off",
    "summary": "Principal androgen regulating libido, muscle strength, mood, energy in men and androgen excess in women.",
    "fasting": "Morning 8-10 AM Preferred",
    "sampleType": "Blood",
    "chips": [
      "Total Testosterone",
      "Male Vitality",
      "PCOS"
    ]
  },
  {
    "id": "test-free-testosterone",
    "type": "test",
    "section": "hormones",
    "name": "Free Testosterone",
    "fullName": "Free Testosterone (Bioactive)",
    "parameters": 1,
    "reportTime": "8 hours",
    "price": 800,
    "mrp": 1200,
    "discount": "33% Off",
    "summary": "Measures unbound, biologically active testosterone free of SHBG binding; evaluates true androgen availability.",
    "fasting": "Morning Sample Preferred",
    "sampleType": "Blood",
    "chips": [
      "Bioavailable Androgen",
      "Active Testosterone"
    ]
  },
  {
    "id": "test-dheas",
    "type": "test",
    "section": "hormones",
    "name": "DHEA-S",
    "fullName": "Dehydroepiandrosterone Sulfate (DHEA-S)",
    "parameters": 1,
    "reportTime": "8 hours",
    "price": 700,
    "mrp": 1050,
    "discount": "33% Off",
    "summary": "Major adrenal androgen precursor; differentiates adrenal causes of hirsutism, acne, and virilization.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Adrenal Androgen",
      "Hirsutism Panel"
    ]
  },
  {
    "id": "test-amh",
    "type": "test",
    "section": "hormones",
    "name": "AMH",
    "fullName": "Anti-Mullerian Hormone (AMH)",
    "parameters": 1,
    "reportTime": "24 hours",
    "price": 1200,
    "mrp": 1800,
    "discount": "33% Off",
    "summary": "Accurately reflects functional ovarian egg reserve; unaffected by cycle day; vital for fertility planning.",
    "fasting": "Any Day of Cycle",
    "sampleType": "Blood",
    "chips": [
      "Ovarian Egg Reserve",
      "Fertility Window",
      "PCOS"
    ]
  },
  {
    "id": "test-beta-hcg",
    "type": "test",
    "section": "hormones",
    "name": "Beta-hCG",
    "fullName": "Total Beta Human Chorionic Gonadotropin",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 600,
    "mrp": 900,
    "discount": "33% Off",
    "summary": "Quantitative blood pregnancy test confirming conception, gestational development, and ectopic pregnancy.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Quantitative Pregnancy",
      "Gestational Staging"
    ]
  },
  {
    "id": "test-cortisol",
    "type": "test",
    "section": "hormones",
    "name": "Cortisol (Morning)",
    "fullName": "Serum Cortisol (Morning 8:00 AM)",
    "parameters": 1,
    "reportTime": "8 hours",
    "price": 600,
    "mrp": 900,
    "discount": "33% Off",
    "summary": "Adrenal glucocorticoid stress hormone; screens for Cushing's syndrome, Addison's disease, and adrenal fatigue.",
    "fasting": "8:00 AM Morning Sample",
    "sampleType": "Blood",
    "chips": [
      "Morning Cortisol",
      "Adrenal Health"
    ]
  },
  {
    "id": "test-pth",
    "type": "test",
    "section": "hormones",
    "name": "PTH",
    "fullName": "Intact Parathyroid Hormone (iPTH)",
    "parameters": 1,
    "reportTime": "8 hours",
    "price": 700,
    "mrp": 1050,
    "discount": "33% Off",
    "summary": "Regulates systemic calcium and vitamin D activation; evaluates hyperparathyroidism and osteoporosis.",
    "fasting": "Morning Fasting",
    "sampleType": "Blood",
    "chips": [
      "Intact PTH",
      "Calcium Regulation"
    ]
  },
  {
    "id": "test-growth-hormone",
    "type": "test",
    "section": "hormones",
    "name": "Growth Hormone",
    "fullName": "Human Growth Hormone (hGH)",
    "parameters": 1,
    "reportTime": "8 hours",
    "price": 800,
    "mrp": 1200,
    "discount": "33% Off",
    "summary": "Assesses pituitary somatotroph function in pediatric growth delays, short stature, and adult vitality.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "hGH",
      "Pediatric Growth & Metabolism"
    ]
  },
  {
    "id": "test-insulin",
    "type": "test",
    "section": "hormones",
    "name": "Insulin",
    "fullName": "Serum Insulin Quantitative",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 600,
    "mrp": 900,
    "discount": "33% Off",
    "summary": "Direct measurement of pancreatic insulin secretion; helps detect early metabolic syndrome.",
    "fasting": "Fasting Sample",
    "sampleType": "Blood",
    "chips": [
      "Pancreatic Secretion",
      "Metabolic Syndrome"
    ]
  },
  {
    "id": "test-psa-total",
    "type": "test",
    "section": "hormones",
    "name": "PSA Total",
    "fullName": "Prostate Specific Antigen (Total PSA)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 700,
    "mrp": 1050,
    "discount": "33% Off",
    "summary": "Premier screening tumor marker for male prostate health, benign prostatic hyperplasia (BPH), and prostatitis.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Prostate Health",
      "Men's Wellness 45+"
    ]
  },
  {
    "id": "test-psa-free",
    "type": "test",
    "section": "hormones",
    "name": "PSA Free",
    "fullName": "Free Prostate Specific Antigen (Free PSA)",
    "parameters": 1,
    "reportTime": "8 hours",
    "price": 700,
    "mrp": 1050,
    "discount": "33% Off",
    "summary": "Calculates the Free-to-Total PSA ratio to differentiate benign enlargement from malignant prostate risks.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Free-to-Total Ratio",
      "Prostate Precision"
    ]
  },
  {
    "id": "test-semen-analysis",
    "type": "test",
    "section": "hormones",
    "name": "Semen Analysis",
    "fullName": "Complete Semen Analysis (WHO Standards)",
    "parameters": 6,
    "reportTime": "4 hours",
    "price": 350,
    "mrp": 500,
    "discount": "30% Off",
    "summary": "Evaluates male fertility parameters: sperm concentration, active progressive motility, morphology, and volume.",
    "fasting": "2-5 Days Sexual Abstinence",
    "sampleType": "Semen",
    "chips": [
      "Sperm Count",
      "Motility %",
      "Morphology"
    ]
  },
  {
    "id": "test-widal",
    "type": "test",
    "section": "infection",
    "name": "Widal",
    "fullName": "Widal Slide & Tube Agglutination Test",
    "parameters": 2,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "Detects O and H agglutinin antibodies against Salmonella typhi and paratyphi causing enteric typhoid fever.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Salmonella Typhi",
      "Enteric Fever Titre"
    ]
  },
  {
    "id": "test-typhidot-igm",
    "type": "test",
    "section": "infection",
    "name": "Typhidot IgM",
    "fullName": "Typhidot IgM Rapid Antibody",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 300,
    "mrp": 450,
    "discount": "33% Off",
    "summary": "Rapid early diagnosis of active typhoid fever as early as the 2nd to 3rd day of fever.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Acute Typhoid",
      "Early IgM Detection"
    ]
  },
  {
    "id": "test-dengue-profile",
    "type": "test",
    "section": "infection",
    "name": "Dengue Profile",
    "fullName": "Dengue Profile (NS1 Antigen, IgM, IgG)",
    "parameters": 3,
    "reportTime": "4 hours",
    "price": 500,
    "mrp": 500,
    "summary": "Combined dengue screening profile covering NS1 Antigen, Dengue IgM, and Dengue IgG antibodies.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Dengue NS1 Antigen",
      "Dengue IgM",
      "Dengue IgG"
    ]
  },
  {
    "id": "test-malaria-antigen",
    "type": "test",
    "section": "infection",
    "name": "Malaria Antigen",
    "fullName": "Malaria Antigen Rapid (Pf / Pv)",
    "parameters": 2,
    "reportTime": "2 hours",
    "price": 250,
    "mrp": 380,
    "discount": "34% Off",
    "summary": "Rapid immunochromatographic assay detecting Plasmodium vivax and Plasmodium falciparum malaria antigens.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "P. Falciparum",
      "P. Vivax",
      "Rapid Malaria"
    ]
  },
  {
    "id": "test-pbs-malaria",
    "type": "test",
    "section": "infection",
    "name": "Peripheral Smear for Malaria",
    "fullName": "Peripheral Smear for Malarial Parasite (MP)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "Gold standard thick and thin blood film microscopy identifying parasite species, ring forms, and density.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Thick & Thin Smear",
      "Microscopic Parasite Count"
    ]
  },
  {
    "id": "test-ra-factor",
    "type": "test",
    "section": "infection",
    "name": "RA Factor",
    "fullName": "Rheumatoid Arthritis Factor (RA Factor)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 350,
    "mrp": 500,
    "discount": "30% Off",
    "summary": "Autoantibody screening test evaluating joint swelling, morning stiffness, and rheumatoid arthritis.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Joint Pain",
      "Rheumatoid Factor Latex"
    ]
  },
  {
    "id": "test-aso-titre",
    "type": "test",
    "section": "infection",
    "name": "ASO Titre",
    "fullName": "Anti-Streptolysin O (ASO) Titre",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 350,
    "mrp": 500,
    "discount": "30% Off",
    "summary": "Measures antibodies against Group A Streptococcus; diagnoses post-streptococcal rheumatic fever.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Streptococcal Infection",
      "Rheumatic Heart Risk"
    ]
  },
  {
    "id": "test-hbsag",
    "type": "test",
    "section": "infection",
    "name": "HBsAg",
    "fullName": "Hepatitis B Surface Antigen (HBsAg)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 250,
    "mrp": 380,
    "discount": "34% Off",
    "summary": "Primary screening test detecting active or chronic Hepatitis B viral infection with certified confidentiality.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Hepatitis B",
      "Viral Hepatitis Screen"
    ]
  },
  {
    "id": "test-anti-hcv",
    "type": "test",
    "section": "infection",
    "name": "Anti-HCV",
    "fullName": "Hepatitis C Total Antibodies",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 400,
    "mrp": 600,
    "discount": "33% Off",
    "summary": "Screens for exposure to Hepatitis C virus causing chronic liver inflammation and cirrhosis.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Hepatitis C",
      "Liver Viral Safety"
    ]
  },
  {
    "id": "test-hiv",
    "type": "test",
    "section": "infection",
    "name": "HIV 1 & 2 Screening",
    "fullName": "HIV 1 & 2 Screening (4th Gen ELISA)",
    "parameters": 2,
    "reportTime": "6 to 10 hours",
    "price": 1350,
    "mrp": 1950,
    "discount": "31% Off",
    "summary": "Advanced 4th generation testing detecting both HIV-1, HIV-2 antibodies and p24 antigen with 100% privacy.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "100% Confidential",
      "4th Gen p24 Antigen",
      "Dual HIV 1 & 2"
    ]
  },
  {
    "id": "test-vdrl",
    "type": "test",
    "section": "infection",
    "name": "VDRL",
    "fullName": "VDRL / RPR Syphilis Screen",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 200,
    "mrp": 300,
    "discount": "33% Off",
    "summary": "Routine non-treponemal serological screening for Treponema pallidum infection and premarital testing.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Syphilis Serology",
      "Antenatal Screen"
    ]
  },
  {
    "id": "test-tpha",
    "type": "test",
    "section": "infection",
    "name": "TPHA",
    "fullName": "Treponema Pallidum Hemagglutination (TPHA)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 450,
    "mrp": 650,
    "discount": "31% Off",
    "summary": "Highly specific confirmatory treponemal test following positive non-treponemal screening results.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Confirmatory Syphilis",
      "Specific Treponemal"
    ]
  },
  {
    "id": "test-hpylori-ab",
    "type": "test",
    "section": "infection",
    "name": "H. pylori Antibody",
    "fullName": "Helicobacter Pylori IgG / IgM Antibody",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 500,
    "mrp": 750,
    "discount": "33% Off",
    "summary": "Detects antibodies against H. pylori bacteria responsible for chronic gastritis, peptic ulcers, and burning acidity.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Stomach Ulcer",
      "Gastritis Biomarker"
    ]
  },
  {
    "id": "test-chikungunya-igm",
    "type": "test",
    "section": "infection",
    "name": "Chikungunya IgM",
    "fullName": "Chikungunya IgM Antibody",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 400,
    "mrp": 600,
    "discount": "33% Off",
    "summary": "Diagnoses acute Chikungunya viral infection characterized by sudden debilitating joint pains and high fever.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Severe Joint Pain",
      "Chikungunya Viral Fever"
    ]
  },
  {
    "id": "test-leptospira-igm",
    "type": "test",
    "section": "infection",
    "name": "Leptospira IgM",
    "fullName": "Leptospira IgM Antibody",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 500,
    "mrp": 750,
    "discount": "33% Off",
    "summary": "Diagnoses leptospirosis transmitted via water contaminated with rodent urine during monsoons and floods.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Weil's Disease",
      "Monsoon Fever Diagnosis"
    ]
  },
  {
    "id": "test-ana-screen",
    "type": "test",
    "section": "infection",
    "name": "ANA Screen",
    "fullName": "Antinuclear Antibodies (ANA) Screen",
    "parameters": 1,
    "reportTime": "8 hours",
    "price": 700,
    "mrp": 1050,
    "discount": "33% Off",
    "summary": "First-line screening for systemic autoimmune disorders including Lupus (SLE), Sjogren's, and Scleroderma.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Lupus (SLE)",
      "Autoimmune Disease Screen"
    ]
  },
  {
    "id": "test-anti-ccp",
    "type": "test",
    "section": "infection",
    "name": "Anti-CCP",
    "fullName": "Anti-Cyclic Citrullinated Peptide (Anti-CCP)",
    "parameters": 1,
    "reportTime": "8 hours",
    "price": 800,
    "mrp": 1200,
    "discount": "33% Off",
    "summary": "High-specificity marker predicting early rheumatoid arthritis and progressive joint erosion risks.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Early Arthritis",
      "Joint Erosion Prevention"
    ]
  },
  {
    "id": "test-procalcitonin",
    "type": "test",
    "section": "infection",
    "name": "Procalcitonin",
    "fullName": "Serum Procalcitonin (PCT)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 1200,
    "mrp": 1800,
    "discount": "33% Off",
    "summary": "Critical biomarker differentiating severe bacterial sepsis from viral infections; guides antibiotic stewardship.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Sepsis Emergency",
      "Bacterial vs Viral Triage"
    ]
  },
  {
    "id": "test-urine-routine",
    "type": "test",
    "section": "urine",
    "name": "Urine Routine / Complete Examination",
    "fullName": "Urine Routine & Microscopic Examination (CUE)",
    "parameters": 18,
    "reportTime": "2 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Comprehensive physical, chemical, and microscopic exam assessing kidneys, urinary tract, and metabolic state.",
    "fasting": "Clean Catch Midstream Urine",
    "sampleType": "Urine",
    "chips": [
      "pH & Sp Gravity",
      "Pus Cells",
      "RBCs",
      "Protein & Sugar",
      "Casts & Crystals"
    ]
  },
  {
    "id": "test-urine-microscopy",
    "type": "test",
    "section": "urine",
    "name": "Urine Microscopy",
    "fullName": "Urine Sediment Microscopy",
    "parameters": 6,
    "reportTime": "2 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Detailed microscopic cell count of pus cells (WBCs), red blood cells, epithelial cells, casts, and crystals.",
    "fasting": "Fresh Urine Sample",
    "sampleType": "Urine",
    "chips": [
      "Pus Cells",
      "Epithelial Cells",
      "Crystals"
    ]
  },
  {
    "id": "test-urine-pregnancy",
    "type": "test",
    "section": "urine",
    "name": "Urine Pregnancy Test",
    "fullName": "Urine Pregnancy Test (UPT Rapid Card)",
    "parameters": 1,
    "reportTime": "1 hour",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Fast, confidential laboratory-grade immunochromatographic detection of hCG hormone in urine.",
    "fasting": "Early Morning Urine Preferred",
    "sampleType": "Urine",
    "chips": [
      "Instant UPT",
      "100% Confidential"
    ]
  },
  {
    "id": "test-urine-protein",
    "type": "test",
    "section": "urine",
    "name": "Urine Protein",
    "fullName": "Urine Protein (Qualitative / Sulfosalicylic)",
    "parameters": 1,
    "reportTime": "2 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Detects abnormal protein shedding in urine caused by glomerular leakage, hypertension, or pregnancy preeclampsia.",
    "fasting": "Fresh Urine Sample",
    "sampleType": "Urine",
    "chips": [
      "Proteinuria",
      "Preeclampsia Screen"
    ]
  },
  {
    "id": "test-urine-albumin",
    "type": "test",
    "section": "urine",
    "name": "Urine Albumin",
    "fullName": "Urine Albumin (Spot)",
    "parameters": 1,
    "reportTime": "2 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Rapid dipstick chemical assessment for albumin leakage through the renal filtration membrane.",
    "fasting": "Fresh Urine Sample",
    "sampleType": "Urine",
    "chips": [
      "Albumin Leak",
      "Renal Barrier"
    ]
  },
  {
    "id": "test-urine-ketone",
    "type": "test",
    "section": "urine",
    "name": "Urine Ketone Bodies",
    "fullName": "Urine Ketone Bodies (Acetoacetate)",
    "parameters": 1,
    "reportTime": "2 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Detects ketonuria in diabetic ketoacidosis (DKA), prolonged fasting, fever, or keto diets.",
    "fasting": "Fresh Urine Sample",
    "sampleType": "Urine",
    "chips": [
      "Ketones",
      "DKA Emergency Warning"
    ]
  },
  {
    "id": "test-urine-bile",
    "type": "test",
    "section": "urine",
    "name": "Urine Bile Salts & Pigments",
    "fullName": "Urine Bile Salts & Bile Pigments",
    "parameters": 2,
    "reportTime": "2 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Identifies presence of bile salts and bilirubin in urine, indicating obstructive liver and gallbladder jaundice.",
    "fasting": "Fresh Urine Sample",
    "sampleType": "Urine",
    "chips": [
      "Bile Salts",
      "Bile Pigments",
      "Obstructive Jaundice"
    ]
  },
  {
    "id": "test-urine-culture",
    "type": "test",
    "section": "urine",
    "name": "Urine Culture & Sensitivity",
    "fullName": "Urine Culture & Antibiotic Sensitivity (Automated)",
    "parameters": 4,
    "reportTime": "48 hours",
    "price": 500,
    "mrp": 750,
    "discount": "33% Off",
    "summary": "Isolates bacterial pathogens causing urinary tract infection (UTI) and provides targeted antibiotic sensitivity.",
    "fasting": "Sterile Midstream Catch",
    "sampleType": "Urine",
    "chips": [
      "UTI Pathogen",
      "Antibiotic Sensitivity Chart"
    ]
  },
  {
    "id": "test-24hr-urine-protein",
    "type": "test",
    "section": "urine",
    "name": "24-Hour Urine Protein",
    "fullName": "24-Hour Urine Total Protein Quantitative",
    "parameters": 2,
    "reportTime": "24 hours",
    "price": 400,
    "mrp": 600,
    "discount": "33% Off",
    "summary": "Gold standard quantitative measurement of total daily protein excretion for nephrotic syndrome evaluation.",
    "fasting": "Complete 24-Hr Container",
    "sampleType": "Urine",
    "chips": [
      "24-Hour Quantification",
      "Nephrotic Syndrome"
    ]
  },
  {
    "id": "test-urine-calcium",
    "type": "test",
    "section": "urine",
    "name": "Urine Calcium",
    "fullName": "Urine Calcium (Spot / 24-Hour)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 250,
    "mrp": 380,
    "discount": "34% Off",
    "summary": "Screens for hypercalciuria, the primary underlying cause of recurrent calcium oxalate kidney stones.",
    "fasting": "No Fasting Required",
    "sampleType": "Urine",
    "chips": [
      "Kidney Stone Workup",
      "Calcium Excretion"
    ]
  },
  {
    "id": "test-urine-creatinine",
    "type": "test",
    "section": "urine",
    "name": "Urine Creatinine",
    "fullName": "Urine Creatinine Concentration",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 200,
    "mrp": 300,
    "discount": "33% Off",
    "summary": "Used in ratio testing to normalize urinary excretion of albumin and other analytes against hydration levels.",
    "fasting": "No Fasting Required",
    "sampleType": "Urine",
    "chips": [
      "Urine Dilution Standard",
      "Excretion Normalizer"
    ]
  },
  {
    "id": "test-urine-microalbumin",
    "type": "test",
    "section": "urine",
    "name": "Urine Microalbumin",
    "fullName": "Urine Microalbumin (Spot / Morning)",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 350,
    "mrp": 500,
    "discount": "30% Off",
    "summary": "Quantitative measurement detecting subtle vascular and renal changes in diabetic and hypertensive patients.",
    "fasting": "First Morning Urine",
    "sampleType": "Urine",
    "chips": [
      "Subtle Protein Leak",
      "Hypertension & Kidney"
    ]
  },
  {
    "id": "test-stool-routine",
    "type": "test",
    "section": "stool",
    "name": "Stool Routine Examination",
    "fullName": "Stool Routine & Microscopic Examination",
    "parameters": 8,
    "reportTime": "2 hours",
    "price": 100,
    "mrp": 150,
    "discount": "33% Off",
    "summary": "Physical and microscopic analysis for digestive status, mucus, pus cells, blood, and gastrointestinal parasites.",
    "fasting": "Fresh Stool Sample",
    "sampleType": "Stool",
    "chips": [
      "Color & Consistency",
      "Pus Cells",
      "RBCs",
      "Parasites"
    ]
  },
  {
    "id": "test-stool-occult-blood",
    "type": "test",
    "section": "stool",
    "name": "Stool Occult Blood",
    "fullName": "Stool Occult Blood (FOBT)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 200,
    "mrp": 300,
    "discount": "33% Off",
    "summary": "Detects hidden microscopic gastrointestinal bleeding from stomach ulcers, colon polyps, or early malignancies.",
    "fasting": "Avoid Red Meat 48h Prior",
    "sampleType": "Stool",
    "chips": [
      "Occult GI Bleeding",
      "Colorectal Polyps"
    ]
  },
  {
    "id": "test-stool-reducing-substances",
    "type": "test",
    "section": "stool",
    "name": "Stool Reducing Substances",
    "fullName": "Stool Reducing Substances",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "Essential pediatric screening test for infant lactose intolerance and carbohydrate malabsorption.",
    "fasting": "Fresh Diaper / Stool",
    "sampleType": "Stool",
    "chips": [
      "Lactose Intolerance",
      "Infant Digestion"
    ]
  },
  {
    "id": "test-stool-calprotectin",
    "type": "test",
    "section": "stool",
    "name": "Stool Calprotectin",
    "fullName": "Fecal Calprotectin Quantitative",
    "parameters": 1,
    "reportTime": "24 hours",
    "price": 1000,
    "mrp": 1500,
    "discount": "33% Off",
    "summary": "Differentiates Inflammatory Bowel Disease (Crohn's, Ulcerative Colitis) from non-inflammatory Irritable Bowel (IBS).",
    "fasting": "Fresh Stool Sample",
    "sampleType": "Stool",
    "chips": [
      "IBD vs IBS",
      "Gut Mucosal Inflammation"
    ]
  },
  {
    "id": "test-stool-culture",
    "type": "test",
    "section": "stool",
    "name": "Stool Culture & Sensitivity",
    "fullName": "Stool Culture & Bacterial Sensitivity",
    "parameters": 3,
    "reportTime": "48 hours",
    "price": 500,
    "mrp": 750,
    "discount": "33% Off",
    "summary": "Identifies bacterial food poisoning and dysentery pathogens (Salmonella, Shigella, E. coli) with antibiotic panel.",
    "fasting": "Sterile Stool Container",
    "sampleType": "Stool",
    "chips": [
      "Dysentery Pathogens",
      "Antibiotic Susceptibility"
    ]
  },
  {
    "id": "test-stool-hpylori",
    "type": "test",
    "section": "stool",
    "name": "Stool H. pylori Antigen",
    "fullName": "H. Pylori Fecal Antigen Test",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 600,
    "mrp": 900,
    "discount": "33% Off",
    "summary": "Non-invasive, highly accurate method to confirm current active Helicobacter pylori stomach infection.",
    "fasting": "No Fasting Required",
    "sampleType": "Stool",
    "chips": [
      "Active H. Pylori",
      "Non-Invasive Ulcer Test"
    ]
  },
  {
    "id": "test-stool-ova-cysts",
    "type": "test",
    "section": "stool",
    "name": "Stool for Ova & Cysts",
    "fullName": "Stool Examination for Ova & Cysts",
    "parameters": 3,
    "reportTime": "4 hours",
    "price": 150,
    "mrp": 220,
    "discount": "32% Off",
    "summary": "Identifies microscopic eggs of intestinal worms (Ascaris, hookworm) and protozoan cysts (Giardia, Amoeba).",
    "fasting": "Fresh Stool Sample",
    "sampleType": "Stool",
    "chips": [
      "Amoeba Cysts",
      "Giardia",
      "Intestinal Worms"
    ]
  },
  {
    "id": "test-amylase",
    "type": "test",
    "section": "biochemistry",
    "name": "Amylase",
    "fullName": "Serum Amylase",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 350,
    "mrp": 500,
    "discount": "30% Off",
    "summary": "Digestive enzyme secreted by pancreas and salivary glands; rises rapidly during acute pancreatitis attacks.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Pancreatic Enzyme",
      "Severe Abdominal Pain"
    ]
  },
  {
    "id": "test-lipase",
    "type": "test",
    "section": "biochemistry",
    "name": "Lipase",
    "fullName": "Serum Lipase",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 400,
    "mrp": 600,
    "discount": "33% Off",
    "summary": "Highly specific pancreatic enzyme remaining elevated longer than amylase; primary test for pancreatitis.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Specific Pancreatitis",
      "Lipase Enzyme"
    ]
  },
  {
    "id": "test-lactate",
    "type": "test",
    "section": "biochemistry",
    "name": "Lactate",
    "fullName": "Plasma L-Lactate",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 500,
    "mrp": 750,
    "discount": "33% Off",
    "summary": "Key indicator of cellular tissue hypoxia, anaerobic metabolism, septic shock, and severe dehydration.",
    "fasting": "Special Cold Sample",
    "sampleType": "Blood",
    "chips": [
      "Tissue Hypoxia",
      "Sepsis & Metabolic Acidosis"
    ]
  },
  {
    "id": "test-serum-osmolality",
    "type": "test",
    "section": "biochemistry",
    "name": "Serum Osmolality",
    "fullName": "Serum Osmolality Quantitative",
    "parameters": 1,
    "reportTime": "6 to 10 hours",
    "price": 500,
    "mrp": 750,
    "discount": "33% Off",
    "summary": "Evaluates exact concentration of dissolved particles in serum; diagnoses hyponatremia and fluid disorders.",
    "fasting": "Fasting Recommended",
    "sampleType": "Blood",
    "chips": [
      "Osmotic Concentration",
      "Electrolyte Balance"
    ]
  },
  {
    "id": "test-serum-magnesium",
    "type": "test",
    "section": "biochemistry",
    "name": "Serum Magnesium",
    "fullName": "Serum Magnesium",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 250,
    "mrp": 380,
    "discount": "34% Off",
    "summary": "Vital cofactor in over 300 enzymatic reactions; essential for nerve transmission, muscle tone, and heart rhythm.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Muscle Cramps",
      "Heart Rhythm",
      "Nerve Signaling"
    ]
  },
  {
    "id": "test-serum-zinc",
    "type": "test",
    "section": "biochemistry",
    "name": "Serum Zinc",
    "fullName": "Serum Zinc (Trace Element)",
    "parameters": 1,
    "reportTime": "8 hours",
    "price": 600,
    "mrp": 900,
    "discount": "33% Off",
    "summary": "Essential trace mineral for wound healing, skin barrier repair, hair growth, immunity, and taste acuity.",
    "fasting": "Trace Element Tube",
    "sampleType": "Blood",
    "chips": [
      "Hair Fall",
      "Wound Healing",
      "Immune Defense"
    ]
  },
  {
    "id": "test-serum-copper",
    "type": "test",
    "section": "biochemistry",
    "name": "Serum Copper",
    "fullName": "Serum Copper (Trace Element)",
    "parameters": 1,
    "reportTime": "8 hours",
    "price": 700,
    "mrp": 1050,
    "discount": "33% Off",
    "summary": "Assesses copper metabolism, ceruloplasmin binding, and diagnosis of Wilson's disease.",
    "fasting": "Trace Element Tube",
    "sampleType": "Blood",
    "chips": [
      "Wilson's Disease",
      "Copper Metabolism"
    ]
  },
  {
    "id": "test-serum-ammonia",
    "type": "test",
    "section": "biochemistry",
    "name": "Serum Ammonia",
    "fullName": "Blood Ammonia Level",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 700,
    "mrp": 1050,
    "discount": "33% Off",
    "summary": "Toxic nitrogen byproduct screened in severe chronic liver disease, cirrhosis, and hepatic encephalopathy.",
    "fasting": "Immediate Ice Bath Transport",
    "sampleType": "Blood",
    "chips": [
      "Hepatic Encephalopathy",
      "Cirrhosis Surveillance"
    ]
  },
  {
    "id": "test-blood-culture",
    "type": "test",
    "section": "microbiology",
    "name": "Blood Culture",
    "fullName": "Blood Culture & Sensitivity (Automated BACTEC)",
    "parameters": 3,
    "reportTime": "48-72 hours",
    "price": 700,
    "mrp": 1050,
    "discount": "33% Off",
    "summary": "Detects systemic bacterial and fungal bloodstream infections (septicemia) with customized antibiotic panels.",
    "fasting": "Sterile Blood Draw",
    "sampleType": "Blood",
    "chips": [
      "Bacteremia Detection",
      "Sepsis Investigation"
    ]
  },
  {
    "id": "test-sputum-culture",
    "type": "test",
    "section": "microbiology",
    "name": "Sputum Culture",
    "fullName": "Sputum Culture & Antibiotic Sensitivity",
    "parameters": 3,
    "reportTime": "48 hours",
    "price": 500,
    "mrp": 750,
    "discount": "33% Off",
    "summary": "Identifies bacterial pathogens in respiratory tract infections, pneumonia, and chronic bronchiectasis.",
    "fasting": "Early Morning Deep Cough Sputum",
    "sampleType": "Sputum",
    "chips": [
      "Pneumonia Pathogens",
      "Targeted Antibiotic Chart"
    ]
  },
  {
    "id": "test-pus-culture",
    "type": "test",
    "section": "microbiology",
    "name": "Pus Culture",
    "fullName": "Pus / Exudate Culture & Sensitivity",
    "parameters": 3,
    "reportTime": "48 hours",
    "price": 500,
    "mrp": 750,
    "discount": "33% Off",
    "summary": "Isolates organisms causing skin abscesses, boils, and deep wound infections to select optimal antibiotic cures.",
    "fasting": "Sterile Swab Sample",
    "sampleType": "Pus Swab",
    "chips": [
      "Abscess & Skin Infection",
      "Antibiotic Profiling"
    ]
  },
  {
    "id": "test-throat-culture",
    "type": "test",
    "section": "microbiology",
    "name": "Throat Swab Culture",
    "fullName": "Throat Swab Culture & Sensitivity",
    "parameters": 3,
    "reportTime": "48 hours",
    "price": 500,
    "mrp": 750,
    "discount": "33% Off",
    "summary": "Differentiates bacterial tonsillitis (Group A Streptococcus) from viral sore throats.",
    "fasting": "Pharyngeal Swab",
    "sampleType": "Throat Swab",
    "chips": [
      "Strep Throat",
      "Tonsillitis Bacterial Screen"
    ]
  },
  {
    "id": "test-wound-culture",
    "type": "test",
    "section": "microbiology",
    "name": "Wound Swab Culture",
    "fullName": "Wound Swab Culture & Sensitivity",
    "parameters": 3,
    "reportTime": "48 hours",
    "price": 500,
    "mrp": 750,
    "discount": "33% Off",
    "summary": "Analyzes non-healing ulcers, post-operative surgical sites, and diabetic foot wounds.",
    "fasting": "Sterile Wound Swab",
    "sampleType": "Wound Swab",
    "chips": [
      "Diabetic Foot Ulcer",
      "Surgical Site Infection"
    ]
  },
  {
    "id": "test-gram-stain",
    "type": "test",
    "section": "microbiology",
    "name": "Gram Stain",
    "fullName": "Gram Stain Smear Examination",
    "parameters": 2,
    "reportTime": "2 hours",
    "price": 200,
    "mrp": 300,
    "discount": "33% Off",
    "summary": "Rapid microscopic staining categorizing bacteria into Gram-positive and Gram-negative for emergency triage.",
    "fasting": "No Fasting Required",
    "sampleType": "Smear Specimen",
    "chips": [
      "Gram-Positive / Gram-Negative",
      "Rapid Microbiology"
    ]
  },
  {
    "id": "test-koh-mount",
    "type": "test",
    "section": "microbiology",
    "name": "KOH Mount",
    "fullName": "KOH Mount for Fungi",
    "parameters": 1,
    "reportTime": "2 hours",
    "price": 200,
    "mrp": 300,
    "discount": "33% Off",
    "summary": "Dissolves keratin to directly view fungal hyphae and spores in ringworm, nail, and skin fungal infections.",
    "fasting": "Skin / Nail Scraping",
    "sampleType": "Skin Scraping",
    "chips": [
      "Fungal Hyphae",
      "Ringworm & Nail Fungus"
    ]
  },
  {
    "id": "test-afb-smear",
    "type": "test",
    "section": "microbiology",
    "name": "AFB Smear",
    "fullName": "Acid-Fast Bacilli (AFB Smear - ZN Stain)",
    "parameters": 1,
    "reportTime": "4 hours",
    "price": 200,
    "mrp": 300,
    "discount": "33% Off",
    "summary": "Ziehl-Neelsen staining microscopy for Mycobacterium tuberculosis detection in respiratory sputum.",
    "fasting": "Morning Sputum Sample",
    "sampleType": "Sputum",
    "chips": [
      "Tuberculosis (TB) Screen",
      "Acid-Fast Bacilli"
    ]
  },
  {
    "id": "test-fungal-culture",
    "type": "test",
    "section": "microbiology",
    "name": "Fungal Culture",
    "fullName": "Fungal Culture & Identification",
    "parameters": 3,
    "reportTime": "7-14 days",
    "price": 700,
    "mrp": 1050,
    "discount": "33% Off",
    "summary": "Cultivates pathogenic dermatophytes, Candida yeasts, and molds on Sabouraud agar with identification.",
    "fasting": "Sterile Specimen",
    "sampleType": "Clinical Specimen",
    "chips": [
      "Candida & Mold ID",
      "Chronic Fungal Infection"
    ]
  },
  {
    "id": "pkg-mens-wellness-plus",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "menswellness",
    "planCollection": "mens-wellness",
    "name": "Men's Wellness Plus",
    "fullName": "Men's Wellness Plus Diagnostic Plan",
    "parameters": 103,
    "reportTime": "6 to 10 hours",
    "price": 3248,
    "mrp": 5600,
    "discount": "42% Off",
    "summary": "A focused men's wellness plan combining blood health, cardiac risk, thyroid, metabolic, organ, toxic element, vitamin, and hormone screening.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Complete Hemogram (28)",
      "Cardiac Risk Markers (5)",
      "Thyroid Profile (3)",
      "Lipid Profile (10)",
      "Liver Function Test (12)",
      "Kidney Function Test (7)",
      "Diabetes Screening (2)",
      "Iron Deficiency Profile (4)",
      "Toxic Elements Profile (22)",
      "Electrolytes (3)",
      "Pancreatic Profile (2)",
      "Vitamins + Nutrients (3)",
      "Hormone + Oncology (2)"
    ],
    "popularBadge": "MEN'S WELLNESS",
    "clinicalProfiles": [
      {
        "title": "Complete Hemogram",
        "desc": "A detailed blood health screen covering cells, platelets, oxygen carrying capacity, and immune response.",
        "icon": "blood",
        "params": [
          "Basophils - Absolute Count", "Mean Corpuscular Volume (MCV)", "Eosinophils - Absolute Count", "Monocytes", "Lymphocytes - Absolute Count", "Mean Platelet Volume (MPV)", "Monocytes - Absolute Count", "Neutrophils", "Neutrophils - Absolute Count", "Nucleated Red Blood Cells", "Basophils", "Nucleated Red Blood Cells - Eosinophils", "Plateletcrit (PCT)", "Hemoglobin", "Hematocrit (PCV)", "Immature Granulocytes (IG)", "Platelet Distribution Width (PDW)", "Immature Granulocyte Percentage (IG%)", "Platelet to Large Cell Ratio (PLCR)", "Total Leucocytes Count (WBC)", "Platelet Count", "Lymphocyte", "Total RBC", "Mean Corpuscular Hemoglobin (MCH)", "Red Cell Distribution Width (RDW-CV)", "Mean Corpuscular Hemoglobin Concentration (MCHC)", "Red Cell Distribution Width (RDW-SD)", "Eosinophils"
        ]
      },
      {
        "title": "Cardiac Risk Markers",
        "desc": "Screens lipid-related cardiac risk and inflammation markers relevant to long-term heart health.",
        "icon": "heart",
        "params": ["Apo B / Apo A1 Ratio", "Apolipoprotein A1 (Apo-A1)", "Apolipoprotein B (Apo-B)", "High Sensitivity C-Reactive Protein (hs-CRP)", "Lipoprotein (a) [Lp(a)]"]
      },
      {
        "title": "Thyroid Profile",
        "desc": "Measures the core thyroid hormones used to assess metabolism and energy regulation.",
        "icon": "thyroid",
        "params": ["Total Triiodothyronine (T3)", "Total Thyroxine (T4)", "TSH - Ultrasensitive"]
      },
      {
        "title": "Lipid Profile",
        "desc": "Maps cholesterol transport and ratios associated with cardiovascular risk.",
        "icon": "heart",
        "params": ["Total Cholesterol", "Non-HDL Cholesterol", "HDL Cholesterol - Direct", "TC / HDL Cholesterol Ratio", "HDL / LDL Ratio", "Triglycerides / HDL Ratio", "LDL Cholesterol - Direct", "Triglycerides", "LDL / HDL Ratio", "VLDL Cholesterol"]
      },
      {
        "title": "Liver Function Test (LFT)",
        "desc": "Checks liver enzymes, bilirubin, and protein balance for a broad hepatic health view.",
        "icon": "liver",
        "params": ["Serum Albumin / Globulin Ratio", "SGOT / SGPT Ratio", "Alkaline Phosphatase", "Total Protein", "Bilirubin - Direct", "Serum Albumin", "Bilirubin - Indirect", "Serum Globulin", "Bilirubin - Total", "Aspartate Aminotransferase (SGOT/AST)", "Gamma Glutamyl Transferase (GGT)", "Alanine Transaminase (SGPT/ALT)"]
      },
      {
        "title": "Kidney Function Test (KFT)",
        "desc": "Assesses filtration, urea handling, creatinine, uric acid, and calcium status.",
        "icon": "kidney",
        "params": ["BUN / Serum Creatinine Ratio", "Urea / Serum Creatinine Ratio", "Blood Urea Nitrogen (BUN)", "Urea (Calculated)", "Calcium", "Uric Acid", "Serum Creatinine"]
      },
      {
        "title": "Diabetes Screening",
        "desc": "Pairs long-term blood sugar control with estimated average glucose.",
        "icon": "diabetes",
        "params": ["Average Blood Glucose (ABG)", "HbA1c"]
      },
      {
        "title": "Iron Deficiency Profile",
        "desc": "Evaluates iron availability and binding capacity for anemia-related screening.",
        "icon": "nutrition",
        "params": ["Iron", "Total Iron Binding Capacity (TIBC)", "Unsaturated Iron Binding Capacity (UIBC)", "Transferrin Saturation"]
      },
      {
        "title": "Toxic Elements Profile",
        "desc": "Screens trace minerals and heavy metals as a broad environmental exposure check.",
        "icon": "immunity",
        "params": ["Silver", "Cadmium", "Selenium", "Aluminium", "Cobalt", "Tin", "Arsenic", "Chromium", "Strontium", "Barium", "Caesium", "Thallium", "Beryllium", "Mercury", "Uranium", "Bismuth", "Manganese", "Vanadium", "Molybdenum", "Lead", "Nickel", "Antimony"]
      },
      {
        "title": "Electrolytes",
        "desc": "Measures key minerals that support hydration, nerves, muscles, and heart rhythm.",
        "icon": "kidney",
        "params": ["Chloride", "Potassium", "Sodium"]
      },
      {
        "title": "Pancreatic Profile",
        "desc": "Checks pancreatic digestive enzymes used in abdominal and metabolic evaluation.",
        "icon": "diabetes",
        "params": ["Amylase", "Lipase"]
      },
      {
        "title": "Vitamins + Nutrients",
        "desc": "Looks at vitamin D, folate, and vitamin B12 levels supporting energy and nerve health.",
        "icon": "nutrition",
        "params": ["Vitamin D (25-OH)", "Folate", "Vitamin B12"]
      },
      {
        "title": "Hormone + Oncology",
        "desc": "Includes male hormone and prostate-specific screening markers.",
        "icon": "immunity",
        "params": ["Testosterone", "Prostate Specific Antigen (PSA)"]
      }
    ]
  },
  {
    "id": "pkg-full-basic",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "fullbody",
    "name": "Full Body Checkup – Basic",
    "fullName": "Full Body Checkup – Basic",
    "parameters": 63,
    "reportTime": "6 to 10 hours",
    "price": 1099,
    "mrp": 2199,
    "discount": "50% Off",
    "summary": "Essential preventive full body checkup screening blood counts, liver enzymes, kidney health, blood sugar, and complete urine analysis.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood & Urine",
    "chips": [
      "CBC (24)",
      "LFT (12)",
      "KFT (10)",
      "Fasting Sugar",
      "Lipid Screen",
      "Urine Routine (18)"
    ],
    "popularBadge": "VALUE PICK"
  },
  {
    "id": "pkg-full-essential",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "fullbody",
    "name": "Full Body Checkup – Essential",
    "fullName": "Full Body Checkup – Essential",
    "parameters": 72,
    "reportTime": "6 to 10 hours",
    "price": 1599,
    "mrp": 3199,
    "discount": "50% Off",
    "summary": "Expanded full body screening adding complete cardiac lipid profile, thyroid hormone screening, and metabolic organs.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood & Urine",
    "chips": [
      "CBC (24)",
      "Lipid (9)",
      "LFT (12)",
      "KFT (10)",
      "Thyroid TSH",
      "Fasting Sugar",
      "Urine Routine"
    ],
    "popularBadge": "MOST POPULAR"
  },
  {
    "id": "pkg-full-advanced",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "fullbody",
    "name": "Full Body Checkup – Advanced",
    "fullName": "Full Body Checkup – Advanced",
    "parameters": 85,
    "reportTime": "6 to 10 hours",
    "price": 2799,
    "mrp": 5499,
    "discount": "49% Off",
    "summary": "Comprehensive wellness evaluation including complete 3-month HbA1c diabetic average, Vitamin D, Vitamin B12, and full thyroid panel.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood & Urine",
    "chips": [
      "CBC (24)",
      "Lipid (9)",
      "LFT (12)",
      "KFT (10)",
      "TFT (3)",
      "HbA1c",
      "Vit D",
      "Vit B12",
      "Urine Routine"
    ],
    "popularBadge": "RECOMMENDED"
  },
  {
    "id": "pkg-full-comprehensive",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "fullbody",
    "name": "Full Body Checkup – Comprehensive",
    "fullName": "Full Body Checkup – Comprehensive",
    "parameters": 94,
    "reportTime": "6 to 10 hours",
    "price": 3899,
    "mrp": 7799,
    "discount": "50% Off",
    "summary": "All-inclusive diagnostic package incorporating cardiac inflammation (hs-CRP), complete iron deficiency profile, electrolytes, and arthritis markers.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood & Urine",
    "chips": [
      "Advanced Full Body +",
      "hs-CRP Cardiac",
      "Iron Deficiency Profile",
      "Electrolytes",
      "Calcium & ESR"
    ],
    "popularBadge": "EXECUTIVE"
  },
  {
    "id": "pkg-full-complete",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "fullbody",
    "name": "Full Body Checkup – Complete",
    "fullName": "Full Body Checkup – Complete",
    "parameters": 102,
    "reportTime": "6 to 10 hours",
    "price": 4999,
    "mrp": 9999,
    "discount": "50% Off",
    "summary": "Exhaustive head-to-toe clinical audit covering pancreatic enzymes, advanced cardiac apolipoproteins (ApoB/ApoA1), and vital mineral reserves.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood & Urine",
    "chips": [
      "Comprehensive +",
      "Pancreatic Lipase/Amylase",
      "ApoB & ApoA1",
      "Cardiac Markers",
      "Total Urine Profile"
    ],
    "popularBadge": "COMPLETE CARE"
  },
  {
    "id": "pkg-wellness-premium-c-pro-utsh",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "menswellness",
    "planCollection": "mens-wellness",
    "name": "Wellness Premium C Pro with UTSH",
    "fullName": "Wellness Premium C Pro with UTSH",
    "parameters": 2,
    "reportTime": "6 to 10 hours",
    "price": 4031,
    "mrp": 6398,
    "discount": "37% Off",
    "summary": "Premium wellness package based on the supplied Aarogyam C Pro with UTSH specification.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Aarogyam C Pro",
      "UTSH"
    ],
    "popularBadge": "PREMIUM WELLNESS"
  },
  {
    "id": "pkg-senior-mens-wellness",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "menswellness",
    "planCollection": "mens-wellness",
    "name": "Senior Men's Wellness",
    "fullName": "Senior Men's Wellness Diagnostic Plan",
    "parameters": 2,
    "reportTime": "6 to 10 hours",
    "price": 3247,
    "mrp": 5798,
    "discount": "44% Off",
    "summary": "Senior men's wellness package based on the supplied Aarogyam Senior Male Package specification.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood & Urine",
    "chips": [
      "Aarogyam Senior Male Package",
      "Senior Men's Wellness Profile"
    ],
    "popularBadge": "SENIOR MEN'S WELLNESS"
  },
  {
    "id": "pkg-womens-wellness-plus",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "menswellness",
    "planCollection": "mens-wellness",
    "name": "Women's Wellness Plus",
    "fullName": "Women's Wellness Plus Diagnostic Plan",
    "parameters": 2,
    "reportTime": "6 to 10 hours",
    "price": 3595,
    "mrp": 5798,
    "discount": "38% Off",
    "summary": "Premium women's wellness package based on the supplied Aarogyam Female Package specification.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Aarogyam Female Package",
      "Women's Wellness Profile"
    ],
    "popularBadge": "WOMEN'S WELLNESS"
  },
  {
    "id": "pkg-senior-womens-wellness",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "menswellness",
    "planCollection": "mens-wellness",
    "name": "Senior Women's Wellness",
    "fullName": "Senior Women's Wellness Diagnostic Plan",
    "parameters": 2,
    "reportTime": "6 to 10 hours",
    "price": 3564,
    "mrp": 4144,
    "discount": "14% Off",
    "summary": "Senior women's wellness package based on the supplied Aarogyam Senior Female Package specification.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood & Urine",
    "chips": [
      "Aarogyam Senior Female Package",
      "Senior Women's Wellness Profile"
    ],
    "popularBadge": "SENIOR WOMEN'S WELLNESS"
  },
  {
    "id": "pkg-ultra-male",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "ultra",
    "name": "Ultra Full Body Checkup – Male",
    "fullName": "Ultra Full Body Checkup – Male (Executive Health)",
    "parameters": 115,
    "reportTime": "6 to 10 hours",
    "price": 14999,
    "mrp": 24999,
    "discount": "40% Off",
    "summary": "Elite diagnostic suite customized for men: Total & Free Testosterone, Prostate Tumor Marker (PSA Total & Free), Cardiac Risk, Vitamins, and full organ audit.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood & Urine",
    "chips": [
      "Complete Full Body +",
      "PSA Total & Free",
      "Free Testosterone",
      "Cardiac Panel",
      "Full Vitamin Suite",
      "Cancer Screening"
    ],
    "popularBadge": "ULTRA EXECUTIVE"
  },
  {
    "id": "pkg-ultra-female",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "ultra",
    "name": "Ultra Full Body Checkup – Female",
    "fullName": "Ultra Full Body Checkup – Female (Executive Wellness)",
    "parameters": 118,
    "reportTime": "6 to 10 hours",
    "price": 14999,
    "mrp": 24999,
    "discount": "40% Off",
    "summary": "Elite diagnostic suite tailored for women: Ovarian Reserve (AMH), CA-125 marker, Prolactin, Estradiol, Bone density minerals, Thyroid antibodies, and Vitamins.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood & Urine",
    "chips": [
      "Complete Full Body +",
      "AMH Ovarian Reserve",
      "CA-125 Screening",
      "Hormone Panel",
      "Thyroid Antibodies",
      "Bone Vitality"
    ],
    "popularBadge": "ULTRA WOMEN"
  },
  {
    "id": "pkg-kids-advanced",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "special",
    "name": "Children's Checkup – Advanced for Kids",
    "fullName": "Children's Checkup – Advanced for Kids",
    "parameters": 45,
    "reportTime": "6 to 10 hours",
    "price": 2099,
    "mrp": 3999,
    "discount": "48% Off",
    "summary": "Child-friendly, gentle screening assessing pediatric blood health, iron stores, calcium, blood group, urine routine, and growth vitality.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood & Urine",
    "chips": [
      "Pediatric CBC",
      "Blood Group & Rh",
      "Serum Calcium",
      "Iron Profile",
      "Urine Routine",
      "Growth Screen"
    ],
    "popularBadge": "PEDIATRIC CARE"
  },
  {
    "id": "pkg-master-basic",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "fullbody",
    "name": "Basic Master Health Check",
    "fullName": "Basic Master Health Check",
    "parameters": 70,
    "reportTime": "6 to 10 hours",
    "price": 1699,
    "mrp": 3399,
    "discount": "50% Off",
    "summary": "Master preventive assessment for adults checking heart lipid profile, liver, kidney, thyroid TSH, blood sugar, and basic health biomarkers.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood & Urine",
    "chips": [
      "CBC",
      "Fasting Sugar",
      "Lipid Profile",
      "Liver Function",
      "Kidney Function",
      "Thyroid TSH",
      "Urine Routine"
    ],
    "popularBadge": "MASTER HEALTH"
  },
  {
    "id": "pkg-full-basic-body",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "fullbody",
    "name": "Basic Full Body Check",
    "fullName": "Basic Full Body Check",
    "parameters": 52,
    "reportTime": "6 to 10 hours",
    "price": 899,
    "mrp": 1799,
    "discount": "50% Off",
    "summary": "Affordable full body baseline screening covering complete blood count, blood sugar, creatinine, SGPT liver enzyme, cholesterol, and urine routine.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood & Urine",
    "chips": [
      "CBC (24)",
      "Random Sugar",
      "Serum Creatinine",
      "SGPT (ALT)",
      "Cholesterol",
      "Urine Routine"
    ],
    "popularBadge": "BUDGET SAVER"
  },
  {
    "id": "pkg-basic-health",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "organ",
    "name": "Basic Health Checkup",
    "fullName": "Basic Health Checkup",
    "parameters": 30,
    "reportTime": "4 hours",
    "price": 499,
    "mrp": 999,
    "discount": "50% Off",
    "summary": "Entry-level preventive checkup including Complete Blood Count, Fasting Blood Sugar, Urine Routine, and vital blood pressure record.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood & Urine",
    "chips": [
      "Complete Blood Count (CBC)",
      "Fasting Blood Sugar",
      "Urine Routine",
      "General Wellness"
    ],
    "popularBadge": "ENTRY LEVEL"
  },
  {
    "id": "pkg-diabetes-care",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "organ",
    "name": "Diabetes Checkup",
    "fullName": "Diabetes Care & Monitoring Checkup",
    "parameters": 6,
    "reportTime": "4 hours",
    "price": 299,
    "mrp": 599,
    "discount": "50% Off",
    "summary": "Targeted quarterly diabetic management panel evaluating Fasting Blood Sugar, HbA1c 90-day average, urine sugar, and kidney microalbumin.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood & Urine",
    "chips": [
      "Fasting Blood Sugar",
      "HbA1c 3-Month Average",
      "Urine Sugar",
      "Microalbumin Screening"
    ],
    "popularBadge": "DIABETES CARE"
  },
  {
    "id": "pkg-thyroid-checkup",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "organ",
    "name": "Thyroid Checkup",
    "fullName": "Thyroid Health Screening Checkup",
    "parameters": 3,
    "reportTime": "4 hours",
    "price": 199,
    "mrp": 399,
    "discount": "50% Off",
    "summary": "Fast, accurate triple thyroid screening measuring Total T3, Total T4, and ultra-sensitive TSH for weight and hormonal balance.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Total T3",
      "Total T4",
      "Ultra-Sensitive TSH"
    ],
    "popularBadge": "THYROID HEALTH"
  },
  {
    "id": "pkg-liver-package",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "organ",
    "name": "Liver Function Package",
    "fullName": "Comprehensive Liver Function Package",
    "parameters": 12,
    "reportTime": "6 to 10 hours",
    "price": 399,
    "mrp": 799,
    "discount": "50% Off",
    "summary": "Focused hepatic health check covering Bilirubin (Total/Direct/Indirect), SGOT/AST, SGPT/ALT, Alkaline Phosphatase, Protein, and Albumin.",
    "fasting": "8-10 hrs Fasting Recommended",
    "sampleType": "Blood",
    "chips": [
      "Bilirubin Fractions",
      "SGOT / AST",
      "SGPT / ALT",
      "Alkaline Phosphatase",
      "Albumin & Protein"
    ],
    "popularBadge": "LIVER CARE"
  },
  {
    "id": "pkg-kidney-package",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "organ",
    "name": "Kidney Function Package",
    "fullName": "Comprehensive Kidney Function Package",
    "parameters": 10,
    "reportTime": "6 to 10 hours",
    "price": 399,
    "mrp": 799,
    "discount": "50% Off",
    "summary": "Renal health check monitoring Serum Creatinine, Blood Urea, BUN, Uric Acid, Calcium, and vital serum electrolytes.",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Serum Creatinine",
      "Blood Urea & BUN",
      "Uric Acid",
      "Serum Calcium",
      "Electrolytes"
    ],
    "popularBadge": "KIDNEY CARE"
  },
  {
    "id": "pkg-lipid-package",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "organ",
    "name": "Lipid Profile Package",
    "fullName": "Cardiovascular Lipid Profile Package",
    "parameters": 9,
    "reportTime": "6 to 10 hours",
    "price": 349,
    "mrp": 699,
    "discount": "50% Off",
    "summary": "Full cardiovascular cholesterol evaluation tracking Total Cholesterol, HDL Good Cholesterol, LDL Bad Cholesterol, Triglycerides, and VLDL.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "Total Cholesterol",
      "HDL Good",
      "LDL Bad",
      "Triglycerides",
      "VLDL",
      "Atherogenic Ratios"
    ],
    "popularBadge": "HEART HEALTH"
  },
  {
    "id": "pkg-essential-full",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "organ",
    "name": "Essential Full Body Checkup",
    "fullName": "Essential Full Body Checkup",
    "parameters": 58,
    "reportTime": "6 to 10 hours",
    "price": 799,
    "mrp": 1599,
    "discount": "50% Off",
    "summary": "Balanced preventive package covering Complete Blood Count (24), Fasting Sugar, Lipid Screen, Liver Enzymes, Kidney Filtration, and Urine Routine.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood & Urine",
    "chips": [
      "CBC (24)",
      "Fasting Glucose",
      "Lipid Screen",
      "LFT Enzymes",
      "KFT Filtration",
      "Urine Routine"
    ],
    "popularBadge": "SMART VALUE"
  },
  {
    "id": "pkg-advanced-full",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "organ",
    "name": "Advanced Full Body Checkup",
    "fullName": "Advanced Full Body Checkup",
    "parameters": 78,
    "reportTime": "6 to 10 hours",
    "price": 1299,
    "mrp": 2599,
    "discount": "50% Off",
    "summary": "Robust wellness checkup combining CBC, Complete Lipid Profile, Liver Panel, Kidney Panel, Thyroid Profile, HbA1c 3-Month Glucose, and Urine Examination.",
    "fasting": "10-12 hrs Fasting Required",
    "sampleType": "Blood & Urine",
    "chips": [
      "CBC (24)",
      "Lipid (9)",
      "LFT (12)",
      "KFT (10)",
      "Thyroid Profile (3)",
      "HbA1c",
      "Urine Routine"
    ],
    "popularBadge": "FAMILY WELLNESS"
  },
  {
    "id": "pkg-vitamin-screen",
    "type": "package",
    "section": "checkups",
    "categoryGroup": "organ",
    "name": "Vitamin Screening (D + B12)",
    "fullName": "Essential Vitamin Screening (Vitamin D + B12)",
    "parameters": 2,
    "reportTime": "6 to 10 hours",
    "price": 2500,
    "mrp": 4500,
    "discount": "44% Off",
    "summary": "Dual energy and bone health screening measuring 25-OH Vitamin D Total and active Vitamin B12 (Cyanocobalamin).",
    "fasting": "No Fasting Required",
    "sampleType": "Blood",
    "chips": [
      "25-OH Vitamin D Total",
      "Active Serum Vitamin B12",
      "Bone & Nerve Health"
    ],
    "popularBadge": "VITAMIN COMBO"
  }
];

// 4. Application State
const state = {
  cart: [],
  activeTab: "all", // "all" | "tests" | "checkups"
  activeSection: null, // null (all) | section.id (e.g. "hematology")
  activeCheckupFilter: "all", // "all" | "fullbody" | "ultra" | "special" | "organ"
  searchQuery: "",
  selectedCity: "Malebennur",
  pendingBookingItems: []
};

// 5. Initialization
document.addEventListener("DOMContentLoaded", () => {
  // Check saved cart from localStorage if present
  checkLocalStorageCart();

  // Render components
  renderSpecialtyCarousel();
  renderCheckupSection("all");
  renderMensWellnessRail();
  renderSectionPills();
  renderTestCards();
  setupCleanNavTabs();
  setupCleanSearch();
  setupCleanHeaderButtons();
  setupCityPicker();
  setupCartDrawer();
  setupModals();
  setupHubFilterTabs();
  setupWellnessSectionReveal();
  updateCartUI();
});

// 6. Render Specialty Carousel (Circular department icons)
function renderSpecialtyCarousel() {
  const container = document.getElementById("specialtyCarousel");
  if (!container) return;

  container.innerHTML = SPECIALTIES.map(spec => {
    const isActive = (spec.id === "checkups" && state.activeTab === "checkups") || (state.activeSection === spec.id);
    return `
      <div 
        class="specialty-item ${isActive ? 'active' : ''}" 
        data-specialty="${spec.id}" 
        onclick="handleSpecialtyClick('${spec.id}')" 
        role="button" 
        tabindex="0"
        title="${spec.fullName}"
      >
        <div class="specialty-circle">
          ${spec.svg}
        </div>
        <div class="specialty-label">${spec.name}</div>
        <span class="specialty-badge-count">${spec.badge}</span>
      </div>
    `;
  }).join('');
}

function handleSpecialtyClick(specId) {
  if (specId === "checkups") {
    state.activeTab = "checkups";
    const searchSection = document.getElementById("searchResultsSection");
    const mainCatalog = document.getElementById("mainCatalogContainer");
    const testsSection = document.getElementById("testsSection");
    const checkupsSection = document.getElementById("checkupsSection");
    if (searchSection) searchSection.style.display = "none";
    if (mainCatalog) mainCatalog.style.display = "block";
    if (testsSection) testsSection.style.display = "none";
    if (checkupsSection) checkupsSection.style.display = "block";
    updateNavTabsUI();
    updateBreadcrumb();
    renderSpecialtyCarousel();
    scrollToSection("checkupsSection");
  } else {
    showDepartmentTests(specId);
  }
}
window.handleSpecialtyClick = handleSpecialtyClick;

function setupMobileCardViewMore(container, cardSelector, label) {
  if (!container) return;

  container.classList.remove('mobile-card-limit-expanded');
  container.querySelector('.mobile-view-more-btn')?.remove();

  const cards = Array.from(container.querySelectorAll(cardSelector));
  cards.forEach(card => card.classList.remove('mobile-card-extra'));
  if (cards.length <= 4) return;

  cards.slice(4).forEach(card => card.classList.add('mobile-card-extra'));

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'mobile-view-more-btn';
  button.textContent = `View more ${label}`;
  button.setAttribute('aria-expanded', 'false');
  button.addEventListener('click', () => {
    const expanded = container.classList.toggle('mobile-card-limit-expanded');
    button.textContent = expanded ? 'Show less' : `View more ${label}`;
    button.setAttribute('aria-expanded', String(expanded));
  });
  container.appendChild(button);
}

// 7. Render Checkup Section (The Checkup Packages created for the user!)
function renderCheckupSection(group = null) {
  const container = document.getElementById("checkupCardsGrid");
  if (!container) return;

  if (group) {
    state.activeCheckupFilter = group;
  }

  const filter = state.activeCheckupFilter || "all";

  // Update pills UI
  const pills = document.querySelectorAll("#checkupPillsBar .section-pill");
  pills.forEach(p => {
    const grp = p.getAttribute("data-group");
    if (grp === filter) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });

  let checkupList = CATALOG.filter(item => item.type === "package" && !item.planCollection);
  if (filter !== "all") {
    checkupList = checkupList.filter(item => item.categoryGroup === filter);
  }

  // Keep the newly added premium plan visible at the front of the package grid.
  checkupList.sort((a, b) => {
    const aFeatured = a.id === "pkg-wellness-premium-c-pro-utsh" ? 1 : 0;
    const bFeatured = b.id === "pkg-wellness-premium-c-pro-utsh" ? 1 : 0;
    return bFeatured - aFeatured;
  });

  container.innerHTML = checkupList.map(item => renderSingleCardHtml(item, true)).join('');
  setupMobileCardViewMore(container, '.test-card', 'checkups');
}

// 7a. Wellness plan fan-card rail. The data collection stays open for additional plans.
let mensWellnessCenter = 0;
let wellnessCycleDirection = '';

function cycleMensWellness(delta) {
  wellnessCycleDirection = delta > 0 ? 'next' : 'prev';
  mensWellnessCenter += delta;
  renderMensWellnessRail();
}

function getWellnessResponsiveMultiplier(width) {
  if (width < 480) return 0.28;
  if (width < 640) return 0.38;
  if (width < 768) return 0.5;
  if (width < 1024) return 0.75;
  return 1;
}

function getWellnessHeightMultiplier(width) {
  const idealHeight = width < 480 ? 352 : width < 640 ? 416 : width < 768 ? 448 : width < 1024 ? 544 : 608;
  return Math.min(1, (window.innerHeight * 0.7) / idealHeight);
}

function setupWellnessSectionReveal() {
  const section = document.querySelector('.mens-wellness-section');
  if (!section || section.dataset.revealReady === 'true') return;
  section.dataset.revealReady = 'true';

  const replay = () => {
    section.classList.remove('wellness-reveal');
    requestAnimationFrame(() => section.classList.add('wellness-reveal'));
  };

  if (!('IntersectionObserver' in window)) {
    replay();
    return;
  }

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      replay();
      observer.disconnect();
    }
  }, { threshold: 0.18 });

  observer.observe(section);
}

function renderMensWellnessRail() {
  const container = document.getElementById("mensWellnessRail");
  if (!container) return;

  const plans = CATALOG.filter(item => item.planCollection === "mens-wellness");
  const total = plans.length;
  if (!total) {
    container.innerHTML = "";
    return;
  }
  mensWellnessCenter = ((mensWellnessCenter % total) + total) % total;

  const count = document.getElementById("mensWellnessCount");
  if (count) count.textContent = `${total} of 5 plans ready`;

  const previous = document.getElementById("mensWellnessPrev");
  const next = document.getElementById("mensWellnessNext");
  const canCycle = total > 1;
  if (previous) previous.hidden = !canCycle;
  if (next) next.hidden = !canCycle;

  if (total === 1) {
    mensWellnessCenter = 0;
  } else {
    mensWellnessCenter = ((mensWellnessCenter % total) + total) % total;
  }

  const center = (total - 1) / 2;
  const responsiveMultiplier = getWellnessResponsiveMultiplier(window.innerWidth);
  const heightMultiplier = getWellnessHeightMultiplier(window.innerWidth);
  const spread = 30 * responsiveMultiplier;
  container.style.setProperty('--wellness-entry-distance', 40 * responsiveMultiplier);
  const positionFor = (slot) => {
    if (total === 1) return { x: 0, y: 0, rot: 0, scale: 1, z: 10 };
    const distance = (slot - center) / center;
    const abs = Math.abs(distance);
    return { x: distance * spread, y: abs * abs * 7.3 * heightMultiplier, rot: distance * 21, scale: 1 - 0.2244 * abs * abs, z: 10 - Math.abs(slot - center) };
  };

  const isInitialRender = container.dataset.entered !== 'true';
  const renderDirection = wellnessCycleDirection || (isInitialRender ? 'initial' : '');
  wellnessCycleDirection = '';
  container.dataset.direction = renderDirection;
  container.dataset.entered = 'true';
  container.innerHTML = plans.map((plan, index) => `
    <article class="mens-plan-card men-fan-card" data-plan-index="${index}" data-id="${plan.id}" tabindex="0" role="button" aria-label="View ${plan.name} details">
      <div class="mens-plan-glow" aria-hidden="true"></div>
      <div class="mens-plan-topline">
        <span class="mens-plan-eyebrow">WELLNESS SERIES</span>
        <span class="mens-plan-badge">${plan.popularBadge || "CURATED PLAN"}</span>
      </div>
      <h4 class="mens-plan-title">${plan.name}</h4>
      <p class="mens-plan-summary">${plan.summary}</p>
      <div class="mens-plan-price-row">
        <div>
          <span class="mens-plan-price">₹${plan.price.toLocaleString()}</span>
          <span class="mens-plan-mrp">₹${plan.mrp.toLocaleString()}</span>
        </div>
        <span class="mens-plan-discount">${plan.discount}</span>
      </div>
      <div class="mens-plan-stats">
        <span><strong>${plan.parameters}</strong> parameters</span>
        <span>${plan.reportTime} reports</span>
      </div>
      <div class="mens-plan-chips">
        ${(plan.chips || []).slice(0, 4).map(chip => `<span>${chip}</span>`).join('')}
        ${(plan.chips || []).length > 4 ? `<span class="mens-plan-more">+${plan.chips.length - 4} profiles</span>` : ''}
      </div>
      <div class="mens-plan-actions">
        <button class="mens-plan-view" type="button" data-plan-action="details">View plan</button>
        <button class="mens-plan-add ${state.cart.some(c => c.id === plan.id) ? 'in-cart' : ''}" type="button" data-plan-action="cart">${state.cart.some(c => c.id === plan.id) ? '✓ In cart' : '+ Add'}</button>
      </div>
    </article>
  `).join('');

  // Allow deliberate horizontal swipes across the full Wellness Series panel
  // without hijacking vertical page scrolling.
  const swipeSurface = container.closest('.mens-wellness-section') || container;
  let pointerStartX = null;
  let pointerStartY = null;
  let pointerId = null;
  let horizontalGesture = false;
  let pointerCaptured = false;
  let touchStartX = null;
  let touchStartY = null;
  let touchHorizontalGesture = false;

  const resetPointerGesture = () => {
    pointerStartX = null;
    pointerStartY = null;
    pointerId = null;
    horizontalGesture = false;
    pointerCaptured = false;
    touchStartX = null;
    touchStartY = null;
    touchHorizontalGesture = false;
    swipeSurface.classList.remove('is-dragging');
  };

  swipeSurface.onpointerdown = (event) => {
    if (event.pointerType === 'touch') return;
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    pointerStartX = event.clientX;
    pointerStartY = event.clientY;
    pointerId = event.pointerId;
    horizontalGesture = false;
  };

  swipeSurface.onpointermove = (event) => {
    if (event.pointerType === 'touch') return;
    if (pointerStartX === null || event.pointerId !== pointerId) return;
    const deltaX = event.clientX - pointerStartX;
    const deltaY = event.clientY - pointerStartY;
    const movedX = Math.abs(deltaX);
    const movedY = Math.abs(deltaY);

    // Once the gesture is clearly vertical, leave it to the page scroller.
    if (!horizontalGesture && movedY > 10 && movedY > movedX) {
      resetPointerGesture();
      return;
    }

    if (movedX > 10 && movedX > movedY) {
      horizontalGesture = true;
      if (!pointerCaptured && swipeSurface.setPointerCapture) {
        swipeSurface.setPointerCapture(event.pointerId);
        pointerCaptured = true;
      }
      swipeSurface.classList.add('is-dragging');
      event.preventDefault();
    }
  };

  swipeSurface.onpointerup = (event) => {
    if (event.pointerType === 'touch') return;
    if (pointerStartX === null || event.pointerId !== pointerId) return;
    const deltaX = event.clientX - pointerStartX;
    const deltaY = event.clientY - pointerStartY;
    const isHorizontalSwipe = horizontalGesture && Math.abs(deltaX) >= 42 && Math.abs(deltaX) > Math.abs(deltaY);
    if (isHorizontalSwipe) {
      container.dataset.suppressClickUntil = String(Date.now() + 350);
      cycleMensWellness(deltaX < 0 ? 1 : -1);
    }
    if (pointerCaptured && swipeSurface.hasPointerCapture?.(event.pointerId)) swipeSurface.releasePointerCapture(event.pointerId);
    resetPointerGesture();
  };

  swipeSurface.onpointercancel = resetPointerGesture;

  // Touch-event fallback for mobile browsers/previews that do not complete
  // the pointer-event sequence during a horizontal gesture.
  swipeSurface.ontouchstart = (event) => {
    const touch = event.touches[0];
    if (!touch) return;
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    touchHorizontalGesture = false;
  };

  swipeSurface.ontouchmove = (event) => {
    if (touchStartX === null || !event.touches[0]) return;
    const touch = event.touches[0];
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;
    const movedX = Math.abs(deltaX);
    const movedY = Math.abs(deltaY);

    if (movedX > 10 && movedX > movedY) {
      touchHorizontalGesture = true;
      swipeSurface.classList.add('is-dragging');
      event.preventDefault();
    }
  };

  swipeSurface.ontouchend = (event) => {
    if (touchStartX === null) return;
    const touch = event.changedTouches[0];
    if (!touch) return;
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;
    const isHorizontalSwipe = Math.abs(deltaX) >= 28 && Math.abs(deltaX) > Math.abs(deltaY) * 0.75;
    if (isHorizontalSwipe) {
      container.dataset.suppressClickUntil = String(Date.now() + 350);
      cycleMensWellness(deltaX < 0 ? 1 : -1);
    }
    resetPointerGesture();
  };

  swipeSurface.ontouchcancel = resetPointerGesture;

  if (container.dataset.clickGuardReady !== 'true') {
    container.dataset.clickGuardReady = 'true';
    container.addEventListener('click', (event) => {
      const suppressClickUntil = Number(container.dataset.suppressClickUntil || 0);
      if (!suppressClickUntil || Date.now() > suppressClickUntil) return;
      event.preventDefault();
      event.stopPropagation();
      delete container.dataset.suppressClickUntil;
    }, true);
  }

  const cards = Array.from(container.querySelectorAll('.men-fan-card'));
  cards.forEach((card, index) => {
    const centerSlot = total > 1 ? (total - 1) / 2 : 0;
    const planSlot = total > 1 ? (index - mensWellnessCenter + centerSlot + total) % total : 0;
    const config = positionFor(planSlot);
    card.style.setProperty('--fan-x', config.x);
    card.style.setProperty('--fan-y', config.y);
    card.style.setProperty('--fan-rot', config.rot);
    card.style.setProperty('--fan-scale', config.scale);
    card.style.setProperty('--fan-push-x', 0);
    card.style.setProperty('--fan-hover-y', 0);
    card.style.setProperty('--fan-hover-rot', 0);
    card.style.setProperty('--fan-hover-scale', 1);
    card.style.setProperty('--fan-slot-index', planSlot);
    card.style.setProperty('--fan-enter-delay', `${0.2 + planSlot * 0.06}s`);
    card.dataset.fanSlot = String(planSlot);
    card.style.zIndex = config.z;
  });

  cards.forEach(card => {
    const planId = card.dataset.id;
    const viewButton = card.querySelector('[data-plan-action="details"]');
    const cartButton = card.querySelector('[data-plan-action="cart"]');

    card.addEventListener('click', (event) => {
      if (event.target.closest('button')) return;
      openTestDetailsModal(planId);
    });
    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openTestDetailsModal(planId);
    });
    viewButton?.addEventListener('click', (event) => {
      event.stopPropagation();
      openTestDetailsModal(planId);
    });
    cartButton?.addEventListener('click', (event) => {
      event.stopPropagation();
      handleTestCardAction(planId);
    });
  });

  const clearFanHover = () => cards.forEach(card => {
    card.style.setProperty('--fan-push-x', 0);
    card.style.setProperty('--fan-hover-y', 0);
    card.style.setProperty('--fan-hover-rot', 0);
    card.style.setProperty('--fan-hover-scale', 1);
  });
  cards.forEach(card => {
    const updateFanHover = () => {
      const hoveredSlot = Number(card.dataset.fanSlot);
      const centerSlot = (total - 1) / 2;
      const horizontalMultiplier = getWellnessResponsiveMultiplier(window.innerWidth);
      const heightMultiplier = getWellnessHeightMultiplier(window.innerWidth);

      cards.forEach(otherCard => {
        const otherSlot = Number(otherCard.dataset.fanSlot);
        const distance = Math.abs(otherSlot - hoveredSlot);

        if (otherSlot === hoveredSlot) {
          otherCard.style.setProperty('--fan-push-x', 0);
          otherCard.style.setProperty('--fan-hover-y', 2.5 * heightMultiplier);
          otherCard.style.setProperty('--fan-hover-rot', 0);
          otherCard.style.setProperty('--fan-hover-scale', 1.08);
          return;
        }

        const normalized = centerSlot > 0 ? (otherSlot - centerSlot) / centerSlot : 0;
        const pushStrength = 8 * (1 - Math.abs(normalized)) * (1 + 0.2 * Math.max(0, 3 - distance));
        const edgeLift = (otherSlot === cards.length - 1 && hoveredSlot < centerSlot) || (otherSlot === 0 && hoveredSlot > centerSlot) ? heightMultiplier : 0;
        const push = (otherSlot < hoveredSlot ? -1 : 1) * pushStrength * horizontalMultiplier;
        const rotation = (otherSlot < hoveredSlot ? -1 : 1) * (3 / (distance + 1));

        otherCard.style.setProperty('--fan-push-x', push);
        otherCard.style.setProperty('--fan-hover-y', edgeLift);
        otherCard.style.setProperty('--fan-hover-rot', rotation);
        otherCard.style.setProperty('--fan-hover-scale', 1);
      });
    };
    card.addEventListener('mouseenter', updateFanHover);
    card.addEventListener('focus', updateFanHover);
    card.addEventListener('mouseleave', clearFanHover);
    card.addEventListener('blur', clearFanHover);
  });

  if (renderDirection) {
    const directionDuration = renderDirection === 'initial' ? 1750 : 620;
    window.setTimeout(() => {
      if (container.dataset.direction === renderDirection) container.dataset.direction = '';
    }, directionDuration);
  }

  if (previous) previous.onclick = () => cycleMensWellness(-1);
  if (next) next.onclick = () => cycleMensWellness(1);
}
window.renderMensWellnessRail = renderMensWellnessRail;

function filterCheckupGroup(group) {
  renderCheckupSection(group);
}
window.filterCheckupGroup = filterCheckupGroup;

// 8. Render Quick Section Filter Pills Bar for Tests
function renderSectionPills() {
  const container = document.getElementById("sectionPillsBar");
  if (!container) return;

  const testSections = SECTIONS.filter(s => s.id !== "checkups");
  const totalTestsCount = CATALOG.filter(c => c.type === "test").length;

  let html = `
    <button 
      class="section-pill ${state.activeSection === null ? 'active' : ''}" 
      onclick="handleSectionPillClick(null)"
    >
      <span>All 13 Groups</span>
      <span class="pill-count">13</span>
    </button>
  `;

  testSections.forEach(sec => {
    const count = CATALOG.filter(c => c.section === sec.id).length;
    const isActive = state.activeSection === sec.id;
    html += `
      <button 
        class="section-pill ${isActive ? 'active' : ''}" 
        onclick="handleSectionPillClick('${sec.id}')"
      >
        <span>${sec.num}. ${sec.shortName}</span>
        <span class="pill-count">${count}</span>
      </button>
    `;
  });

  // Browse all separate tests shortcut pill
  html += `
    <button 
      class="section-pill" 
      style="background: #FFF4EC; border-color: #F26D00; color: #D85D00; font-weight: 700;"
      onclick="showAllIndividualTests()"
    >
      <span>🔬 View All 160 Separate Tests</span>
    </button>
  `;

  // Checkups shortcut pill
  html += `
    <button 
      class="section-pill checkup-pill" 
      onclick="scrollToSection('checkupsSection')"
    >
      <span>🏥 Full Body Checkups (19)</span>
    </button>
  `;

  container.innerHTML = html;
}

function handleSectionPillClick(secId) {
  if (!secId || state.activeSection === secId) {
    state.activeSection = null;
  } else {
    state.activeSection = secId;
  }
  state.activeTab = "tests";

  const searchSection = document.getElementById("searchResultsSection");
  const mainCatalog = document.getElementById("mainCatalogContainer");
  const testsSection = document.getElementById("testsSection");
  const checkupsSection = document.getElementById("checkupsSection");
  if (searchSection) searchSection.style.display = "none";
  if (mainCatalog) mainCatalog.style.display = "block";
  if (testsSection) testsSection.style.display = "block";
  if (checkupsSection) checkupsSection.style.display = "none";

  updateNavTabsUI();
  updateBreadcrumb();
  renderSpecialtyCarousel();
  renderSectionPills();
  renderTestCards();
  scrollToSection("testsSection");
}
window.handleSectionPillClick = handleSectionPillClick;

// 9. Render Diagnostic Tests (Groups only by default, or single department tests when entered)
function renderTestCards() {
  const container = document.getElementById("testCardsGrid");
  const countEl = document.getElementById("showingCount");
  if (!container) return;

  const testSections = SECTIONS.filter(s => s.id !== "checkups");
  const totalTestsCount = CATALOG.filter(c => c.type === "test").length;

  if (state.activeSection) {
    // Single Section Selected: Show only this department's individual tests with back button
    const currentSec = SECTIONS.find(s => s.id === state.activeSection);
    const testsInSection = CATALOG.filter(item => item.type === "test" && item.section === state.activeSection);

    if (countEl) {
      countEl.innerHTML = `Showing ${testsInSection.length} separate individual tests in <strong>${currentSec ? currentSec.name : state.activeSection}</strong> • <a href="javascript:void(0)" onclick="handleSectionPillClick(null)" style="color: #F26D00; font-weight: 600; text-decoration: underline; margin-left: 6px;">← Back to All 13 Groups</a>`;
    }

    container.innerHTML = `
      <div class="catalog-section-group" id="sec-${currentSec ? currentSec.id : state.activeSection}">
        <div class="catalog-section-header">
          <div class="catalog-section-badge" style="color: ${currentSec ? currentSec.color : '#F26D00'}; background: ${currentSec ? currentSec.color : '#F26D00'}15;">
            DEPARTMENT ${currentSec ? String(currentSec.num).padStart(2, '0') : ''}
          </div>
          <div style="flex: 1;">
            <h3 class="catalog-section-title">${currentSec ? currentSec.name : ''}</h3>
            <p class="catalog-section-desc">${currentSec ? currentSec.desc : ''}</p>
          </div>
          <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
            <button class="btn btn-sm btn-outline" onclick="handleSectionPillClick(null)" style="font-size: 12.5px; padding: 7px 16px; border-radius: 9999px; cursor: pointer; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
              ← Back to All 13 Groups
            </button>
            <span class="catalog-section-count">${testsInSection.length} Tests</span>
          </div>
        </div>
        <div class="cards-subgrid">
          ${testsInSection.map(item => renderSingleCardHtml(item)).join('')}
        </div>
      </div>
    `;
    setupMobileCardViewMore(container, '.test-card', 'tests');
  } else {
    // Default: ONLY show the 13 department groups
    if (countEl) {
      countEl.innerHTML = `Showing 13 clinical pathology test departments (${totalTestsCount} individual tests available) • Select any group to view its separate tests`;
    }

    let groupsHtml = `<div class="department-groups-grid">`;

    testSections.forEach(sec => {
      const tests = CATALOG.filter(c => c.type === "test" && c.section === sec.id);
      if (tests.length === 0) return;

      const prices = tests.map(t => t.price).filter(p => typeof p === 'number' && !isNaN(p));
      const minPrice = prices.length > 0 ? Math.min(...prices) : 100;
      const sampleTests = tests.slice(0, 4);
      const remainingCount = tests.length - sampleTests.length;

      groupsHtml += `
        <div class="test-group-card" onclick="showDepartmentTests('${sec.id}')" role="button" tabindex="0" title="Click to view all ${tests.length} separate tests in ${sec.name}">
          <div>
            <div class="group-card-header">
              <div class="group-card-badges">
                <span class="group-num-pill" style="color: ${sec.color}; background: ${sec.color}15;">DEPT ${String(sec.num).padStart(2, '0')}</span>
                <span class="group-count-pill">${tests.length} Tests</span>
              </div>
              <div class="group-icon-wrap" style="background: ${sec.color}12;">
                ${sec.iconSvg}
              </div>
            </div>

            <h3 class="group-card-title">${sec.name}</h3>
            <p class="group-card-desc">${sec.desc}</p>

            <div class="group-card-samples">
              <div class="group-samples-title">Included Tests Sample:</div>
              <div class="group-chips-row">
                ${sampleTests.map(t => `<span class="group-chip">${t.name}</span>`).join('')}
                ${remainingCount > 0 ? `<span class="group-chip-more">+${remainingCount} more</span>` : ''}
              </div>
            </div>
          </div>

          <div class="group-card-footer">
            <div class="group-card-price-info">
              <span class="group-price-from">Tests from <strong>₹${minPrice.toLocaleString()}</strong></span>
              <span class="group-time-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                6 to 10 Hour Digital Reports
              </span>
            </div>
            <button class="group-action-btn" onclick="event.stopPropagation(); showDepartmentTests('${sec.id}')">
              View ${tests.length} Tests →
            </button>
          </div>
        </div>
      `;
    });

    groupsHtml += `</div>`;
    container.innerHTML = groupsHtml;
    setupMobileCardViewMore(container, '.test-group-card', 'test groups');
  }
}

// Enter a specific department section: shows that department's tests in the interactive view
function showDepartmentTests(secId) {
  state.activeSection = secId;
  state.activeTab = "tests";

  const catalogMain = document.getElementById("mainCatalogContainer");
  const catalogTestsSection = document.getElementById("testsSection");
  const catalogCheckupsSection = document.getElementById("checkupsSection");
  const catalogSearchSection = document.getElementById("searchResultsSection");
  const catalogSearchInput = document.getElementById("cleanSearchInput");

  state.searchQuery = "";
  if (catalogSearchInput) catalogSearchInput.value = "";
  window.syncCleanSearchPrompt?.();
  if (catalogSearchSection) catalogSearchSection.style.display = "none";
  if (catalogMain) catalogMain.style.display = "block";
  if (catalogTestsSection) catalogTestsSection.style.display = "block";
  if (catalogCheckupsSection) catalogCheckupsSection.style.display = "none";

  updateNavTabsUI();
  updateBreadcrumb();
  renderSpecialtyCarousel();
  renderSectionPills();
  renderTestCards();
  scrollToSection("testsSection");
  return;

  const allTests = CATALOG.filter(item => item.type === "test");
  const testsInSection = allTests.filter(item => item.section === secId);
  const currentSec = SECTIONS.find(s => s.id === secId);

  const searchSection = document.getElementById("searchResultsSection");
  const searchGrid = document.getElementById("searchResultsGrid");
  const searchTitle = document.getElementById("searchResultsTitle");
  const searchSub = document.getElementById("searchResultsSubtitle");
  const searchTag = document.getElementById("searchResultsTag");
  const searchControls = document.getElementById("searchFilterControls");
  const mainCatalog = document.getElementById("mainCatalogContainer");
  const searchInput = document.getElementById("cleanSearchInput");

  if (searchInput) searchInput.value = "";

  if (searchTag) searchTag.textContent = currentSec ? `DEPT ${String(currentSec.num).padStart(2, '0')} • ${currentSec.shortName}` : "DEPARTMENT TESTS";
  if (searchTitle) searchTitle.textContent = currentSec ? `${currentSec.name} (${testsInSection.length} Tests)` : "Department Tests";
  if (searchSub) {
    searchSub.textContent = currentSec ? currentSec.desc : "Diagnostic tests in Malebennur";
  }

  if (searchControls) {
    searchControls.style.display = "block";
    const testSections = SECTIONS.filter(s => s.id !== "checkups");
    searchControls.innerHTML = `
      <div class="search-dept-pills-row">
        <button class="search-dept-pill" onclick="showAllIndividualTests()">All Tests (160)</button>
        ${testSections.map(s => `
          <button class="search-dept-pill ${s.id === secId ? 'active' : ''}" onclick="showDepartmentTests('${s.id}')">
            ${s.num}. ${s.shortName} (${CATALOG.filter(c => c.section === s.id).length})
          </button>
        `).join('')}
      </div>
    `;
  }

  if (searchGrid) {
    searchGrid.innerHTML = testsInSection.map(item => renderSingleCardHtml(item)).join('');
  }

  if (searchSection) searchSection.style.display = "block";
  if (mainCatalog) mainCatalog.style.display = "none";

  updateNavTabsUI();
  updateBreadcrumb();
  renderSpecialtyCarousel();
  window.scrollTo({ top: 120, behavior: 'smooth' });
}
window.showDepartmentTests = showDepartmentTests;

// Display all 160 separate individual tests across all departments
function showAllIndividualTests() {
  state.activeSection = null;
  state.searchQuery = "";

  const allTestsMain = document.getElementById("mainCatalogContainer");
  const allTestsSection = document.getElementById("testsSection");
  const allCheckupsSection = document.getElementById("checkupsSection");
  const allSearchSection = document.getElementById("searchResultsSection");
  const allSearchInput = document.getElementById("cleanSearchInput");

  if (allSearchInput) allSearchInput.value = "";
  window.syncCleanSearchPrompt?.();
  if (allSearchSection) allSearchSection.style.display = "none";
  if (allTestsMain) allTestsMain.style.display = "block";
  if (allTestsSection) allTestsSection.style.display = "block";
  if (allCheckupsSection) allCheckupsSection.style.display = "none";

  updateNavTabsUI();
  updateBreadcrumb();
  renderSpecialtyCarousel();
  renderSectionPills();
  renderTestCards();
  scrollToSection("testsSection");
  return;

  const allTests = CATALOG.filter(item => item.type === "test");

  const searchSection = document.getElementById("searchResultsSection");
  const searchGrid = document.getElementById("searchResultsGrid");
  const searchTitle = document.getElementById("searchResultsTitle");
  const searchSub = document.getElementById("searchResultsSubtitle");
  const searchTag = document.getElementById("searchResultsTag");
  const searchControls = document.getElementById("searchFilterControls");
  const mainCatalog = document.getElementById("mainCatalogContainer");
  const searchInput = document.getElementById("cleanSearchInput");

  if (searchInput) searchInput.value = "";
  window.syncCleanSearchPrompt?.();

  if (searchTag) searchTag.textContent = "ALL INDIVIDUAL TESTS";
  if (searchTitle) searchTitle.textContent = "All 160 Separate Individual Tests";
  if (searchSub) {
    searchSub.textContent = "Browse all 160 individual diagnostic tests across 13 clinical departments in Malebennur";
  }

  if (searchControls) {
    searchControls.style.display = "block";
    const testSections = SECTIONS.filter(s => s.id !== "checkups");
    searchControls.innerHTML = `
      <div class="search-dept-pills-row">
        <button class="search-dept-pill active" onclick="showAllIndividualTests()">All Tests (160)</button>
        ${testSections.map(s => `
          <button class="search-dept-pill" onclick="showDepartmentTests('${s.id}')">
            ${s.num}. ${s.shortName} (${CATALOG.filter(c => c.section === s.id).length})
          </button>
        `).join('')}
      </div>
    `;
  }

  if (searchGrid) {
    searchGrid.innerHTML = allTests.map(item => renderSingleCardHtml(item)).join('');
  }

  if (searchSection) searchSection.style.display = "block";
  if (mainCatalog) mainCatalog.style.display = "none";

  updateBreadcrumb();
  renderSectionPills();
  window.scrollTo({ top: 120, behavior: 'smooth' });
}
window.showAllIndividualTests = showAllIndividualTests;

// 10. Single Card HTML Generator (Uniform, Clean, Simple - Matching Reference Image 1)
function renderSingleCardHtml(item, isCheckup = false) {
  const inCart = state.cart.some(c => c.id === item.id);
  const paramCount = item.parameters || (item.chips ? item.chips.length : 1);
  const reportTime = item.reportTime || '6 to 10 hours';
  const discountText = item.discount || (item.mrp > item.price ? `${Math.round(((item.mrp - item.price) / item.mrp) * 100)}% Off` : '');

  return `
    <div class="test-card ${isCheckup ? 'checkup-card' : ''}" data-id="${item.id}" onclick="openTestDetailsModal('${item.id}')" title="Click to view all parameters & test details">
      <div>
        <h3 class="test-card-title">${item.name}</h3>

        <div class="test-card-meta">
          <div class="meta-col">
            <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="#A89485" stroke-width="2">
              <path d="M2 15c6.667-6 13.333 0 20-6"></path>
              <path d="M2 9c6.667 6 13.333 0 20 6"></path>
              <line x1="7" y1="11" x2="7" y2="13"></line>
              <line x1="12" y1="9" x2="12" y2="15"></line>
              <line x1="17" y1="11" x2="17" y2="13"></line>
            </svg>
            <div class="meta-text">
              <span class="meta-label">INCLUDES</span>
              <span class="meta-value">${paramCount} ${paramCount === 1 ? 'Parameter' : 'Parameters'}</span>
            </div>
          </div>

          <div class="meta-col">
            <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="#A89485" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
            <div class="meta-text">
              <span class="meta-label">REPORTS IN</span>
              <span class="meta-value">${reportTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="test-card-footer">
        <div class="test-price-block">
          <div class="test-mrp-row">
            ${item.mrp && item.mrp > item.price ? `<span class="test-mrp">₹${item.mrp.toLocaleString()}</span>` : ''}
            ${discountText ? `<span class="test-discount-badge">${discountText}</span>` : ''}
          </div>
          <div class="test-final-price">₹${item.price.toLocaleString()}</div>
        </div>

        <button 
          class="test-action-btn ${inCart ? 'in-cart-btn' : 'add-btn'}" 
          data-id="${item.id}"
          onclick="event.stopPropagation(); handleTestCardAction('${item.id}')"
          aria-label="${inCart ? 'In cart' : 'Add ' + item.name + ' to cart'}"
        >
          ${inCart ? '✓ In cart' : '+ Add'}
        </button>
      </div>
    </div>
  `;
}

// 11. Test Card Button Action
function handleTestCardAction(id) {
  const inCart = state.cart.some(c => c.id === id);
  if (inCart) {
    openCartDrawer();
  } else {
    toggleCartItem(id);
  }
}
window.handleTestCardAction = handleTestCardAction;

// ============================================================================
// TEST / CHECKUP DETAILED MODAL (Matching Reference Image 2 & 3)
// ============================================================================
let currentDetailItemId = null;

const SYSTEM_DEFINITIONS = {
  blood: {
    title: "Blood Health",
    desc: "Looks at how well the blood carries oxygen, a common cause of tiredness.",
    icon: "blood",
    defaultParams: [
      "Hemoglobin", "RBC (Red Blood Cell Count)", "Packed Cell Volume (PCV)", 
      "MCV (Mean Corpuscular Volume)", "MCH", "MCHC", "RDW-CV", 
      "Total Leukocyte Count (TLC / WBC)", "Neutrophils", "Lymphocytes", 
      "Monocytes", "Eosinophils", "Basophils", "Absolute Neutrophil Count", 
      "Absolute Lymphocyte Count", "Absolute Monocyte Count", "Absolute Eosinophil Count", 
      "Absolute Basophil Count", "Platelet Count", "Mean Platelet Volume (MPV)", 
      "Plateletcrit (PCT)", "ESR (Erythrocyte Sedimentation Rate)", "Peripheral Blood Smear",
      "Reticulocyte Count"
    ]
  },
  thyroid: {
    title: "Thyroid Function",
    desc: "Checks the thyroid, which regulates metabolism and is often behind low energy.",
    icon: "thyroid",
    defaultParams: ["TSH (Thyroid Stimulating Hormone)", "Total Triiodothyronine (T3)", "Total Thyroxine (T4)"]
  },
  kidney: {
    title: "Kidney Health",
    desc: "Checks how well the kidneys are filtering, an area that often stays quiet until late.",
    icon: "kidney",
    defaultParams: [
      "Serum Creatinine", "Blood Urea", "Uric Acid", "Blood Urea Nitrogen (BUN)", 
      "BUN / Creatinine Ratio", "Serum Calcium", "Serum Phosphorus", 
      "Serum Sodium (Na+)", "Serum Potassium (K+)", "Serum Chloride (Cl-)"
    ]
  },
  liver: {
    title: "Liver Function",
    desc: "Checks how well the liver is processing nutrients, filtering toxins, and producing vital proteins.",
    icon: "liver",
    defaultParams: [
      "Bilirubin - Total", "Bilirubin - Direct (Conjugated)", "Bilirubin - Indirect", 
      "SGOT / AST (Aspartate Aminotransferase)", "SGPT / ALT (Alanine Aminotransferase)", 
      "Alkaline Phosphatase (ALP)", "Total Protein", "Serum Albumin", 
      "Serum Globulin", "A/G Ratio", "Gamma Glutamyl Transferase (GGTP)"
    ]
  },
  heart: {
    title: "Lipid & Heart Health",
    desc: "Evaluates cardiac health, circulating cholesterol transport, and plaque formation risk.",
    icon: "heart",
    defaultParams: [
      "Total Cholesterol", "HDL Cholesterol ('Good' Cholesterol)", 
      "LDL Cholesterol ('Bad' Cholesterol)", "Triglycerides", 
      "VLDL Cholesterol", "Non-HDL Cholesterol", "Total Cholesterol / HDL Ratio", 
      "LDL / HDL Ratio"
    ]
  },
  nutrition: {
    title: "Nutritional Status",
    desc: "Measures key vitamins behind everyday energy, mood, and focus.",
    icon: "nutrition",
    defaultParams: ["Vitamin D (25-OH)", "Vitamin B12 (Cyanocobalamin)", "Folic Acid / Folate", "Iron Deficiency Profile"]
  },
  diabetes: {
    title: "Blood Sugar & Diabetes",
    desc: "Assesses blood glucose regulation, insulin resistance, and glycemic stability.",
    icon: "diabetes",
    defaultParams: ["Fasting Blood Sugar (Glucose)", "Postprandial Blood Sugar (PPBS)", "HbA1c (Glycated Hemoglobin 3-Month Average)", "Estimated Average Glucose (eAG)"]
  },
  urine: {
    title: "Urinalysis & Renal Screen",
    desc: "Detects cellular elements, protein leakage, urinary tract infection, and renal sediment.",
    icon: "urine",
    defaultParams: [
      "Colour & Appearance", "Specific Gravity", "pH", "Protein / Albumin", 
      "Urine Glucose", "Ketone Bodies", "Urine Bilirubin", "Urobilinogen", 
      "Pus Cells (Leukocytes)", "RBCs (Microscopic)", "Epithelial Cells", 
      "Casts & Crystals"
    ]
  },
  immunity: {
    title: "Infection & Immunity",
    desc: "Screens for systemic inflammation, active immunological responses, and pathogens.",
    icon: "immunity",
    defaultParams: ["C-Reactive Protein (CRP / hs-CRP)", "Rheumatoid Factor (RA)", "Serum Ferritin", "Immune Markers"]
  }
};

function getSystemIconSvg(type) {
  switch (type) {
    case 'blood':
      return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E11D48" stroke-width="1.8"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="#FFE4E6"/></svg>`;
    case 'thyroid':
      return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366F1" stroke-width="1.8"><path d="M12 6c-2-2-5-2-7 0s-2 6 1 9c2 2 4 4 6 5 2-1 4-3 6-5 3-3 3-7 1-9s-5-2-7 0z" fill="#EEF2FF"/><circle cx="12" cy="12" r="2" fill="#6366F1"/></svg>`;
    case 'kidney':
      return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="1.8"><path d="M7 6c-2.5 0-4 2.5-4 5.5 0 3 2 6.5 4 8.5 2.5-1 3-3.5 2-6-.7-1.8 0-4 1-5-1-2-2-3-3-3z" fill="#FEF3C7"/><path d="M17 6c2.5 0 4 2.5 4 5.5 0 3-2 6.5-4 8.5-2.5-1-3-3.5-2-6 .7-1.8 0-4-1-5 1-2 2-3 3-3z" fill="#FEF3C7"/></svg>`;
    case 'liver':
      return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EA580C" stroke-width="1.8"><path d="M4 14c0-4 3-8 9-9 4 0 7 2 7 6 0 4-4 8-10 8-3.5 0-6-2-6-5z" fill="#FFEDD5"/></svg>`;
    case 'heart':
      return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="#FEE2E2"/></svg>`;
    case 'nutrition':
      return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="1.8"><path d="M12 2a9 9 0 0 1 9 9v1a9 9 0 0 1-18 0v-1a9 9 0 0 1 9-9z" fill="#DCFCE7"/><path d="M8 12c1.5 2 4.5 2 6 0"/><line x1="12" y1="2" x2="12" y2="7"/></svg>`;
    case 'diabetes':
      return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="1.8"><circle cx="12" cy="12" r="9" fill="#E0F2FE"/><path d="M12 7v10M7 12h10" stroke-linecap="round"/></svg>`;
    case 'urine':
      return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CA8A04" stroke-width="1.8"><path d="M6 2v6a6 6 0 0 0 12 0V2" fill="#FEF08A"/><line x1="4" y1="2" x2="20" y2="2"/><line x1="6" y1="8" x2="18" y2="8"/></svg>`;
    default:
      return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#EDE9FE"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>`;
  }
}

function getBodySystemsForItem(item) {
  if (!item) return [];
  if (item.clinicalProfiles && item.clinicalProfiles.length) {
    return item.clinicalProfiles.map(profile => ({
      title: profile.title,
      desc: profile.desc,
      icon: profile.icon || "immunity",
      params: profile.params || []
    }));
  }
  const systems = [];
  const text = ((item.name || '') + ' ' + (item.fullName || '') + ' ' + (item.summary || '') + ' ' + (item.chips ? item.chips.join(' ') : '')).toLowerCase();
  const isPackage = item.type === 'package';

  if (isPackage) {
    if (text.includes('cbc') || text.includes('blood') || text.includes('hemoglobin') || text.includes('full body') || text.includes('checkup')) {
      systems.push({ ...SYSTEM_DEFINITIONS.blood, params: [...SYSTEM_DEFINITIONS.blood.defaultParams] });
    }
    if (text.includes('thyroid') || text.includes('tsh') || text.includes('tft') || text.includes('full body') || text.includes('essential') || text.includes('women') || text.includes('senior')) {
      systems.push({ ...SYSTEM_DEFINITIONS.thyroid, params: [...SYSTEM_DEFINITIONS.thyroid.defaultParams] });
    }
    if (text.includes('vit') || text.includes('vitamin') || text.includes('iron') || text.includes('advanced') || text.includes('comprehensive') || text.includes('women') || text.includes('essential') || text.includes('senior')) {
      systems.push({ ...SYSTEM_DEFINITIONS.nutrition, params: SYSTEM_DEFINITIONS.nutrition.defaultParams.slice(0, 2) });
    }
    if (text.includes('kft') || text.includes('kidney') || text.includes('creatinine') || text.includes('renal') || text.includes('full body') || text.includes('checkup')) {
      systems.push({ ...SYSTEM_DEFINITIONS.kidney, params: [...SYSTEM_DEFINITIONS.kidney.defaultParams] });
    }
    if (text.includes('lft') || text.includes('liver') || text.includes('bilirubin') || text.includes('sgot') || text.includes('full body') || text.includes('checkup')) {
      systems.push({ ...SYSTEM_DEFINITIONS.liver, params: [...SYSTEM_DEFINITIONS.liver.defaultParams] });
    }
    if (text.includes('lipid') || text.includes('heart') || text.includes('cholesterol') || text.includes('cardiac') || text.includes('full body') || text.includes('checkup')) {
      systems.push({ ...SYSTEM_DEFINITIONS.heart, params: [...SYSTEM_DEFINITIONS.heart.defaultParams] });
    }
    if (text.includes('sugar') || text.includes('glucose') || text.includes('hba1c') || text.includes('diabetes') || text.includes('full body') || text.includes('checkup')) {
      systems.push({ ...SYSTEM_DEFINITIONS.diabetes, params: SYSTEM_DEFINITIONS.diabetes.defaultParams.slice(0, 2) });
    }
    if (text.includes('urine') || text.includes('urinalysis') || text.includes('full body') || text.includes('checkup')) {
      systems.push({ ...SYSTEM_DEFINITIONS.urine, params: [...SYSTEM_DEFINITIONS.urine.defaultParams] });
    }
  } else {
    if (text.includes('cbc') || text.includes('hemoglobin') || text.includes('platelet') || text.includes('blood count') || text.includes('wbc') || text.includes('rbc') || text.includes('esr') || text.includes('smear') || text.includes('pcv') || text.includes('reticulocyte')) {
      const chips = item.chips && item.chips.length ? item.chips : SYSTEM_DEFINITIONS.blood.defaultParams;
      systems.push({ ...SYSTEM_DEFINITIONS.blood, params: chips });
    } else if (text.includes('thyroid') || text.includes('tsh') || text.includes('t3') || text.includes('t4')) {
      systems.push({ ...SYSTEM_DEFINITIONS.thyroid, params: item.chips && item.chips.length ? item.chips : SYSTEM_DEFINITIONS.thyroid.defaultParams });
    } else if (text.includes('lipid') || text.includes('cholesterol') || text.includes('triglyceride') || text.includes('hdl') || text.includes('ldl') || text.includes('cardiac') || text.includes('heart') || text.includes('troponin')) {
      systems.push({ ...SYSTEM_DEFINITIONS.heart, params: item.chips && item.chips.length ? item.chips : SYSTEM_DEFINITIONS.heart.defaultParams });
    } else if (text.includes('liver') || text.includes('lft') || text.includes('bilirubin') || text.includes('sgot') || text.includes('sgpt') || text.includes('ast') || text.includes('alt') || text.includes('albumin') || text.includes('hepatitis')) {
      systems.push({ ...SYSTEM_DEFINITIONS.liver, params: item.chips && item.chips.length ? item.chips : SYSTEM_DEFINITIONS.liver.defaultParams });
    } else if (text.includes('kidney') || text.includes('kft') || text.includes('rft') || text.includes('creatinine') || text.includes('urea') || text.includes('uric') || text.includes('bun') || text.includes('electrolyte') || text.includes('calcium') || text.includes('potassium') || text.includes('sodium')) {
      systems.push({ ...SYSTEM_DEFINITIONS.kidney, params: item.chips && item.chips.length ? item.chips : SYSTEM_DEFINITIONS.kidney.defaultParams });
    } else if (text.includes('sugar') || text.includes('glucose') || text.includes('hba1c') || text.includes('insulin') || text.includes('fbs') || text.includes('ppbs') || text.includes('diabetes')) {
      systems.push({ ...SYSTEM_DEFINITIONS.diabetes, params: item.chips && item.chips.length ? item.chips : SYSTEM_DEFINITIONS.diabetes.defaultParams });
    } else if (text.includes('vitamin') || text.includes('vit') || text.includes('b12') || text.includes('folate') || text.includes('iron') || text.includes('ferritin') || text.includes('nutrition')) {
      systems.push({ ...SYSTEM_DEFINITIONS.nutrition, params: item.chips && item.chips.length ? item.chips : SYSTEM_DEFINITIONS.nutrition.defaultParams });
    } else if (text.includes('urine') || text.includes('urinalysis') || text.includes('microalbumin')) {
      systems.push({ ...SYSTEM_DEFINITIONS.urine, params: item.chips && item.chips.length ? item.chips : SYSTEM_DEFINITIONS.urine.defaultParams });
    } else if (text.includes('crp') || text.includes('esr') || text.includes('widal') || text.includes('typhoid') || text.includes('dengue') || text.includes('malaria') || text.includes('hiv') || text.includes('ra factor') || text.includes('infection') || text.includes('immunity')) {
      systems.push({ ...SYSTEM_DEFINITIONS.immunity, params: item.chips && item.chips.length ? item.chips : SYSTEM_DEFINITIONS.immunity.defaultParams });
    } else {
      const chips = (item.chips && item.chips.length > 0) ? item.chips : [item.name, 'Clinical Reference Range', 'Analytical Quantitative Value', 'Pathologist Interpretation'];
      systems.push({
        title: item.name + " Panel",
        desc: item.summary || ("Diagnostic evaluation and quantitative laboratory measurement for " + item.name + "."),
        icon: "blood",
        params: chips
      });
    }
  }

  return systems;
}

function renderTestDetailModalContent(item) {
  const inCart = state.cart.some(c => c.id === item.id);
  const systems = getBodySystemsForItem(item);
  const totalParams = item.parameters || systems.reduce((acc, s) => acc + s.params.length, 0);
  const totalTestsCount = item.chips ? item.chips.length : (systems.length > 1 ? systems.length + ' tests' : '1 test');
  const discountText = item.discount || (item.mrp > item.price ? `${Math.round(((item.mrp - item.price) / item.mrp) * 100)}% OFF` : '');
  const reportTime = item.reportTime || '6 to 10 hours';
  const sampleType = item.sampleType || 'Blood';
  const fasting = item.fasting || 'No Fasting Required';

  return `
    <div class="detail-hero-banner">
      <div class="detail-hero-badge-row">
        <div class="detail-highlight-badge framer-motion-badge" style="padding: 4px 12px; font-size: 11px;">
          <span class="framer-shimmer-ray"></span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>FREE HOME COLLECTION</span>
        </div>
        <div class="detail-highlight-badge">
          <span class="live-beacon-dot" style="margin-right: 4px;"></span>
          <span>Open 24×7</span>
        </div>
        <div class="detail-highlight-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F26D00" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          <span>15-Min Collection</span>
        </div>
        <div class="detail-highlight-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <span>Reports within ${reportTime}</span>
        </div>
      </div>

      <h2 class="detail-hero-title" id="detailHeroTitle">${item.name} | JANATHA CLINICAL LABORATORY</h2>

      <div class="detail-hero-price-row">
        <div class="detail-hero-price-wrap">
          ${item.mrp && item.mrp > item.price ? `<span class="detail-hero-mrp">₹${item.mrp.toLocaleString()}</span>` : ''}
          <span class="detail-hero-price">₹${item.price.toLocaleString()}</span>
          ${discountText ? `<span class="detail-hero-discount">${discountText}</span>` : ''}
        </div>
      </div>

      <div class="detail-hero-actions">
        <button 
          class="detail-hero-btn ${inCart ? 'in-cart' : ''}" 
          id="detailModalAddBtn"
          onclick="handleModalAddToCart('${item.id}')"
        >
          ${inCart ? '✓ In Cart - View Cart →' : 'Add to Cart →'}
        </button>

        <div class="detail-trust-bar">
          <div class="trust-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 2 4 4-2 2-4-4 2-2Z"/><path d="m14 6-9.5 9.5a1.5 1.5 0 0 0 0 2.12l1.88 1.88a1.5 1.5 0 0 0 2.12 0L18 10"/><path d="m3 21 3.5-3.5"/></svg>
            <span>FREE home sample collection • Open 24×7</span>
          </div>
          <div class="trust-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
            <span>Certified accredited laboratory</span>
          </div>
          <div class="trust-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>
            <span>Digital reports with clear reference ranges</span>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-systems-section">
      <h3 class="detail-systems-heading">${totalParams} parameters across ${systems.length} ${systems.length === 1 ? 'body system' : 'body systems'}</h3>

      <div class="detail-systems-grid">
        ${systems.map((sys, idx) => `
          <div class="detail-system-card">
            <div class="detail-system-header">
              <h4 class="detail-system-title">${sys.title}</h4>
              <div class="detail-system-icon">
                ${getSystemIconSvg(sys.icon)}
              </div>
            </div>
            <p class="detail-system-desc">${sys.desc}</p>
            <button class="detail-params-toggle-btn" id="sysToggleBtn_${idx}" onclick="toggleSystemParams(${idx})">
              <span>${sys.params.length} Parameters</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="detail-params-list" id="sysParamsList_${idx}">
              ${sys.params.map(p => `<span class="detail-param-chip">${p}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="detail-view-all-wrapper">
        <button class="detail-view-all-pill" onclick="toggleAllDetailParams()">
          View all ${totalTestsCount} tests & ${totalParams} parameters →
        </button>
      </div>

      <div class="detail-specimen-bar">
        <div class="specimen-pill-card">
          <span>${sampleType}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B45309" stroke-width="1.8">
            <path d="M6 2v6a6 6 0 0 0 12 0V2"/>
            <line x1="4" y1="2" x2="20" y2="2"/>
            <line x1="6" y1="8" x2="18" y2="8"/>
          </svg>
        </div>
        ${(item.type === 'package' || (item.chips && item.chips.some(c => c.toLowerCase().includes('urine')))) ? `
          <div class="specimen-pill-card">
            <span>Urine</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B45309" stroke-width="1.8">
              <path d="M6 2v6a6 6 0 0 0 12 0V2"/>
              <line x1="4" y1="2" x2="20" y2="2"/>
              <line x1="6" y1="8" x2="18" y2="8"/>
            </svg>
          </div>
        ` : ''}
        <div class="specimen-pill-card">
          <span>${fasting}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B45309" stroke-width="1.8">
            <path d="M18 2v8a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V2"/>
            <line x1="15" y1="12" x2="15" y2="22"/>
            <path d="M4 2v6a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V2"/>
            <line x1="7" y1="11" x2="7" y2="22"/>
          </svg>
        </div>
      </div>
    </div>
  `;
}

function openTestDetailsModal(id) {
  const item = CATALOG.find(t => t.id === id);
  if (!item) return;

  currentDetailItemId = id;
  const modal = document.getElementById("testDetailModal");
  const backdrop = document.getElementById("testDetailModalBackdrop");
  const modalBody = document.getElementById("testDetailModalBody");

  if (modalBody) {
    modalBody.innerHTML = renderTestDetailModalContent(item);
  }

  if (modal && backdrop) {
    backdrop.classList.add("active");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}
window.openTestDetailsModal = openTestDetailsModal;

function closeTestDetailModal() {
  const modal = document.getElementById("testDetailModal");
  const backdrop = document.getElementById("testDetailModalBackdrop");

  if (modal && backdrop) {
    modal.classList.remove("active");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
  currentDetailItemId = null;
}
window.closeTestDetailModal = closeTestDetailModal;

function handleModalAddToCart(id) {
  const inCart = state.cart.some(c => c.id === id);
  if (inCart) {
    closeTestDetailModal();
    openCartDrawer();
  } else {
    toggleCartItem(id);
    updateDetailModalBtn(id);
  }
}
window.handleModalAddToCart = handleModalAddToCart;

function updateDetailModalBtn(id) {
  const btn = document.getElementById("detailModalAddBtn");
  if (!btn) return;
  const inCart = state.cart.some(c => c.id === id);
  if (inCart) {
    btn.classList.add("in-cart");
    btn.textContent = "✓ In Cart - View Cart →";
  } else {
    btn.classList.remove("in-cart");
    btn.textContent = "Add to Cart →";
  }
}
window.updateDetailModalBtn = updateDetailModalBtn;

function toggleSystemParams(idx) {
  const list = document.getElementById(`sysParamsList_${idx}`);
  const btn = document.getElementById(`sysToggleBtn_${idx}`);
  if (list && btn) {
    const isOpen = list.classList.contains("open");
    if (isOpen) {
      list.classList.remove("open");
      btn.classList.remove("open");
    } else {
      list.classList.add("open");
      btn.classList.add("open");
    }
  }
}
window.toggleSystemParams = toggleSystemParams;

function toggleAllDetailParams() {
  const lists = document.querySelectorAll(".detail-params-list");
  const btns = document.querySelectorAll(".detail-params-toggle-btn");
  if (!lists.length) return;
  const anyClosed = Array.from(lists).some(l => !l.classList.contains("open"));
  lists.forEach(l => {
    if (anyClosed) l.classList.add("open");
    else l.classList.remove("open");
  });
  btns.forEach(b => {
    if (anyClosed) b.classList.add("open");
    else b.classList.remove("open");
  });
}
window.toggleAllDetailParams = toggleAllDetailParams;

// Close detail modal on Escape key press
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.getElementById("testDetailModal");
    if (modal && modal.classList.contains("active")) {
      closeTestDetailModal();
    }
  }
});

// Smooth Scrolling Helper with sticky header offset
function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    const yOffset = -90;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
window.scrollToSection = scrollToSection;

function resetFilters() {
  state.activeSection = null;
  state.searchQuery = "";
  state.activeTab = "all";
  state.activeCheckupFilter = "all";
  state.currentSearchTests = [];
  state.currentSearchPackages = [];

  const searchInput = document.getElementById("cleanSearchInput");
  if (searchInput) searchInput.value = "";
  window.syncCleanSearchPrompt?.();

  const searchSection = document.getElementById("searchResultsSection");
  const mainCatalog = document.getElementById("mainCatalogContainer");
  const testsSection = document.getElementById("testsSection");
  const checkupsSection = document.getElementById("checkupsSection");
  if (searchSection) searchSection.style.display = "none";
  if (mainCatalog) mainCatalog.style.display = "block";
  if (testsSection) testsSection.style.display = "none";
  if (checkupsSection) checkupsSection.style.display = "block";

  updateNavTabsUI();
  updateBreadcrumb();
  renderSpecialtyCarousel();
  renderCheckupSection("all");
  renderSectionPills();
  renderTestCards();
}
window.resetFilters = resetFilters;

// 12. Header Tabs & Navigation (Tests vs Checkups)
function setupCleanNavTabs() {
  const tabTests = document.getElementById("tabTests");
  const tabCheckups = document.getElementById("tabCheckups");

  if (tabTests) {
    tabTests.addEventListener("click", () => {
      state.activeTab = "tests";
      showAllIndividualTests();
    });
  }

  if (tabCheckups) {
    tabCheckups.addEventListener("click", () => {
      state.activeTab = "checkups";
      const searchSection = document.getElementById("searchResultsSection");
      const mainCatalog = document.getElementById("mainCatalogContainer");
      const testsSection = document.getElementById("testsSection");
      const checkupsSection = document.getElementById("checkupsSection");
      if (searchSection && searchSection.style.display !== "none") {
        searchSection.style.display = "none";
        if (mainCatalog) mainCatalog.style.display = "block";
      }
      if (testsSection) testsSection.style.display = "none";
      if (checkupsSection) checkupsSection.style.display = "block";
      updateNavTabsUI();
      updateBreadcrumb();
      scrollToSection("checkupsSection");
    });
  }
}

function updateNavTabsUI() {
  const tabTests = document.getElementById("tabTests");
  const tabCheckups = document.getElementById("tabCheckups");
  if (tabTests && tabCheckups) {
    if (state.activeTab === "tests") {
      tabTests.classList.add("active");
      tabCheckups.classList.remove("active");
    } else if (state.activeTab === "checkups") {
      tabCheckups.classList.add("active");
      tabTests.classList.remove("active");
    } else {
      tabTests.classList.remove("active");
      tabCheckups.classList.remove("active");
    }
  }
}

function updateBreadcrumb() {
  const current = document.getElementById("breadcrumbCurrent") || document.querySelector(".breadcrumb-current");
  if (!current) return;
  const city = state.selectedCity || "Malebennur";
  if (state.activeTab === "checkups") {
    current.textContent = `Full Body Health Checkup Packages ${city}`;
  } else if (state.activeSection) {
    const sec = SECTIONS.find(s => s.id === state.activeSection);
    current.textContent = `Lab Tests ${city} > ${sec ? sec.name : state.activeSection}`;
  } else {
    current.textContent = `Full Body Health Checkups & Lab Tests ${city}`;
  }
}

// 13. Pill Search Live Filtering - Shows all matching separate individual tests
function setupCleanSearch() {
  const input = document.getElementById("cleanSearchInput");
  const searchBtn = document.getElementById("cleanSearchBtn");
  const prompt = document.getElementById("cleanSearchPrompt");
  const promptWord = document.getElementById("cleanSearchPromptWord");
  const searchSection = document.getElementById("searchResultsSection");
  const searchTitle = document.getElementById("searchResultsTitle");
  const searchSub = document.getElementById("searchResultsSubtitle");
  const searchTag = document.getElementById("searchResultsTag");
  const searchControls = document.getElementById("searchFilterControls");
  const mainCatalog = document.getElementById("mainCatalogContainer");

  if (!input) return;

  // Calm looping prompt for the empty search field. The typed keyword uses the
  // brand orange while the fixed "Search for" prefix stays neutral.
  if (prompt && promptWord) {
    const promptWords = ["tests", "checkups"];
    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;
    let promptTimer;

    const syncPromptVisibility = () => {
      prompt.classList.toggle("is-hidden", input.value.length > 0);
    };

    window.syncCleanSearchPrompt = syncPromptVisibility;

    const typePrompt = () => {
      const word = promptWords[wordIndex];
      if (!deleting) {
        letterIndex += 1;
        promptWord.textContent = word.slice(0, letterIndex);
        if (letterIndex >= word.length) {
          deleting = true;
          promptTimer = window.setTimeout(typePrompt, 1500);
          return;
        }
      } else {
        letterIndex -= 1;
        promptWord.textContent = word.slice(0, letterIndex);
        if (letterIndex <= 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % promptWords.length;
          promptTimer = window.setTimeout(typePrompt, 350);
          return;
        }
      }
      promptTimer = window.setTimeout(typePrompt, deleting ? 75 : 105);
    };

    promptWord.textContent = "";
    syncPromptVisibility();
    promptTimer = window.setTimeout(typePrompt, 350);
    input.addEventListener("input", syncPromptVisibility);
    input.addEventListener("blur", syncPromptVisibility);
    window.addEventListener("beforeunload", () => window.clearTimeout(promptTimer), { once: true });
  }

  function executeSearch(query) {
    state.searchQuery = (query || "").trim();
    const q = state.searchQuery.toLowerCase();

    if (!q) {
      resetFilters();
      return;
    }

    if (searchSection) searchSection.style.display = "block";
    if (mainCatalog) mainCatalog.style.display = "none";
    if (searchTag) searchTag.textContent = "SEARCH RESULTS";

    // Matching separate individual tests
    const matchingTests = CATALOG.filter(item => {
      if (item.type !== "test") return false;
      const matchName = item.name.toLowerCase().includes(q) || (item.fullName && item.fullName.toLowerCase().includes(q));
      const matchSummary = item.summary ? item.summary.toLowerCase().includes(q) : false;
      const matchChips = item.chips ? item.chips.some(c => c.toLowerCase().includes(q)) : false;
      const secObj = SECTIONS.find(s => s.id === item.section);
      const matchSec = secObj ? secObj.name.toLowerCase().includes(q) || secObj.shortName.toLowerCase().includes(q) : false;
      return matchName || matchSummary || matchChips || matchSec;
    });

    // Matching checkup packages
    const matchingPackages = CATALOG.filter(item => {
      if (item.type !== "package") return false;
      const matchName = item.name.toLowerCase().includes(q) || (item.fullName && item.fullName.toLowerCase().includes(q));
      const matchSummary = item.summary ? item.summary.toLowerCase().includes(q) : false;
      const matchChips = item.chips ? item.chips.some(c => c.toLowerCase().includes(q)) : false;
      return matchName || matchSummary || matchChips;
    });

    if (searchTitle) {
      searchTitle.textContent = matchingPackages.length > 0
        ? `Search Results for "${state.searchQuery}" (${matchingTests.length} Tests + ${matchingPackages.length} Checkups)`
        : `Search Results for "${state.searchQuery}" (${matchingTests.length} Tests)`;
    }

    if (searchSub) {
      if (matchingPackages.length > 0) {
        searchSub.innerHTML = `Showing <strong>${matchingTests.length} separate individual tests</strong> and <strong>${matchingPackages.length} checkup packages</strong>`;
      } else {
        searchSub.innerHTML = `Showing <strong>${matchingTests.length} separate individual tests</strong> matching "${state.searchQuery}"`;
      }
    }

    state.currentSearchTests = matchingTests;
    state.currentSearchPackages = matchingPackages;
    // Show every matching test and checkup together in one result list.
    state.searchActiveTab = "all";

    if (searchControls) {
      searchControls.style.display = "none";
      searchControls.innerHTML = "";
    }

    renderSearchResultsGrid();
  }

  input.addEventListener("input", (e) => {
    executeSearch(e.target.value);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeSearch(input.value);
    }
  });

  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      if (!input.value.trim()) {
        showAllIndividualTests();
      } else {
        executeSearch(input.value);
      }
    });
  }
}

function switchSearchTab(tab) {
  state.searchActiveTab = tab;
  const tabTests = document.getElementById("tabSearchTests");
  const tabPkgs = document.getElementById("tabSearchPkgs");
  if (tabTests && tabPkgs) {
    if (tab === "tests") {
      tabTests.classList.add("active");
      tabPkgs.classList.remove("active");
    } else {
      tabPkgs.classList.add("active");
      tabTests.classList.remove("active");
    }
  }
  renderSearchResultsGrid();
}
window.switchSearchTab = switchSearchTab;

function renderSearchResultsGrid() {
  const searchGrid = document.getElementById("searchResultsGrid");
  if (!searchGrid) return;

  const matchingTests = state.currentSearchTests || [];
  const matchingPackages = state.currentSearchPackages || [];
  const items = [...matchingTests, ...matchingPackages];

  if (items.length === 0) {
    searchGrid.innerHTML = `
      <div class="empty-results-box" style="grid-column: 1 / -1;">
        <div class="empty-icon">🔍</div>
        <h3>No matching tests or checkup packages found</h3>
        <p>We could not find anything matching "<strong>${state.searchQuery}</strong>". Try searching for CBC, Sugar, Thyroid, LFT, or Vitamin D.</p>
        <div style="display: flex; gap: 10px; justify-content: center; margin-top: 14px; flex-wrap: wrap;">
          <button class="btn btn-sm btn-primary" onclick="showAllIndividualTests()">Browse All 160 Individual Tests</button>
          <button class="btn btn-sm btn-outline" onclick="resetFilters()">View All 13 Test Groups</button>
        </div>
      </div>
    `;
  } else {
    searchGrid.innerHTML = items.map(item => renderSingleCardHtml(item, item.type === "package")).join('');
  }
}

// 13. Clean Header Buttons (Cart, Profile, Location)
function setupCleanHeaderButtons() {
  const cartBtn = document.getElementById("cleanCartBtn");
  if (cartBtn) {
    cartBtn.addEventListener("click", openCartDrawer);
  }

  const locationTrigger = document.getElementById("cleanLocationTrigger");
  const cityDropdown = document.getElementById("cityDropdown");
  const closeDropdownBtn = document.getElementById("closeCityDropdownBtn");

  const closeClinicPopover = () => {
    if (cityDropdown) cityDropdown.classList.remove("open");
    if (locationTrigger) locationTrigger.classList.remove("active");
    if (locationTrigger) locationTrigger.setAttribute("aria-expanded", "false");
  };

  if (locationTrigger && cityDropdown) {
    locationTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = cityDropdown.classList.toggle("open");
      locationTrigger.classList.toggle("active", isOpen);
      locationTrigger.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (closeDropdownBtn) {
    closeDropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeClinicPopover();
    });
  }

  document.addEventListener("click", (e) => {
    const wrapper = document.querySelector(".location-wrapper");
    if (wrapper && !wrapper.contains(e.target)) {
      closeClinicPopover();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && cityDropdown && cityDropdown.classList.contains("open")) {
      closeClinicPopover();
    }
  });
}

// 14. Shopping Cart & Drawer Management
function toggleCartItem(id) {
  const item = CATALOG.find(i => i.id === id);
  if (!item) return;

  const index = state.cart.findIndex(c => c.id === id);
  if (index > -1) {
    state.cart.splice(index, 1);
    showToast(`Removed "${item.name}" from cart`, "info");
  } else {
    state.cart.push(item);
    showToast(`Added "${item.name}" to cart!`, "success");
  }

  updateCartUI();
  saveCartToStorage();
}

function updateCartUI() {
  const count = state.cart.length;

  // Keep the fan-card action label in sync after an add/remove.
  if (document.getElementById("mensWellnessRail")) renderMensWellnessRail();

  // Header clean cart badge
  const cleanBadge = document.getElementById("cleanCartBadge");
  if (cleanBadge) {
    cleanBadge.textContent = count;
    cleanBadge.style.display = count > 0 ? "flex" : "none";
  }

  // Legacy badges
  const badge = document.getElementById("cartBadgeCount");
  const drawerCount = document.getElementById("cartDrawerCount");
  const stickyCount = document.getElementById("stickyCartCount");
  const stickyBar = document.getElementById("stickyCartBar");

  if (badge) badge.textContent = count;
  if (drawerCount) drawerCount.textContent = `${count} ${count === 1 ? 'Item' : 'Items'}`;
  if (stickyCount) stickyCount.textContent = `${count} ${count === 1 ? 'Test Added' : 'Tests Added'}`;

  // Pricing calculation
  let mrpTotal = state.cart.reduce((sum, item) => sum + item.mrp, 0);
  let subtotal = state.cart.reduce((sum, item) => sum + item.price, 0);
  let discount = mrpTotal - subtotal;

  let finalPay = subtotal;

  // Bill breakdown
  const billMrp = document.getElementById("billMrp");
  const billDiscount = document.getElementById("billDiscount");
  const billFinal = document.getElementById("billFinal");
  const stickyTotal = document.getElementById("stickyCartTotal");
  const stickyMrp = document.getElementById("stickyCartMrp");

  if (billMrp) billMrp.textContent = `₹${mrpTotal.toLocaleString()}`;
  if (billDiscount) billDiscount.textContent = `- ₹${discount.toLocaleString()}`;
  if (billFinal) billFinal.textContent = `₹${finalPay.toLocaleString()}`;
  if (stickyTotal) stickyTotal.textContent = `₹${finalPay.toLocaleString()}`;
  if (stickyMrp) stickyMrp.textContent = mrpTotal > 0 ? `₹${mrpTotal.toLocaleString()}` : '';

  // Sticky bar visibility
  if (stickyBar) {
    if (count > 0) {
      stickyBar.classList.add("show");
    } else {
      stickyBar.classList.remove("show");
    }
  }

  // Drawer items list
  const body = document.getElementById("cartDrawerBody");
  const empty = document.getElementById("emptyCartState");
  const footer = document.getElementById("cartDrawerFooter");

  if (body) {
    if (count === 0) {
      if (empty) empty.style.display = "flex";
      if (footer) footer.style.display = "none";
      const existingItems = body.querySelectorAll(".cart-card-item");
      existingItems.forEach(el => el.remove());
    } else {
      if (empty) empty.style.display = "none";
      if (footer) footer.style.display = "block";

      const existingItems = body.querySelectorAll(".cart-card-item");
      existingItems.forEach(el => el.remove());

      state.cart.forEach(item => {
        const div = document.createElement("div");
        div.className = "cart-card-item";
        div.innerHTML = `
          <div class="cart-card-left">
            <strong>${item.name}</strong>
            <span>${item.parameters ? item.parameters + ' Parameters • ' : ''}${item.reportTime} e-Report</span>
          </div>
          <div class="cart-card-right">
            <span class="cart-item-price">₹${item.price.toLocaleString()}</span>
            <button class="remove-item-btn" onclick="toggleCartItem('${item.id}')" title="Remove">&times;</button>
          </div>
        `;
        body.appendChild(div);
      });
    }
  }

  // Update card action buttons directly
  document.querySelectorAll(".test-action-btn").forEach(btn => {
    const id = btn.getAttribute("data-id");
    const isInCart = state.cart.some(c => c.id === id);
    if (isInCart) {
      btn.className = "test-action-btn in-cart-btn";
      btn.textContent = "✓ In cart";
    } else {
      btn.className = "test-action-btn add-btn";
      btn.textContent = "+ Add";
    }
  });

  // Sync test detail modal button if open
  if (typeof currentDetailItemId !== 'undefined' && currentDetailItemId) {
    updateDetailModalBtn(currentDetailItemId);
  }
}

function openCartDrawer() {
  const backdrop = document.getElementById("cartBackdrop");
  const drawer = document.getElementById("cartDrawer");
  if (backdrop && drawer) {
    backdrop.classList.add("active");
    drawer.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeCartDrawer() {
  const backdrop = document.getElementById("cartBackdrop");
  const drawer = document.getElementById("cartDrawer");
  if (backdrop && drawer) {
    backdrop.classList.remove("active");
    drawer.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function setupCartDrawer() {
  const trigger = document.getElementById("cleanCartBtn");
  const stickyTrigger = document.getElementById("stickyViewCartBtn");
  const closeBtn = document.getElementById("closeCartBtn");
  const backdrop = document.getElementById("cartBackdrop");
  const exploreBtn = document.getElementById("exploreTestsBtn");

  if (trigger) trigger.addEventListener("click", openCartDrawer);
  if (stickyTrigger) stickyTrigger.addEventListener("click", openCartDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeCartDrawer);
  if (backdrop) backdrop.addEventListener("click", closeCartDrawer);

  if (exploreBtn) exploreBtn.addEventListener("click", () => {
    closeCartDrawer();
  });

  // Checkout Proceed Button
  const checkoutBtn = document.getElementById("checkoutProceedBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (state.cart.length === 0) {
        showToast("Your cart is empty. Add a test to continue.", "error");
        return;
      }
      closeCartDrawer();
      openCheckoutSuccess();
    });
  }
}

// 15. Malebennur Clinic Location Details
function setupCityPicker() {
  const dropdown = document.getElementById("cityDropdown");
  const cityText = document.getElementById("currentCityText");

  if (!dropdown) return;
  state.selectedCity = "Malebennur";
  if (cityText) {
    cityText.textContent = "Malebennur Town Clinic";
  }
}

// 16. Malebennur Clinic Actions
function setupHubFilterTabs() {
  document.querySelectorAll(".clinic-book-btn, .hub-book-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("Select your required tests below to book doorstep sample collection in Malebennur!", "success");
      const testCards = document.getElementById("testCardsGrid");
      if (testCards) testCards.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// 18. Modals (Prescription Upload & Success)
function setupModals() {
  // Success modal
  const closeSuccess = document.getElementById("closeSuccessBtn");
  const successBackdrop = document.getElementById("checkoutSuccessBackdrop");
  const confirmWhatsappBtn = document.getElementById("confirmWhatsappBtn");
  if (closeSuccess) closeSuccess.addEventListener("click", closeCheckoutSuccess);
  if (successBackdrop) successBackdrop.addEventListener("click", closeCheckoutSuccess);
  if (confirmWhatsappBtn) confirmWhatsappBtn.addEventListener("click", confirmWhatsappBooking);
}

function openCheckoutSuccess() {
  const modal = document.getElementById("checkoutSuccessModal");
  const backdrop = document.getElementById("checkoutSuccessBackdrop");
  const orderId = document.getElementById("successOrderId");
  const total = document.getElementById("successTotal");
  const testList = document.getElementById("successTestList");

  if (!modal || !backdrop || state.cart.length === 0) return;

  const randomId = "JCL-" + Math.floor(100000 + Math.random() * 900000);
  if (orderId) orderId.textContent = randomId;
  state.pendingBookingItems = state.cart.map(item => ({ ...item }));

  if (testList) {
    testList.innerHTML = "";
    state.pendingBookingItems.forEach(item => {
      const listItem = document.createElement("li");
      const name = document.createElement("strong");
      const price = document.createElement("span");
      name.textContent = item.name;
      price.textContent = `₹${item.price.toLocaleString()}`;
      listItem.append(name, price);
      testList.appendChild(listItem);
    });
  }

  let subtotal = state.cart.reduce((sum, item) => sum + item.price, 0);
  let finalPay = subtotal;
  if (total) total.textContent = `₹${finalPay.toLocaleString()}`;

  backdrop.classList.add("active");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function confirmWhatsappBooking() {
  const items = state.pendingBookingItems || [];
  if (items.length === 0) {
    closeCheckoutSuccess();
    showToast("Your cart is empty. Add a test to continue.", "error");
    return;
  }

  const orderId = document.getElementById("successOrderId")?.textContent || "JCL-REQUEST";
  const total = items.reduce((sum, item) => sum + item.price, 0);
  const selectedTests = items
    .map((item, index) => `${index + 1}. ${item.name} - ₹${item.price.toLocaleString()}`)
    .join("\n");
  const message = [
    "Hello Janatha Clinical Laboratory,",
    "I would like to book the following tests:",
    "",
    selectedTests,
    "",
    `Request ID: ${orderId}`,
    `Estimated total: ₹${total.toLocaleString()}`,
    "Blood sample collection within 15 minutes.",
    "Please confirm the appointment and collection details."
  ].join("\n");
  const whatsappUrl = `https://wa.me/918431259091?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  state.cart = [];
  state.pendingBookingItems = [];
  updateCartUI();
  saveCartToStorage();
  closeCheckoutSuccess();
  showToast("Opening WhatsApp with your test request", "success");
}

function closeCheckoutSuccess() {
  const modal = document.getElementById("checkoutSuccessModal");
  const backdrop = document.getElementById("checkoutSuccessBackdrop");
  if (modal && backdrop) {
    modal.classList.remove("active");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
}



// 20. Toast Notification System
function showToast(message, type = "info") {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(30px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// 21. Local Storage Persistence
function saveCartToStorage() {
  try {
    const ids = state.cart.map(i => i.id);
    localStorage.setItem("janatha_lab_cart", JSON.stringify(ids));
  } catch (e) {}
}

function checkLocalStorageCart() {
  try {
    const saved = localStorage.getItem("janatha_lab_cart");
    if (saved) {
      const ids = JSON.parse(saved);
      if (Array.isArray(ids) && ids.length > 0) {
        const found = CATALOG.filter(i => ids.includes(i.id));
        if (found.length > 0) {
          state.cart = found;
        }
      }
    }
  } catch (e) {}
}
