import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";


export default function ProductsLayout({ children }) {
    return (
        <>
            <Header />
            <Navbar />
            {children}
        </>
    )
}