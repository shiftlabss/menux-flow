"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

export interface MultiComboboxOption {
  value: string;
  label: string;
  subtitle?: string;
  disabled?: boolean;
}

export interface MultiComboboxProps {
  options: MultiComboboxOption[];
  values: string[];
  onValuesChange: (
    values: string[],
    options: MultiComboboxOption[]
  ) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
}

export function MultiCombobox({
  options,
  values,
  onValuesChange,
  placeholder = "Selecionar...",
  searchPlaceholder = "Buscar...",
  emptyMessage = "Nenhum resultado encontrado.",
  disabled = false,
  className,
  ...props
}: MultiComboboxProps) {
  const [open, setOpen] = React.useState(false);

  const selectedOptions = React.useMemo(
    () => options.filter((o) => values.includes(o.value)),
    [options, values]
  );

  const handleToggle = React.useCallback(
    (option: MultiComboboxOption) => {
      const isSelected = values.includes(option.value);
      let nextValues: string[];
      if (isSelected) {
        nextValues = values.filter((v) => v !== option.value);
      } else {
        nextValues = [...values, option.value];
      }
      const nextOptions = options.filter((o) => nextValues.includes(o.value));
      onValuesChange(nextValues, nextOptions);
    },
    [values, options, onValuesChange]
  );

  const handleRemove = React.useCallback(
    (value: string) => {
      const nextValues = values.filter((v) => v !== value);
      const nextOptions = options.filter((o) => nextValues.includes(o.value));
      onValuesChange(nextValues, nextOptions);
    },
    [values, options, onValuesChange]
  );

  return (
    <div className={cn("space-y-1.5", className)}>
      <Popover open={open} onOpenChange={disabled ? undefined : setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label={props["aria-label"]}
            disabled={disabled}
            className={cn(
              "w-full justify-between font-normal h-10",
              values.length === 0 && "text-muted-foreground"
            )}
          >
            <span className="truncate">
              {values.length === 0
                ? placeholder
                : `${values.length} selecionado${values.length > 1 ? "s" : ""}`}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[--radix-popover-trigger-width] p-0"
          align="start"
        >
          <Command>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandList>
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = values.includes(option.value);
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.label}
                      disabled={option.disabled}
                      onSelect={() => handleToggle(option)}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4 shrink-0",
                          isSelected ? "opacity-100" : "opacity-0"
                        )}
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="truncate">{option.label}</span>
                        {option.subtitle && (
                          <span className="text-xs text-muted-foreground truncate">
                            {option.subtitle}
                          </span>
                        )}
                      </div>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Selected badges */}
      {selectedOptions.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {selectedOptions.map((opt) => (
            <Badge
              key={opt.value}
              variant="secondary"
              className="gap-1 pr-1 text-xs font-normal"
            >
              {opt.label}
              <button
                type="button"
                onClick={() => handleRemove(opt.value)}
                className="ml-0.5 rounded-full p-0.5 hover:bg-zinc-300/50"
                aria-label={`Remover ${opt.label}`}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
