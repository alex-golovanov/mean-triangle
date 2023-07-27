'use client';

import { useCallback, useMemo, useState } from 'react';

import { Triangle, Dropzone } from './components';
import { findTriangleMaxPath, parseTriangleText } from './utils';
import styles from './page.module.css';
import { SAMPLE_DATA } from './constants';

export default function App() {
  const [data, setData] = useState<number[][] | null>(null);

  const triangleProps = useMemo(() => {
    if (data && data.length) {
      return { data, ...findTriangleMaxPath(data) };
    }

    return null;
  }, [data]);

  const showDropZone = !(data && data.length);
  const showTriangle = triangleProps;

  const handleOnLoad = useCallback((text?: string) => {
    console.log(text);
    if (text) {
      setData(parseTriangleText(text));
    }
  }, []);

  const handleReset = () => setData(null);

  return (
    <main className={styles.root}>
      {showTriangle && <Triangle {...triangleProps} />}
      {showTriangle && (
        <button className={styles.close} onClick={handleReset}>
          ❌
        </button>
      )}
      {showDropZone && (
        <Dropzone onLoad={handleOnLoad} className={styles.dropzone} />
      )}
    </main>
  );
}
