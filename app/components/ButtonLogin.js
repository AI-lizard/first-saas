import Link from "next/link";

const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  if (isLoggedIn) {
    return (
      <Link href="/dashboard" className={"btn btn-primary " + extraStyle}>
        Welcome back {name}
      </Link>
    );
  } else {
    return <Button>please Login</Button>;
  }
};

export default ButtonLogin;
