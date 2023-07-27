import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { findTriangleMaxPath } from '@/app/utils';
import styles from './styles.module.css';

type TProps = ReturnType<typeof findTriangleMaxPath> & { data: number[][] };

export const Triangle = (props: TProps): JSX.Element => {
  const { data, path, values, total } = props;
  const [top, ...rows] = data;
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <div
          ref={topRef}
          title={top.toString()}
          className={clsx(styles.number, styles.numberHighlight)}
        >
          {top}
        </div>
      </div>
      {rows.map((row, rowKey) => (
        <div key={rowKey} className={styles.row}>
          {row.map((number, numberKey) => (
            <div
              key={numberKey}
              title={top.toString()}
              className={clsx(styles.number, {
                [styles.numberHighlight]: numberKey === path[rowKey],
              })}
            >
              {number}
            </div>
          ))}
        </div>
      ))}

      <div className={styles.answer}>
        <span>Max path total is</span>
        <span className={styles.numberHighlight}>{total}</span>
      </div>
    </div>
  );
};
