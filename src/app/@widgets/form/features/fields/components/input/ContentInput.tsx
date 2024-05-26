import React from "react";
import { useFormItem } from "@widgets/form/features/fields/hooks/useFormItem";
import { Input } from "./text/Input";
import { Textarea } from "./text/Textarea";

interface IContentParams {
  formKey: string;
  title?: string;
  value?: any;
  contentType?: "text/plain";
}

export function ContentInput({
  contentType: _contentType,
  formKey: name,
  title,
  value,
}: IContentParams) {
  const [{ value: contextMime }] = useFormItem("contentType");
  switch (_contentType ?? contextMime) {
    case "text/spw":
    case "text/plain":
      return <Input formKey={name} placeholder={title} value={value} />;
    case "text/long":
      return <Textarea value={value} formKey={name} placeholder={title} />;
    default:
      break;
  }
  return <div className="error">[please set the content type]</div>;
}
