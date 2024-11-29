import Styles from "./page.module.css";
import Link from "next/link";
import { Users } from "@/lib/api";

export default async function Home() {
  const user = await Users();
  console.log(user);

  return (
    <div className={Styles.page}>
      <main className={Styles.main}>
        <h1 className=" text-center">Dynamic | Routing</h1>
        <ul>
          {user.map((user, id) => (
            <>
              <li className="p-1 " key={id}>
                <Link href={`users/${id}`}>{user.name}</Link>
              </li>
              <hr className="bg-red-300 h-[2px]"></hr>
            </>
          ))}
        </ul>
      </main>
    </div>
  );
}

const Helloworld = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};
