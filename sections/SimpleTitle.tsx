import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @description The image to be displayed below the title
   */
  image?: ImageWidget;
}

export default function SimpleSection({ 
  title = "Section Title",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e"
}: Props) {
  return (
    <div class="text-center py-12">
      <h2 class="text-4xl font-bold mb-4">{title}</h2>
      <div class="mt-6">
        <img src={image} alt="Section image" class="mx-auto max-w-full h-auto" />
      </div>
    </div>
  );
}