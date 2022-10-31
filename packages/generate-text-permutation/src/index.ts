// build Cartesian Product of dataset ...
const cartesianProduct = <T>(items: T[][]) => {
  function loop(
    firstItem: T[],
    secondItem?: T[],
    ...otherItems: T[][]
  ): T[][] {
    if (secondItem === undefined) return [firstItem];
    return secondItem.flatMap((curr) => loop([...firstItem, curr], ...otherItems));
  };
  return loop([], ...items);
};

export const generateTextPermutation = (dataset: (string[])[]): string[] => {
  const cartesian = cartesianProduct(dataset);
  return cartesian.map(phraseParts => phraseParts.join(" "));
};
