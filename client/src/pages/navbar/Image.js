import React from "react";

const Image = () => {


    const onSubmit = (e) => {
        e.preventDefault();
        // do image submit here
    }



    return (



        <div className="py-5 d-flex align-items-center justify-content-center">

            <div className="col text-center">
            <form method="post">
                <input type="file"/>
            </form>
            <button type="submit" class="btn btn-primary btn-block" onClick={onSubmit}>
                <span>Upload Picture</span>
            </button>
            </div>
        </div>


    );

}

export default Image;