import React from 'react';
import { render } from 'react-dom';
import './style/css/bootstrap.min.css';
import './index.css';
import { sampleText } from './sampleText';

class App extends React.Component {

    state = {
        text: sampleText
    };

    editText = (event) => {
        const text = event.target.value;
        this.setState({ text });
    }

    render() {
        return(
            <div className="container">
                <div className="row">

                    <div className="col-sm-6">
                        <textarea 
                        rows="35" 
                        className="form-control" 
                        value={this.state.text}
                        onChange={(e) => this.editText(e)}
                        >

                        </textarea>
                    </div>

                    <div className="col-sm-6">
                        <h1>Résultats</h1>
                    </div>
                    {sampleText}
                </div>
            </div>
        )
    }
}

render(
    <App />,
    document.getElementById('root') 
);