import React from 'react';


class DownloadPogress extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

render() {

    this.progress = this.props.progress;
    console.log(this.progress);

    return (
        <div>
            <p>downloadProgress</p>
        </div>
    )
}
}



export default DownloadPogress;