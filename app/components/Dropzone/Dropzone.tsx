'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import clsx from 'clsx';

import styles from './styles.module.css';

interface IProps {
  onLoad?: (str?: string) => void;
  onError?: (code: string) => void;
  className?: string;
}

export const Dropzone = (props: IProps): JSX.Element => {
  const { onLoad, onError, className } = props;
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
    <div {...getRootProps()} className={clsx(className, styles.root)}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop files here ...</p>
      ) : (
        <p>Drag & drop files here or click to select</p>
      )}
    </div>
  );
};
