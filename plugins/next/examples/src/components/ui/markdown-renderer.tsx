import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cn } from '@/lib/utils'

type MarkdownRendererProps = {
  content: string
  className?: string
}

/**
 * MarkdownRenderer 컴포넌트
 * 마크다운 컨텐츠를 일관된 스타일로 렌더링하는 재사용 가능한 컴포넌트
 *
 * @param content - 렌더링할 마크다운 문자열
 * @param className - 추가적인 CSS 클래스명
 */

export function MarkdownRenderer({
  content,
  className,
}: Readonly<MarkdownRendererProps>) {
  return (
    <article
      className={cn(
        'prose prose-lg max-w-none px-4 break-words lg:px-0',
        className,
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="border-border mb-12 border-b pb-6 text-center text-4xl font-bold">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-foreground mt-12 mb-6 text-2xl font-semibold">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-foreground mt-8 mb-4 text-xl font-semibold">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-foreground mt-6 mb-3 text-lg font-semibold">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-muted-foreground mb-6 leading-7">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="mb-6 ml-6 list-disc space-y-1">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-6 ml-6 list-decimal space-y-1">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-muted-foreground leading-7">{children}</li>
          ),
          strong: ({ children }) => (
            <strong className="text-foreground font-semibold">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="text-foreground italic">{children}</em>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-primary text-muted-foreground mb-6 border-l-4 pl-6 italic">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-muted mb-6 overflow-x-auto rounded-lg p-4">
              {children}
            </pre>
          ),
          hr: () => <hr className="border-border my-8" />,
          table: ({ children }) => (
            <div className="mb-6 overflow-x-auto">
              <table className="border-border w-full border-collapse border">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border-border bg-muted border px-4 py-2 text-left font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-border text-muted-foreground border px-4 py-2">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}
