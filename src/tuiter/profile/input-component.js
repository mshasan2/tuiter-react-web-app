import React from "react";

const InputComponent = (labelName, initialState, setState) => {
    return(
        <div>
            <div className="ps-3 mt-2 text-muted">
                <label >
                    {labelName}
                </label>
            </div>
            <div className="ps-3 pe-2">
                <input id={labelName}
                       className="border-0 h5 w-100" value={initialState}
                       onChange={(event) => setState(event.target.value)}
                />
            </div>
        </div>
    )
}

export default InputComponent;