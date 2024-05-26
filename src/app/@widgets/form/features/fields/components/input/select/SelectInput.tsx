import React, { ChangeEvent, useCallback, useEffect, useMemo } from "react";
import { useFormItem } from "../../../hooks/useFormItem";

export type SelectOption<T = any> = {
  title: string;
  value: string | any;
  payload?: T | null;
};

type Params<T = any> = {
  formKey?: string;
  type?: string;
  name?: string;
  multiple?: boolean;
  options: SelectOption<T>[];
  placeholder?: string;
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

/**
 *
 * @param options
 * @param multiple
 * @constructor
 */
function Options({
  options,
  multiple,
}: {
  multiple: boolean;
  options: SelectOption[];
}) {
  return (
    <>
      <option value="">Select {multiple ? "multiple" : "one"}...</option>
      {options.map((option, index) => {
        if (typeof option === "string") {
          return <option key={option}>{option}</option>;
        }

        return (
          <option key={option.title + index} value={option.value}>
            {option.title}
          </option>
        );
      })}
    </>
  );
}

function useOnChangeCallback(
  multiple: undefined | boolean,
  setValues: (t: any) => void
) {
  return useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      if (!multiple) {
        return setValues(e.target.value);
      }
      const options = e.target.options;
      const value = [];
      let i = 0;
      for (; i < options.length; i++) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
      setValues(value);
    },
    [multiple, setValues]
  );
}

export function SelectInput({
  name,
  formKey,
  options,
  multiple,
  type,
  ...rest
}: Params) {
  const valueMap = useMemo(
    () => new Map(options.map((option) => [option.value, option.payload])),
    [options]
  );
  const [{ localValue }, update] = useFormItem(formKey, (v) =>
    Array.isArray(v) ? v.map((v) => valueMap.get(v)) : valueMap.get(v)
  );
  const id = useMemo(() => "input--" + Math.random(), []);
  const value = multiple ? localValue ?? [] : localValue ?? "";
  const onChange = useOnChangeCallback(multiple, update);

  useEffect(() => {
    rest.value && update(rest.value);
  }, [rest.value]);

  return (
    <React.Fragment>
      <select
        {...rest}
        id={id}
        name={name}
        value={value}
        multiple={multiple}
        onChange={onChange}
      >
        <Options options={options} multiple={!!multiple} />
      </select>
    </React.Fragment>
  );
}
