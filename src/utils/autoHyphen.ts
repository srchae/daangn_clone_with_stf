export const autoHyphen = (value: string) => {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/, "$1-$2-$3")
    .replace(/(-{1,2})$/g, "");
};
