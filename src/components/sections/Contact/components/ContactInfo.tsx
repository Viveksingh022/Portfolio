import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";


import ContactItem from "./ContactItem";

export default function ContactInfo() {
  return (
    <div className="space-y-5">

      <ContactItem
        icon={<FaEnvelope />}
        title="Email"
        value="viveksinghsikarwar022@gmail.com"
        href="mailto:viveksinghsikarwar022@gmail.com"
      />

      <ContactItem
        icon={<FaGithub />}
        title="GitHub"
        value="github.com/Viveksingh022"
        href="https://github.com/Viveksingh022"
      />

      <ContactItem
        icon={<FaLinkedin />}
        title="LinkedIn"
        value="linkedin.com/in/vivek-singh-sikarwar-8503822b5"
        href="https://www.linkedin.com/in/vivek-singh-sikarwar-8503822b5/"
      />

      <ContactItem
        icon={<FaMapMarkerAlt />}
        title="Location"
        value="Gwalior, Madhya Pradesh, India"
        href="https://maps.google.com/?q=Gwalior,Madhya Pradesh,India"
      />

    </div>
  );
}