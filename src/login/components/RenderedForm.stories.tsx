import React from 'react'
import {RenderedForm} from "./RenderedForm";
import MockForm from "../../storybook-mocks/mockForm";

export default {
    title: `Login/Form`,
    component: RenderedForm,
};

export const withProps = () => (
    <MockForm>
        <RenderedForm/>
    </MockForm>
);
