interface articlesContextProps {
  articles: article[];
  setArticles: (articles: article[]) => void;
}

interface fullScreenContextProps {
  fullscreen: boolean;
  setFullscreen: (fullscreen: boolean) => void;
}
