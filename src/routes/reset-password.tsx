import { useNavigate } from "react-router-dom";
import { Form, Input, Wrapper } from "../components/auth-components";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth/cordova";
import { auth } from "../firebase";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "") return;
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Sending email success...");
      navigate("/login");
      console.log("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Enter your Email"
          type="email"
          required
        />
        <Input type="submit" value={`Send Email`} />
      </Form>
    </Wrapper>
  );
}
