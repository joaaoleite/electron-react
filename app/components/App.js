const React = require('react')
const Component = React.Component

export default class App extends Component {
	render() {
		return <div>
			<button type="button" className="btn btn-default">
				<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
				Left
			</button>
		</div>
	}
}
