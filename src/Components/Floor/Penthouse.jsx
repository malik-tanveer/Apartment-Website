import React from "react";
import "../../Styles/Floor.css";
import Button from "../Button";

const Penthouse = () => {
    return (
        <>
            <div className="floor-contain1">
                <div className="num">
                    <p>Unit size</p>
                    <p className="num1">2,400 sq.ft</p>
                    <hr />
                    <p>Balcony area</p>
                    <p className="num1">400 sq.ft</p>
                    <hr />
                    <p>Total area</p>
                    <p className="num1">2,800 sq.ft</p>
                    <hr />
                    <p>Floor</p>
                    <p className="num1">15th (Top floor)</p>
                    <hr />
                    <p>Price</p>
                    <p className="num11">$1,500,000</p>
                    <hr />
                    <div className="bon">
                        <Button cont="I am Intersted" />
                    </div>
                </div>
                <div className="divimg">
                    <img src="/Floor/penthouse.svg" alt="Map Floor " />
                </div>
            </div>
        </>
    );
};

export default Penthouse;
