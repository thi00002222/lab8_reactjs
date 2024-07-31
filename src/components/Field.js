import React from "react";
import { useContext } from "react";
import LanguageContext from '../contexts/LanguageContext'

const Field = () => {
    const  language  = useContext(LanguageContext)?.language
    const text = language === 'english' ? 'Name' : 'Nom'
    return (
        <div className="ui field">
            <label>{text}</label>
            <input />
        </div>
    )
}

export default Field;