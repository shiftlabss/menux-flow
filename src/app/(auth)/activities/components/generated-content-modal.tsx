"use client";

import { Copy, Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";

interface GeneratedContentModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description?: string;
    content: string;
}

export function GeneratedContentModal({
    open,
    onOpenChange,
    title,
    description,
    content,
}: GeneratedContentModalProps) {
    const [copied, setCopied] = useState(false);
    const [copyError, setCopyError] = useState<string | null>(null);

    const handleOpenChange = (nextOpen: boolean) => {
        if (nextOpen) {
            setCopied(false);
            setCopyError(null);
        }
        onOpenChange(nextOpen);
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(content);
            setCopied(true);
            setCopyError(null);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopyError("Não foi possível copiar agora. Tente novamente.");
        }
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                            <Sparkles className="h-4 w-4" />
                        </div>
                        <DialogTitle>{title}</DialogTitle>
                    </div>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>

                <div className="relative mt-2 rounded-md border border-zinc-200 bg-zinc-50 p-4">
                    <pre className="whitespace-pre-wrap font-sans text-sm text-zinc-700">
                        {content}
                    </pre>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="absolute right-2 top-2 h-8 w-8 text-zinc-500 hover:text-zinc-900"
                        onClick={handleCopy}
                    >
                        {copied ? (
                            <Check className="h-4 w-4 text-emerald-500" />
                        ) : (
                            <Copy className="h-4 w-4" />
                        )}
                    </Button>
                </div>

                {copyError ? (
                    <p className="mt-2 text-xs text-red-600">{copyError}</p>
                ) : null}

                <DialogFooter className="gap-2 sm:gap-0">
                    <DialogClose asChild>
                        <Button variant="outline">Fechar</Button>
                    </DialogClose>
                    <Button onClick={handleCopy} className="gap-2">
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        {copied ? "Copiado" : "Copiar conteúdo"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
