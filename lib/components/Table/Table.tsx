import * as React from 'react';
import Row from './Row';
export interface ITableProps {
    showHeader?: boolean;
    styles?: any;
    data: Array<any>;
}

export default class Table extends React.Component<ITableProps, {}>{

    public render() {
        const { headerCells, bodyCells } = this.getCells();

        return (
            <div>
                {this.props.showHeader && this.renderTableHeader(headerCells)}
                {this.renderTableBody(bodyCells)}
            </div>
        );
    }

    private renderTableHeader(headerCells: Array<any>) {
        const rowProps = {};

        return (
            <div className={this.props.styles.header}>
                {this.renderRow(rowProps, headerCells)}
            </div>
        );
    }

    private renderTableBody(bodyCells: Array<any>) {
        let rows = null;
        const rowProps = {};

        if (this.props.data && this.props.data.length > 0) {
            rows = this.props.data.map((rowData, index) => {
                const cells = bodyCells.map(cell => {
                    return React.cloneElement(cell, { rowData });
                });
                return this.renderRow(rowProps, cells);
            });
        }

        return (
            <div className={this.props.styles.body}>
                {rows}
            </div>
        );
    }

    private renderRow(props: any, cells: Array<any>) {
        return (
            <Row styles={this.props.styles}>
                {this.cloneCells(cells)}
            </Row>
        );
    }

    private getCells() {
        const columns = this.props.children;
        var headerCells = Array<any>();
        var bodyCells = Array<any>();
        const that = this;

        React.Children.forEach(columns, (column, index) => {
            if (React.isValidElement(column)) {
                var jsxColumn: JSX.Element = column;//此处需强转
                if (that.props.showHeader) {
                    headerCells.push(
                        React.cloneElement(jsxColumn.props.children[0], {
                            styles: this.props.styles,
                            width: jsxColumn.props.width,
                            isHeaderCell: true
                        })
                    );
                }
                bodyCells.push(React.cloneElement(jsxColumn.props.children[1], {
                    styles: this.props.styles,
                    width: jsxColumn.props.width
                }));
            }
        });
        return {
            headerCells,
            bodyCells
        };
    }

    private cloneCells(cells: Array<any>) {
        const nextCells = cells.map((cell: any, i: number) => {
            return React.cloneElement(cell, { key: "cell" + i });
        });

        return nextCells;
    }
}
