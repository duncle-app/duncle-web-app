import React from 'react'
import Library from "../../../model/library";
import {Form} from "react-final-form";
import {DynamicTextField} from "../../../common/DynamicComponents/DynamicTextField";

interface AddLibraryProps {
    onCancel(): void,

    onSubmit(library: Library): void
}

function AddLibrary(props: AddLibraryProps) {
    const {onSubmit} = props;
    const formValues: any[] =
        [
            {
                name: 'libraryName',
                placeholder: 'Library Name'
            },
            {
                name: 'level',
                placeholder: 'Level'
            },
            {
                name: 'size',
                placeholder: 'Size'
            },
            {
                name: 'city',
                placeholder: 'City'
            },
            {
                name: 'zip',
                placeholder: 'Zip'
            },
            {
                name: 'state',
                placeholder: 'State'
            },
            {
                name: 'county',
                placeholder: 'County'
            },
            {
                name: 'address',
                placeholder: 'Address'
            },
        ]

    function Submit(values: any) {
        const {libraryName, level, size, city, zip, state, county, address} = values
        const newLibrary: Library = new Library(libraryName, level, size, city, state, county, zip, address)
        console.log(values)

        onSubmit(newLibrary)
    }

    return (
        <>
            <Form
                onSubmit={Submit}
                render={({handleSubmit}) => (
                    <>
                        <form onSubmit={handleSubmit}>
                            {formValues.map(item => {
                                const {name, placeholder} = item;

                                return (
                                    <div>
                                        <DynamicTextField
                                            name={name}
                                            placeholder={placeholder}/>
                                    </div>
                                )
                            })}

                            <button type='submit'>Submit</button>
                        </form>
                    </>

                )}
            >
            </Form>
        </>
    )
}

export default AddLibrary