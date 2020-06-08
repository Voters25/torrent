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
    .map((elements => <TorrentList key={elements.id} name={elements.name} id={elements.id} size={elements.size} date={elements.date} /> ));


        return (
            <div>
                {this.torrentElements}
            </div>
        )
    }
}


export default List;