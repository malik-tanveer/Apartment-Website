import React from "react";
import "../../Styles/Home/Floor.css";
import Button from "../Button";

const Bedroom2 = () => {
    return (
        <>
            <div className="floor-contain1">
                <div className="num">
                    <p>Unit size</p>
                    <p className="num1">1,200 sq.ft</p>
                    <hr />
                    <p>Balcony area</p>
                    <p className="num1">150 sq.ft</p>
                    <hr />
                    <p>Total area</p>
                    <p className="num1">1,350 sq.ft</p>
                    <hr />
                    <p>Floor</p>
                    <p className="num1">5th</p>
                    <hr />
                    <p>Price</p>
                    <p className="num11">$650,000</p>
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

export default Bedroom2;
