import './file-input.scss';

const FileInput = ({
    name,
    value, 
    onChange,
    placeholder
}) => {
    return (
        <div className="file-input">
            <label htmlFor={ name } className="file-input__label">
                <p>Choose a file</p>
            </label>
            <input type="file" id={ name } className="file-input__input" onChange={ e => onChange(e.target.files[0])  } />
        </div>
    )
}

export default FileInput;