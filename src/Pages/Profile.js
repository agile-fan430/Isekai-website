import React from 'react';
import {Form,Button} from 'react-bootstrap'
import Footer from '../Component/Footer';
import Header from '../Component/Header';

const Profile = () => {
    return(
        <div>
            <Header />
        <div className="profile-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="profile-image">
                            <img src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/profile.png" className="mx-auto img-fluid animate__animated animate__flip frame-box"alt="" />
                            <img src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/detail_img.png" className="img-fluid profile-box-img animate__animated animate__flip"alt="" />
                            <input type="file" className="upload-profile"></input>
                            <Button type="button" className="upload-pic">Upload</Button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="profile-content">
                        <h2>User Profile</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="email" placeholder="User Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Email@gmail.com" />
                        </Form.Group>
                        <Button type="submit">Save</Button>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
        <Footer />
    </div>
    )
}
export default Profile