import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';

export const MainPage = () => {
    const [selectedItem, setItem] = useState(null);

    const onItemSelected = (id) => {
        setItem(id);
    }
    return (
        <>
            <ErrorBoundary>
                <RandomChar />
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onItemSelected={onItemSelected} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <CharInfo charId={selectedItem} />
                </ErrorBoundary>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision" />
        </>
    )
}