import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <label htmlFor="my-modal-6" className="btn modal-button text-center">Frequently Ask Question</label>
            </div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Ask Your Question</h3>
                    <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box mx-5">
                        <div className="collapse-title text-xl font-medium">
                            what is cors?
                        </div>
                        <div className="collapse-content">
                            <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box mx-5">
                        <div className="collapse-title text-xl font-medium">
                            Why are you using firebase? What other options do you have to implement authentication?
                        </div>
                        <div className="collapse-content">
                            <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <br />
                                Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                            </p>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;