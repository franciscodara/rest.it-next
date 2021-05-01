import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const {resetCountdown} = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeBoxActive}>
          <header>Ganhe {activeChallenge.amount} px</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Challenge" />
            <strong> Novo desafio </strong>
            <p> {activeChallenge.description} </p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>

            <button 
            type="button" 
            className={styles.challengeSucceedButton}
            onClick={handleChallengeSucceeded}
            >
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
