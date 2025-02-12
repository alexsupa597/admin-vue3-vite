export const contentType = content => {
  if (!content) return 'text'

  // 更精确的 Markdown 检测
  // 检查是否包含 Markdown 的特征语法
  const markdownPatterns = {
    bold: /\*\*[^*]+\*\*/, // **bold**
    italic: /\*[^*]+\*/, // *italic*
    heading: /^#{1,6}\s/m, // # heading
    codeBlock: /```[\s\S]*?```/, // ```code```
    link: /\[([^\]]+)\]\(([^)]+)\)/, // [text](url)
    list: /^[\s]*[-*+]\s/m // - list item
  }

  const isMarkdown = Object.values(markdownPatterns).some(pattern => pattern.test(content))

  if (isMarkdown) return 'markdown'

  // 更精确的 HTML 检测
  // 检查是否包含完整的 HTML 标签结构，而不是简单的 <br> 等单标签
  const hasComplexHtml = /<([a-z]+)[\s\S]*?>([\s\S]*?)<\/\1>/i.test(content)

  // 如果只包含简单的换行标签或自闭合标签，仍然认为是 Markdown
  const hasOnlySimpleTags =
    !hasComplexHtml &&
    /<(br|hr|img|input|meta|link|area|base|col|embed|keygen|param|source|track|wbr)\s*\/?>/i.test(content)

  if (hasComplexHtml && !isMarkdown) return 'html'
  if (hasOnlySimpleTags || isMarkdown) return 'markdown'

  return 'text'
}
