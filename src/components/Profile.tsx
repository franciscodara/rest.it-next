import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/franciscodara.png" alt="Francisco Dara"/>
            <div>
                <strong>Francisco Dara</strong>
                <p>
                    <img src="icons/level.svg" alt="Level Icon"/>
                { level }
                </p>
            </div>
        </div>
    );
}