# Janatha Clinical Laboratory - Malebennur Diagnostic Portal

A modern, minimal, and high-fidelity diagnostic web application for **Janatha Clinical Laboratory**, exclusively serving **Malebennur (577530)**, Davanagere District, Karnataka, and surrounding rural communities.

---

## 🌟 Key Highlights & Design Aesthetic
- **Local Exclusivity**: Created exclusively for **Malebennur (577530)** and neighboring villages (Komaranahalli, Nandigavi, Kumbalur, Hallihal, Bhanuvalli, Bilasanur, Harihar Road).
- **Brand Colors**: Modern clinical palette featuring Vivid Orange (`#F26D00`), Clean Cream Cards (`#FFFDF9`, border `#ECE7DE`), Emerald Green (`#0E9F6E`), and Deep Slate (`#111827`).
- **Modern Typography**: Google Fonts **Outfit** (headings, cards, pricing) paired with **Inter** (clean readable UI body text).
- **Smooth Micro-Interactions**: Circular 3D-styled specialty carousel, live search autocomplete, slide-out cart drawer, and interactive booking modal.

---

## 🚀 Live Local Server
The built-in zero-dependency Node.js server runs locally at:
```
http://localhost:3000/
```

To run manually at any time:
```bash
node server.js
```

## GitHub Pages Deployment
This is a static site and can be published directly from GitHub Pages.

1. Upload the project files to the repository root.
2. Open **Settings → Pages** in the repository.
3. Choose **Deploy from a branch**, select the main branch and `/ (root)`, then save.
4. Open the generated Pages URL. GitHub will use `index.html` automatically.

All site assets use relative paths, so the logo, specialty images, PDFs, stylesheet, and application script work from a repository subpath as well as from the local server. `server.js` is only needed for local development.

### WhatsApp Test Requests
Authentication is not required. Users add their required tests or checkups to the cart, review the selection, and confirm the request. The site opens WhatsApp with a pre-filled message addressed to Janatha Clinical Laboratory at `8431259091`.

---

## 📦 Features & Component Breakdown

### 1. Minimal & Clean Header
- **Janatha Clinical Laboratory** brand emblem.
- **Location Selector**: Displays `Malebennur Town Clinic` with `Near KSRTC Bus Stand (577530)` subtext and dropdown showcasing the official clinic address, working hours, and phone helplines.
- **Search Pill**: Real-time filtering matching test names, parameter chips, and summaries.
- **Navigation Tabs**: Minimal `Tests` and `Checkups` tabs.
- **Cart**: Action circular button with active badge counter.

### 2. Breadcrumb Navigation
- Dynamic breadcrumb displaying `Home > Lab Test Malebennur` (or filtered by active category/specialty).

### 3. Explore by Clinical Departments & Specialty Carousel
- 13 comprehensive diagnostic departments + Checkup Packages with custom 3D clinical SVG artwork:
  1. **Complete Blood Count & Hematology** (18 Tests - CBC ₹250, Complete Haemogram ₹250, Hb ₹150, Platelet ₹100, etc.)
  2. **Blood Sugar & Diabetes** (9 Tests - FBS ₹50, RBS ₹50, PPBS ₹60, HbA1c ₹450, Fasting Insulin ₹600, etc.)
  3. **Liver Function Tests (LFT)** (12 Tests - LFT Profile ₹400, Bilirubin ₹100, SGOT ₹120, SGPT ₹120, ALP ₹150, etc.)
  4. **Kidney Function Tests (KFT / RFT)** (13 Tests - KFT Profile ₹400, Creatinine ₹100, Urea ₹100, Uric Acid ₹150, Electrolytes ₹350, etc.)
  5. **Lipid Profile & Cardiac Tests** (17 Tests - Lipid Profile ₹350, Cholesterol ₹120, hs-CRP ₹500, Troponin I ₹600, etc.)
  6. **Thyroid Profile** (9 Tests - TFT ₹400, TSH ₹150, Total T3/T4 ₹150, Free T3/T4 ₹350, Anti-TPO ₹500, etc.)
  7. **Vitamins & Iron Profile** (11 Tests - Vit D ₹400, Vit B12 ₹500, Ferritin ₹600, Iron ₹250, TIBC ₹300, etc.)
  8. **Hormones & Reproductive Tests** (17 Tests - Prolactin ₹450, Testosterone ₹500, AMH ₹1,200, Beta-hCG ₹600, PSA ₹700, etc.)
  9. **Infection, Serology & Immunology** (18 Tests - Widal ₹150, Dengue Profile (NS1 Antigen, IgM, IgG) ₹500, Malaria ₹250, HIV 1 & 2 ₹1,350, etc.)
  10. **Urine Tests** (12 Tests - Routine ₹100, Pregnancy UPT ₹100, Protein ₹100, Culture & Sensitivity ₹500, etc.)
  11. **Stool Tests** (7 Tests - Routine ₹100, Occult Blood ₹200, Calprotectin ₹1,000, H. Pylori ₹600, etc.)
  12. **Enzymes & Special Biochemistry** (8 Tests - Amylase ₹350, Lipase ₹400, Lactate ₹500, Magnesium ₹250, Zinc ₹600, etc.)
  13. **Microbiology & Culture Tests** (9 Tests - Blood Culture ₹700, Sputum ₹500, Pus ₹500, Gram Stain ₹200, Fungal ₹700, etc.)
  14. **Health Checkup Packages & Checkup Section** (19 Packages - Basic ₹1,099, Essential ₹1,599, Advanced ₹2,799, Ultra Male/Female ₹14,999, etc.)

### 4. Categorized Test Cards & Checkup View
- **Tests View**: Organizes all 160 diagnostic tests under clear clinical section headers with parameter badges, fasting requisites, sample types, and patient prices.
- **Checkups View**: Displays 19 curated packages with highlight badges, inclusions chips, parameter counts, and discounts:
  - Full Body Checkup – Basic: ₹1,099
  - Full Body Checkup – Essential: ₹1,599
  - Full Body Checkup – Advanced: ₹2,799
  - Full Body Checkup – Comprehensive: ₹3,899
  - Full Body Checkup – Complete: ₹4,999
  - Ultra Full Body Checkup – Male: ₹14,999
  - Ultra Full Body Checkup – Female: ₹14,999
  - Children's Checkup – Advanced for Kids: ₹2,099
  - Basic Master Health Check: ₹1,699
  - Basic Full Body Check: ₹899
  - Plus targeted organ packages (Diabetes ₹299, Thyroid ₹199, Liver ₹399, Kidney ₹399, Lipid ₹349, Vitamins ₹2,500).
- **Interactive Section Filter Pills**: Instant one-click jumping/filtering across all 14 clinical sections.
- **Live Search**: Instant auto-filtering matching test names, aliases (e.g. FBS, HbA1c, LFT, PSA, AMH), parameters, and descriptions.

### 5. Official Malebennur Town Clinic
- Single dedicated diagnostic facility exclusively serving Malebennur:
  - **JANATHA CLINICAL LABORATORY - Malebennur Town Hub**:
    - **Address**: `Head Diagnostic Hub: Main Road, Near KSRTC Bus Stand, Malebennur, Davanagere Dist, Karnataka 577530`
    - **Hours**: **Open 24×7 (All 365 Days)**
    - **Helpline / Phone**: `8431259091`
    - **Free Home Collection**: 100% Free Doorstep Blood Sample Collection across Malebennur within 15 minutes, with reports online in 6 to 10 hours.
    - Certified walk-in testing and 24×7 round-the-clock emergency diagnostics.

### 6. Slide-Over Cart Drawer & Checkout Flow
- Real-time cart calculation (Item total, MRP, discounts, free home sample collection).
- Collection time slot selection (Express collection vs Morning fasting slots).
- Interactive checkout modal with generated Order ID, assigned vaccinated phlebotomist, and temperature-controlled sample handling confirmation.
