import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({ contect }){
    return (
        <>
            <Header />
            {contect}
            <Footer />
        </>
    )
}