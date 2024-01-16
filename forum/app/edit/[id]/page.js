import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";

export default async function Edit(props) {
    let db = (await connectDB).db("forum");
    let result = await db
        .collection("post")
        .findOne({ _id: new ObjectId(props.params.id) });

    await db
        .collection("post")
        .updateOne({ _id: props.params.id }, { $set: { title: "바보" } });

    return (
        <div className="p-20">
            <h4>수정페이지</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" defaultValue={result.title} />
                <input name="content" defaultValue={result.content} />
                <button type="submit">전송</button>
            </form>
        </div>
    );
}
