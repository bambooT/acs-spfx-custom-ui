import * as React from 'react';

export interface DialogProps{
    title: string;
    children?: React.ReactNode;
}

declare const Dialog: React.ComponentType<DialogProps>;

export default Dialog;