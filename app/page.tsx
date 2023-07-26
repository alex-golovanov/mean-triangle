'use client';

import { useCallback, useMemo, useState } from 'react';

import { Triangle, Dropzone } from './components';
import styles from './page.module.css';
import { findTriangleMaxPath, parseTriangleText } from './utils';

// prettier-ignore
const sampleText = 
`9235 
9096 637 
973 3269 7039 
3399 3350 4788 7546 
1739 8032 9427 976 2476 
703 9642 4232 1890 704 6463 
9601 1921 5655 1119 3115 5920 1808 
645 3674 246 2023 4440 9607 4112 3215 
660 6345 323 1664 2331 7452 3794 7679 3102 
1383 3058 755 1677 8032 2408 2592 2138 2373 8718 
8117 4602 7324 7545 4014 6970 4342 7682 150 3856 8177 
1966 1782 3248 1745 4864 9443 4900 8115 4120 9015 7040 9258 
4572 6637 9558 5366 7156 1848 2524 4337 5049 7608 8639 8301 1939 
7714 6996 2968 4473 541 3388 5992 2092 2973 9367 2573 2658 9965 8168 
67 1546 3243 752 8497 5215 7319 9245 574 7634 2223 8296 3044 9445 120`;

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

  return (
    <main className={styles.root}>
      {showTriangle && <Triangle {...triangleProps} />}
      {showDropZone && <Dropzone onLoad={handleOnLoad} />}
    </main>
  );
}
