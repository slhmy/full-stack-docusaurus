# 🐸 Full Stack Docusaurus

Recording all my learning process of full stack development.

## 📝 Editing

Some common usage in daily editing.

### Dev with Specific Locale

```bash
npm run start -- --locale zh-CN
```

### Translate

```bash
npx docusaurus write-translations -l zh-CN
```

### Draft

**There is a gitignored `draft` named folder** in the root of this project,
put everything you want to draft in it.

#### Converting HTML Content to Markdown

This script will create a `.raw.md` file in the same directory of the html file.

```bash
# Make sure you have installed dependencies
node scripts/html2md.ts <path-to-html>
```

## ⚠️ Warning

Migrate from docusaurus v2, might remain some bugs,
check more in [migration guide](https://docusaurus.io/docs/migration/v3) if meet any problems.
