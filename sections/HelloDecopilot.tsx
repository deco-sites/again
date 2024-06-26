import { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  header?: string; // @format rich-text
  paragraph?: HTMLWidget;
}

export default function HelloSection({ header = "Hello", paragraph }: Props) {
  return (
    <div className="bg-white p-6">
      <h1 className="text-4xl font-bold mb-4">{header}</h1>
      {paragraph && (
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: paragraph }} />
      )}
    </div>
  );
}