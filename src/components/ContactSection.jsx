
import {  Linkedin, Mail ,MapPin,Phone, Twitter,Send} from "lucide-react"
import {cn} from '@/lib/utils.js'
import {useToast} from "@/hooks/use-toast.js";

export const ContactSection = () =>{
    const {toast} = useToast()

    const handleSubmit = (e) => {
         e.preventDefault()
         setTimeout(() => {
            toast({
                title:"Message Sent",
                description:"Thanku for reaching out. I will get back to you soon",
            })
         },1500);
    }

    return (
        <section className="py-24 px-4 relative bg-secondary" id="contact">
            <div className="container max-auto mx-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 mx-w-12 mx-auto">
                    Feel free to reach out. I'm always open to new opportunities and collaborations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                        <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:kartikmanral18@gmail.com" target = "_blank" className="text-muted-foreground hover:text-primary transition-colors">kartikmanral18@gmail.com</a>
                                </div>
                            </div>
                        </div>

                         <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                        <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4>Phone </h4>
                                    <a href="tel:+91 8439527845" target = "_blank" className="text-muted-foreground hover:text-primary transition-colors">+91 8439527845</a>
                                </div>
                            </div>
                        </div>

                         <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                        <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">Delhi, India</a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex justify-center space-x-4 ">
                                <a href="https://www.linkedin.com/in/kartik-manral-215215288/" target="
                                _blank">
                                    <Linkedin />
                                </a>
                                 <a href="https://x.com/manralkartik09" target="_blank">
                                    <Twitter />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                                    <input type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Enter Your Name"/>
                                </div>

                                 <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                                    <input type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Enter Your Email"/>
                                </div>
                                 <div>
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Name</label>
                                    <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello! I'd like to say something about..."/>
                                </div>
                                <button type="submit" onClick={handleSubmit} className={cn("cosmic-button w-full flex item-center justify-center gap-2 "
                                    )}>
                                    Send Message <Send size={16}/>
                                </button>
                            </form>
                    </div>
                </div>
            </div>
        </section>


    )
}
