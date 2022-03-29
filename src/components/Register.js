import React from 'react';

class Signin extends React.Component {

    render() {
        return (
            <div className="form-register">

                <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                <form>
                    <div className="form-row">

                        <div className="row">
                            <div className="col1"> First Name
                                    <input type="text" className="form-control" placeholder="First name" />
                            </div>
                            <div className="col"> Last Name
                                    <input type="text" className="form-control" placeholder="Last name" />
                            </div>
                        </div>
                    </div>
                    <p />
                    <div className="form-row">
                        <div className="col">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                        <p/>
                        <div className="col">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Check me out
      </label>
                        </div>
                    </div>
                    <button type="submit" className="w-100 btn btn-lg btn-primary">Register</button>
                </form>

            </div>
        )
    }
}

export default Signin;