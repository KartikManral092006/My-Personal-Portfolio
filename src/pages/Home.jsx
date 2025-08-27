import { ThemeToggle } from "../components/themeToggle.jsx"
import { StarBackground } from "../components/StarBackGround.jsx";
import { NavBar } from "../components/NavigationBar.jsx"
import { HeroSection } from "../components/HeroSection.jsx"

export const Home = () =>{
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
        <ThemeToggle />
        <StarBackground />
        <NavBar />

        <main>
            <HeroSection />
        </main>



    </div>

    );
}
