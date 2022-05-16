import Head from "next/head"
import { FC } from "react"

type Props = {
  title?: string
  description?: string
  url?: string
  image?: string
}

export const Meta: FC<Props> = ({ title, description, url, image }) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0"
        key="viewport"
      />
      {title && (
        <>
          <title key="page_title">{title}</title>
          <meta property="og:title" content={title} key="og_title" />
        </>
      )}
      {description && (
        <>
          <meta
            name="description"
            content={description}
            key="page_description"
          />
          <meta
            property="og:description"
            content={description}
            key="og_description"
          />
        </>
      )}
      {url && <meta property="og:url" content={url} key="og_url" />}
      {image && <meta property="og:image" content={image} key="og_image" />}
    </Head>
  )
}
