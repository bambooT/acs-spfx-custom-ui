import * as React from 'react';

export interface IDialogProps {
    title?: string;
    children?: React.ReactNode;
}

export default class Dialog extends React.Component<IDialogProps, {}>{
    render(): React.ReactElement<IDialogProps>{
        return(<h1>Test</h1>);
    }
}