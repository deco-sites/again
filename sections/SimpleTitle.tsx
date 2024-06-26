export interface Props {
  /**
   * @format rich-text
   */
  title?: string;
}

export default function SimpleSection({ title = "Section Title" }: Props) {
  return (
    <div class="text-center py-12">
      <h2 class="text-4xl font-bold mb-4">{title}</h2>
    </div>
  );
}