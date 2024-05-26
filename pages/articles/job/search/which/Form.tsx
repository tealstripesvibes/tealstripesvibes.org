import AppForm from "@widgets/form/internal/components/AppForm";
import { Textarea } from "@widgets/form/features/fields/components/input/text/Textarea";
import { useLocalStorage } from "@services/storage/localStorage/hooks/useLocalStorage";
import { useMemo } from "react";

export function JobItemForm({ id }: { id: string }) {
  const [value, setValue] = useLocalStorage(`job-item-${id}`, "");
  const formVal = useMemo(() => ({ value: value }), [value]);
  return (
    <AppForm
      defaultValue={formVal}
      onSubmit={({ currentValue }) => setValue(currentValue.value)}
      buttons={[{ type: "submit" }]}
    >
      {value}
      <Textarea formKey="value" />
    </AppForm>
  );
}
