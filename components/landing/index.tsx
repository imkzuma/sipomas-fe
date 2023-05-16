import dynamic from "next/dynamic";
import Loading from "../loading";
import hero from "@/styles/Hero.module.css";

const Hero = dynamic(() => import("./hero"), { loading: () => <Loading /> });
const SectionFaq = dynamic(() => import("./sectionFaq"), { loading: () => <Loading /> });
const SectionWhat = dynamic(() => import("./sectionWhat"), { loading: () => <Loading /> });
const SectionWhy = dynamic(() => import("./sectionWhy"), { loading: () => <Loading /> });
const SectionTechnology = dynamic(() => import("./sectionTech"), { loading: () => <Loading /> });

export default function LandingPage(){
    return(
        <>
            <section className = {hero.hero}>
                <Hero />
            </section>

            <section className = 'pt-4' style = {{ marginTop: "-20rem" }}>
                <SectionWhat />
            </section>

            <section style = {{marginTop: "-2.9rem"}} className = "bg-section-why">
                <SectionWhy />
            </section>

            <section className = 'pt-4 pb-5'>
                <SectionTechnology />
            </section>

            <section className = 'pt-4 pb-5 bg-section-faq'>
                <SectionFaq />
            </section>
        </>
    )
}