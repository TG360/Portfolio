import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "./ui/tooltip";
  import { useToast } from "../hooks/use-toast";

import { Github, Linkedin, Mail } from "lucide-react";
  

const Contact = () => {

    const { toast } = useToast();

    const handleEmailCopy = () => {
      navigator.clipboard.writeText('ritinmereddy@gmail.com')
        .then(() => {
          toast({
            title: "Email Copied to Clipboard",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
        })
        .catch(err => {
          console.error('Failed to copy email: ', err);
        });
    };
    
  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>Contact</TooltipTrigger>
            <TooltipContent>
                <div className="flex items-center">
                <a href="https://github.com/TG360" target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6 mr-2" />
                </a>
                <a href="https://www.linkedin.com/in/ritinm/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6 mr-2" />
                </a>
                <button onClick={handleEmailCopy}>
                    <Mail className="w-6 h-6" />
                </button>
                </div>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>

  )
}

export default Contact