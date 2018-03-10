import React, {Component} from 'react'
import './style.css'
import RichTextEditor from '../RichTextEditor/RichTextEditor';
import CustomInlineToolbarEditor from '../CustomInlineToolbarEditor/CustomInlineToolbarEditor';
import CustomVideoEditor from '../SimpleVideoEditor/SimpleVideoEditor'

class Description extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='descriptionContainer'>
                    <RichTextEditor/>
                </div>
                <div className='descriptionContainer'>
                    <CustomInlineToolbarEditor/>
                </div>
                <div className='descriptionContainer'>
                    <CustomVideoEditor/>
                </div>
            </div>

        );
    }
}

export default Description