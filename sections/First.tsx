import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  subtitle?: string;
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  textColor?: string;
  image?: ImageWidget;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({
  title = "Welcome to Our Website",
  subtitle = "Discover amazing features and services tailored just for you.",
  backgroundColor = "#f3f4f6",
  textColor = "#1f2937",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  ctaText = "Get Started",
  ctaLink = "#"
}: Props) {
  return (
    <div className="hero min-h-screen" style={{ backgroundColor }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt="Hero" />
        <div>
          <h1 className="text-5xl font-bold" style={{ color: textColor }}>{title}</h1>
          <p className="py-6" style={{ color: textColor }}>{subtitle}</p>
          <a href={ctaLink} className="btn btn-primary">{ctaText}</a>
        </div>
      </div>
    </div>
  );
}