import styles from './index.module.css'

type Props = {
  progresso: number
}

export default function ProgrssBar({ progresso }: Props) {
  return (
    <>
      {progresso ? (
        <div className={styles.barra_progresso}>
          <div className={styles.barra} style={{ width: `${progresso}%` }}>
            <p>{progresso} %</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
