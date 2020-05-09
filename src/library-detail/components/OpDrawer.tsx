import React from 'react'
import useStyles from "../../global-styles";
import {Library} from "../../model/library";

interface drawerProps {
    library: Library
}

export default ({library}: drawerProps) => {
    // const {drawer} = useStyles();
    const libraryKeys = Object.keys(library)
    console.log(libraryKeys)

    return (
        <div>
            {
                Object.values(library).map((row: any, i: number) => {
                    function capitalizeFirstLetter(string: string) {
                        return string.charAt(0).toUpperCase() + string.slice(1);
                    }
                    return <p key={i}>{`${capitalizeFirstLetter(libraryKeys[i])}: ${row}`}</p>
                })

            }
        </div>
    );
}