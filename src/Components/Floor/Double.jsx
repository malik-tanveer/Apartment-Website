import React from "react";
import "../../Styles/Floor.css";
import Button from "../Button";
const Double = () => {
    return (
        <>
            <div className="floor-contain">
                <h1 className="floor">Choose the perfect space for you</h1>
                <button className="batn">Studio</button>
                <button className="batn">2-Bedroom</button>
                <button className="batn">3-Bedroom</button>
                <button className="batn">Penthouse</button>
                <button className="batn" style={{backgroundColor: "#000", color: "#fff"}}>Double height</button>
            </div>
            <div className="floor-contain1">
                <div className="num">
                    <p>Unit size</p>
                    <p className="num1">1,800 sq.ft</p>
                    <hr />
                    <p>Balcony area</p>
                    <p className="num1">250 sq.ft</p>
                    <hr />
                    <p>Total area</p>
                    <p className="num1">2,050 sq.ft</p>
                    <hr />
                    <p>Floor</p>
                    <p className="num1">10th</p>
                    <hr />
                    <p>Price</p>
                    <p className="num11">$1,000,000</p>
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

export default Double;
