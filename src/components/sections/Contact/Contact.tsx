import Section from "../../layout/Section";
import ContactHeader from "./components/ContactHeader";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      spacing="md"
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <ContactHeader />
          <ContactInfo />
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}