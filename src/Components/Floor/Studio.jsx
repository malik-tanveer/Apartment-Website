import "../../Styles/Home/Floor.css";
import Button from "../../Components/Button";

const Studio = () => {
    return (
        <>
            <div className="floor-contain1">
                <div className="num">
                    <p>Unit size</p>
                    <p className="num1">750 sq.ft</p>
                    <hr />
                    <p>Balcony area</p>
                    <p className="num1">100 sq.ft</p>
                    <hr />
                    <p>Total area</p>
                    <p className="num1">850 sq.ft</p>
                    <hr />
                    <p>Floor</p>
                    <p className="num1">2nd</p>
                    <hr />
                    <p>Price</p>
                    <p className="num11">$450,000</p>
                    <hr />
                    <div className="bon">
                        <Button cont="I am Intersted" />
                    </div>
                </div>
                <div className="divimg">
                    <img src="" alt="Map Floor " />
                </div>
            </div>
        </>
    );
};

export default Studio;
