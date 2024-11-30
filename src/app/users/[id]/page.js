"use client";
import { User } from "@/lib/api";
import { use, useState, useEffect } from "react";
import Error from "@/utils/error";
import Loding from "@/utils/loding";
import Link from "next/link";

const page = ({ params: paramsPromise }) => {
  const [Userdetails, setUserdetails] = useState(null);

  const [loding, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const params = use(paramsPromise);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await User(params.id);
        setLoading(true);
        setUserdetails(res);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      }
    };
    fetchUser();
  }, [params.id]);
  if (loding) {
    return <Loding />;
  }
  if (Error) {
    return <Error />;
  }
  return (
    <div className=" flex flex-col justify-center items-center  mt-5  text-[25px]">
      <h1 className=" font-bold"> User Details </h1>
      <ul className="  w-[50%]  border border-blue-200 p-3 flex flex-col ">
        <li> Name:{Userdetails.name}</li>
        <li> UserName:{Userdetails.username}</li>
        <li> Web:{Userdetails.website}</li>
        <li> Phone :{Userdetails.phone}</li>
        <li> City:{Userdetails.address?.city}</li>
        <butto className="border border-red-500 p-1 w-[200px] text-[20px]">
          <Link href={"/"}> Back To user page </Link>
        </butto>
      </ul>
    </div>
  );
};
export default page;
