export const first = (ar: ReadonlyArray<any>): any => {
  if (ar && ar.length && ar[0]) {
    return ar[0];
  }
  return null;
};
