import React, {FC} from 'react'
import './ribbon.css';
import allNotes from '../utils/infoNotes'

const Ribbon: FC = () => {
    return (
        <p className="ribbon d-none d-lg-inline-block">
            <span className="textRibbon">{allNotes.ribonNote()}</span>
        </p>
    )
}

export default Ribbon