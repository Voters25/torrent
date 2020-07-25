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

        //console.log(this.props.torrentList);
        console.log(document.cookie);
        console.log(this.props.torrentList);


        let downloadTorrent = (magnet) => {
            this.props.downloadTorrentElement(magnet);
        }

        let removeTorrent = (id) => {
            this.props.removeTorrentElement(id);
        }

        console.log(this.props.magnetURL); // УУУДДДАААЛЛЛИИИ

        
        // Вывод листа
        this.torrentElements = this.props.torrentList
            .map((elements => <TorrentList key={elements._id} name={elements.name} id={elements._id} size={elements.size} date={elements.date} magnet={elements.magnet} deleteTorrent={removeTorrent} downloadNow={downloadTorrent}  />));

            
                    /* FIX ME */
                    /* Блок информации листа на пару пикселей меньше справа, при маленьких разрешениях */

                    //   КОГДА МНОГО ТОРРЕНТОВ В ЛИСТЕ, БЛОК КОНТЕНТА НЕ УВЕЛИЧИВАЕТСЯ В ДЛИННЕ.

        return (
            <div className={classes.wripper}>
                <p className={classes.UploadedFiles}>Uploaded files</p>
                <div className={classes.list}>
                    <div className={classes.listInfo}>
                        <p className={classes.name}>Name:</p>
                        <p className={classes.size}>Size:</p>
                        <p className={classes.date}>Date:</p>
                    </div>
                    {this.torrentElements}
                </div>
            </div>
        )
    }
}

//<p className={classes.id}>Id:</p>

export default List;