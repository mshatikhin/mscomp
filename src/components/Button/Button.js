/**
 * Created by mike on 13.12.15.
 */
/* @flow */

class Button extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div>
                <button type="button">
                    {this.props.text}
                </button>
            </div>
        );
    }
}