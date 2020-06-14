import React from 'react';
import classes from './List.module.css';
import TorrentList from '../TorrentList/TorrentList.jsx';


class List extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTorrentsList();
    }


    render() {


        console.log(this.props.torrentList);

        // Вывод листа
        this.torrentElements = this.props.torrentList
            .map((elements => <TorrentList key={elements.id} name={elements.name} id={elements.id} size={elements.size} date={elements.date} />));

                    /* FIX ME */
                    /* Блок информации листа на пару пикселей меньше справа, при маленьких разрешениях */
        return (
            <div className={classes.wripper}>
                <p className={classes.UploadedFiles}>Uploaded files</p>
                <div className={classes.list}>
                    <div className={classes.listInfo}>
                        <p className={classes.name}>Name:</p>
                        <p className={classes.id}>Id:</p>
                        <p className={classes.size}>Size:</p>
                        <p className={classes.date}>Date:</p>
                    </div>
                    {this.torrentElements}
                </div>
            </div>
        )
    }
}


export default List;