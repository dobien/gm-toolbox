Usage:
```dataviewjs
const regionsList = ["Невервинтер", "Neverwinter"];

const scriptPath = "scripts/npcTable";
await dv.view(scriptPath, { arg1: dv, arg2: regionsList });
```

```dataviewjs
const targetLocation = [dv.current().file.name];

const scriptPath = "scripts/locationTable";
await dv.view(scriptPath, { arg1: dv, arg2: targetLocation });
```