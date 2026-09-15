import type {ElementType,HTMLAttributes,ReactNode,} from "react";

export type TypographyVariant =
  | "navLink"
  | "heroHeading"
  | "heroDescription"
  | "sectionLabelDark"
  | "sectionLabelLight"
  | "sectionHeadingDark"
  | "sectionHeadingLight"
  | "sectionBodyDark"
  | "sectionBodyLight"
  | "cardNumberDark"
  | "cardNumberLight"
  | "cardTitleDark"
  | "cardTitleLight"
  | "cardDescription"
  | "buttonDark"
  | "buttonLight"
  | "statValue"
  | "statLabel"
  | "leaderName"
  | "caption"
  | "newsCard"
  | "footerLabel"
  | "footerLink"
  | "copyright";

type TypographyProps = HTMLAttributes<HTMLElement> & {as?: ElementType; 
  children: ReactNode;
    variant: TypographyVariant;
  };

const baseStyle = `m-0 font-[family-name:var(--font-geist-sans)] antialiased`;
const variantStyles: Record<TypographyVariant,string> = {
  /* Navbar */

  navLink: `
    text-[clamp(16px,1.273148vw,22px)]
    font-normal
    leading-none
    tracking-[-0.02em]
    text-white
  `,

  /* Hero */

  heroHeading: `
    text-[clamp(42px,3.472222vw,60px)]
    font-medium
    leading-[1.2]
    tracking-[-0.05em]
    text-white
  `,

  heroDescription: `
    text-[clamp(16px,1.388889vw,24px)]
    font-normal
    leading-[1.3]
    tracking-[-0.02em]
    text-white
  `,

  /* Section labels */

  sectionLabelDark: `
    text-[clamp(13px,1.041667vw,18px)]
    font-normal
    leading-none
    tracking-[-0.02em]
    text-black
  `,

  sectionLabelLight: `
    text-[clamp(13px,1.041667vw,18px)]
    font-normal
    leading-none
    tracking-[-0.02em]
    text-white
  `,

  /* Main section headings */

  sectionHeadingDark: `
    text-[clamp(32px,2.777778vw,48px)]
    font-medium
    leading-[1.16]
    tracking-[-0.045em]
    text-black
  `,

  sectionHeadingLight: `
    text-[clamp(32px,2.777778vw,48px)]
    font-medium
    leading-[1.16]
    tracking-[-0.045em]
    text-white
  `,

  /* Section descriptions */

  sectionBodyDark: `
    text-[clamp(15px,1.388889vw,24px)]
    font-normal
    leading-[1.35]
    tracking-[-0.02em]
    text-[#676767]
  `,

  sectionBodyLight: `
    text-[clamp(15px,1.388889vw,24px)]
    font-normal
    leading-[1.35]
    tracking-[-0.02em]
    text-[#8E8E8E]
  `,

  /* Card numbers */

  cardNumberDark: `
    text-[clamp(13px,1.273148vw,22px)]
    font-normal
    leading-none
    tracking-[-0.02em]
    text-black
  `,

  cardNumberLight: `
    text-[clamp(13px,1.273148vw,22px)]
    font-normal
    leading-none
    tracking-[-0.02em]
    text-white
  `,

  /* Card titles */

  cardTitleDark: `
    text-[clamp(14px,1.273148vw,22px)]
    font-normal
    leading-none
    tracking-[-0.03em]
    text-black
  `,

  cardTitleLight: `
    text-[clamp(14px,1.273148vw,22px)]
    font-normal
    leading-none
    tracking-[-0.02em]
    text-white
  `,

  /* Card descriptions */

  cardDescription: `
    text-[clamp(11px,0.925926vw,16px)]
    font-normal
    leading-[1.3]
    tracking-[-0.02em]
    text-[#676767]
  `,

  /* Buttons */

  buttonDark: `
    text-[clamp(14px,1.157407vw,20px)]
    font-medium
    leading-none
    tracking-[-0.02em]
    text-black
  `,

  buttonLight: `
    text-[clamp(14px,1.157407vw,20px)]
    font-medium
    leading-none
    tracking-[-0.02em]
    text-white
  `,

  /* Footprint statistics */

  statValue: `
    text-[clamp(32px,2.777778vw,48px)]
    font-medium
    leading-none
    tracking-[-0.05em]
    text-black
  `,

  statLabel: `
    text-[clamp(14px,1.157407vw,20px)]
    font-normal
    leading-none
    tracking-[-0.02em]
    text-[#676767]
  `,

  /* Leadership */

  leaderName: `
    text-[clamp(14px,1.157407vw,20px)]
    font-medium
    leading-none
    tracking-[-0.02em]
    text-black
  `,

  caption: `
    text-[clamp(11px,0.925926vw,16px)]
    font-normal
    leading-none
    tracking-[-0.02em]
    text-[#676767]
  `,

  /* Latest developments */

  newsCard: `
    text-[clamp(12px,1.041667vw,18px)]
    font-normal
    leading-[1.3]
    tracking-[-0.02em]
    text-black
  `,

  /* Footer */

  footerLabel: `
    text-[clamp(12px,1.041667vw,18px)]
    font-normal
    leading-none
    tracking-[-0.02em]
    text-[#676767]
  `,

  footerLink: `
    text-[clamp(13px,1.273148vw,22px)]
    font-normal
    leading-[1.75]
    tracking-[-0.02em]
    text-[#B8B8B8]
  `,

  copyright: `
    text-[clamp(10px,0.925926vw,16px)]
    font-normal
    leading-none
    tracking-[-0.02em]
    text-[#676767]
  `,
};

const defaultElements: Record<
  TypographyVariant,
  ElementType
> = {
  navLink: "span",
  heroHeading: "h1",
  heroDescription: "p",

  sectionLabelDark: "span",
  sectionLabelLight: "span",

  sectionHeadingDark: "h2",
  sectionHeadingLight: "h2",

  sectionBodyDark: "p",
  sectionBodyLight: "p",

  cardNumberDark: "p",
  cardNumberLight: "p",

  cardTitleDark: "h3",
  cardTitleLight: "h3",

  cardDescription: "p",

  buttonDark: "span",
  buttonLight: "span",

  statValue: "p",
  statLabel: "p",

  leaderName: "p",
  caption: "p",

  newsCard: "p",

  footerLabel: "p",
  footerLink: "span",
  copyright: "p",
};

export default function Typography({
  as,
  children,
  className = "",
  variant,
  ...props
}: TypographyProps) {
  const Component =
    as ?? defaultElements[variant];

  return (
    <Component
      className={`
        ${baseStyle}
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}