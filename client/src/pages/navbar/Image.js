import React from "react";


const Image = () => {


    const onSubmit = (e) => {
        e.preventDefault();
        // do image submit here
        console.log(document.getElementById("pic").files[0]);

    }

    const handlePic = e => {
        alert('Upload Successful!');
        // var data = await document.getElementById("pic").files[0].arrayBuffer();
        // let byteArray = new Int8Array(data);
        // console.log(byteArray);
        // e.preventDefault();
        // fetch("http://localhost:4000/addimage", {
        //   method: "POST",
        //   headers: {
        //     "Content-type": "application/json",
        //   },
        //   body: JSON.stringify(data),
        // })
        //   .then((res) => {
        //     console.log(res);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
    }


    return (



        <div className="py-5 d-flex align-items-center justify-content-center">

            <div className="col text-center">
            <form method="post">
                <input type="file" id="pic"/>
            </form>
            <button type="submit" class="btn btn-primary btn-block" onClick={handlePic}>
                <span>Upload Picture</span>
            </button>
            </div>
        </div>


    );

}

export default Image;