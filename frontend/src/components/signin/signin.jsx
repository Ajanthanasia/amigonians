import React, { useState } from 'react';

function Signin() {

    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <button className="btn btn-primary form-control">Hi, Amigo</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <label htmlFor="">Email</label>
                </div>
                <div className="col-md-8">
                    <input type="text" name="email" className='form-control' />
                </div>
                <div className="col-md-8">
                    <label for="">Password</label>
                </div>
                <div className="col-md-8">
                    <input type="text" name="password" className='form-control' />
                </div>
                <div className="col-md-8">
                    <button className="btn btn-primary form-control" type="submit">
                        SignIn
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <button className="btn btn-info">
                        SignUp
                    </button>
                </div>
            </div>
        </>
    )
}

export default Signin;