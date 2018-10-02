import React from 'react';

class CharComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    character = this.props.character;
    style = {
      width: '60%',
      margin: '16px',
      padding: '16px',
      border: '2px solid #eeeee2',
      boxShadow: '0 2px 3px #ff1000'
    };

    render() {
        return (
            <div style={this.style} onClick={e => this.props.click(e, this.props.index)}>
                {this.character}
            </div>
        );
    }
}

export default CharComponent;