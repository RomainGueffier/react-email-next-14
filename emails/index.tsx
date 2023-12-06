import { Button } from "@react-email/button"
import { Container, Text } from "@react-email/components"
import { Html } from "@react-email/html"
import React from "react"

export type EmailProps = {
  content: string
  btn: string
  title: string
}

export default function Email({ title, btn, content }: EmailProps) {
  return (
    <Html>
      <Container>
        <h1>{title}</h1>
        <Text>{content}</Text>
        <Button
          href="https://example.com"
          style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
        >
          {btn}
        </Button>
      </Container>
    </Html>
  )
}
