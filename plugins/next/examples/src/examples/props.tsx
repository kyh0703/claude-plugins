// Props는 Type으로 명시하여 정의합니다.
type PageProps = {
  example: string
}

export default function Page({ example }: Readonly<PageProps>) {
  return <div>{example}</div>
}
