export default function Home() {
    let name = "park";
    let link = "https://codingapple.com/course-status/";
    return (
        <div>
            <h4 style={{ color: "red", fontSize: "30px" }} className="title">
                애플후레시
            </h4>
            <p className="title-sub">by dev {name}</p>
            <a href={link}>링크</a>
        </div>
    );
}
