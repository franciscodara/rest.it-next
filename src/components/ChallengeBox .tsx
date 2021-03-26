import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeBoxActive}>
          <header>Granhe {activeChallenge.amount} px</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Challenge" />
            <strong> Novo desafio </strong>
            <p> {activeChallenge.description} </p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButtom}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceedButtom}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeBoxNotActive}>
          <strong>Inicie o ciclo para receber novos desafios!</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de nível completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
