import {useCallback, useState} from 'react';
import {IFormConfig} from '@widgets/form/types/IFormConfig';

export function useFormModifierHandler(
  form: IFormConfig,
  index: 'onReset' | 'onChange' | 'onSubmit',
  origHandler?: (e: any) => void,
): [boolean, (d: any) => void] {
  const [hasStateChanged, setHasStateChanged] = useState(false);

  const handler = useCallback(
    (data: any) => {
      const out = form.items.map((item) => {
        const validators = item.validators?.[index];
        if (!validators) return [];
        return [
          item.name,
          validators.map((validator) => validator(data, data?.[item.name])),
        ];
      });
      let validationResult = out.filter(([, o]) => {
        return (o as any)?.filter(
          (o: any) => typeof o !== 'undefined' && o !== true,
        ).length;
      });
      const stateChanged   = validationResult.length === 0;
      setHasStateChanged(stateChanged);
      if (!origHandler) return;
      origHandler(data);
    },
    [origHandler],
  );

  return [hasStateChanged, handler];
}
