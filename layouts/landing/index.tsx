import FooterComponent from "@/components/footer";
import NavigationBar from "@/components/navbar";

export default function LandingPageLayout({ children } : any){
    return(
        <div style = {{ background: "#0d1117" }}>
            <NavigationBar />

            <main>
                { children }
            </main>

            <footer>
                <FooterComponent />
            </footer>
        </div>
    )
}