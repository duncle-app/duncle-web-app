import React from "react";
import Library from "../../../model/library";
import ContactDrawer from "../../atoms/ContactDrawer/ContactDrawer";
import {useHistory, useParams} from "react-router-dom";
import NoteList from "../../molecules/NoteList/NoteList";
import {newNotes} from "../../storybook-mocks/constants";
import useStyles from "../../../global-styles";
import SalesArea from "../../atoms/Sales/SalesArea";

interface LibraryDetailProps {
    library: Library;
}

interface p {
    libraryId: string;
}

function ViewLibrary({library}: LibraryDetailProps) {
    const {content, alignToDrawer, padBottom} = useStyles()
    const {libraryId}: p = useParams()
    const {totalSales, lastSale} = library
    let history = useHistory();

    function onBack(): void {
        history.goBack();
    }

    function onEdit(library: Library): void {
        console.log('on edit clicked...');
        history.push(`/library/${libraryId}/edit`)
    }

    return (
        <div
            className={alignToDrawer}
        >
            <button onClick={onBack}>Back</button>
            <button onClick={() => onEdit(library)}>Edit</button>
            <ContactDrawer library={library}/>
            <main className={content}>
                <div className={padBottom}>
                    <SalesArea totalSales={totalSales} lastSale={lastSale}/>
                </div>
                <NoteList notes={newNotes}/>
            </main>
        </div>
    );
}

export default ViewLibrary;
