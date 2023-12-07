import { render } from "@react-email/render"
import Email, { type EmailProps } from "@/emails"

const EmailTemplate = (props: EmailProps) => {
  return (
    <div
      className="bg-white text-black border border-neutral-100"
      dangerouslySetInnerHTML={{
        __html: render(<Email {...props} />),
      }}
    />
  )
}

export default EmailTemplate
