import { images } from "./assets/images";

export type NotePyramid = {
  top: string[];
  heart: string[];
  base: string[];
};

export type TimelineFrame = {
  at: string;
  minutes: number;
  title: string;
  copy: string;
  notes: string[];
};

export type Scent = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  glow: string;
  volume: string;
  notes: NotePyramid;
  timeline: TimelineFrame[];
};

export const scents: Scent[] = [
  {
    id: "nocturne",
    number: "01",
    name: "Nocturne",
    tagline: "Night, as architecture",
    description:
      "A dark, vertical composition. Black pepper ignites the foreground, iris occupies the mid-field, and smoked cedar recedes into infinite depth.",
    image: images.bottleNocturne,
    glow: "rgba(122, 84, 48, 0.45)",
    volume: "50ml · 100ml",
    notes: {
      top: ["Black pepper", "Bergamot", "Elemi"],
      heart: ["Iris butter", "Incense", "Violet leaf"],
      base: ["Smoked cedar", "Ambergris", "Vetiver"],
    },
    timeline: [
      {
        at: "Opening",
        minutes: 0,
        title: "The spark",
        copy: "A cold flash of pepper and citrus — the first plane of the sculpture.",
        notes: ["Black pepper", "Bergamot", "Elemi"],
      },
      {
        at: "15 min",
        minutes: 15,
        title: "The chamber",
        copy: "Iris butter unfolds as a velvet volume. Incense draws the walls inward.",
        notes: ["Iris butter", "Incense", "Violet leaf"],
      },
      {
        at: "4 hr",
        minutes: 240,
        title: "The nave",
        copy: "Cedar and ambergris form a long, smoked corridor. The scent becomes architecture.",
        notes: ["Smoked cedar", "Ambergris", "Iris"],
      },
      {
        at: "12 hr",
        minutes: 720,
        title: "The afterimage",
        copy: "A low, mineral trail. Skin, wood, and salt — the memory of a room at night.",
        notes: ["Vetiver", "Ambergris", "Cedar"],
      },
    ],
  },
  {
    id: "aether",
    number: "02",
    name: "Aether",
    tagline: "Light, held as volume",
    description:
      "Weightless, luminous, precise. White tea and peony hover in the near field; pale woods recede like morning mist over stone.",
    image: images.bottleAether,
    glow: "rgba(196, 148, 148, 0.38)",
    volume: "50ml · 100ml",
    notes: {
      top: ["White tea", "Neroli", "Pink pepper"],
      heart: ["Peony", "Magnolia", "Iris pallida"],
      base: ["Pale sandalwood", "White musk", "Soft amber"],
    },
    timeline: [
      {
        at: "Opening",
        minutes: 0,
        title: "The lift",
        copy: "White tea and neroli rise like a veil of light — almost visible.",
        notes: ["White tea", "Neroli", "Pink pepper"],
      },
      {
        at: "15 min",
        minutes: 15,
        title: "The bloom",
        copy: "Peony occupies the mid-air. Magnolia adds a cool, creamy plane.",
        notes: ["Peony", "Magnolia", "Iris pallida"],
      },
      {
        at: "4 hr",
        minutes: 240,
        title: "The hush",
        copy: "Sandalwood and musk settle into a quiet, luminous volume around the body.",
        notes: ["Pale sandalwood", "White musk", "Peony"],
      },
      {
        at: "12 hr",
        minutes: 720,
        title: "The halo",
        copy: "A clean, skin-close aura. Light that refuses to leave.",
        notes: ["White musk", "Soft amber", "Sandalwood"],
      },
    ],
  },
  {
    id: "solstice",
    number: "03",
    name: "Solstice",
    tagline: "Warmth, made visible",
    description:
      "The longest day, distilled. Bergamot and saffron flare at the surface; sandalwood and benzoin build a golden interior you can almost walk into.",
    image: images.bottleSolstice,
    glow: "rgba(196, 140, 64, 0.42)",
    volume: "50ml · 100ml",
    notes: {
      top: ["Bergamot", "Saffron", "Cardamom"],
      heart: ["Jasmine sambac", "Cinnamon leaf", "Labdanum"],
      base: ["Sandalwood", "Benzoin", "Tonka"],
    },
    timeline: [
      {
        at: "Opening",
        minutes: 0,
        title: "The flare",
        copy: "Bergamot and saffron strike like late sun on brass.",
        notes: ["Bergamot", "Saffron", "Cardamom"],
      },
      {
        at: "15 min",
        minutes: 15,
        title: "The gold",
        copy: "Jasmine and labdanum thicken the air. The composition turns honeyed and deep.",
        notes: ["Jasmine sambac", "Labdanum", "Cinnamon leaf"],
      },
      {
        at: "4 hr",
        minutes: 240,
        title: "The hearth",
        copy: "Sandalwood and benzoin form a warm, resinous interior — a room at golden hour.",
        notes: ["Sandalwood", "Benzoin", "Labdanum"],
      },
      {
        at: "12 hr",
        minutes: 720,
        title: "The ember",
        copy: "Tonka and wood as a last glow on the skin. Heat, remembered.",
        notes: ["Tonka", "Sandalwood", "Benzoin"],
      },
    ],
  },
];

export const features = [
  {
    number: "01",
    title: "Spatial olfaction",
    copy: "Every ORVAN composition is plotted in X, Y, and time. Top notes occupy the foreground. Heart notes hold the mid-field. Base notes recede into depth — a scent you can walk through.",
  },
  {
    number: "02",
    title: "The 3D atelier",
    copy: "Rotate, dissect, and inhabit a fragrance before it ever touches skin. Our digital atelier maps 240+ raw materials as architecture you explore in the browser.",
  },
  {
    number: "03",
    title: "Molecular placement",
    copy: "Each material is positioned with millimetric intent. Not a pyramid on a page — a volume in space, composed the way a sculptor places mass and void.",
  },
  {
    number: "04",
    title: "A trail you can almost see",
    copy: "Formulas unfold for 10–12 hours with a distinct architecture at opening, heart, and dry-down. The sillage is designed as a moving structure, not a cloud.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Explore in 3D",
    copy: "Enter the atelier. Rotate each composition. Watch notes occupy space and time — then decide with certainty.",
  },
  {
    number: "02",
    title: "Choose your architecture",
    copy: "Nocturne, Aether, or Solstice. Three complete worlds. Or begin with the Discovery set and live in all of them.",
  },
  {
    number: "03",
    title: "Wear it into the world",
    copy: "Sculptural, refillable flacons. A spatial trail that lasts from morning rooms to midnight corridors.",
  },
];

export const benefits = [
  {
    title: "Composed like architecture",
    copy: "Our perfumers work with spatial scores, not linear pyramids. Every formula is a building: rooms, corridors, light wells. You don’t just smell ORVAN. You enter it.",
    image: images.atelier,
    alt: "The ORVAN atelier at night, crystal bottles on dark marble",
  },
  {
    title: "Rare materials, placed in space",
    copy: "Iris butter from Florence. Ambergris tincture. Mysore-quality sandalwood. Saffron threads. Each is assigned a coordinate — distance, height, duration — so the composition has true depth.",
    image: images.ingredients,
    alt: "Rare perfume ingredients arranged on black marble",
  },
  {
    title: "See the trail, then wear it",
    copy: "The 3D atelier is not a gimmick. It is how we design — and how you choose. Explore the unfolding over twelve hours. Then wear the structure that feels like yours.",
    image: images.scentCloud,
    alt: "Abstract visualization of a golden scent cloud",
  },
];

export const stats = [
  { value: "3", label: "Signature compositions" },
  { value: "240+", label: "Raw materials mapped" },
  { value: "12h", label: "Spatial trail" },
  { value: "42", label: "Countries" },
];

export const press = [
  { name: "VOGUE", quote: "The first fragrance that can be seen." },
  { name: "WIRED", quote: "ORVAN does for scent what spatial audio did for sound." },
  { name: "MONOCLE", quote: "A new grammar of perfume." },
  { name: "ROBB REPORT", quote: "Luxury, finally rendered in three dimensions." },
  { name: "THE GENTLEWOMAN", quote: "Quiet, exacting, unforgettable." },
];

export const testimonials = [
  {
    quote:
      "I thought I understood perfume until I rotated Nocturne. The cedar isn’t behind the iris — it’s a room you walk into four hours later. I have never worn anything so considered.",
    name: "Amelia Voss",
    role: "Creative director, Atelier North",
    image:
      "https://images.pexels.com/photos/18555392/pexels-photo-18555392.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
  },
  {
    quote:
      "The 3D atelier ended a decade of blind buying. I spent twenty minutes inside Solstice, then ordered the 100ml without a sample. It wears exactly as it looked.",
    name: "Julian Park",
    role: "Collector, Seoul & London",
    image:
      "https://images.pexels.com/photos/9687606/pexels-photo-9687606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
  },
  {
    quote:
      "Aether is the first white floral that feels like air, not sugar. On my skin it becomes a halo. People don’t ask what I’m wearing — they ask what room we just entered.",
    name: "Noor El-Sayed",
    role: "Architect, Cairo",
    image:
      "https://images.pexels.com/photos/11712215/pexels-photo-11712215.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
  },
  {
    quote:
      "I refill the same flacon. The object is as serious as the juice. ORVAN treats fragrance as design, not decoration — and my dressing table finally agrees.",
    name: "Marcus Ellison",
    role: "Editor, Independent",
    image:
      "https://images.pexels.com/photos/9016422/pexels-photo-9016422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
  },
];

export const plans = [
  {
    id: "discovery",
    name: "Discovery",
    price: "95",
    unit: "3 × 8ml",
    blurb: "Map all three compositions in 3D, then live with them on skin.",
    features: [
      "Nocturne, Aether & Solstice",
      "Full 3D atelier access",
      "12-hour wear guides",
      "Credit toward a 50ml",
      "14-day sealed returns",
    ],
    cta: "Begin with Discovery",
    featured: false,
  },
  {
    id: "signature",
    name: "Signature",
    price: "245",
    unit: "50ml flacon",
    blurb: "The essential volume. Sculptural, refillable, made to be worn daily.",
    features: [
      "Choose one composition",
      "Refillable crystal flacon",
      "Lifetime atelier access",
      "Complimentary first refill shipping",
      "Numbered edition card",
    ],
    cta: "Reserve Signature",
    featured: true,
  },
  {
    id: "collector",
    name: "Collector",
    price: "480",
    unit: "100ml + sculpture",
    blurb: "The full architecture — and a 3D-printed map of your scent in space.",
    features: [
      "100ml collector flacon",
      "3D-printed olfactive sculpture",
      "Private virtual consultation",
      "Priority refills for 24 months",
      "Invitation to atelier evenings",
    ],
    cta: "Request Collector",
    featured: false,
  },
];

export const faqs = [
  {
    q: "What does “3D-mapped fragrance” actually mean?",
    a: "Every ORVAN composition is plotted in space and time. Top notes occupy the foreground; heart notes sit in the mid-field; base notes recede into depth. Our atelier lets you rotate that architecture — and watch it unfold over twelve hours — before you wear it.",
  },
  {
    q: "Do I need special hardware to explore in 3D?",
    a: "No. The atelier runs in your browser on any modern device. Drag to rotate, scrub the timeline, and isolate notes. On supported phones you may also view the flacon in augmented reality.",
  },
  {
    q: "Will it smell the same on me as it looks in 3D?",
    a: "The map shows the intended architecture. Skin chemistry is the final room. That is why we offer Discovery: wear all three, then choose the structure that becomes yours. Signature and Collector are final sale once unsealed — explore thoroughly first.",
  },
  {
    q: "Are the fragrances gendered?",
    a: "No. ORVAN compositions are designed without gender. Choose by architecture — night, light, or warmth — not by aisle.",
  },
  {
    q: "How long does the fragrance last?",
    a: "Each formula is composed for a 10–12 hour spatial trail, with a distinct structure at opening, heart, and dry-down. Concentration is an extraits-strength eau de parfum.",
  },
  {
    q: "What is your return policy?",
    a: "Discovery sets may be returned within 14 days if sealed. 50ml and 100ml flacons are final sale once the seal is broken. We insist you explore in 3D — and, if you wish, on skin via Discovery — before you commit.",
  },
  {
    q: "Are you clean, vegan, and cruelty-free?",
    a: "Yes. No animal testing. Vegan formulas. IFRA-compliant. Recyclable glass, refillable flacons, and packaging made from FSC paper with soy inks.",
  },
  {
    q: "Do you ship internationally?",
    a: "We ship to 42 countries. Duties are calculated at checkout. Complimentary overnight delivery is available in select cities. Refills can be posted back to the atelier or fulfilled by mail.",
  },
];

export const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#collection", label: "Collection" },
  { href: "#atelier", label: "Atelier" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];
