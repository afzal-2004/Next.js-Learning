import Link from "next/link";

const Abouteam = () => {
  return (
    <div className=" text-center">
      <h1>About Team page</h1>

      <button className=" border-2 p-1 border-red-400  m-2">
        <Link href={"/about/aboutteam"}> Go to AboutTeam page </Link>
      </button>
      <button className=" border-2 p-1 border-red-400">
        <Link href={"/about/aboutstory"}> Go to About story </Link>
      </button>
    </div>
  );
};

export default Abouteam;
