/* eslint-disable @typescript-eslint/no-explicit-any */
export const getPopupValue = (
  commonValues: string[],
  temporary_length: number,
  original_length: number
) => {
  let popupValue = "Thank you for your votes!";
  let errors = true;
  if (commonValues.length) {
    popupValue = `You already voted for: ${commonValues.join(",")}.`;
  } else if (temporary_length !== original_length) {
    popupValue = "You have to pick one nominee for each category";
  } else {
    errors = false;
  }

  return { popupValue, errors };
};
