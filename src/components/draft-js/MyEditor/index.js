import React, {Component} from 'react';
import {Editor, EditorState} from 'draft-js';
import './style.css'

export default class MyEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
    }
    render() {
        return (
            <div className='container'>
                <Editor  editorState={this.state.editorState} onChange={this.onChange} />
            </div>
        );
    }
}
