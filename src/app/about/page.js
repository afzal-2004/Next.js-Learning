import Link from "next/link";

const About = () => {
  return (
    <div className=" text-center">
      <h1> This is About page</h1>{" "}
      <button className=" border-2 p-1 border-red-400  m-2">
        <Link href={"/about/aboutteam"}> Go to AboutTeam page </Link>
      </button>
      <button className=" border-2 p-1 border-red-400">
        <Link href={"/about/aboutstory"}> Go to About story </Link>
      </button>
      <ul>
        <li>
          <Link href={"/contact"}> Go To Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
