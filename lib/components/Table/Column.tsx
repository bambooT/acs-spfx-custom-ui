import * as React from 'react';

export interface IColumnProps {
    styles?: any;
    width?: number;
}

export default class Column extends React.Component<IColumnProps, {}>{
    public render(): React.ReactElement<IColumnProps> {
        return (<div className={this.props.styles.column}>
        </div>);
    }
}