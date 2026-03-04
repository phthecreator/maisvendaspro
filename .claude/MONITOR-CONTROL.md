# Monitor Control - Quick Commands

## Status

**Monitor PID:** 68971
**Status:** ✅ ACTIVE
**Interval:** 10 segundos
**Logs:** `.claude/monitor-output.log`

---

## Commands

### Ver atividade em tempo real
```bash
tail -f .claude/monitor-output.log
```

### Ver alertas (Red Flags)
```bash
cat .claude/ALERT.txt
```

### Parar monitoramento
```bash
kill 68971
# ou
pkill -f "monitor.sh"
```

### Reiniciar monitoramento
```bash
nohup bash .claude/monitor.sh > .claude/monitor-output.log 2>&1 &
echo "New PID: $!"
```

### Verificar se está rodando
```bash
ps aux | grep monitor.sh | grep -v grep
```

---

## O que o monitor detecta

### 🚨 Red Flags (Alertas críticos)
- Commits > 1000 linhas
- Modificação em `requirements.txt` / `package.json`
- Testes falhando após execução

### 📝 Yellow Flags (Info)
- Arquivos modificados
- Testes sendo executados
- Novos commits

---

## Cleanup completo (remover tudo)

```bash
# Parar monitor
kill 68971

# Remover todos os arquivos de monitoramento
bash .claude/CLEANUP.sh
```
