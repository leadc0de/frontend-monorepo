import styles from './pages-layout.module.scss';

/* eslint-disable-next-line */
export interface PagesLayoutProps {}

export function PagesLayout(props: PagesLayoutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PagesLayout!</h1>
    </div>
  );
}

export default PagesLayout;
