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
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Plus,
  X,
  Check,
  ChevronsUpDown,
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
  AlertCircle,
  Eye,
  Clock,
  User,
  FileText,
  ToggleLeft,
  Users
} from "lucide-react";
import {
  fieldTypeLabels,
  fieldTypeDescriptions,
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
  const [openTypePopover, setOpenTypePopover] = useState(false);
  const [required, setRequired] = useState(false);
  const [description, setDescription] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [options, setOptions] = useState<{ label: string; value: string }[]>([]);
  const [newOptionLabel, setNewOptionLabel] = useState("");
  const [validationRules, setValidationRules] = useState<FieldValidationRules>({});
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const needsOptions = typesRequiringOptions.includes(type);

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
  };

  const handleClose = (open: boolean) => {
    if (!open) resetForm();
    onOpenChange(open);
  };

  const TypeIcon = fieldTypeIcons[type] || Type;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] w-full sm:max-w-4xl flex-col gap-0 p-0 overflow-hidden bg-white border-zinc-200/50 shadow-2xl sm:rounded-2xl">
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
          <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent">
            <div className="space-y-10 max-w-2xl mx-auto">
              
              {/* Informações Básicas Section */}
              <section className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-zinc-900">Informações Básicas</h3>
                  <p className="text-sm text-zinc-500 mt-0.5">Defina o nome principal e o formato de dados que este campo irá receber no card.</p>
                </div>

                <div className="space-y-6">
                  {/* Nome do Campo */}
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-zinc-900 flex items-center gap-1.5">
                      Nome do Campo <span className="text-red-500 text-xs">*</span>
                    </Label>
                    <Input
                      value={label}
                      onChange={(e) => {
                        setLabel(e.target.value);
                        if (errors.label) setErrors((prev) => { const n = { ...prev }; delete n.label; return n; });
                      }}
                      placeholder="Ex: Data de follow-up"
                      className={cn(
                        "h-10 bg-white transition-all hover:bg-zinc-50 focus:bg-white text-sm shadow-sm",
                        errors.label ? "border-red-300 focus-visible:ring-red-100" : "border-zinc-200 focus-visible:ring-brand/15"
                      )}
                    />
                    {errors.label ? (
                      <p className="flex items-center gap-1.5 text-[11px] font-medium text-red-600 mt-1">
                        <AlertCircle className="h-3.5 w-3.5" /> {errors.label}
                      </p>
                    ) : (
                      key && <p className="text-[11px] text-zinc-400 font-mono mt-1">ID interno: {key}</p>
                    )}
                  </div>

                  {/* Tipo de Dado */}
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-zinc-900 flex items-center gap-1.5">
                      Tipo de Dado <span className="text-red-500 text-xs">*</span>
                    </Label>
                    <Popover open={openTypePopover} onOpenChange={setOpenTypePopover}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={openTypePopover}
                          className="w-full justify-between h-auto py-2.5 px-3.5 bg-white border-zinc-200 focus:ring-brand/15 transition-all hover:bg-zinc-50 hover:border-zinc-300 font-normal shadow-sm group"
                        >
                          <div className="flex items-center gap-3 text-left">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-50 border border-zinc-200 shadow-xs text-zinc-600 group-hover:text-brand transition-colors">
                              <TypeIcon className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold text-zinc-900">{fieldTypeLabels[type]}</span>
                              <span className="text-xs text-zinc-500 truncate">{fieldTypeDescriptions[type]}</span>
                            </div>
                          </div>
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 text-zinc-500" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-(--radix-popover-trigger-width) p-0 shadow-xl border-zinc-200/80 rounded-xl" align="start">
                        <Command className="max-h-[380px]">
                          <CommandInput placeholder="Buscar tipo de campo..." className="h-10 text-sm" />
                          <CommandList className="max-h-[330px] scrollbar-thin scrollbar-thumb-zinc-200">
                            <CommandEmpty className="py-6 text-center text-sm text-zinc-500">Nenhum tipo encontrado.</CommandEmpty>
                            
                            <CommandGroup heading="Texto e Números" className="px-1.5 pt-1.5 pb-0">
                              {["text", "textarea", "number", "currency", "percentage", "integer"].map((t) => {
                                const Icon = fieldTypeIcons[t as FieldType];
                                return (
                                  <CommandItem
                                    key={t}
                                    value={`${fieldTypeLabels[t as FieldType]} ${fieldTypeDescriptions[t as FieldType]}`}
                                    onSelect={() => {
                                      setType(t as FieldType);
                                      setOptions([]);
                                      setValidationRules({});
                                      setOpenTypePopover(false);
                                    }}
                                    className="flex items-start gap-3 rounded-md px-2 py-2 cursor-pointer mb-1 data-[selected=true]:bg-zinc-100/80"
                                  >
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white border border-zinc-200/60 shadow-xs text-zinc-500 mt-0.5">
                                      <Icon className="h-4 w-4" />
                                    </div>
                                    <div className="flex flex-col flex-1">
                                      <span className="text-sm font-semibold text-zinc-900">{fieldTypeLabels[t as FieldType]}</span>
                                      <span className="text-xs text-zinc-500 leading-tight">{fieldTypeDescriptions[t as FieldType]}</span>
                                    </div>
                                    {type === t && (
                                      <Check className="ml-auto h-4 w-4 text-brand mt-2" />
                                    )}
                                  </CommandItem>
                                );
                              })}
                            </CommandGroup>

                            <CommandGroup heading="Seleção" className="px-1.5 py-0">
                              {["select", "multiselect", "boolean", "date", "datetime"].map((t) => {
                                const Icon = fieldTypeIcons[t as FieldType];
                                return (
                                  <CommandItem
                                    key={t}
                                    value={`${fieldTypeLabels[t as FieldType]} ${fieldTypeDescriptions[t as FieldType]}`}
                                    onSelect={() => {
                                      setType(t as FieldType);
                                      setOptions([]);
                                      setValidationRules({});
                                      setOpenTypePopover(false);
                                    }}
                                    className="flex items-start gap-3 rounded-md px-2 py-2 cursor-pointer mb-1 data-[selected=true]:bg-zinc-100/80"
                                  >
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white border border-zinc-200/60 shadow-xs text-zinc-500 mt-0.5">
                                      <Icon className="h-4 w-4" />
                                    </div>
                                    <div className="flex flex-col flex-1">
                                      <span className="text-sm font-semibold text-zinc-900">{fieldTypeLabels[t as FieldType]}</span>
                                      <span className="text-xs text-zinc-500 leading-tight">{fieldTypeDescriptions[t as FieldType]}</span>
                                    </div>
                                    {type === t && (
                                      <Check className="ml-auto h-4 w-4 text-brand mt-2" />
                                    )}
                                  </CommandItem>
                                );
                              })}
                            </CommandGroup>

                            <CommandGroup heading="Contato e Especial" className="px-1.5 pb-1.5 pt-0">
                              {["email", "phone", "url", "file"].map((t) => {
                                const Icon = fieldTypeIcons[t as FieldType];
                                return (
                                  <CommandItem
                                    key={t}
                                    value={`${fieldTypeLabels[t as FieldType]} ${fieldTypeDescriptions[t as FieldType]}`}
                                    onSelect={() => {
                                      setType(t as FieldType);
                                      setOptions([]);
                                      setValidationRules({});
                                      setOpenTypePopover(false);
                                    }}
                                    className="flex items-start gap-3 rounded-md px-2 py-2 cursor-pointer mb-1 data-[selected=true]:bg-zinc-100/80"
                                  >
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white border border-zinc-200/60 shadow-xs text-zinc-500 mt-0.5">
                                      <Icon className="h-4 w-4" />
                                    </div>
                                    <div className="flex flex-col flex-1">
                                      <span className="text-sm font-semibold text-zinc-900">{fieldTypeLabels[t as FieldType]}</span>
                                      <span className="text-xs text-zinc-500 leading-tight">{fieldTypeDescriptions[t as FieldType]}</span>
                                    </div>
                                    {type === t && (
                                      <Check className="ml-auto h-4 w-4 text-brand mt-2" />
                                    )}
                                  </CommandItem>
                                );
                              })}
                            </CommandGroup>

                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Campo Obrigatório */}
                  <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <Label className="text-sm font-semibold text-zinc-900 cursor-pointer" htmlFor="required-switch">Campo Obrigatório</Label>
                        <Badge variant="secondary" className="h-5 px-1.5 text-[10px] font-semibold text-brand bg-brand/5 border-brand/20 uppercase tracking-wider hidden sm:inline-flex">Required</Badge>
                      </div>
                      <p className="text-xs text-zinc-500">O card não avançará para a próxima etapa se este campo estiver vazio.</p>
                    </div>
                    <Switch id="required-switch" checked={required} onCheckedChange={setRequired} className="data-[state=checked]:bg-brand" />
                  </div>
                </div>
              </section>

              <hr className="border-t border-zinc-100" />

              {/* Aparência e Configuração Section */}
              <section className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-zinc-900">Aparência e Configuração</h3>
                  <p className="text-sm text-zinc-500 mt-0.5">Ajuste como o campo será exibido e preenchido pela equipe.</p>
                </div>

                <div className="space-y-6">
                  {/* Options Configuration */}
                  {needsOptions && (
                    <div className="space-y-4 pb-6 border-b border-zinc-100/80">
                      <Label className="text-sm font-semibold text-zinc-900 flex items-center gap-1.5">
                        Opções de seleção <span className="text-red-500 text-xs">*</span>
                      </Label>

                      <div className="flex gap-2">
                        <Input
                          value={newOptionLabel}
                          onChange={(e) => setNewOptionLabel(e.target.value)}
                          placeholder="Digite uma opção e pressione Enter"
                          className="h-10 flex-1 bg-white border-zinc-200 focus:ring-brand/15 text-sm shadow-sm transition-all"
                          onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleAddOption(); } }}
                        />
                        <Button
                          type="button"
                          size="sm"
                          variant="secondary"
                          onClick={handleAddOption}
                          disabled={!newOptionLabel.trim()}
                          className="h-10 px-4 bg-zinc-100 text-zinc-700 hover:bg-zinc-200 shadow-sm transition-all"
                        >
                          <Plus className="mr-1.5 h-4 w-4" /> Adicionar
                        </Button>
                      </div>

                      <div className="min-h-[60px] rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-3 transition-colors">
                        {options.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {options.map((opt) => (
                              <Badge
                                key={opt.value}
                                variant="outline"
                                className="gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold border-zinc-200/80 bg-white text-zinc-700 shadow-sm hover:border-zinc-300 transition-colors"
                              >
                                {opt.label}
                                <button
                                  type="button"
                                  onClick={() => handleRemoveOption(opt.value)}
                                  className="ml-1 rounded-full p-0.5 text-zinc-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                                >
                                  <X className="h-3.5 w-3.5" />
                                </button>
                              </Badge>
                            ))}
                          </div>
                        ) : (
                          <div className="flex h-full items-center justify-center py-4 text-sm font-medium text-zinc-400">
                            Nenhuma opção adicionada ainda.
                          </div>
                        )}
                      </div>
                      {errors.options && <p className="text-[11px] font-medium text-red-600 mt-1">{errors.options}</p>}
                    </div>
                  )}

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-zinc-900">Placeholder</Label>
                      <Input
                        value={placeholder}
                        onChange={(e) => setPlaceholder(e.target.value)}
                        placeholder="Texto de fundo vazio"
                        className="h-10 bg-white border-zinc-200 focus:ring-brand/15 text-sm shadow-sm transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-zinc-900">Texto de Ajuda</Label>
                      <Input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Dica exibida abaixo do campo"
                        className="h-10 bg-white border-zinc-200 focus:ring-brand/15 text-sm shadow-sm transition-all"
                      />
                    </div>
                  </div>
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
