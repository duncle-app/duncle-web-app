import Library from "../../../model/library";
import React, {useEffect, useState} from "react";
import {Card} from "@material-ui/core";
import useStyles from "../../../global-styles";
import Grid from "@material-ui/core/Grid/Grid";
import Table from "../../molecules/Table/Table";
import {useHistory} from "react-router-dom";
import {useLibraryPouch} from "../../../common/hooks/UsePouch";

type stink = {
    doc?: any;
    id: string;
    key: string;
    value: {
        rev: string;
        deleted?: boolean;
    }
}

export default function() {
    const [libraries, setLibraries] = useState([Library.None]);

    const {getAll} = useLibraryPouch()
    const history = useHistory();

    useEffect(() => {
        async function doLibraryCall() {
            const response = await getAll()
            let docs: Library[] = []
            console.log("Got back list", response.rows)
            response.rows.map((pouchRow: stink) => {
                console.log("actual doc", pouchRow.doc)
                docs.push(pouchRow.doc)
            })
            setLibraries(docs)
        }
        // doLibraryCall()
    })

    function routeToLibraryDetail(library: Library): void {
        history.push(`/library/${library._id}`);
    }

    const tableColumns = [
        {title: "Library", field: "libraryName"},
        {
            title: "Contact",
            field: "contactName",
            render: (rowData: Library) => `${rowData.contact.librarian}`
        },
        {title: "Phone", field: "contact.phoneNumber"}
    ];

    return (
        <div>
            <Grid container justify="center">
                <Grid item xs={11}>
                    <Card variant="outlined">
                        <Table columns={tableColumns} libraries={libraries} onEdit={() => console.log("Clicked")}/>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
