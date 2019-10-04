import React from 'react';

class PlayerCard extends React.Component {
    

    render(){
        return(
            <div data-testid="player" className="playerCard" key={this.props.id}>
                <h3>{this.props.name}</h3>
                <h4>{`Country: ${this.props.country}`}</h4>
                <p>{`Searches: ${this.props.searches}`}</p>
            </div>
        );
    }
}

export default PlayerCard;