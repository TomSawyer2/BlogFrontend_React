import { useEffect, useState } from 'react';
import Request from '@/apis/request';
import Markdown from 'react-markdown';
import styles from './ArticleContent.less';

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
      {render ? <Markdown children={article.content} /> : <span>Loading</span>}
    </div>
  );
};

export default ArticleContent;
