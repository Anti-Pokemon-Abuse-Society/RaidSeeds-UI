import { ChangeEvent, useCallback } from "react";

interface SearchSelectProps<T extends number | string> {
  children: any;
  onChange: (val: T) => void;
  value: T;
}

export function SearchSelect<T extends number | string>({children, onChange, value}: SearchSelectProps<T>) {
  const changeFn = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    if (typeof value === "string") onChange(e.target.value as T);
    else onChange(parseInt(e.target.value) as T);
  }, [onChange, value]);

  return (
    <select value={value} onChange={changeFn} className="bg-gray-700 text-gray-200 p-2">
      {children}
    </select>
  )
}

interface SearchInputProps<T extends string | number> {
  value: T;
  onChange: (val: T) => void;
  type: HTMLInputElement['type'];
}

export function SearchInput<T extends string | number>({ value, onChange, type }: SearchInputProps<T>) {
  const changeEvent = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value as T);
  }, [onChange]);

  return <input className="bg-blue-300 text-gray-900 p-2" type={type} value={value} onChange={changeEvent} />
}

interface SearchButtonProps {
  children: any;
  onClick: () => void;
}
export function SearchButton({children, onClick}: SearchButtonProps) {
  return (
    <button onClick={onClick} className="bg-purple-300 text-gray-900 p-2 max-w-xl">
      {children}
    </button>
  )
}