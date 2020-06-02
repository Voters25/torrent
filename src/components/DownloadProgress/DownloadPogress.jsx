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

        this.props.addInfoHash(this.infoHash);

    }

render() {

    console.log('hash: ' + this.props.test);

    this.progress = this.props.progress;
    console.log(this.progress);

    return (
        <div>
            <p>downloadProgress</p>
            <p><progress value={this.props.progressBar} max='1.00'></progress></p>
        </div>
    )
}
}



export default DownloadPogress;