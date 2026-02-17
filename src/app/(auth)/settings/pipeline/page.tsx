"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Plus,
  MoreVertical,
  GripVertical,
  Trash2,
  Edit,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { InlineFeedback } from "@/components/ui/inline-feedback";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ModuleCommandHeader } from "@/components/shared/module-command-header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { usePipelineStore, type Pipeline } from "@/stores/pipeline-store";
import { PipelineFormModal } from "@/components/pipeline/pipeline-form-modal";
import { StageManager } from "@/components/pipeline/stage-manager";
import { SettingsSecondaryNav } from "@/components/settings/settings-secondary-nav";

export default function PipelineSettingsPage() {
  const router = useRouter();
  const { pipelines, deletePipeline } = usePipelineStore();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingPipeline, setEditingPipeline] = useState<Pipeline | null>(null);
  const [deletingPipeline, setDeletingPipeline] = useState<Pipeline | null>(null);
  const [expandedPipeline, setExpandedPipeline] = useState<string | null>(null);
  const [pipelineFeedback, setPipelineFeedback] = useState<{type: "success" | "error"; message: string} | null>(null);

  const handleDelete = () => {
    if (!deletingPipeline) return;

    if (deletingPipeline.cardCount > 0) {
      setPipelineFeedback({ type: "error", message: `Não é possível excluir. Existem ${deletingPipeline.cardCount} cards neste funil.` });
      setDeletingPipeline(null);
      return;
    }

    deletePipeline(deletingPipeline.id);
    setPipelineFeedback({ type: "success", message: `Funil excluído. O funil "${deletingPipeline.name}" foi removido.` });
    setTimeout(() => setPipelineFeedback(null), 3000);
    setDeletingPipeline(null);
  };

  const canAddPipeline = pipelines.length < 5;
  const defaultPipelinesCount = pipelines.filter((pipeline) => pipeline.isDefault).length;
  const totalStages = pipelines.reduce((acc, pipeline) => acc + pipeline.stages.length, 0);

  return (
    <div className="flex gap-8">
      <SettingsSecondaryNav activeKey="pipeline" />

      <div className="min-w-0 flex-1 space-y-6">
        <ModuleCommandHeader
          title="Gerenciar Funis"
          description="Configure os funis e etapas do seu pipeline de vendas."
          className="premium-panel"
          meta={`Seção ativa: Pipeline · ${pipelines.length} funis ativos`}
          chips={[
            {
              id: "default-funnel",
              label: `${defaultPipelinesCount} padrão`,
              tone: defaultPipelinesCount > 0 ? "success" : "warning",
              onClick: () => {
                const firstDefault = pipelines.find((pipeline) => pipeline.isDefault);
                if (firstDefault) {
                  setExpandedPipeline(firstDefault.id);
                  setPipelineFeedback({
                    type: "success",
                    message: `Funil padrão "${firstDefault.name}" selecionado.`,
                  });
                  return;
                }
                setPipelineFeedback({
                  type: "error",
                  message: "Nenhum funil padrão configurado no momento.",
                });
              },
            },
            {
              id: "stage-count",
              label: `${totalStages} etapas`,
              tone: "info",
              onClick: () => {
                setPipelineFeedback({
                  type: "success",
                  message: "Resumo de etapas exibido no painel de funis.",
                });
              },
            },
          ]}
          actions={
            <div className="flex w-full flex-wrap items-center justify-end gap-2">
              <Button
                onClick={() => setIsCreateModalOpen(true)}
                disabled={!canAddPipeline}
                className="h-9 rounded-full bg-black font-heading text-sm text-white hover:bg-zinc-800"
              >
                <Plus className="mr-1.5 h-3.5 w-3.5" />
                Novo Funil
              </Button>

            </div>
          }
        >
          <div className="flex w-full flex-wrap items-center justify-between gap-2">
            <div className="text-xs text-zinc-500">
              {expandedPipeline
                ? "Gerenciando etapas do funil selecionado"
                : "Selecione um funil para abrir o gerenciador de etapas"}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 rounded-full"
                onClick={() => router.push("/pipes")}
              >
                Ver pipeline
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 rounded-full"
                onClick={() =>
                  setExpandedPipeline((current) => (current ? null : pipelines[0]?.id ?? null))
                }
              >
                {expandedPipeline ? "Recolher etapas" : "Expandir primeiro funil"}
              </Button>
            </div>
          </div>
        </ModuleCommandHeader>

        {/* Inline Feedback */}
        {pipelineFeedback && (
          <InlineFeedback type={pipelineFeedback.type} message={pipelineFeedback.message} onClose={() => setPipelineFeedback(null)} />
        )}

        {/* Limit Warning */}
        {!canAddPipeline && (
          <Card className="border-status-warning bg-status-warning/5">
            <CardContent className="flex items-center gap-3 pt-6">
              <AlertTriangle className="h-5 w-5 text-status-warning" />
              <p className="font-body text-sm text-zinc-700">
                Você atingiu o limite de <strong>5 funis</strong>. Exclua um funil existente para criar um novo.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Pipelines List */}
        <div className="space-y-4">
          {pipelines.map((pipeline) => (
            <Card key={pipeline.id} className="rounded-[15px]">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="font-heading text-xl">
                        {pipeline.name}
                      </CardTitle>
                      {pipeline.isDefault && (
                        <Badge variant="secondary" className="rounded-[10px] font-body text-xs">
                          Padrão
                        </Badge>
                      )}
                      <Badge variant="outline" className="rounded-[10px] font-body text-xs">
                        {pipeline.stages.length} etapas
                      </Badge>
                      <Badge variant="outline" className="rounded-[10px] font-body text-xs">
                        {pipeline.cardCount} cards
                      </Badge>
                    </div>
                    {pipeline.description && (
                      <CardDescription className="mt-1 font-body text-sm">
                        {pipeline.description}
                      </CardDescription>
                    )}
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="rounded-[15px]">
                      <DropdownMenuItem onClick={() => setEditingPipeline(pipeline)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          setExpandedPipeline(
                            expandedPipeline === pipeline.id ? null : pipeline.id
                          )
                        }
                      >
                        <GripVertical className="mr-2 h-4 w-4" />
                        Gerenciar Etapas
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => setDeletingPipeline(pipeline)}
                        disabled={pipeline.isDefault}
                        className="text-status-danger focus:text-status-danger"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        {pipeline.isDefault ? "Não pode excluir padrão" : "Excluir"}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>

              {/* Stage Manager (expanded) */}
              {expandedPipeline === pipeline.id && (
                <CardContent className="border-t border-zinc-100 pt-6">
                  <StageManager pipeline={pipeline} />
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {pipelines.length === 0 && (
          <Card className="rounded-[15px]">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <p className="font-body text-sm text-zinc-500">
                Nenhum funil configurado. Crie o primeiro funil para começar.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Create/Edit Modal */}
        <PipelineFormModal
          open={isCreateModalOpen || editingPipeline !== null}
          onOpenChange={(open) => {
            if (!open) {
              setIsCreateModalOpen(false);
              setEditingPipeline(null);
            }
          }}
          pipeline={editingPipeline}
        />

        {/* Delete Confirmation */}
        <AlertDialog open={deletingPipeline !== null} onOpenChange={() => setDeletingPipeline(null)}>
          <AlertDialogContent className="max-w-[calc(100%-2rem)] rounded-[20px] sm:max-w-lg">
            <AlertDialogHeader>
              <AlertDialogTitle className="font-heading text-xl">
                Excluir funil &quot;{deletingPipeline?.name}&quot;?
              </AlertDialogTitle>
              <AlertDialogDescription className="font-body text-sm text-zinc-600">
                {deletingPipeline && deletingPipeline.cardCount > 0 ? (
                  <>
                    Não é possível excluir este funil porque existem{" "}
                    <strong>{deletingPipeline.cardCount} cards</strong> associados a ele.
                    <br />
                    <br />
                    Mova ou exclua todos os cards antes de continuar.
                  </>
                ) : (
                  <>
                    Esta ação não pode ser desfeita. Todas as etapas deste funil serão removidas permanentemente.
                  </>
                )}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="rounded-full">Cancelar</AlertDialogCancel>
              {deletingPipeline && deletingPipeline.cardCount === 0 && (
                <AlertDialogAction
                  onClick={handleDelete}
                  className="rounded-full bg-status-danger text-white hover:bg-status-danger/90"
                >
                  Sim, excluir
                </AlertDialogAction>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
