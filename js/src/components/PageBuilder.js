import { Component } from "@wordpress/element";
import { withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";

class PageBuilder extends Component {
	render() {
		return (
			<textarea onKeyUp={ event => {
				this.props.editPost( { content: event.target.value } );
			} }></textarea>
		);
	}
}

export default compose( [
	withSelect( select => {
		if ( ! select( "yoast-seo/editor" ) ) {
			return {};
		}

		const results = select( "yoast-seo/editor" ).getSeoResults();

		console.log( Object.keys( results )[ 0 ] );

		return {
			focusKeyphrase: Object.keys( results )[ 0 ],
		}
	} ),
	withDispatch( dispatch => {
		return {
			editPost: dispatch( "core/editor" ).editPost,
		}
	} ),
] )( PageBuilder );
