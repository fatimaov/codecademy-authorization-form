function Contact() {
    const password = 'swordfish';
    const [authorized, setAuthorized] = React.useState(false);

    function handleSubmit() {
        const enteredPassword = document.querySelector('input[type="password"]').value;
        const auth = enteredPassword == password;
        setAuthorized(auth);
    }

    const login = (
        <div>
            <div className="row mt-4 mb-2">
                <div className="col">
                    <form action="#" onSubmit={handleSubmit}>
                        <input type="password" className="form-control m-auto text-center" placeholder="Password" />
                    </form>
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <button className="btn btn-success border-0 btn-lg" type="submit">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );

    const contactInfo = (
        <div className="row mt-4 mb-2">
            <div className="col">
                <ul className="list-group mx-auto rounded-0">
                    <li className="list-group-item">client@example.com</li>
                    <li className="list-group-item">555.555.5555</li>
                </ul>
            </div>
        </div>
    );

    return (
        <div id="container" className="border rounded-5 mt-5 text-center p-3 shadow mx-auto">
            <div className="row my-4">
                <div className="col">
                    <h1 className="m-0 h2">{authorized ? 'Contact' : 'Enter your password'}</h1>
                </div>
            </div>
            {authorized ? contactInfo : login}
        </div>
    );
}