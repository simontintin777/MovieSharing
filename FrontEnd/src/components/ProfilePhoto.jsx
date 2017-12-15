import React from 'react';


class ProfilePhoto extends React.Component {
    render() {
        return (
            <div id="profilephoto">
                <div className="card card-default">
                    <h6 className="card-header" align="center">Your photo</h6>
                       
                    <div className="card-body"  align="center">                    
                        <div >
                            <img className="img-thumbnail img-responsive" src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" width="300px" height="300px"></img>
                        </div>
                        <br></br>
                        <div >
                            <button className="btn btn-primary col-lg-12 col-md-12 uploadProfile" ><i className="fa fa-upload" aria-hidden="true" ></i>Upload New Photo</button>
                        </div>                       
                    </div>
                </div>
            </div>
        )
    }
}
export default ProfilePhoto;