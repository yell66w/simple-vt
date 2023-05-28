/* eslint-disable @typescript-eslint/no-explicit-any */
export const getObjectCommonValues = (
  target: { [key: string]: any },
  temporary: { [key: string]: any },
  compareValue: string,
  pushValue: string
) => {
  const commonValues: string[] = [];
  const modified_temp = { ...target, ...temporary };
  const modified_temp_keys = Object.keys(modified_temp);

  modified_temp_keys.forEach((key: string) => {
    if (
      Object.hasOwn(target, key) &&
      target[key][compareValue] === modified_temp[key][compareValue]
    ) {
      commonValues.push(modified_temp[key][pushValue]);
    }
  });

  return commonValues;
};
