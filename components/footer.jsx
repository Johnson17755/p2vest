import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const footerLinks = [
    { text: "About Us", href: "#" },
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of use", href: "#" },
  ];

  return (
    <footer className="bg-[#4F0072]  py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white hover:text-yellow-400 transition-colors duration-200 transform hover:scale-110"
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          {/* Footer Links and Copyright */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6 text-sm">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-purple-200 hover:text-white transition-colors duration-200"
                >
                  {link.text}
                </a>
              ))}
            </div>

            <div className="text-purple-200 text-sm">
              ©2025 Revve. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
