import { createFileRoute } from "@tanstack/react-router";
import Contacts from "@/components/contacts/Contacts";

export const Route = createFileRoute("/contacts")({
  component: ContactsPage,
});

function ContactsPage() {
  return <Contacts />;
}
