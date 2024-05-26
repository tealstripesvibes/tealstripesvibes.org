import React, { useMemo } from "react";
import { getConfiguredDomain } from "@core/dev/components/Dev";
import { FormWidget } from "../../../FormWidget";
import { useFormItem } from "../hooks/useFormItem";
import { IFormItemConfig } from "../types/fieldConfig";
import { IFormConfig } from "../../../types/IFormConfig";
import { ContentInput } from "./input/ContentInput";
import { Textarea } from "./input/text/Textarea";
import { SelectInput } from "./input/select/SelectInput";
import { FileInput } from "./input/file/FileInput";
import { Input, Value } from "./input/text/Input";

/**
 *
 */
export function getDomain() {
  return getConfiguredDomain() || (window?.location?.host ?? "");
}

function SubformInput({
  formKey,
  config,
}: {
  formKey: string;
  config: IFormConfig;
}) {
  const [formState, setFormState] = useFormItem(formKey);

  return (
    <FormWidget
      config={config}
      defaultValue={formState}
      onSubmit={setFormState}
    />
  );
}

function FormItemFactory({ item: config }: { item: IFormItemConfig }) {
  const { title, type, name, value: v, ...rest } = config;
  switch (type) {
    case "date":
    case "datetime-local":
    case "password":
    case "text": {
      return <Input formKey={name} {...config} />;
    }
    case "value": {
      return <Value formKey={name} {...config} />;
    }
    case "longtext": {
      return <Textarea formKey={name} {...config} />;
    }
    case "select": {
      return <SelectInput formKey={name} {...config} />;
    }
    case "content": {
      return <ContentInput formKey={name} {...config} />;
    }
    case "asset": {
      return <FileInput formKey={name} {...config} />;
    }
    case "form": {
      return <SubformInput formKey={name} config={config.config} />;
    }
    default:
      return <>NO HANDLER</>;
  }
}

const currentTimeQuadrant = new Date().getHours() / 6;

export default function FormItems({ items }: { items: IFormItemConfig[] }) {
  const id = useMemo(
    () => `input--${currentTimeQuadrant}`.replace(".", ""),
    [],
  );
  if (!items) return null;
  return (
    <>
      {items.map((item) => {
        item.id = id + item.name;

        const doLabel = item.type !== "value";

        return (
          <div key={item.name} className="input-wrapper">
            {doLabel && <label htmlFor={item.id}>{item.title}</label>}
            <div className="form-item">
              <FormItemFactory item={item} key={item.name} />
            </div>
          </div>
        );
      })}
    </>
  );
}
