import React from "react";
import { useFormItem } from "../../../hooks/useFormItem";

type TextareaParams = {
  formKey?: string;
  name?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;
export function Textarea({ formKey, name, ...rest }: TextareaParams) {
  const [{ value }, update] = useFormItem(formKey ?? null);
  return (
    <React.Fragment>
      <textarea
        {...rest}
        name={name}
        value={value ?? ""}
        onChange={(e) => update(e.target.value)}
      />
    </React.Fragment>
  );
}
