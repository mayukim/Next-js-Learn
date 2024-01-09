import 숙제 from "./data.js";

export default function Cart() {
    let 장바구니 = ["Tomatoes", "Pasta", "Coconut"];
    return (
        <div>
            <h4 className="title">Cart</h4>
            {<숙제 />}
            <CartItem item={장바구니[0]} />
            <CartItem item={장바구니[1]} />
            <CartItem item={장바구니[2]} />
            <Banner content="롯데카드" />
            <Banner content="현대카드" />
            <Button color="red" />
            <Button color="blue" />
        </div>
    );
}

function Banner(props) {
    return <h5>{props.content} 결제 행사중</h5>;
}

function Button(props) {
    return <button style={{ background: props.color }}>바로가기</button>;
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    );
}
