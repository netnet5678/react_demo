import { useState } from "react";
import PropTypes from "prop-types";
import './App.jsx'

// eslint-disable-next-line react/prop-types
function Input({addPost}) {
    const [input, setInput] = useState('');

    function onChange(event) {
        setInput(event.target.value);
    }

    function onKeyDown(event) {
        const title = event.target.value;

        if(event.key === 'Enter' && title){
            addPost(title);
            setInput('');
        };
    }

    return (
        <div className="Input">
            <div className="Input__header">Create Post</div>
            <input 
                className="Input__field" 
                type="text" 
                value={input} 
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    );
}

Input.propType = {
    addPost: PropTypes.func.isRequired
};
export default Input;