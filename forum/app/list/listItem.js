"use client";

export default function ListItem() {
    return (
        <div>
            {result.map((a, i) => (
                <div className="list-item" key={i}>
                    <Link prefetch={false} href={"/detail/" + result[i]._id}>
                        <h4>{result[i].title}</h4>
                    </Link>
                    <Link href={"/edit/" + result[i]._id} className="list-btn">
                        ✏️
                    </Link>
                    <DetailLink />
                    <p>{result[i].content}</p>
                </div>
            ))}
        </div>
    );
}
