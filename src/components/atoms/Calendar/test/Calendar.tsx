import React from 'react'

const demos = {
    soundcloud:
        '<iframe width="100%" height="1000px" scrolling="no" frameborder="no" src="https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/5156adf7-deaf-447c-8aa4-88306b392bcb/cid-0B74A263A643422E/index.html"></iframe>',

    plotly:
        '<iframe src="https://codesandbox.io/embed/q7jmjyplvq?fontsize=14" title="Plotly All Graph Types" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>'
};

//codesandbox.io/s/react-iframe-demo-g3vst codePen =
function Iframe(props: { iframe: string; }) {
    return (
        <div dangerouslySetInnerHTML={{__html: props.iframe ? props.iframe : ""}}/>
    );
}

export default function Calendar() {
    return (<Iframe iframe={demos["soundcloud"]}/>)
}
