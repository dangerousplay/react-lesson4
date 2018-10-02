import React, {Component} from 'react';
import './App.css';
import ValidationComponent from "./components/ValidationComponent";
import CharComponent from "./components/CharComponent";

class App extends Component {

    textSize;
    state = {
        text: ""
    };

    textChangeHandler(e){
        this.textSize = e.target.value.length;
        this.setState({text: e.target.value});
    }

    textRemoveCharacter(e, index){
        const state = {...this.state};

        state.text = state.text.split('').filter((c,i) => i !== index).join('');

        this.setState(state);
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <div>
                    <label className="field a-field a-field_a3 page__field">
                        <input className="field__input" placeholder="Type some text here" value={this.state.text} onChange={this.textChangeHandler.bind(this)} required/>
                        <span className="field__label-wrap">
                          <span className="field__label">Text</span>
                        </span>
                    </label>
                    <p>{this.state.text.length > 0 && "Text size: " + this.state.text.length }</p>
                    <ValidationComponent textSize={this.textSize}/>
                </div>
                <div style={{textAlign: 'center'}}>
                    {this.state.text.split('').map((P, index) => <CharComponent key={`${P}${index}`} index={index} character={P} click={this.textRemoveCharacter.bind(this)}/>)}
                </div>
            </div>
        );
    }
}

export default App;
