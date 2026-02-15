# Setup Multi-AI Workflow (Claude, Codex e Antigravity)

Este guia padroniza como trabalhar no mesmo projeto usando 3 ferramentas sem bagunçar branch, histórico ou código.

Repositorio remoto atual:

- `origin`: `https://github.com/shiftlabss/menux-flow.git`

## Objetivo

- Manter tudo no mesmo projeto Git.
- Evitar conflito por edição concorrente na mesma branch.
- Permitir troca rápida entre ferramentas.

## Modelo recomendado

- 1 clone principal do repositório.
- 3 `git worktree` (uma pasta por ferramenta).
- 1 branch por tarefa.

## Estrutura de pastas sugerida

```text
~/projetos/Flow                 # clone principal
~/projetos/Flow-tools/flow-claude
~/projetos/Flow-tools/flow-codex
~/projetos/Flow-tools/flow-antigravity
```

## Passo 1: Preparacao inicial (uma vez)

```bash
cd ~/projetos
git clone https://github.com/shiftlabss/menux-flow.git Flow
cd Flow
git switch main
git pull --rebase

git config pull.rebase true
git config rebase.autoStash true
git config fetch.prune true
```

## Passo 2: Criar worktrees por ferramenta

```bash
cd ~/projetos/Flow
mkdir -p ../Flow-tools

git worktree add ../Flow-tools/flow-claude -b claude/inbox main
git worktree add ../Flow-tools/flow-codex -b codex/inbox main
git worktree add ../Flow-tools/flow-antigravity -b anti/inbox main
```

## Passo 3: Abrir cada ferramenta na pasta certa

- Claude Code -> `~/projetos/Flow-tools/flow-claude`
- Codex -> `~/projetos/Flow-tools/flow-codex`
- Antigravity -> `~/projetos/Flow-tools/flow-antigravity`

## Regra de ouro

- Nunca usar a mesma branch em duas ferramentas ao mesmo tempo.
- Para cada tarefa, criar branch nova com prefixo da ferramenta.

Exemplos:

```bash
git switch -c codex/activities-command-center
git switch -c claude/fix-pipeline-validation
git switch -c anti/ui-polish-activities
```

## Ritual de troca entre ferramentas

### Antes de sair de uma ferramenta

```bash
git add -A
git commit -m "mensagem objetiva da mudanca"
git push -u origin "$(git branch --show-current)"
```

### Ao entrar na outra ferramenta

```bash
git fetch origin
git rebase origin/main
```

## Fluxo diario recomendado

### Inicio do dia

```bash
git fetch origin
git switch main
git pull --rebase
git worktree list
```

### Iniciar tarefa nova (em qualquer worktree)

```bash
git fetch origin
git rebase origin/main
git switch -c codex/nome-da-tarefa
```

### Finalizar tarefa

```bash
git add -A
git commit -m "feat: descricao curta"
git push -u origin "$(git branch --show-current)"
```

## Checklist rapido para nao errar

Rode estes 3 comandos antes de editar:

```bash
git remote -v
git status -sb
git branch --show-current
```

Validacoes:

- O remoto deve ser `shiftlabss/menux-flow`.
- O `status` deve estar limpo ou com mudancas esperadas.
- A branch deve ser da ferramenta atual (`codex/...`, `claude/...`, `anti/...`).

## Como lidar com conflito

Se o `rebase` acusar conflito:

1. Resolver arquivos em conflito.
2. `git add -A`
3. `git rebase --continue`
4. Repetir ate terminar.
5. Se desistir: `git rebase --abort`

## Integracao final no main

Opcao A (recomendada): Pull Request por branch.

Opcao B (local, se voce preferir):

```bash
git switch main
git pull --rebase
git merge --ff-only <sua-branch>
git push origin main
```

## Limpeza periodica

```bash
git fetch --prune
git branch --merged main
git worktree list
```

Remover worktree antiga (se nao usar mais):

```bash
git worktree remove ~/projetos/Flow-tools/flow-antiga
```

## Dicas praticas

- Commits pequenos e frequentes evitam perda de contexto.
- Mensagem de commit objetiva (`feat:`, `fix:`, `refactor:`, `test:`).
- Se for trocar de ferramenta no meio de mudanca incompleta, use `git commit` ou `git stash -u`.

## Comandos de emergencia

Ver onde cada worktree esta:

```bash
git worktree list
```

Ver se duas pastas estao na mesma branch (evitar):

```bash
for d in ~/projetos/Flow-tools/*; do
  echo "== $d"
  git -C "$d" branch --show-current
done
```

---

Se quiser, o proximo passo e eu te entregar uma versao com aliases (`gst`, `gup`, `gnew`) para deixar esse fluxo em 2 ou 3 comandos.
