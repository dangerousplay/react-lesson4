import React from 'react';

class ValidationComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>{this.props.textSize > 5 ? "Text long enough":"Text too short"}</p>
            </div>
        );
    }
}

export default ValidationComponent;