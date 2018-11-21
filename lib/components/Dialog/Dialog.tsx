import * as React from 'react';

export interface IDialogProperties {
    title?: string;
    width?: number;
    height?: any;
    styles?: any;
    onSave?: () => void;
    onClose?: () => void;
    onInit?: () => void;
}

export default class Dialog extends React.Component<IDialogProperties, {}> {
    constructor(props: IDialogProperties, state: {}) {
        super(props);
    }

    public render() {
        const {styles} = this.props;
        return (<div className={styles.Dialog}>
            <div className={styles.mask} ></div>
            <div className={styles.container} style={{ width: this.props.width, height: this.props.height }}>
                <div className={styles.header}>
                    <span className={styles.title}>{this.props.title}</span>
                    <div className={styles.close} onClick={this.props.onClose}>×</div>
                </div>
                <div className={styles.content}>
                    {this.props.children}
                </div>
                <div className={styles.footer}>
                    {this.props.onSave && <input className={styles.button} type="button" onClick={this.props.onSave} value="Save" />}
                    <input className={styles.button} type="button" onClick={this.props.onClose} value="Close" />
                </div>
            </div>
        </div>);
    }

    public componentDidMount() {
        this.props.onInit();
    }
}