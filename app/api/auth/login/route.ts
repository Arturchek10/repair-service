import { findUserByLogin } from "@/lib/user.repository";

export const Post = async (req: Request) => {
  const { login, password } = await req.json();

  if (!login || !password) {
    return Response.json(
      { ok: false, error: "login/password required" },
      { status: 400 },
    );
  }

  const user = await findUserByLogin(login);
  if (!user) {
    return Response.json(
      { ok: false, error: "invalid credentials" },
      { status: 401 },
    );
  }

  if (user.password !== password) {
    return Response.json(
      { ok: false, error: "invalid credentials" },
      { status: 401 },
    );
  }

  const { password: _pw, ...safeUserData } = user;

  return Response.json({ ok: true, user: safeUserData });
};
