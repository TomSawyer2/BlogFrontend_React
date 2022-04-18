import Markdown from 'react-markdown';

const article = `## MongoDB\n\n### 简介\n\n## MongoDB\n\n### 简介\n\n## MongoDB\n\n### 简介\n\n## MongoDB\n\n### 简介\n\n## MongoDB\n\n### 简介\n\n## MongoDB\n\n### 简介\n\n## MongoDB\n\n### 简介\n\n## MongoDB\n\n### 简介\n\n## MongoDB\n\n### 简介\n\n## MongoDB\n\n### 简介\n\n## MongoDB\n\n### 简介\n\n## MongoDB\n\n### 简介\n\n## MongoDB\n\n### 简介\n\n## MongoDB\n\n### 简介\n\n## MongoDB\n\n### 简介\n\n## MongoDB\n\n### 简介\n\n`;
export default function IndexPage(this: any) {
  return (
    <>
      <Markdown children={article} />
    </>
  );
}
