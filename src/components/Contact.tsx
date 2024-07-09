import { ReactComponent as ChatIcon } from "assets/chat.svg";
import { Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact">
      <h3 className="numbered-list">
        Let's Chat! &nbsp; <ChatIcon />
      </h3>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <p>
          Although I’m not actively seeking new opportunities right now, my
          inbox is always open. Whether you have a question or just want to say
          hi, feel free to reach out—I'll do my best to get back to you!
        </p>
        <Button
          href="mailto:anjalirawat.dev@gmail.com"
          variant="outline-primary"
        >
          Get In Touch
        </Button>
      </div>
    </section>
  );
};

export default Contact;
