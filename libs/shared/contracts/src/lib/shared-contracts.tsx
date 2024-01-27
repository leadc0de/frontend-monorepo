import styles from './shared-contracts.module.scss';

/* eslint-disable-next-line */
export interface SharedContractsProps {}

export function SharedContracts(props: SharedContractsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedContracts!</h1>
    </div>
  );
}

export default SharedContracts;
