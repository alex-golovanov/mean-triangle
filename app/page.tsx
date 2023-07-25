import Image from 'next/image';
import styles from './page.module.css';

import { Triangle } from './components';

export default function Home() {
  return (
    <main className={styles.root}>
      <Triangle />
    </main>
  );
}
