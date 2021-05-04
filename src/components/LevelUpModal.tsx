import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import style from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal () {
    const { level, closeLevelModal } = useContext(ChallengesContext);

    return (
        <div className={style.overlay}>
            <div className={style.container}>
                <header>{ level }</header>
                <strong>Parabéns!</strong>
                <p>Você subiu de nível.</p>
                <button type="button" onClick={ closeLevelModal }>
                    <img src="/icons/close.svg" alt="Fechar"/>
                </button>
            </div>
        </div>
    )
}