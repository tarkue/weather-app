export function serializeAttributes<T extends readonly string[]>(
  comp: HTMLElement,
) {
  const obj = {};
  comp.getAttributeNames().forEach((attr) => {
    obj[attr] = comp.getAttribute(attr);
  });

  return obj as Record<T[number], string | null>;
}
