import {pool} from "@/lib/db";

export const findUserByLogin = async (login: string) => {
  const r = await pool.query(
    `SELECT id, login, password, role, name
    FROM users
    WHERE login = $1
    LIMIT 1`,
    [login]
  );
  return r.rows[0] ?? null
}

