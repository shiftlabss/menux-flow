"use client";

import { Copy, Check, Sparkles, X } from "lucide-react";
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
import { cn } from "@/lib/utils";

interface GeneratedContentModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description?: string;
    content: string;
    type?: "message" | "script" | "plan";
}

export function GeneratedContentModal({
    open,
    onOpenChange,
    title,
    description,
    content,
    type = "message",
}: GeneratedContentModalProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(content);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
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
