
const Contact = ({contact, contactText}) =>{
    return <div className={`description__${contact}`}>
                          <span className="description__categories">{contact}: </span>
                          {contactText || contact}
        </div>
}

export default Contact;