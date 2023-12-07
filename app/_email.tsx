import { Template, TemplateProps } from "@/templates/email"
import { render } from "jsx-email"
import { cache, use } from "react"

const renderTemplate = cache(
  <Props extends {}>(Template: React.FC<Props>, props: Props) =>
    render(<Template {...props} />)
)

const EmailTemplate = (props: TemplateProps) => {
  const html = use(renderTemplate(Template, props))

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
