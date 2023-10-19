const p = (e) => e && e.replace(/(\w)(\w*)/g, (o, a, t) => a.toUpperCase() + t.toLowerCase()), s = (e) => e && e[0].toUpperCase() + e.slice(1);
export {
  p as a,
  s as t
};
