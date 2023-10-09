const toPascalCase = (s: string | null | undefined) =>
  s ? s.replace(/(\w)(\w*)/g, (_, p, q) => p.toUpperCase() + q.toLowerCase()) : s;

const toUpperCaseFirst = (s: string | null | undefined) =>
  s && s[0].toUpperCase() + s.slice(1);

const toKebabCase = (s: string | null | undefined) =>
  s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()

export { toPascalCase, toUpperCaseFirst, toKebabCase }