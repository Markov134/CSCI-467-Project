import { Link } from 'react-router-dom';

function CustomerPage() {
    return (
        <div>
            <header>
                <div>
                    <img src="/seas_logo.png" width="200px" height="Auto" />
                </div>
                <div>
                    <p>Deliver to</p>
                    <select>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                        <option>Arkansas</option>
                        <option>California</option>
                        <option>Colorado</option>
                        <option>Connecticut</option>
                        <option>Delaware</option>
                        <option>Florida</option>
                        <option>Georgia</option>
                        <option>Hawaii</option>
                        <option>Idaho</option>
                        <option>Illinois</option>
                        <option>Indiana</option>
                        <option>Iowa</option>
                        <option>Kansas</option>
                        <option>Kentucky</option>
                        <option>Louisiana</option>
                        <option>Maine</option>
                        <option>Maryland</option>
                        <option>Massachusetts</option>
                        <option>Michigan</option>
                        <option>Minnesota</option>
                        <option>Mississippi</option>
                        <option>Missouri</option>
                        <option>Montana</option>
                        <option>Nebraska</option>
                        <option>New Hampshire</option>
                        <option>New Jersey</option>
                        <option>New Mexico</option>
                        <option>New York</option>
                        <option>North Carolina</option>
                        <option>North Dakota</option>
                        <option>Ohio</option>
                        <option>Oklahoma</option>
                        <option>Oregon</option>
                        <option>Pennsylvania</option>
                        <option>Rhode Island</option>
                        <option>South Carolina</option>
                        <option>South Dekota</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Utah</option>
                        <option>Vermont</option>
                        <option>Virgina</option>
                        <option>Washington</option>
                        <option>West Virgina</option>
                        <option>Wisconsin</option>
                        <option>Wyoming</option>
                    </select>
                </div>

                <div>
                    <div>
                        <select>
                            <option>All</option>
                            <option>Replacement Parts</option>
                            <option>Accessories</option>
                            <option>Oil and Chemcials</option>
                            <option>Tools and Equipment</option>
                            <option>Paint and Body</option>
                        </select>
                        <input type="text" placeholder="Search Autoparts" />
                    </div>
                </div>

                <div>
                    <p>Have an account? <Link to="/signin">Sign in</Link></p>
                </div>

                <div>
                    <Link to="/returnorder">Return and orders</Link>
                </div>
                <div>
                    <Link to="/cart">Shopping cart image</Link>
                </div>
            </header>

            <main>
                <div>
                    <h1>Top Sellers</h1>
                </div>
                <div>
                    <h2>Battery</h2>
                    <p> Put image here</p>
                </div>
                <div>
                    <h2>Brakes</h2>
                    <p> Put image here</p>
                </div>
                <div>
                    <h2>Motor Oil</h2>
                    <p> Put image here</p>
                </div>
                <div>
                    <h2>Filters</h2>
                    <p> Put image here</p>
                </div>
                <div>
                    <h2>Floor Mats</h2>
                    <p> Put image here</p>
                </div>
                <div>
                    <h2>Ignition and Engine</h2>
                    <p> Put image here</p>
                </div>
                <div>
                    <h2>Fuel and Emissions</h2>
                    <p> Put image here</p>
                </div>
                <div>
                    <h2>Steering and Suspension</h2>
                    <p> Put image here</p>
                </div>
                <div>
                    <h1>Best Sellers</h1>
                </div>
                <div>
                    <p>Put best sellers here</p>
                </div>
                <div>
                    <h1>Discounts</h1>
                </div>
                <div>
                    <p>Put discounts Here</p>
                </div>
            </main>

            <footer>
                <div>
                    <p>Want to learn more. Check out our About us! <Link to="/about">Click Here!</Link></p>
                </div>
            </footer>
        </div>
    )
}

export default CustomerPage
