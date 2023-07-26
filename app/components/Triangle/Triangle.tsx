import styles from './styles.module.css';
import clsx from 'clsx';
interface IProps {
  data: number[][];
  path: number[];
  values: number[];
  total: number;
}

export const Triangle = (props: IProps): JSX.Element => {
  const { data, path } = props;
  return (
    <div className={styles.root}>
      {data.map((row, rowKey) => (
        <div key={rowKey} className={styles.row}>
          {row.map((number, numberKey) => (
            <div
              key={numberKey}
              className={clsx(styles.number, {
                [styles.numberHighlight]: numberKey === path[rowKey],
              })}
            >
              {number}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
