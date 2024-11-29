import Link from "next/link";

const Contact = () => {
  return (
    <div className=" text-center">
      <h1>This is My Contact page</h1>
      <ul>
        <li>
          <Link href={"/about"}> Go to About </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
