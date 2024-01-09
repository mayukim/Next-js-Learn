// import Image from "next/image";
// import tomato from "/public/food0.png";
"use client";

import { useState } from "react";

export default function List() {
    let 상품 = ["Tomatoes", "Pasta", "Coconut"];
    let [수량, 수량변경] = useState([0, 0, 0]);
    // let 어레이 = [2, 3, 4];
    // let i = 어레이.map((a, b) => {
    //     console.log(a, b);
    //     return 10;
    // });
    // console.log(i);
    return (
        <div>
            <h4 className="title">상품목록</h4>
            {상품.map((a, i) => {
                return (
                    <div className="food" key={i}>
                        <img
                            src={`/food${i}.png`} //{"/food" + i + ".png"}
                            alt={a}
                            className="food-img"
                        ></img>
                        <h4>{a} $40</h4>
                        <span>{수량[i]}</span>
                        <button
                            onClick={() => {
                                let copy = [...수량];
                                copy[i]++;
                                수량변경(copy);
                            }}
                        >
                            +
                        </button>
                        <button
                            onClick={() => {
                                let copy = [...수량];
                                copy[i]--;
                                수량변경(copy);
                            }}
                        >
                            -
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
