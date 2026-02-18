"use client";

import { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plus,
  X,
  Loader2,
  Type,
  Hash,
  List,
  Calendar,
  CheckSquare,
  AlignLeft,
  Mail,
  Phone,
  Link as LinkIcon,
  Percent,
  DollarSign,
  Settings2,
  HelpCircle,
  AlertCircle,
  Eye,
  LayoutTemplate,
  Clock,
  User,
  FileText,
  ToggleLeft,
  Users
} from "lucide-react";
import {
  fieldTypeLabels,
  type FieldType,
  type StageField,
  type FieldValidationRules,
} from "@/lib/mock-stage-fields";
import { DynamicFieldRenderer } from "./dynamic-field-renderer";
import { cn } from "@/lib/utils";

interface NewFieldModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  stageId: string;
  stageName: string;
  onSave: (field: Omit<StageField, "id" | "order" | "isActive" | "stageId">) => void;
}

const typesRequiringOptions: FieldType[] = ["select", "multiselect"];
const typesWithNumberValidation: FieldType[] = ["number", "integer", "currency", "percentage"];
const typesWithTextValidation: FieldType[] = ["text", "textarea", "url", "email", "phone"];

const fieldTypeIcons: Record<FieldType, React.ElementType> = {
  text: Type,
  textarea: AlignLeft,
  number: Hash,
  integer: Hash,
  currency: DollarSign,
  percentage: Percent,
  url: LinkIcon,
  email: Mail,
  phone: Phone,
  date: Calendar,
  datetime: Calendar,
  time: Clock,
  select: List,
  multiselect: CheckSquare,
  boolean: ToggleLeft,
  user: User,
  contact: Users,
  file: FileText,
};

export function NewFieldModal({
  open,
  onOpenChange,
  stageId,
  stageName,
  onSave,
}: NewFieldModalProps) {
  const [label, setLabel] = useState("");
  const [type, setType] = useState<FieldType>("text");
  const [required, setRequired] = useState(false);
  const [description, setDescription] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [options, setOptions] = useState<{ label: string; value: string }[]>([]);
  const [newOptionLabel, setNewOptionLabel] = useState("");
  const [validationRules, setValidationRules] = useState<FieldValidationRules>({});
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState<"general" | "validation" | "preview">("general");

  const needsOptions = typesRequiringOptions.includes(type);
  const hasNumberValidation = typesWithNumberValidation.includes(type);
  const hasTextValidation = typesWithTextValidation.includes(type);
  const hasValidationConfig = hasNumberValidation || hasTextValidation;

  const key = useMemo(() => {
    return label
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_|_$/g, "");
  }, [label]);

  const previewField: StageField = useMemo(() => ({
    id: "preview",
    stageId,
    key: key || "preview",
    label: label || "Nome do campo",
    type,
    required,
    order: 0,
    description,
    placeholder,
    options: needsOptions ? options : undefined,
    validationRules: Object.keys(validationRules).length > 0 ? validationRules : undefined,
    isActive: true,
  }), [label, type, required, description, placeholder, options, validationRules, stageId, key, needsOptions]);

  const handleAddOption = () => {
    const trimmed = newOptionLabel.trim();
    if (!trimmed) return;
    const value = trimmed
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "_");
    if (options.some((o) => o.value === value)) return;
    setOptions([...options, { label: trimmed, value }]);
    setNewOptionLabel("");
  };

  const handleRemoveOption = (value: string) => {
    setOptions(options.filter((o) => o.value !== value));
  };

  const validate = (): boolean => {
    const nextErrors: Record<string, string> = {};
    if (!label.trim()) nextErrors.label = "Nome do campo é obrigatório.";
    if (!type) nextErrors.type = "Tipo é obrigatório.";
    if (needsOptions && options.length === 0) {
      nextErrors.options = "Adicione pelo menos uma opção.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    setIsSaving(true);

    // Simulate async save
    setTimeout(() => {
      onSave({
        key,
        label: label.trim(),
        type,
        required,
        description: description.trim() || undefined,
        placeholder: placeholder.trim() || undefined,
        helperText: description.trim() || undefined,
        options: needsOptions ? options : undefined,
        validationRules: Object.keys(validationRules).length > 0 ? validationRules : undefined,
      });
      resetForm();
      setIsSaving(false);
    }, 500);
  };

  const resetForm = () => {
    setLabel("");
    setType("text");
    setRequired(false);
    setDescription("");
    setPlaceholder("");
    setOptions([]);
    setNewOptionLabel("");
    setValidationRules({});
    setErrors({});
    setActiveTab("general");
  };

  const handleClose = (open: boolean) => {
    if (!open) resetForm();
    onOpenChange(open);
  };

  const TypeIcon = fieldTypeIcons[type] || Type;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] w-full sm:max-w-2xl flex-col gap-0 p-0 overflow-hidden bg-white border-zinc-200/50 shadow-2xl sm:rounded-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-100 bg-white/50 px-6 py-4 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/5 border border-brand/10 text-brand shadow-sm">
              <Plus className="h-5 w-5" />
            </div>
            <div>
              <DialogTitle className="text-base font-semibold text-zinc-900">
                Novo Campo Personalizado
              </DialogTitle>
              <p className="text-xs text-zinc-500">
                Adicionando em <span className="font-medium text-zinc-700">{stageName}</span>
              </p>
            </div>
          </div>
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-zinc-600">
              <X className="h-4 w-4" />
            </Button>
          </DialogClose>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Main Form Content - Scrollable */}
          <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent">
            <div className="space-y-8">
              {/* Definition Section */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-zinc-100">
                  <LayoutTemplate className="h-4 w-4 text-zinc-400" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Definição</h3>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-medium text-zinc-700">
                      Nome do campo <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      value={label}
                      onChange={(e) => {
                        setLabel(e.target.value);
                        if (errors.label) setErrors((prev) => { const n = { ...prev }; delete n.label; return n; });
                      }}
                      placeholder="Ex: Data de follow-up"
                      className={cn(
                        "h-9 bg-zinc-50/50 transition-all focus:bg-white",
                        errors.label ? "border-red-200 focus-visible:ring-red-100" : "border-zinc-200 focus-visible:ring-brand/10"
                      )}
                    />
                    {errors.label ? (
                      <p className="flex items-center gap-1 text-[10px] text-red-600">
                        <AlertCircle className="h-3 w-3" /> {errors.label}
                      </p>
                    ) : (
                      key && <p className="text-[10px] text-zinc-400 font-mono">ID: {key}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-medium text-zinc-700">
                      Tipo de dado <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={type}
                      onValueChange={(val) => {
                        setType(val as FieldType);
                        setOptions([]);
                        setValidationRules({});
                      }}
                    >
                      <SelectTrigger className="h-9 w-full bg-zinc-50/50 border-zinc-200 focus:ring-brand/10 transition-all focus:bg-white">
                        <div className="flex items-center gap-2">
                          <TypeIcon className="h-4 w-4 text-zinc-500" />
                          <SelectValue />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <div className="p-1">
                          <p className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                            Texto e Números
                          </p>
                          {["text", "textarea", "number", "currency", "percentage", "integer"].map((t) => (
                            <SelectItem key={t} value={t} className="rounded-md text-xs">
                              {fieldTypeLabels[t as FieldType]}
                            </SelectItem>
                          ))}

                          <div className="my-1 border-t border-zinc-100" />
                          <p className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                            Seleção
                          </p>
                          {["select", "multiselect", "checkbox", "date", "datetime"].map((t) => (
                            <SelectItem key={t} value={t} className="rounded-md text-xs">
                              {fieldTypeLabels[t as FieldType]}
                            </SelectItem>
                          ))}

                          <div className="my-1 border-t border-zinc-100" />
                          <p className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                            Contato
                          </p>
                          {["email", "phone", "url"].map((t) => (
                            <SelectItem key={t} value={t} className="rounded-md text-xs">
                              {fieldTypeLabels[t as FieldType]}
                            </SelectItem>
                          ))}
                        </div>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 p-4 transition-colors hover:border-zinc-300">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <Label className="text-sm font-medium text-zinc-900">Campo Obrigatório</Label>
                      <Badge variant="secondary" className="h-5 px-1.5 text-[10px] font-normal text-zinc-500 bg-white border-zinc-200">Required</Badge>
                    </div>
                    <p className="text-xs text-zinc-500">Impede o avanço da etapa se não estiver preenchido</p>
                  </div>
                  <Switch checked={required} onCheckedChange={setRequired} />
                </div>
              </section>

              {/* Configuration Section */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-zinc-100">
                  <Settings2 className="h-4 w-4 text-zinc-400" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Configuração</h3>
                </div>

                <div className="space-y-4">
                  {/* Options Configuration */}
                  {needsOptions && (
                    <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm space-y-3 animate-in fade-in slide-in-from-top-2">
                      <Label className="text-xs font-medium text-zinc-700">
                        Opções de seleção <span className="text-red-500">*</span>
                      </Label>

                      <div className="flex gap-2">
                        <Input
                          value={newOptionLabel}
                          onChange={(e) => setNewOptionLabel(e.target.value)}
                          placeholder="Digite uma opção e pressione Enter"
                          className="h-9 flex-1 bg-zinc-50/50 border-zinc-200 focus:ring-brand/10"
                          onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleAddOption(); } }}
                        />
                        <Button
                          type="button"
                          size="sm"
                          variant="secondary"
                          onClick={handleAddOption}
                          disabled={!newOptionLabel.trim()}
                          className="h-9 px-4 bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                        >
                          <Plus className="mr-1.5 h-3.5 w-3.5" /> Adicionar
                        </Button>
                      </div>

                      <div className="min-h-[60px] rounded-lg border border-dashed border-zinc-200 bg-zinc-50/30 p-2">
                        {options.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {options.map((opt) => (
                              <Badge
                                key={opt.value}
                                variant="outline"
                                className="gap-1.5 rounded-md px-2 py-1 text-xs font-normal border-zinc-200 bg-white text-zinc-700 shadow-sm"
                              >
                                {opt.label}
                                <button
                                  type="button"
                                  onClick={() => handleRemoveOption(opt.value)}
                                  className="ml-0.5 rounded-full p-0.5 text-zinc-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </Badge>
                            ))}
                          </div>
                        ) : (
                          <div className="flex h-full items-center justify-center py-4 text-xs text-zinc-400">
                            Nenhuma opção adicionada ainda
                          </div>
                        )}
                      </div>
                      {errors.options && <p className="text-[10px] text-red-600">{errors.options}</p>}
                    </div>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label className="text-xs font-medium text-zinc-700">Placeholder</Label>
                      <Input
                        value={placeholder}
                        onChange={(e) => setPlaceholder(e.target.value)}
                        placeholder="Texto dentro do campo vazio"
                        className="h-9 bg-zinc-50/50 border-zinc-200 focus:ring-brand/10"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs font-medium text-zinc-700">Texto de Ajuda</Label>
                      <Input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Dica exibida abaixo do campo"
                        className="h-9 bg-zinc-50/50 border-zinc-200 focus:ring-brand/10"
                      />
                    </div>
                  </div>

                  {hasValidationConfig && (
                    <div className="space-y-3 pt-2">
                      <Label className="text-xs font-medium text-zinc-700">Regras de Validação (Opcional)</Label>
                      <div className="grid grid-cols-2 gap-4 rounded-xl border border-dashed border-zinc-200 p-4">
                        {hasNumberValidation && (
                          <>
                            <div className="space-y-1.5">
                              <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Mínimo</span>
                              <Input
                                type="number"
                                value={validationRules.min ?? ""}
                                onChange={(e) => setValidationRules({ ...validationRules, min: e.target.value ? Number(e.target.value) : undefined })}
                                className="h-8 text-xs bg-zinc-50/50"
                                placeholder="Sem limite"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Máximo</span>
                              <Input
                                type="number"
                                value={validationRules.max ?? ""}
                                onChange={(e) => setValidationRules({ ...validationRules, max: e.target.value ? Number(e.target.value) : undefined })}
                                className="h-8 text-xs bg-zinc-50/50"
                                placeholder="Sem limite"
                              />
                            </div>
                          </>
                        )}
                        {hasTextValidation && (
                          <>
                            <div className="space-y-1.5">
                              <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Mín. Caracteres</span>
                              <Input
                                type="number"
                                value={validationRules.minLength ?? ""}
                                onChange={(e) => setValidationRules({ ...validationRules, minLength: e.target.value ? Number(e.target.value) : undefined })}
                                className="h-8 text-xs bg-zinc-50/50"
                                placeholder="Qualquer"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Máx. Caracteres</span>
                              <Input
                                type="number"
                                value={validationRules.maxLength ?? ""}
                                onChange={(e) => setValidationRules({ ...validationRules, maxLength: e.target.value ? Number(e.target.value) : undefined })}
                                className="h-8 text-xs bg-zinc-50/50"
                                placeholder="Ilimitado"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar / Preview (Desktop) or Bottom (Mobile) */}
          <div className="w-80 border-l border-zinc-100 bg-zinc-50/50 hidden md:flex flex-col">
            <div className="p-4 border-b border-zinc-100 bg-white/50">
              <div className="flex items-center gap-2 text-zinc-500">
                <Eye className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Pré-visualização</span>
              </div>
            </div>
            <div className="flex-1 p-6 flex flex-col items-center justify-center">
              <div className="w-full space-y-2 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-zinc-400 font-medium">Como aparecerá no card</span>
                </div>
                <DynamicFieldRenderer
                  field={previewField}
                  value={null}
                  onChange={() => { }}
                  disabled={false}
                />
              </div>
              <p className="mt-4 text-center text-[10px] text-zinc-400 max-w-[200px]">
                Esta é uma representação visual de como o campo será exibido para sua equipe.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-zinc-100 bg-white px-6 py-4">
          <Button
            variant="ghost"
            type="button"
            onClick={() => handleClose(false)}
            className="text-zinc-500 hover:text-zinc-900"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-zinc-900 text-white hover:bg-black shadow-lg shadow-zinc-900/10 min-w-[140px]"
          >
            {isSaving ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Plus className="mr-2 h-4 w-4" />
            )}
            Criar campo
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
