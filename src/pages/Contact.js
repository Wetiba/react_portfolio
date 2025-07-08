import {useState} from "react";

function Contact() {
    const [form, setForm] = useState({ name: "", message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks ${form.name}, I’ll get back to you soon!`);
        setForm({ name: "", message: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Contact Erick Wetiba Were</h2>
            <input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
            />
            <textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
            ></textarea>
            <button type="submit">Send</button>
        </form>
    );
}

export default Contact;
