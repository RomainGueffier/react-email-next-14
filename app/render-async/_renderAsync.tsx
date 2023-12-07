import { renderAsync } from "@react-email/render"
import Email, { type EmailProps } from "@/emails"
import { cache, use } from "react"

const renderTemplate = cache(<P extends {}>(Template: React.FC<P>, props: P) =>
  renderAsync(<Template {...props} />)
)

const EmailTemplate = (props: EmailProps) => {
  const html = use(renderTemplate(Email, props))
  return (
    <div
      className="bg-white text-black border border-neutral-100"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  )
}

export default EmailTemplate
