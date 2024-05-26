import React, { useMemo } from "react";
import { useFormItem } from "../../../hooks/useFormItem";

type Params = { formKey: string; name: string } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function FileInput({ formKey, name, ...rest }: Params) {
  const [{ localValue }, update] = useFormItem(formKey);
  const id = useMemo(() => `input--${Math.random()}`.replace(".", ""), []);
  return (
    <React.Fragment>
      {[...((localValue ?? []) as FileList)].map((asset) => {
        switch (asset.type.split("/")[0]) {
          case "image":
            return (
              <img
                style={{ width: 300 + "px" }}
                src={URL.createObjectURL(asset)}
                alt=""
              />
            );
        }
      })}
      <input
        {...rest}
        id={id}
        type="file"
        name={name}
        onChange={(e) => {
          const files = e.target.files;
          update(files);
        }}
      />
    </React.Fragment>
  );
}
