import React from 'react';
import { render } from 'react-dom';
import './style/css/bootstrap.min.css';
import './index.css';
// JS perso
import { sampleText } from './sampleText';
// Marked.js
import marked from 'marked';


class App extends React.Component {

    state = {
        text: sampleText
    };

    componentWillMount() {
        const text = localStorage.getItem('text');
        
        if (text) {
            this.setState({ text })
        }

    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('text', nextState.text);
    }

    editText = (event) => {
        const text = event.target.value;
        this.setState({ text });
    };

    renderText = (text) => {
        const renderText = marked(text, {sanitize: true});
        return {__html: renderText};
    };

    //rendu
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
                    </div>
                   <div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
                </div>
            </div>
        )
    }
}

render(
    <App />,
    document.getElementById('root') 
);