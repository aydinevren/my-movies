import React from 'react';

class Contact extends React.Component {

    render() {
        return (
            <div className="container">
                
                    {/*Section: Contact v.2*/}
                    <section className="mb-4">
                        {/*Section heading*/}
                        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                        {/*Section description*/}
                        <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>
                        <div className="row">
                            {/*Grid column*/}
                            <div className="col-md-9 mb-md-0 mb-5">
                                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                    {/*Grid row*/}
                                    <div className="row">
                                        {/*Grid column*/}
                                        <div className="col-md-6">
                                            <div className="md-form mb-0">
                                                <input type="text" id="name" name="name" className="form-control" />
                                                <label htmlFor="name" className>Your name</label>
                                            </div>
                                        </div>
                                        {/*Grid column*/}
                                        {/*Grid column*/}
                                        <div className="col-md-6">
                                            <div className="md-form mb-0">
                                                <input type="text" id="email" name="email" className="form-control" />
                                                <label htmlFor="email" className>Your email</label>
                                            </div>
                                        </div>
                                        {/*Grid column*/}
                                    </div>
                                    {/*Grid row*/}
                                    {/*Grid row*/}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="md-form mb-0">
                                                <input type="text" id="subject" name="subject" className="form-control" />
                                                <label htmlFor="subject" className>Subject</label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Grid row*/}
                                    {/*Grid row*/}
                                    <div className="row">
                                        {/*Grid column*/}
                                        <div className="col-md-12">
                                            <div className="md-form">
                                                <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />
                                                <label htmlFor="message">Your message</label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Grid row*/}
                                </form>
                                <div className="text-center text-md-left">
                                    <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                                </div>
                                <div className="status" />
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-md-3 text-center">
                                <ul className="list-unstyled mb-0">
                                    <li><i className="fas fa-map-marker-alt fa-2x" />
                                        <p>San Francisco, CA 94126, USA</p>
                                    </li>
                                    <li><i className="fas fa-phone mt-4 fa-2x" />
                                        <p>+ 01 234 567 89</p>
                                    </li>
                                    <li><i className="fas fa-envelope mt-4 fa-2x" />
                                        <p>contact@mdbootstrap.com</p>
                                    </li>
                                </ul>
                            </div>
                            {/*Grid column*/}
                        </div>
                    </section>
                    {/*Section: Contact v.2*/}
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25231.714788460973!2d38.25840442255481!3d37.76743412962174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15331388daa5b1ab%3A0xdb1596e4c5f547e!2zQWTEsXlhbWFuLCBBZMSxeWFtYW4gTWVya2V6L0FkxLF5YW1hbg!5e0!3m2!1str!2str!4v1621412238777!5m2!1str!2str" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />

            </div>
        )
    }
}
export default Contact;





