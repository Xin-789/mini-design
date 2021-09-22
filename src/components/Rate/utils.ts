export type CharacterType = 0 | 0.5 | 1;

export const transformValueToCharacterMap = (
  value: number,
  max: number,
  allowHalf: boolean,
): CharacterType[] => {
  const characterMap: any = [];
  for (let i = 0; i < max; i++) {
    if (i < value) {
      if (allowHalf && i + 1 > value) {
        value && characterMap.push(0.5);
      } else {
        characterMap.push(1);
      }
    } else {
      characterMap.push(0);
    }
  }
  return characterMap;
};

export const transformCharacterMapToValue = (characterMap: CharacterType[]) =>
  (characterMap as number[]).reduce((total, currentValue) => {
    return total + currentValue;
  });

// HTML DOM and SVG DOM may have different support levels,
// so we need to check on context instead of a document root element.
export const contains = (context: any, node: any) => {
  if (context.contains) {
    return context.contains(node);
  } else if (context.compareDocumentPosition) {
    return context === node || !!(context.compareDocumentPosition(node) & 16);
  }
};
