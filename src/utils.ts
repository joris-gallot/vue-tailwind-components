export const copyToClipboard = async (toCopy: string) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    await navigator.clipboard.writeText(toCopy);

    return true;
  }

  return Promise.reject("The Clipboard API is not available.");
};
