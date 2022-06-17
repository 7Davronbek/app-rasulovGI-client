import { LANGUAGE } from "../tools/constants";
// import { en } from "./EN";
import { ru } from "./RU";
import { uz } from "./UZ";

export const getLanguage = () => {
    return localStorage.getItem(LANGUAGE);
};

export const getText = (word) => {
    return getLanguage() === "uz"
        ? uz[word]
        // :
        //  getLanguage() === "uz"
        // ? uz[word]
        : ru[word];
};

