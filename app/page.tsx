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
    if (text) {
      setData(parseTriangleText(text));
    }
  }, []);

  const handleReset = () => setData(null);
  const handleSampleLoad: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    setData(SAMPLE_DATA);
  };

  return (
    <main className={styles.root}>
      {showTriangle && <Triangle {...triangleProps} />}
      {showTriangle && (
        <button
          className={styles.close}
          title='Close current solution'
          onClick={handleReset}
        >
          ❌
        </button>
      )}
      {showDropZone && (
        <div className={styles.dropzone}>
          <Dropzone onLoad={handleOnLoad} />
          <div>or</div>
          <a href='#' onClick={handleSampleLoad}>
            load a sample
          </a>
        </div>
      )}
    </main>
  );
}
