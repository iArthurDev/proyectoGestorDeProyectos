import Image from "next/image";
import "./navbarStyles.css";
export default function NavbarComponent() {
  return (
    <div className="navbar">
      <Image src="/images/logo.png" alt="Logo" width={200} height={70} />
    </div>
  );
}
