import { useEffect, useState } from 'react';
import Request from '@/apis/request';
import Markdown from 'react-markdown';
import styles from './ArticleContent.less';
import LoadingEffect from '../Loading/Loading';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';

const request = new Request();
const getArticleById = async (id: number) => {
  const result: any = await request.postData('/getArticleById', { id: id });
  return result.data;
};

interface ArticleContentProps {
  id: number;
  isVisible: boolean;
}

const ArticleContent: React.FC<ArticleContentProps> = (props) => {
  const [article, setArticle] = useState<any>({});
  const [render, setRender] = useState<boolean>(false);
  useEffect(() => {
    if (props.isVisible) {
      const fetchArticles = async () => {
        const result = await getArticleById(props.id);
        setArticle(result);
        setRender(true);
      };
      fetchArticles();
    }
  }, [props.isVisible]);
  return (
    <div className={styles.articleContent}>
      {render ? (
        <Markdown
          children={article.content}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  showLineNumbers={true}
                  customStyle={{ background: 'none' }}
                  PreTag="div"
                  wrapLines={true}
                  {...props}
                />
              ) : (
                <code
                  className={className}
                  style={{ backgroundColor: 'none' }}
                  {...props}
                >
                  {children}
                </code>
              );
            },
          }}
        />
      ) : (
        <LoadingEffect />
      )}
    </div>
  );
};

export default ArticleContent;
