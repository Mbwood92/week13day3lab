const React = require('react');
const vegetables = require('../../models/vegetables');
class Show extends React.Component {
    render () {
        const fruit = this.props.fruit;

        return (
            <div>
                <h1>Show Page</h1>
                <p>The {vegetables.name} is {vegetables.color}</p>
                {vegetables.readyToEat ? 'It is ready to eat' : "NOT READY!"}
            </div>

        )
    }
}

module.exports = Show;