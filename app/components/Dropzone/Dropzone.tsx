'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface IProps {
  onLoad?: (str?: string) => void;
  onError?: (code: string) => void;
}

export const Dropzone = (props: IProps): JSX.Element => {
  const { onLoad, onError } = props;
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const reader = new FileReader();

      reader.onerror = () => onError?.('Could not read file.');
      reader.onload = () => {
        onLoad?.(reader.result?.toString().trim());
      };

      reader.readAsText(acceptedFiles[0]);
    },
    [onError, onLoad]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag & drop some files here, or click to select files</p>
      )}
    </div>
  );
};
