import * as React from 'react';

export interface ICellProps {
    isHeaderCell?: boolean;

    styles?: any;
    width?: number;

    datakey?: string;
    rowData?: {
        [key: string]: any;
    }

    mobileTitle?: string;
}

export default class Cell extends React.Component<ICellProps, {}>{
    public render(): React.ReactElement<ICellProps> {
        const contentChildren = this.props.children == null ? this.props.rowData[this.props.datakey] : this.props.children;
        const contentStyles: Object = {
            width: this.props.width == null ? "auto" : this.props.width + "%"
        };
        return (<div className={this.props.isHeaderCell ? this.props.styles.headerCell : this.props.styles.cell} style={contentStyles}>
            <div className={this.props.styles.mobileTitle}>{this.props.mobileTitle}</div>
            <div>{contentChildren}</div>
        </div>);
    }
}