import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
    if (요청.method == "POST") {
        console.log(요청.body);
        let db = (await connectDB).db("forum");
        let result = await db
            .collection("post")
            .updateOne({ 게시물정보 }, { $set: { 바꿀데이터 } });
        응답.redirect(302, "/list");
    }
}
