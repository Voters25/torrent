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

        // Вывод листа
        this.torrentElements = this.props.torrentList
            .map((elements => <TorrentList key={elements._id} name={elements.name} id={elements._id} size={elements.size} date={elements.date}  />));

            
                    /* FIX ME */
                    /* Блок информации листа на пару пикселей меньше справа, при маленьких разрешениях */


                    // ДОБАВЬ КНОПКИ: УДАЛЕНИЕ (ФУНКЦИЯ УЖЕ НАПИСАНА)
                    // И КНОПКУ ПОВТОРНОЙ ЗАГРУЗКИ (берёшь инфоХэш торрента,
                    // по которому тыкнул и вызываешь запрос, который у тебя в downloadReducer с магнет)

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