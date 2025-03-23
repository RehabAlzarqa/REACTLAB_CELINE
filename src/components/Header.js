import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: "fab fa-github",
    url: "https://github.com",
  },
  {
    icon: "fab fa-linkedin",
    url: "https://www.linkedin.com",
  },
  {
    icon: "fab fa-medium",
    url: "https://medium.com",
  },
  {
    icon: "fab fa-stack-overflow",
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const lastScrollY = useRef(0);
  const isHidden = useRef(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (headerRef.current) {
        if (currentScrollY > lastScrollY.current && !isHidden.current) {
          // Hide header
          headerRef.current.classList.add("hidden");
          isHidden.current = true;
        } else if (currentScrollY < lastScrollY.current && isHidden.current) {
          // Show header
          headerRef.current.classList.remove("hidden");
          isHidden.current = false;
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      ref={headerRef}
      className="fixed top-0 left-0 right-0 translate-y-0 transition-transform duration-300 ease-in-out bg-zinc-900"
    >
      <div className="text-white max-w-7xl mx-auto">
        <div className="px-16 py-4 flex justify-between items-center">
          <nav>
            <HStack spacing={8}>
              {socials.map(({ icon, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <FontAwesomeIcon icon={icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a
                href="/#projects"
                onClick={handleClick("projects")}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Projects
              </a>
              <a
                href="/#contact-me"
                onClick={handleClick("contact-me")}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Contact Me
              </a>
            </HStack>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
