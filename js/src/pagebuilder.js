import "@wordpress/editor/build/store";
import { render } from "@wordpress/element";
import { Provider } from "@wordpress/data";

import PageBuilder from "./components/PageBuilder";

const editorDiv = document.getElementById( "postdivrich" );

const pageBuilderDiv = document.createElement( "div" );
pageBuilderDiv.setAttribute( "id", "acme-pagebuilder" );
pageBuilderDiv.innerText = "Test 123";

editorDiv.parentNode.insertBefore( pageBuilderDiv, editorDiv );
editorDiv.setAttribute( "style", "display: none;" );

const titleField = document.getElementById( "title" );

wp.data.dispatch( "core/editor" ).setupEditorState( { title: titleField.value, content: "" }, [] );

titleField.addEventListener( "keyup", event => {
	wp.data.dispatch( "core/editor" ).editPost( { title: event.target.value } );
} );

render( <PageBuilder />, document.getElementById( "acme-pagebuilder" ) );

document.getElementById( "postdivrich" ).setAttribute( "style", "display: none;" );
