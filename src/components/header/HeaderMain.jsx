import { Button } from "../button/Button";
import Link from "next/link";

export const HeaderMain = () => {
    const links = [
        {
            href: "/",
            name: "მთავარი",
        },
        {
            href: "/about",
            name: "ჩვენს შესახებ",
        },
        {
            href: "/services",
            name: "სერვისები",
        },
        {
            href: "/news",
            name: "სიახლეები",
        },
        {
            href: "/doctors",
            name: "ექიმები",
        },
    ];
    return (
        <header>
            <nav>
                Logo
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <p>tel. 1005-346-272</p>
                <Button url={"/appointment"} name={"დაჯავშნე შეხვედრა"}/>
            </nav>
        </header>
    )
}