import ContactsMain from "../componets/contacts main/ContactsMain.tsx";

export default function Contacts({contactsRef}:{contactsRef:any}) {
    return (
        <>
            <div className="contacts" style={{marginTop: "10%"}} ref={contactsRef}>
                <ContactsMain />
            </div>
        </>
    )
}