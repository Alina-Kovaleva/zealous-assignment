import styled from 'styled-components'
import { Panel, Input } from '@zealous/ui'

import { useState } from "react"

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f4f4f4;
`

const Message = styled.div`
  fontfamily: '"Roboto", sans-serif';
  font-size: 18px;
  color: #938d8d;
  padding-left: 2px;
`
// interface MessageProps {
//   color: string;
// }

export function LoginPage() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputValidation, setInputValidation] = useState(false);
  const [message, setMessage] = useState("Enter a valid email");

  const onChangeEmailValidation = (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // https://emailregex.com/ Email Address Regular Expression That 99.99% Works

    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // https://www.w3schools.com/jsref/jsref_obj_regexp.asp

    const input = emailRegex.test(event.target.value);

    if (input) {
      setInputEmail(event.target.value);
      setInputValidation(true);
      setMessage("Email is valid");
    } else {
      setInputValidation(false);
      setMessage("Enter a valid email");
    }
  };

  return (
    <Layout>
      <Panel>
        <Input placeholder="email" onChange={onChangeEmailValidation} />
        <Message>{message}</Message>
      </Panel>
    </Layout>
  )
}