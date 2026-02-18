"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Loader2, X } from "lucide-react";
import type { StageField, StageFieldValue } from "@/lib/mock-stage-fields";

type FieldSaveState = "idle" | "saving" | "saved" | "error";

interface DynamicFieldRendererProps {
  field: StageField;
  value: StageFieldValue;
  onChange: (fieldId: string, value: StageFieldValue) => void;
  disabled?: boolean;
  error?: string;
  saveState?: FieldSaveState;
}

export function DynamicFieldRenderer({
  field,
  value,
  onChange,
  disabled = false,
  error,
  saveState = "idle",
}: DynamicFieldRendererProps) {
  const handleChange = (val: StageFieldValue) => {
    onChange(field.id, val);
  };

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between gap-2">
        <Label className="font-heading text-[10px] font-bold uppercase tracking-wider text-zinc-400">
          {field.label} {field.required && <span className="text-red-500">*</span>}
        </Label>
        {saveState === "saving" && (
          <span className="inline-flex items-center gap-1 text-[10px] text-zinc-400">
            <Loader2 className="h-3 w-3 animate-spin" />
            Salvando...
          </span>
        )}
        {saveState === "saved" && (
          <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600">
            <Check className="h-3 w-3" />
            Salvo
          </span>
        )}
        {saveState === "error" && (
          <span className="text-[10px] text-red-600">Falha ao salvar</span>
        )}
      </div>

      <div className="mt-1.5">
        {renderFieldInput(field, value, handleChange, disabled, error)}
      </div>

      {error && <p className="mt-1 text-[10px] text-red-600">{error}</p>}
      {!error && field.helperText && (
        <p className="mt-1 text-[9px] text-zinc-400">{field.helperText}</p>
      )}
      {!error && field.description && !field.helperText && (
        <p className="mt-1 text-[9px] text-zinc-400">{field.description}</p>
      )}
    </div>
  );
}

function renderFieldInput(
  field: StageField,
  value: StageFieldValue,
  onChange: (val: StageFieldValue) => void,
  disabled: boolean,
  error?: string,
) {
  const errorClasses = error ? "border-red-300 focus:ring-red-200 focus-visible:ring-red-200" : "";
  const baseInputClasses = cn(
    "h-9 rounded-lg border-zinc-200 font-body text-xs focus:ring-brand/10",
    errorClasses,
  );

  switch (field.type) {
    case "select":
      return (
        <Select
          value={typeof value === "string" ? value : ""}
          onValueChange={(val) => onChange(val)}
          disabled={disabled}
        >
          <SelectTrigger className={cn("h-9 w-full rounded-lg border-zinc-200 font-body text-xs focus:ring-brand/10", errorClasses)}>
            <SelectValue placeholder="Selecione..." />
          </SelectTrigger>
          <SelectContent>
            {field.options?.map((opt) => (
              <SelectItem key={opt.value} value={opt.value} className="text-xs">
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );

    case "multiselect": {
      const selectedValues = Array.isArray(value) ? value : [];
      return (
        <div className="space-y-2">
          <div className="flex flex-wrap gap-1">
            {selectedValues.map((val) => {
              const opt = field.options?.find((o) => o.value === val);
              return (
                <Badge
                  key={val}
                  variant="secondary"
                  className="gap-1 rounded-full px-2 py-0.5 text-[10px]"
                >
                  {opt?.label || val}
                  {!disabled && (
                    <button
                      type="button"
                      onClick={() => onChange(selectedValues.filter((v) => v !== val))}
                      className="ml-0.5 hover:text-red-600"
                    >
                      <X className="h-2.5 w-2.5" />
                    </button>
                  )}
                </Badge>
              );
            })}
          </div>
          <Select
            value=""
            onValueChange={(val) => {
              if (!selectedValues.includes(val)) {
                onChange([...selectedValues, val]);
              }
            }}
            disabled={disabled}
          >
            <SelectTrigger className={cn("h-9 w-full rounded-lg border-zinc-200 font-body text-xs focus:ring-brand/10", errorClasses)}>
              <SelectValue placeholder="Adicionar..." />
            </SelectTrigger>
            <SelectContent>
              {field.options
                ?.filter((opt) => !selectedValues.includes(opt.value))
                .map((opt) => (
                  <SelectItem key={opt.value} value={opt.value} className="text-xs">
                    {opt.label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      );
    }

    case "textarea":
      return (
        <Textarea
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "min-h-[86px] resize-none rounded-lg border border-zinc-200 px-3 py-2 text-xs placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-brand/10",
            errorClasses,
          )}
          placeholder={field.placeholder}
          disabled={disabled}
        />
      );

    case "boolean":
      return (
        <div className="flex items-center gap-2">
          <Switch
            checked={!!value}
            onCheckedChange={(checked) => onChange(checked)}
            disabled={disabled}
          />
          <span className="text-xs text-zinc-600">{value ? "Sim" : "Não"}</span>
        </div>
      );

    case "currency":
      return (
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400">R$</span>
          <Input
            type="text"
            inputMode="decimal"
            value={value != null ? String(value) : ""}
            onChange={(e) => {
              const raw = e.target.value.replace(/[^\d.,]/g, "");
              onChange(raw);
            }}
            placeholder={field.placeholder || "0,00"}
            className={cn(baseInputClasses, "pl-9")}
            disabled={disabled}
          />
        </div>
      );

    case "percentage":
      return (
        <div className="relative">
          <Input
            type="number"
            inputMode="decimal"
            value={value != null ? String(value) : ""}
            onChange={(e) => onChange(e.target.value ? Number(e.target.value) : null)}
            placeholder={field.placeholder || "0"}
            className={cn(baseInputClasses, "pr-8")}
            disabled={disabled}
            min={field.validationRules?.min}
            max={field.validationRules?.max}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400">%</span>
        </div>
      );

    case "url":
      return (
        <Input
          type="url"
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder || "https://..."}
          className={baseInputClasses}
          disabled={disabled}
        />
      );

    case "email":
      return (
        <Input
          type="email"
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder || "email@exemplo.com"}
          className={baseInputClasses}
          disabled={disabled}
        />
      );

    case "phone":
      return (
        <Input
          type="tel"
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder || "(00) 00000-0000"}
          className={baseInputClasses}
          disabled={disabled}
        />
      );

    case "date":
      return (
        <Input
          type="date"
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputClasses}
          disabled={disabled}
        />
      );

    case "time":
      return (
        <Input
          type="time"
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputClasses}
          disabled={disabled}
        />
      );

    case "datetime":
      return (
        <Input
          type="datetime-local"
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputClasses}
          disabled={disabled}
        />
      );

    case "integer":
      return (
        <Input
          type="number"
          inputMode="numeric"
          step="1"
          value={value != null ? String(value) : ""}
          onChange={(e) => onChange(e.target.value ? parseInt(e.target.value, 10) : null)}
          placeholder={field.placeholder}
          className={baseInputClasses}
          disabled={disabled}
        />
      );

    case "number":
      return (
        <Input
          type="number"
          inputMode="decimal"
          value={value != null ? String(value) : ""}
          onChange={(e) => onChange(e.target.value ? Number(e.target.value) : null)}
          placeholder={field.placeholder}
          className={baseInputClasses}
          disabled={disabled}
        />
      );

    case "file":
      return (
        <div className="flex items-center gap-2">
          <Input
            type="file"
            onChange={() => onChange("arquivo_anexado")}
            className={cn(baseInputClasses, "cursor-pointer file:mr-2 file:rounded-md file:border-0 file:bg-zinc-100 file:px-2 file:py-1 file:text-[10px] file:font-medium file:text-zinc-700")}
            disabled={disabled}
          />
        </div>
      );

    case "user":
    case "contact":
      return (
        <Input
          type="text"
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder || (field.type === "user" ? "Nome do usuário" : "Nome do contato")}
          className={baseInputClasses}
          disabled={disabled}
        />
      );

    default:
      return (
        <Input
          type="text"
          value={typeof value === "string" ? value : value != null ? String(value) : ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          className={baseInputClasses}
          disabled={disabled}
        />
      );
  }
}
