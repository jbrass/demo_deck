## What is Package.json

<div class="cols">
  <div class="col-left">

`package.json` is the project contract:

- what the project is
- what it depends on
- how to run it

  </div>
  <div class="col-right codepanel">

```json
{
  "name": "demo-deck",
  "private": false,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "pdf": "node pdf.js",
    "clean": "rm -rf dist deck.pdf",
    "ci": "npm run clean && npm run build && npm run pdf"
  },
  "dependencies": {
    "reveal.js": "^5.0.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "puppeteer": "^24.0.0"
  }
}

```

## </div> </div>


---

## Identity

Look at the top:

- `name`, `version`
- `private` (prevents accidental publish)
- `type` (ESM vs CommonJS)

Note:
Only 1–2 sentences per bullet; keep it moving.

---

## deps vs devDeps

- `dependencies` → needed at runtime (prod)
- `devDependencies` → build/test/lint tooling

Rule of thumb:

- If prod breaks without it → `dependencies`
- If users never download it → `devDependencies`

---

## scripts = team API

Common scripts:

- `dev`
- `build`
- `test`
- `lint`

Note:
Mention CI runs these too; scripts standardize team workflows.

---

## wrap

If you understand `package.json`, you can:

- run the project
- debug it
- ship it

---

## Demo and code



