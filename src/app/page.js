import Styles from "./page.module.css";
import Link from "next/link";
import { Users } from "@/lib/api";

export default async function Home() {
  const user = await Users();

  return (
    <div className={Styles.page}>
      <main className="flex flex-col items-center  justify-center  border border-red-500 text-[20px] ">
        <h1 className=" text-center">Dynamic | Routing</h1>
        <ul className=" text-center mt-4 min-w-[50%] ">
          {user.map((user, id) => (
            <>
              <li className="p-1 " key={id}>
                <Link href={`users/${user.id}`}>{user.name}</Link>
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
