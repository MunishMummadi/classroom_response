// src/components/AnswerList.tsx
import { FC } from 'react';
import { speakText } from '../utils/tts';

interface AnswerListProps {
    answers: string[];
}

const AnswerList: FC<AnswerListProps> = ({ answers }) => (
    <ul>
        {answers.map((answer, index) => (
            <li key={index}>
                {answer}
                <button onClick={() => speakText(answer)}>Read Aloud</button>
            </li>
        ))}
    </ul>
);

export default AnswerList;