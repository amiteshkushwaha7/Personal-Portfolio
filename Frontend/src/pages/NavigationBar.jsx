import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function NavigationBar() {
  const [flag, setFlag] = useState(true);
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState(false);
  const [services, setServices] = useState(false);
  const [projects, setProjects] = useState(false);
  const [clients, setClients] = useState(false);
  const [contact, setContact] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  // Route-based highlight
  useEffect(() => {
    if (location.pathname === "/") setActiveSection("home");
    else if (location.pathname === "/about") setActiveSection("about");
    else if (location.pathname === "/skills") setActiveSection("skills");
    else if (location.pathname === "/services") setActiveSection("services");
    else if (location.pathname === "/projects") setActiveSection("projects");
    else if (location.pathname === "/clients") setActiveSection("clients");
    else if (location.pathname === "/contact") setActiveSection("contact");
  }, [location.pathname]);

  // Scroll-based highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", offset: 0 },
        { id: "about", offset: 0 },
        { id: "skills", offset: 0 },
        { id: "services", offset: 0 },
        { id: "projects", offset: 0 },
        { id: "clients", offset: 0 },
        { id: "contact", offset: 0 },
      ];
      let found = "home";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            found = section.id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFlagClick = () => {
    setFlag((prev) => !prev);
  };

  return (
    <section className="flex flex-col justify-center items-center fixed bottom-10 left-0 right-0 z-20">
      <div className="z-10 mb-1">
        {/* Example: You can use these for showing tooltips or active states */}
        {home && <div className="bg-indigo-400 px-2 rounded-full mr-70">Home</div>}
        {about && <div className="bg-indigo-400 px-2 rounded-full mr-46">About</div>}
        {skills && <div className="bg-indigo-400 px-2 rounded-full mr-22">Skills</div>}
        {services && <div className="bg-indigo-400 px-2 rounded-full ml-2">Services</div>}
        {projects && <div className="bg-indigo-400 px-2 rounded-full ml-24">Projects</div>}
        {clients && <div className="bg-indigo-400 px-2 rounded-full ml-46">Clients</div>}
        {contact && <div className="bg-indigo-400 px-2 rounded-full ml-68">Contact</div>}
      </div>
      {flag ? (
        <div className="flex justify-center items-center z-10">
          <div className="max-[420px]:hidden flex justify-around items-center gap-4 p-2 pl-8 pr-8 bg-[#cdd3df] rounded-full">
            <Link to="/" onMouseOver={() => setHome(true)} onMouseOut={() => setHome(false)}>
              <i
                className={`fa-solid fa-house p-2 rounded-full cursor-pointer hover:bg-indigo-400 ${
                  activeSection === "home" ? "bg-indigo-400" : ""
                }`}
              />
            </Link>
            <Link to="/about" onMouseOver={() => setAbout(true)} onMouseOut={() => setAbout(false)}>
              <i
                className={`fa-solid fa-user p-2 rounded-full cursor-pointer hover:bg-indigo-400 ${
                  activeSection === "about" ? "bg-indigo-400 " : ""
                }`}
              />
            </Link>
            <Link to="/skills" onMouseOver={() => setSkills(true)} onMouseOut={() => setSkills(false)}>
              <i
                className={`fa-solid fa-bars p-2 rounded-full cursor-pointer hover:bg-indigo-400 ${
                  activeSection === "skills" ? "bg-indigo-400 " : ""
                }`}
              />
            </Link>
            <Link to="/services" onMouseOver={() => setServices(true)} onMouseOut={() => setServices(false)}>
              <i
                className={`fa-solid fa-shield-heart p-2 rounded-full cursor-pointer hover:bg-indigo-400 ${
                  activeSection === "services" ? "bg-indigo-400 " : ""
                }`}
              />
            </Link>
            <Link to="/projects" onMouseOver={() => setProjects(true)} onMouseOut={() => setProjects(false)}>
              <i
                className={`fa-solid fa-box p-2 rounded-full cursor-pointer hover:bg-indigo-400 ${
                  activeSection === "projects" ? "bg-indigo-400 " : ""
                }`}
              />
            </Link>
            <Link to="/clients" onMouseOver={() => setClients(true)} onMouseOut={() => setClients(false)}>
              <i
                className={`fa-solid fa-fire-flame-curved p-2 rounded-full cursor-pointer hover:bg-indigo-400 ${
                  activeSection === "clients" ? "bg-indigo-400 " : ""
                }`}
              />
            </Link>
            <Link to="/contact" onMouseOver={() => setContact(true)} onMouseOut={() => setContact(false)}>
              <i
                className={`fa-solid fa-comment p-2 rounded-full cursor-pointer hover:bg-indigo-400 ${
                  activeSection === "contact" ? "bg-indigo-400 " : ""
                }`}
              />
            </Link>
            <i
              className="fa-solid fa-location-arrow absolute rounded-full cursor-pointer ml-92 mb-8 p-2 bg-indigo-300"
              style={{ transform: "rotate(190deg)" }}
              onClick={handleFlagClick}
            ></i>
          </div>
        </div>
      ) : (
        <div
          className="max-[42~0px]:hidden bg-[#cdd3df] rounded-lg cursor-pointer z-10 animate-bounce"
          onClick={handleFlagClick}
        >
          <i className="fa-solid fa-equals text-2xl p-2 pl-8 pr-8"></i>
        </div>
      )}
    </section>
  );
}

export default NavigationBar;