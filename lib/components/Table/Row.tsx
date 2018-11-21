import * as React from 'react';

export interface IRowProps {
    styles?: any;
}

export default class Row extends React.Component<IRowProps, {}>{
    public render(): React.ReactElement<IRowProps> {
        const props = {
            children: this.props.children
        };
        return (<div className={this.props.styles.row} {...props} />);
    }
}