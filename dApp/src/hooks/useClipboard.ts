
import { useState, useCallback } from 'react';

export const useClipboard = () => {
  const [copied, setCopied] = useState(false);
  const [clipboardContent, setClipboardContent] = useState('');

  // Function to copy text to the clipboard
  const copyToClipboard = useCallback(async (text: string) => {
      try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500); // Reset isCopied after 1.5 seconds
      } catch (error) {
          console.error('Failed to copy text: ', error);
          setCopied(false);
      }
  }, []);

  // Function to read text from the clipboard
  const pasteFromClipboard = useCallback(async () => {
      try {
          return await navigator.clipboard.readText();
      } catch (error) {
          console.error('Failed to read text: ', error);
          return '';
      }
  }, []);

  return {
    copied,
    copy: copyToClipboard,
    paste: pasteFromClipboard,
  };
}