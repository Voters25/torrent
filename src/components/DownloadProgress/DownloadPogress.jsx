import React from 'react';
import ParseTorrent from 'parse-torrent';


class DownloadPogress extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
        this.magnetURL = this.props.magnetURL;
        this.parse = ParseTorrent(this.magnetURL);
        this.infoHash = this.parse.infoHash;        // Отправь его дальше в стэйт


        this.props.getProgressAC(this.infoHash);

    }

render() {

    console.log(this.props.progressBar);

    return (
        <div>
            <p>downloadProgress</p>
            {/*<div>{this.props.progressBar}</div>*/}
            <p><progress value={this.props.progressBar} max='1.00'></progress></p>
        </div>
    )
}
}



export default DownloadPogress;