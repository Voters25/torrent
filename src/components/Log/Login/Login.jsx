import React from 'react';
import classes from './DownloadPageC.module.css';


        // МЁРТВАЯ КОМПОНЕНТА


class LogPage extends React.Component {
    constructor(props) {
        super(props);
    }
    
render() {


    return (
        <div>
            <form id="sendLogIn" onSubmit={this.onFileSend} >
                <input type="text" name="magnet" ref={this.newMagnetElement} onChange={this.onMagnetChange} value={this.props.propsMagnet} />
                <button className={classes.sendMagnetButton} type="button" onClick={this.onSendForm} >SendMagnet</button>
            </form>
        </div>
    )
    }
}




export default LogPage;