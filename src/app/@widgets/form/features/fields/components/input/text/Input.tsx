import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { FormContext } from "@widgets/form/context/context";
import { useFormItem } from "../../../hooks/useFormItem";

type InputParams = { formKey?: string } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Div {
  key: number;
  children: any;
  value: any;
  update: () => void;
}

function InnerValue({ children, update }: Div) {
  useEffect(() => {
    // update();
  }, [update]);
  return <div className="value">{children}</div>;
}
export function Value({
  formKey,
  children,
  value,
}: {
  formKey: string;
  value?: any;
  children?: any;
}) {
  const form = useContext(FormContext);
  const [{ localValue }, update] = useFormItem(
    formKey ?? null,
    undefined,
    true,
  );

  useEffect(() => {
    const v = localValue;
    if (v !== value) update(v);
  }, [update, localValue, form.key]);

  const doUpdate = useCallback(() => {
    update(localValue);
  }, [localValue]);

  useMemo(() => `input--${Math.random()}`.replace(".", ""), []);

  return (
    <div className="input-wrapper">
      <InnerValue key={form.key} value={value} update={doUpdate}>
        {children}
      </InnerValue>
    </div>
  );
}

export function Input(params: InputParams) {
  const { formKey, name, ...rest } = params;
  const [{ value }, update] = useFormItem(formKey ?? name ?? null);
  const { type = "text" } = rest;

  return (
    <React.Fragment>
      <input
        {...rest}
        type={type}
        name={name}
        value={value ?? ""}
        onChange={(e) => update(e.target.value)}
      />
    </React.Fragment>
  );
}
