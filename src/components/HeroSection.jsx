import { ArrowDown } from "lucide-react"

export const HeroSection = () =>{
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className=" text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi ,I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Kartik Manral </span>
                        <span className="text-gradient opacity-0 ml-2 animate-fade-in-delay-2">Aspiring Software Developer</span>
                    </h1>

                    <p className="lext-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
                        I'm a student pursuing Bachelor of Technology in Computer Science and Engineering at <span className="text-primary">Graphic Era Hill, University</span>
                    </p>

                <div className=" pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#Projects" className="cosmic-button">View My Work</a>
                </div>
                </div>
            </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="animate-bounce h-5 w-5 text-primary"/>

                </div>
                
        </section>
    )
}
