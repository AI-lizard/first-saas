import NextResponse from "next/server";
import auth from "@auth";
import connectMongo from "@/libs/mongodb";
import User from "@/models/User";
import Board from "@/models/Board";
export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.name) {
      return NextResponse.json(
        { error: "Board name is requiered" },
        { status: 400 }
      );
    }
    const session = await auth();
    if (!session.auth) {
      return NextResponse.json({ error: "not authorized" }, { status: 401 });
    }
    await connectMongo();

    const user = await User.findOne(session.user.id);

    const board = await Board.create({
      userID: user._id,
      name: body.name,
    });
    user.boards.push(board._id);
    await user.save();

    return NextResponse.json({});
  } catch (e) {
    return NextResponse.jason({ error: e.message }, { status: 500 });
  }
}
