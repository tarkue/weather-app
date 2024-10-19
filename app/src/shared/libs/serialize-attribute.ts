export function serializeAttributes<T extends readonly string[]>(
  el: HTMLElement,
) {
  const obj = {};
  el.getAttributeNames().forEach((attr) => {
    obj[attr] = el.getAttribute(attr);
  });

  return obj as Record<T[number], string | null>;
}
