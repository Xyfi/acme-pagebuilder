import "@wordpress/editor/build/store";
import { render } from "@wordpress/element";

const editorDiv = document.getElementById( "postdivrich" );

const pageBuilderDiv = document.createElement( "div" );
pageBuilderDiv.setAttribute( "id", "acme-pagebuilder" );
pageBuilderDiv.innerText = "Test 123";

editorDiv.parentNode.insertBefore( pageBuilderDiv, editorDiv );
editorDiv.setAttribute( "style", "display: none;" );

render( <h1>TEST</h1>, document.getElementById( "acme-pagebuilder" ) );

document.getElementById( "postdivrich" ).setAttribute( "style", "display: none;" );
